#!/usr/bin/env node
/**
 * Auditoría de arquitectura y rastreo de errores de build/TypeScript/Lint
 * - Verifica presencia y consistencia de archivos críticos (App Router SEO)
 * - Revisa pages bajo 'app/' con archivos page.(ts|tsx|js) y detecta generateMetadata()
 * - Comprueba alias "@/": paths en tsconfig.json
 * - Valida existencia de robots y sitemap
 * - Ejecuta lint, typecheck y build capturando errores que rompen el push
 */
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const repoRoot = process.cwd()
const rel = (...p) => path.join(repoRoot, ...p)

const REQUIRED_FILES = [
  'app/layout.tsx',
  'next.config.js',
  'tsconfig.json',
  'next-env.d.ts'
]
const ROBOTS_CANDIDATES = ['app/robots.ts', 'app/robots.js']
const SITEMAP_CANDIDATES = [
  'app/sitemap.ts',
  'app/sitemap.js',
  'app/sitemap.xml/route.ts',
  'app/sitemap.xml/route.js'
]

let hardFailures = []
let softWarnings = []

function exists(p) {
  return fs.existsSync(rel(p))
}

function readJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(rel(file), 'utf8'))
  } catch {
    return null
  }
}

function globPages(dir = 'app') {
  const out = []
  function walk(d) {
    for (const entry of fs.readdirSync(rel(d), { withFileTypes: true })) {
      const full = path.posix.join(d, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (/\/page\.(ts|tsx|js)$/.test(full)) {
        out.push(full)
      }
    }
  }
  if (exists(dir)) walk(dir)
  return out
}

function checkRequiredFiles() {
  console.log('== Verificando archivos críticos ==')
  for (const f of REQUIRED_FILES) {
    if (!exists(f)) {
      hardFailures.push(`Falta archivo requerido: ${f}`)
      console.log(`ERROR: ${f} no encontrado`)
    } else {
      console.log(`OK: ${f}`)
    }
  }
  const hasRobots = ROBOTS_CANDIDATES.some(exists)
  if (!hasRobots) {
    hardFailures.push('Falta robots.ts/js en app/')
    console.log('ERROR: robots.ts/js no encontrado en app/')
  } else {
    console.log('OK: robots.ts/js presente')
  }
  const hasSitemap = SITEMAP_CANDIDATES.some(exists)
  if (!hasSitemap) {
    hardFailures.push('Falta sitemap (app/sitemap.ts o app/sitemap.xml/route.ts)')
    console.log('ERROR: sitemap no encontrado')
  } else {
    console.log('OK: sitemap presente')
  }
}

function checkTsconfigPaths() {
  console.log('== Verificando tsconfig.json paths para "@/..." ==')
  const ts = readJSON('tsconfig.json')
  if (!ts || !ts.compilerOptions) {
    softWarnings.push('tsconfig.json inválido o sin compilerOptions')
    console.log('ADVERTENCIA: tsconfig.json inválido')
    return
  }
  const paths = ts.compilerOptions.paths || {}
  const hasAt = paths['@/*'] && Array.isArray(paths['@/*']) && paths['@/*'].length > 0
  if (!hasAt) {
    softWarnings.push('Falta alias "@/*" en tsconfig.json -> compilerOptions.paths')
    console.log('ADVERTENCIA: agrega en tsconfig: "paths": { "@/*": ["./*"] }')
  } else {
    console.log('OK: alias "@/*" configurado')
  }
}

function checkPages() {
  console.log('== Escaneando pages y generateMetadata() ==')
  const pages = globPages()
  if (pages.length === 0) {
    hardFailures.push('No se encontraron pages en app/**/page.(ts|tsx|js)')
    console.log('ERROR: no hay pages')
    return
  }
  for (const p of pages) {
    const src = fs.readFileSync(rel(p), 'utf8')
    const hasDefaultExport = /export\s+default\s+function\s+|export\s+default\s+\(/.test(src)
    const hasGenerateMetadata =
      /export\s+async\s+function\s+generateMetadata\s*\(/.test(src) ||
      /export\s+const\s+metadata\s*=/.test(src)
    if (!hasDefaultExport) {
      hardFailures.push(`Falta export default en ${p}`)
      console.log(`ERROR: falta export default en ${p}`)
    }
    if (!hasGenerateMetadata) {
      softWarnings.push(`Falta generateMetadata()/metadata en ${p}`)
      console.log(`ADVERTENCIA: faltan metadatos SEO en ${p}`)
    }
    // Chequeo básico de next/image + alt
    if (/<Image[\s\S]*>/.test(src) || /from\s+['"]next\/image['"]/.test(src)) {
      if (!/alt=/.test(src)) {
        softWarnings.push(`<Image> sin "alt" en ${p}`)
        console.log(`ADVERTENCIA: <Image> sin alt en ${p}`)
      }
    }
  }
}

function tryExec(cmd, label) {
  try {
    console.log(`== ${label} ==`)
    execSync(cmd, { stdio: 'inherit' })
    console.log(`OK: ${label}`)
    return true
  } catch (e) {
    console.log(`ERROR en ${label}`)
    hardFailures.push(`${label} falló`)
    return false
  }
}

async function main() {
  checkRequiredFiles()
  checkTsconfigPaths()
  checkPages()

  // Etapas de CI locales
  // 1) Lint (no bloqueante)
  tryExec('npm run lint || true', 'Lint')
  // 2) Typecheck
  tryExec('npx tsc --noEmit', 'TypeScript typecheck')
  // 3) Build Next.js
  tryExec('npx next build', 'Build de producción Next.js')

  console.log('\n== Resumen ==')
  if (softWarnings.length) {
    console.log('Advertencias:')
    for (const w of softWarnings) console.log(`- ${w}`)
  } else {
    console.log('Sin advertencias')
  }
  if (hardFailures.length) {
    console.log('\nErrores críticos:')
    for (const f of hardFailures) console.log(`- ${f}`)
    process.exitCode = 1
  } else {
    console.log('\nSin errores críticos. Arquitectura consistente.')
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

