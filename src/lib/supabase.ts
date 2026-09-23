import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface DataRow {
  id: number
  data: number
}

export async function updateDustbinData(id: number, value: number): Promise<DataRow> {
  const { data, error } = await supabase
    .from('dustbin')
    .update({ data: value })
    .eq('id', id)
    .select('id, data')
    .single()

  if (error) {
    throw new Error(`Error updating dustbin data: ${error.message}`)
  }

  return data
}

export async function fetchTableData(tableName: 'water' | 'dustbin'): Promise<DataRow[]> {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    throw new Error(`Error fetching ${tableName} data: ${error.message}`)
  }

  return data || []
}
