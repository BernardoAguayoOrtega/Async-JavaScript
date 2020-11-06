// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: 
fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
      
      return response.json()
  })
  .then(person => console.log(`${person.name} works for ${person.company.name}`))
  .catch(err => console.error(err))


// async await
const getInfo = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users/3')
  
  const response = await data.json()
  
  console.log(`${response.name} works for ${response.company.name}`)
}

getInfo().catch(error => console.log(error))