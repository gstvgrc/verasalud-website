export const SITE = {
  name: 'VERASALUD',
  url: 'https://verasalud.com',
  baseUrl: 'https://verasalud.com'
}

export const seo = {
  title: 'VERASALUD | Medicina Interna y Ecografías en Cali',
  description: 'Atención especializada sin demoras. Ecografías de alta resolución y medicina interna.'
}

export function buildMetadata(meta: { title: string; description: string }) {
  return { title: meta.title, description: meta.description }
}

export function getServiceSEO(_service: string) {
  return { title: SITE.name, description: seo.description }
}

export function buildBreadcrumbJSONLD(items: { item?: string; name: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  }
}
