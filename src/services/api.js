const API_URL = 'https://secret-fjord-29410.herokuapp.com/api/v1'

export const getAllStudents = async () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/students`)
      .then( response => response )
      .then( data => resolve( data.json() ) )
      .catch( () => reject )
  } )
}

export const fetchStudents = async () => {
  try{
    const API_URL = 'https://secret-fjord-29410.herokuapp.com/api/v1'
    const fetchData = await fetch(`${API_URL}/students`)
    return await fetchData.json()
    
  } catch(error) { 
    console.log(error)
  }
}
