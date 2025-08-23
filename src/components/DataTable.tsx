import React, { useState, useEffect } from 'react'
import { fetchTableData, DataRow } from '../lib/supabase'
import { Loader2, RefreshCw, AlertCircle } from 'lucide-react'

interface DataTableProps {
  tableName: 'water' | 'dustbin'
  title: string
  color: 'blue' | 'green'
}

export default function DataTable({ tableName, title, color }: DataTableProps) {
  const [data, setData] = useState<DataRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const colorClasses = {
    blue: {
      header: 'bg-blue-600',
      card: 'border-blue-200',
      accent: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    green: {
      header: 'bg-green-600',
      card: 'border-green-200',
      accent: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700'
    }
  }

  const colors = colorClasses[color]

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchTableData(tableName)
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [tableName])

  const total = data.reduce((sum, row) => sum + row.data, 0)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
        <span className="ml-2 text-gray-600">Loading {title.toLowerCase()}...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="ml-2 text-lg font-medium text-red-800">Error Loading Data</h3>
          </div>
          <p className="mt-2 text-red-700">{error}</p>
          <button
            onClick={loadData}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`bg-white rounded-lg shadow-sm border-2 ${colors.card}`}>
        <div className={`${colors.header} text-white px-6 py-4 rounded-t-lg`}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={loadData}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-md transition-colors"
              title="Refresh data"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium ${colors.accent}`}>
                        {row.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-semibold text-gray-900">{row.data}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-${color}-500`}>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Total Data Sum:</span>
              <span className={`text-2xl font-bold ${colors.accent}`}>{total}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Sum of all {data.length} data values
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}