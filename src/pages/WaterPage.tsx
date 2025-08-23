import React from 'react'
import DataTable from '../components/DataTable'

export default function WaterPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DataTable tableName="water" title="Water Data" color="blue" />
      </div>
    </div>
  )
}