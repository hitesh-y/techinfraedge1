"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function StatCard({ title, value, icon, color, link, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all shadow-md"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color || "bg-indigo-600"}`}>
          {icon}
        </div>
        <Link href={link} className="text-indigo-400 hover:text-indigo-300 flex items-center">
          <span className="text-sm mr-1">View</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </motion.div>
  )
}