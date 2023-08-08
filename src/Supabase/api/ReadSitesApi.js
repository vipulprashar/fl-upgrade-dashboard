import supabase from '../supabaseClient'

export async function fetchSiteMasterData() {
  const { data, error } = await supabase
  .from('site_master')
  .select('*')

  if (error) {
    console.error('Err fetching site_master data:', error)
    return []
  }
  return data
}
