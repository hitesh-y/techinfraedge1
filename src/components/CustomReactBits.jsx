'use client'
import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Global styles to reduce inline CSS and improve performance
// Moved to a separate CSS file to improve FCP
// This will be imported in the layout.js file
const globalStyles = `
  @keyframes gradient {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
  
  @keyframes shimmer {
    0% { background-position: -100% 0 }
    100% { background-position: 100% 0 }
  }
`;

// Common style objects to prevent recreation on each render
const commonTextStyles = {
  display: 'inline-block',
  willChange: 'transform, opacity', // Hint to browser for optimization
  transform: 'translateZ(0)', // Force GPU acceleration
};

// Optimized components with reduced style calculations
export const Iridescence = memo(({ children, className = "", ...props }) => {
  // Use reduced motion hook for accessibility
  const prefersReducedMotion = useReducedMotion();
  
  const animationStyle = prefersReducedMotion 
    ? { background: 'linear-gradient(45deg, #ff0080, #8000ff)' }
    : { 
        background: 'linear-gradient(45deg, #ff0080, #ff8c00, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff)',
        backgroundSize: '300% 300%',
        animation: 'gradient 8s ease infinite',
      };
  
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        ...commonTextStyles,
        ...animationStyle,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        ...props.style
      }}
      {...props}
    >
      {children}
      <style jsx global>{globalStyles}</style>
    </span>
  )
});

Iridescence.displayName = 'Iridescence';

export const Shimmer = memo(({ children, className = "", ...props }) => {
  // Use reduced motion hook for accessibility
  const prefersReducedMotion = useReducedMotion();
  
  const animationStyle = prefersReducedMotion 
    ? { background: 'linear-gradient(90deg, #ffffff, #ffffff)' }
    : { 
        background: 'linear-gradient(90deg, #ffffff33 0%, #ffffff 50%, #ffffff33 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 2.5s infinite',
      };
  
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        ...commonTextStyles,
        ...animationStyle,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        ...props.style
      }}
      {...props}
    >
      {children}
      <style jsx global>{globalStyles}</style>
    </span>
  )
});

Shimmer.displayName = 'Shimmer';

export const Gradient = memo(({ children, from = "#FF5733", to = "#8A2BE2", className = "", ...props }) => {
  // Memoize the gradient style to prevent recalculation
  const gradientStyle = useRef({
    background: `linear-gradient(45deg, ${from}, ${to})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  }).current;
  
  // Update gradient if from/to props change
  useEffect(() => {
    gradientStyle.background = `linear-gradient(45deg, ${from}, ${to})`;
  }, [from, to, gradientStyle]);
  
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        ...commonTextStyles,
        ...gradientStyle,
        ...props.style
      }}
      {...props}
    >
      {children}
    </span>
  )
});

Gradient.displayName = 'Gradient';

export const Spotlight = memo(({ children, className = "", ...props }) => {
  // Use reduced motion hook for accessibility
  const prefersReducedMotion = useReducedMotion();
  
  // Simplified animation for better performance
  const animation = prefersReducedMotion 
    ? {} 
    : {
        initial: { opacity: 0.8 },
        whileHover: { opacity: 1 },
        transition: { duration: 0.2 }
      };
  
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      {...animation}
      style={{
        ...commonTextStyles,
        textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.span>
  )
});

Spotlight.displayName = 'Spotlight';

export const Glow = memo(({ children, color = "#4F46E5", className = "", ...props }) => {
  return (
    <span 
      className={`relative inline-block ${className}`} 
      style={{
        ...commonTextStyles,
        textShadow: `0 0 10px ${color}`,
        color: 'white',
        ...props.style
      }}
      {...props}
    >
      {children}
    </span>
  )
});

Glow.displayName = 'Glow';

// Optimized Typewriter with reduced re-renders and better performance
export const Typewriter = memo(({ text, speed = 50, className = "", ...props }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  
  // Use useCallback to memoize the typing function
  const typeNextCharacter = useCallback(() => {
    setDisplayText(prev => prev + text[currentIndex]);
    setCurrentIndex(prev => prev + 1);
  }, [currentIndex, text]);
  
  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [text]);
  
  // Handle typing with optimized animation
  useEffect(() => {
    if (currentIndex < text.length) {
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        timeoutRef.current = setTimeout(typeNextCharacter, speed);
      });
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [currentIndex, text, speed, typeNextCharacter]);
  
  return (
    <span className={className} {...props}>
      {displayText}
      {currentIndex < text.length && (
        <span 
          className="inline-block" 
          style={{ 
            opacity: 1,
            animation: 'pulse 1s infinite',
            animationTimingFunction: 'ease-in-out',
          }}
        >|</span>
      )}
    </span>
  );
});

Typewriter.displayName = 'Typewriter';

// Memoized text components with better performance
export const GradientText = memo(({ 
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
  );
});

GradientText.displayName = 'GradientText';

// Optimized heading component with reduced conditional rendering and better performance
export const AnimatedHeading = memo(({ 
  children, 
  className = "", 
  effect = "gradient", 
  level = 2,
  from = "#FF5733", 
  to = "#8A2BE2",
  color = "#4F46E5",
  ...props 
}) => {
  const HeadingTag = `h${level}`;
  
  // Early return for better performance
  if (effect === "none") {
    return <HeadingTag className={className} {...props}>{children}</HeadingTag>;
  }
  
  // Use a lookup object instead of conditionals for better performance
  const effectComponents = {
    iridescence: <Iridescence className={className} {...props}>{children}</Iridescence>,
    shimmer: <Shimmer className={className} {...props}>{children}</Shimmer>,
    spotlight: <Spotlight className={className} {...props}>{children}</Spotlight>,
    glow: <Glow className={className} color={color} {...props}>{children}</Glow>,
    gradient: <Gradient className={className} from={from} to={to} {...props}>{children}</Gradient>
  };
  
  // Get component or default to gradient
  const Component = effectComponents[effect] || effectComponents.gradient;
  
  return (
    <HeadingTag className={className}>
      {Component}
    </HeadingTag>
  );
});

AnimatedHeading.displayName = 'AnimatedHeading';

// Optimized paragraph component with better performance
export const AnimatedParagraph = memo(({ 
  children, 
  className = "", 
  effect = "none", 
  from = "#FF5733", 
  to = "#8A2BE2",
  color = "#4F46E5",
  ...props 
}) => {
  // Early return for better performance
  if (effect === "none") {
    return <p className={className} {...props}>{children}</p>;
  }
  
  // Use a lookup object instead of conditionals for better performance
  const effectComponents = {
    iridescence: <Iridescence className={className} {...props}>{children}</Iridescence>,
    shimmer: <Shimmer className={className} {...props}>{children}</Shimmer>,
    spotlight: <Spotlight className={className} {...props}>{children}</Spotlight>,
    glow: <Glow className={className} color={color} {...props}>{children}</Glow>,
    gradient: <Gradient className={className} from={from} to={to} {...props}>{children}</Gradient>
  };
  
  // Get component or default to paragraph
  const Component = effectComponents[effect];
  
  return Component || <p className={className} {...props}>{children}</p>;
});

AnimatedParagraph.displayName = 'AnimatedParagraph';

AnimatedParagraph.displayName = 'AnimatedParagraph';