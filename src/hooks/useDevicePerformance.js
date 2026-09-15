import { useState, useEffect } from 'react'

export function useDevicePerformance() {
  const [performance, setPerformance] = useState('high')

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent)
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    if (isMobile || isLowEnd) {
      setPerformance('low')
    } else {
      setPerformance('high')
    }
  }, [])

  return performance
}
