// Componente optimizado para carga rápida de imágenes médicas
// Implementa lazy loading y optimización automática de formatos
// Diseñado específicamente para contenido médico de VeraSalud

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  // Hook para detectar cuando la imagen entra en el viewport
  // Esto optimiza la carga de imágenes médicas que están fuera de la vista inicial
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect() // Desconecta observer después de detectar
        }
      },
      {
        threshold: 0.1, // Comienza a cargar cuando 10% es visible
        rootMargin: '50px', // Comienza carga 50px antes de que sea visible
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Genera blur placeholder automático si no se proporciona
  const generateBlurDataURL = () => {
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+kXoiupbxP7B/ELaK4DjqbK8ZPDVe2gOEpJiBCJQY4PiKjGGKqN1LB5LNEtBdHQ4KpCdYZq2o4HMBhq4ks/wCENEtUHNhvabYvnTdPt+/WKlkOyFKHVJaJIOD1bVK6KSTy4n3VsLJZSGQZvVFRjkVZOJBaNJa75Jc1nZ0gqSWpOE5YRLBVrp4+OTRLdjGlOjPLb7MWgYT3aUfxf4oJJVPBDKRs2P4HEE1rkS1D0hTiJqVNJOHZmvMPOUYGNTIVW3HfSWqKYXo+zM5j5rEeWvKFFMeK9wVzN1fCrnYGa6PFdHhN8qRXnmQ=='
  }

  return (
    <div 
      ref={imgRef} 
      className={`medical-image-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f8fafc', // Color médico suave durante carga
      }}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL || generateBlurDataURL()}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.warn(`Failed to load medical image: ${src}`)
            setIsLoaded(true) // Evita loading infinito en caso de error
          }}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      )}
      
      {/* Indicador de carga para imágenes médicas importantes */}
      {!isLoaded && (isInView || priority) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  )
}

export default LazyImage