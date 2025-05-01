'use client'
import React from 'react'
import { motion } from 'framer-motion'

// Simplified version of Iridescence component
export const Iridescence = ({ children, className = "", ...props }) => {
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        background: 'linear-gradient(45deg, #ff0080, #ff8c00, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff)',
        backgroundSize: '300% 300%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'gradient 8s ease infinite',
        ...props.style
      }}
      {...props}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </span>
  )
}

// Simplified version of Shimmer component
export const Shimmer = ({ children, className = "", ...props }) => {
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        background: 'linear-gradient(90deg, #ffffff33 0%, #ffffff 50%, #ffffff33 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'shimmer 2.5s infinite',
        ...props.style
      }}
      {...props}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -100% 0 }
          100% { background-position: 100% 0 }
        }
      `}</style>
    </span>
  )
}

// Simplified version of Gradient component
export const Gradient = ({ children, from = "#FF5733", to = "#8A2BE2", className = "", ...props }) => {
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        background: `linear-gradient(45deg, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        ...props.style
      }}
      {...props}
    >
      {children}
    </span>
  )
}

// Simplified version of Spotlight component
export const Spotlight = ({ children, className = "", ...props }) => {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1 }}
      style={{
        textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.span>
  )
}

// Simplified version of Glow component
export const Glow = ({ children, color = "#4F46E5", className = "", ...props }) => {
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        textShadow: `0 0 10px ${color}`,
        color: 'white',
        ...props.style
      }}
      {...props}
    >
      {children}
    </span>
  )
}

// Simplified version of Typewriter component
export const Typewriter = ({ text, speed = 50, className = "", ...props }) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])
  
  return (
    <span className={className} {...props}>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}

// Text component with Gradient effect
export const GradientText = ({ 
  children, 
  className = "", 
  from = "#FF5733", 
  to = "#8A2BE2", 
  ...props 
}) => {
  return (
    <Gradient from={from} to={to} className={`font-bold ${className}`} {...props}>
      {children}
    </Gradient>
  )
}

// Heading component with animated text
export const AnimatedHeading = ({ 
  children, 
  className = "", 
  effect = "gradient", 
  level = 2,
  from = "#FF5733", 
  to = "#8A2BE2",
  color = "#4F46E5",
  ...props 
}) => {
  const HeadingTag = `h${level}`
  
  let Component
  switch(effect) {
    case "iridescence":
      Component = <Iridescence className={className} {...props}>{children}</Iridescence>
      break
    case "shimmer":
      Component = <Shimmer className={className} {...props}>{children}</Shimmer>
      break
    case "spotlight":
      Component = <Spotlight className={className} {...props}>{children}</Spotlight>
      break
    case "glow":
      Component = <Glow className={className} color={color} {...props}>{children}</Glow>
      break
    case "gradient":
    default:
      Component = <Gradient className={className} from={from} to={to} {...props}>{children}</Gradient>
  }
  
  return (
    <HeadingTag className={className}>
      {Component}
    </HeadingTag>
  )
}

// Paragraph component with animated text
export const AnimatedParagraph = ({ 
  children, 
  className = "", 
  effect = "none", 
  from = "#FF5733", 
  to = "#8A2BE2",
  color = "#4F46E5",
  ...props 
}) => {
  if (effect === "none") {
    return <p className={className} {...props}>{children}</p>
  }
  
  let Component
  switch(effect) {
    case "iridescence":
      Component = <Iridescence className={className} {...props}>{children}</Iridescence>
      break
    case "shimmer":
      Component = <Shimmer className={className} {...props}>{children}</Shimmer>
      break
    case "spotlight":
      Component = <Spotlight className={className} {...props}>{children}</Spotlight>
      break
    case "glow":
      Component = <Glow className={className} color={color} {...props}>{children}</Glow>
      break
    case "gradient":
      Component = <Gradient className={className} from={from} to={to} {...props}>{children}</Gradient>
      break
    default:
      return <p className={className} {...props}>{children}</p>
  }
  
  return Component
}