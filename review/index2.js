const link ='https://randomuser.me/api/'

const http =new XMLHttpRequest();

http.open('GET', link)
//for continues use onready state

http.onreadystatechange= function(){
    console.log(http.readyState)
    if(http.readyState===4){
        console.log(this.responseText)
        const data =JSON.parse(this.responseText)
        console.log(data.results[0].id.name)
        console.log(data.info.seed)

        
        document.getElementById('button').addEventListener('click',function(){
            document.getElementById('div').innerHTML=data.results[0].id.name
            document.getElementById('div').innerHTML=data.results[0].registered.age
            document.getElementById('div').style.color='black'
                        document.getElementById('div').style.fontSize='2rem'
            console.log(data.results[0].id.name)
           
        })
      
        
    }


}

//it track only one time 
console.log(http.readyState)
http.send()


//responce text help to print 