'use client'
import React from 'react'
import { Iridescence, Shimmer, Spotlight, Gradient, Glow, Typewriter } from './CustomReactBits'

// Text component with Iridescence effect
export const IridescenceText = ({ children, className = "", ...props }) => {
  return (
    <Iridescence className={`font-bold ${className}`} {...props}>
      {children}
    </Iridescence>
  )
}

// Text component with Shimmer effect
export const ShimmerText = ({ children, className = "", ...props }) => {
  return (
    <Shimmer className={`font-medium ${className}`} {...props}>
      {children}
    </Shimmer>
  )
}

// Text component with Spotlight effect
export const SpotlightText = ({ children, className = "", ...props }) => {
  return (
    <Spotlight className={`font-bold ${className}`} {...props}>
      {children}
    </Spotlight>
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

// Text component with Glow effect
export const GlowText = ({ 
  children, 
  className = "", 
  color = "#4F46E5", 
  ...props 
}) => {
  return (
    <Glow color={color} className={`font-bold ${className}`} {...props}>
      {children}
    </Glow>
  )
}

// Text component with Typewriter effect
export const TypewriterText = ({ 
  text, 
  className = "", 
  speed = 50, 
  ...props 
}) => {
  return (
    <Typewriter text={text} speed={speed} className={`font-medium ${className}`} {...props} />
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
      Component = <IridescenceText className={className} {...props}>{children}</IridescenceText>
      break
    case "shimmer":
      Component = <ShimmerText className={className} {...props}>{children}</ShimmerText>
      break
    case "spotlight":
      Component = <SpotlightText className={className} {...props}>{children}</SpotlightText>
      break
    case "glow":
      Component = <GlowText className={className} color={color} {...props}>{children}</GlowText>
      break
    case "gradient":
    default:
      Component = <GradientText className={className} from={from} to={to} {...props}>{children}</GradientText>
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
      Component = <IridescenceText className={className} {...props}>{children}</IridescenceText>
      break
    case "shimmer":
      Component = <ShimmerText className={className} {...props}>{children}</ShimmerText>
      break
    case "spotlight":
      Component = <SpotlightText className={className} {...props}>{children}</SpotlightText>
      break
    case "glow":
      Component = <GlowText className={className} color={color} {...props}>{children}</GlowText>
      break
    case "gradient":
      Component = <GradientText className={className} from={from} to={to} {...props}>{children}</GradientText>
      break
    default:
      return <p className={className} {...props}>{children}</p>
  }
  
  return Component
}