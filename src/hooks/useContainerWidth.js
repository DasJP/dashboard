import { useState, useEffect } from "react"

export function useContainerWidth(ref) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width)
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return width
}
