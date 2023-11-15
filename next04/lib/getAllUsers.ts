const getAllUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
  // Try/Catch is not use here because we're going to use error boundaries
  if(!response.ok) throw new Error('Failed to fetch data.')

  return response.json()
}
export default getAllUsers