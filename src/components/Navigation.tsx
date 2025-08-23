import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Droplets, Trash2 } from 'lucide-react'

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Data Monitor</h1>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/water"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/water'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Droplets className="w-4 h-4 mr-2" />
              Water Data
            </Link>
            <Link
              to="/dustbin"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/dustbin'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Dustbin Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}