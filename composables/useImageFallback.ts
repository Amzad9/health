const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23cbd5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' font-family='Inter, system-ui, sans-serif' fill='%2361679d'%3EImage unavailable%3C/text%3E%3C/svg%3E"

export const useImageFallback = () => {
  const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement | null
    if (!target || target.src === fallbackImage) {
      return
    }

    target.src = fallbackImage
  }

  return { handleImageError }
}

