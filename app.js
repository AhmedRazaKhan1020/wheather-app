let input = document.querySelector('#input')
let div = document.querySelector('.container')
let btn = document.querySelector('#btn')
// btn.addEventListener("click",()=>{
//    let value = input.value

//     fetch('https://api.weatherapi.com/v1/current.json?key=52bfd4288adf4cf69b1174342241811&q= `${value}` &aqi=no')
//     .then((item)=>{
//         return item.json()
//         .then((item)=>{
//             console.log(item)
//             div.innerHTML=` 
//             <div class="main">
//         <h1>${item.location.name}</h1>
//         <h1>${item.location.country}</h1>
//         <h1>${item.location.feelslike_c}</h1>
//         <h1>${item.location.localtime}</h1>
//         <p>Humidity ${item.current.humidity}%</p><p>Wind Speed ${item.current.wind_kph}%</p>  
//     </div>`
//         })
//     })
// })

btn.addEventListener("click",()=>{
    const value = input.value

    fetch(`https://api.weatherapi.com/v1/current.json?key=52bfd4288adf4cf69b1174342241811&q=${value}&aqi=no`)
    
    .then((res)=>{
        return res.json() 
       .then((res)=> {
    console.log(res)
    // .then((res)=>console.log(res))
    div.innerHTML = `
      <div class="main">
      
      <h1>Country: ${res.location.country}</h1>
      <h1>Cityname: ${res.location.name}</h1>
      <h1>Temperature: ${res.current.feelslike_c} C </h1>
      <h1>Time: ${res.location.localtime}</h1><br>
      <p>Humidity ${res.current.humidity}%</p>    <p>Wind Speed ${res.current.wind_kph}%</p>    
      <img src="${res.current.condition.icon}" alt=""> 
           
      


      </div>
      `
    
    // .catch((err)=> console.log(err))
})
    
})
})