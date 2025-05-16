"use client"

import { motion } from "framer-motion"

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  actions,
  size = "md", // sm, md, lg, xl
  zIndex = 50 // Default z-index
}) {
  if (!isOpen) return null
  
  const sizeClasses = {
    sm: "sm:max-w-md",
    md: "sm:max-w-lg",
    lg: "sm:max-w-2xl",
    xl: "sm:max-w-4xl"
  }
  
  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ zIndex }}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose} style={{ zIndex: zIndex - 1 }}>
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${sizeClasses[size]} sm:w-full relative`}
          style={{ zIndex: zIndex + 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {title && (
              <h3 className="text-lg leading-6 font-medium text-white mb-4">
                {title}
              </h3>
            )}
            <div className="mt-3 sm:mt-0 sm:text-left">
              {children}
            </div>
          </div>
          
          {actions && (
            <div className="bg-gray-750 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {actions}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}