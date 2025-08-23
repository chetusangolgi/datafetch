import React from 'react'
import DataTable from '../components/DataTable'

export default function DustbinPage() {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DataTable tableName="dustbin" title="Dustbin Data" color="green" />
      </div>
    </div>
  )
}