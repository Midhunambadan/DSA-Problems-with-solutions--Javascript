let data = 'Hey i am midhun'

let timer =  setInterval(() => {  
      console.log(data);
       
}, 1000);  

setTimeout(()=>{
    clearInterval(timer)
},10000)

