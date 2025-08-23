import React from 'react'
import { Link } from 'react-router-dom'
import { Droplets, Trash2, BarChart3 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BarChart3 className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Monitor Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor and analyze data from your water and dustbin sensors. 
            View real-time metrics and totals from your connected devices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/water"
            className="group bg-white rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex items-center mb-4">
              <Droplets className="w-12 h-12 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">Water Data</h2>
            </div>
            <p className="text-gray-600 mb-4">
              View water sensor readings with ID-based data tracking from 1 to 10.
            </p>
            <div className="text-blue-600 font-medium group-hover:text-blue-700">
              View Water Data →
            </div>
          </Link>

          <Link
            to="/dustbin"
            className="group bg-white rounded-xl shadow-lg border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex items-center mb-4">
              <Trash2 className="w-12 h-12 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">Dustbin Data</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Monitor dustbin sensor data with comprehensive metrics and totals.
            </p>
            <div className="text-green-600 font-medium group-hover:text-green-700">
              View Dustbin Data →
            </div>
          </Link>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Real-time data fetching from Supabase</li>
            <li>• Complete data visualization for IDs 1-10</li>
            <li>• Automatic total calculations</li>
            <li>• Responsive design for all devices</li>
          </ul>
        </div>
      </div>
    </div>
  )
}