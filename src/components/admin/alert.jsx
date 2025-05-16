"use client"

import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

export default function Alert({ type = "info", message, className = "" }) {
  const types = {
    info: {
      bgColor: "bg-blue-900/50",
      borderColor: "border-blue-800",
      textColor: "text-blue-200",
      icon: <Info className="h-5 w-5 mr-2 flex-shrink-0" />
    },
    success: {
      bgColor: "bg-green-900/50",
      borderColor: "border-green-800",
      textColor: "text-green-200",
      icon: <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
    },
    warning: {
      bgColor: "bg-yellow-900/50",
      borderColor: "border-yellow-800",
      textColor: "text-yellow-200",
      icon: <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
    },
    error: {
      bgColor: "bg-red-900/50",
      borderColor: "border-red-800",
      textColor: "text-red-200",
      icon: <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
    }
  }
  
  const { bgColor, borderColor, textColor, icon } = types[type]
  
  return (
    <div className={`p-4 ${bgColor} border ${borderColor} rounded-md flex items-center ${textColor} ${className}`}>
      {icon}
      <span>{message}</span>
    </div>
  )
}