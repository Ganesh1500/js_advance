

async function call(){
  const data = await promise
 console.log(data) 
}
//async await for api calling 

async function userdata(){
  try {
    const responce= await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await responce.json() 
    console.log(data)
  } catch (error) {
    console.log('error')
  }
}

userdata()

//one again 
async function getuserdata(){
  try {
     const api= await  fetch('https://jsonplaceholder.typicode.com/posts')
     const data = await api.json()
     console.log(data)
     
  } catch (error) {
     console.log('error')
  }
  }
  getuserdata()
  