// 






//using how to create promise in js 

const promises = new Promise(function(resolve,reject){
    //db call
   setTimeout(function(){
     console.log('asynch task is done')
     resolve()
   },1000)
 
    
 })
 
 promises.then(function(){
     console.log('promise is consumed 1 ')
 })

 //same code how to write in callback type 

//  function asyncTask(callback) {
//    console.log("Asynchronous task started...");

//    // Simulate an async operation with setTimeout
//    setTimeout(() => {
//        console.log("Asynchronous task is done");
//        callback(); // Execute the callback function
//    }, 1000);
// }

// function onComplete() {
//    console.log("Promise is consumed");
// }

// // Call the function and pass the callback
// asyncTask(onComplete);



 //using without variable how to create promise in js 
//second promise 
 new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log('asynch task 2 start')
     resolve()        
    },1000)
 }).then(function(){
    console.log('promise consumend 2')
 })

 //now create promise three 
 //resolved is connected to then 
 //now ot pass network data learn in this 

 const promisethree =new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({
            id:'instragram',
            email:'g.example@gmail.com'
        })

    },1000)
 })
 

 //inside the resolve object is give inside the then function parameter
 //resolve ka jo bhi para muje then ke fucntion me milta he 
 promisethree.then(function(data  ){
    console.log(data)

 })



 
//fifth promise
//before forth understand this firse the do that 

const promisefives =new  Promise((resolve,reject)=>{
   setTimeout(function(){
    let error =false
    if(!error){
      console.log('not a error')
      resolve()
    }else{
      reject()
      console.log('error')
    }
   },1000)  
}).then(function(data){
   console.log(data)
})




 //promise four

 const promisefour =new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false
         if(!error){      
            resolve({name:'batman',universe:'dc'})
             
         }else{
          reject('error 404')  
         }
    },1000)

 })

 //instead on varible store use chaining then 
promisefour.then(function(data){
 console.log(data);
 return data.name
}).then((name)=>{
   console.log(name)
}).catch(function(error){
   console.log(error)
}).finally(function(){
   console.log('the promise is either resolved or rejected')
})

//if(!error ) error =true  then it execute else case
//if(!error) erroe =false then it will execute first case 


//fifth promise using asynch awaith

const promisefive =new Promise(function(resolve,reject){
   setTimeout(function(){
      let error =true
      if(!error){
         resolve({lang:'js',lang2:'py',lang3:"react"})
      }else{
        reject('error js went too wrong ')
      }
     },1000) 
   
   })
 //.then(function(data){
//    console.log(data)
// });

// async function consumepromise() {
//    const store = await promisefive
//    console.log(store)
// }
// consumepromise()    

//now see how try catch using uppercode

async function consumepromise() {
try {
   const store = await promisefive
   console.log(store)
   
} catch (error) {
   console.log('error occured in js ')
}
}
consumepromise()   



//see asycn await to fetch  before this code try catch later
// await take two time bcoz first fetch then .json  

const responce = await  fetch('https://jsonplaceholder.typicode.com/posts' )
const data =  await responce.json()
  console.log(data)




//   async function cj(){
//    const h = await fetch('https://jsonplaceholder.typicode.com/posts')
//    const data = h.json
//    console.log(data)
//   }


// after contertinh .json this will take time so use await
async function apirequest() {
 try {
   const responce = await  fetch('https://jsonplaceholder.typicode.com/posts' )
   const data =  await responce.json()
     console.log(data)
 } catch (error) {
   console.log('error is occured')
 }
}
apirequest()

//again writing try catch

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


//then.catch and finally 

fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{
   return data.json()

}).then((second)=>{
   console.log(second)
})
.catch((error)=>{
   console.log(error)
}).finally((data))


