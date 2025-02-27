// async function getuserdata(){
// try {
//    const api= await  fetch('https://jsonplaceholder.typicode.com/posts')
//    const data = await api.json()
//    console.log(data)
   
// } catch (error) {
//    console.log('error')
// }
// }
// getuserdata()




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data)=>{
//    return data.json()

// }).then((second)=>{
//    console.log(second)
// })
// .catch((error)=>{
//    console.log(error)
// }).finally((data)=>{
//    console.log('promise either reject or resolved ')
// })

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(first){

 return first.json()
}).then(function(data){
   console.log(data)
}).catch(function(error){
   console.log(error)
});



fetch('https://v2.jokeapi.dev/joke/Programming').then((news)=>{
     return  news.json()
})
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})