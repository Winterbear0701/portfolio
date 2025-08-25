import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = ({ density = 'medium', theme = 'tech' }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const getDensityCount = () => {
    switch (density) {
      case 'low': return 3
      case 'medium': return 6
      case 'high': return 10
      default: return 6
    }
  }

  const getThemeElements = () => {
    switch (theme) {
      case 'tech':
        return ['⚡', '🔧', '💻', '🚀', '⚙️', '🔬', '🤖', '💡']
      case 'data':
        return ['📊', '📈', '🔍', '💾', '⚡', '🧠', '🔗', '📡']
      case 'ai':
        return ['🤖', '🧠', '⚡', '🔮', '💫', '🌟', '💎', '🔥']
      case 'minimal':
        return ['○', '△', '□', '◇', '◯', '▲', '■', '◆']
      default:
        return ['⚡', '💻', '🚀', '💡', '🔬', '📊']
    }
  }

  const elements = getThemeElements()
  const count = getDensityCount()

  const generateRandomElement = (index) => {
    const element = elements[Math.floor(Math.random() * elements.length)]
    const x = Math.random() * windowSize.width
    const y = Math.random() * windowSize.height
    const size = Math.random() * 20 + 15 // 15-35px
    const duration = Math.random() * 20 + 15 // 15-35 seconds
    const delay = Math.random() * 10 // 0-10 seconds delay

    return { element, x, y, size, duration, delay, index }
  }

  const floatingElements = Array.from({ length: count }, (_, i) => 
    generateRandomElement(i)
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {floatingElements.map(({ element, x, y, size, duration, delay, index }) => (
        <motion.div
          key={index}
          initial={{ 
            x: x, 
            y: y, 
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            x: [x, x + (Math.random() - 0.5) * 200, x + (Math.random() - 0.5) * 400],
            y: [y, y + (Math.random() - 0.5) * 200, y - 100],
            opacity: [0, 0.1, 0.05, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-gray-400 dark:text-gray-600"
          style={{ 
            fontSize: `${size}px`,
            filter: 'blur(0.5px)'
          }}
        >
          {element}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
