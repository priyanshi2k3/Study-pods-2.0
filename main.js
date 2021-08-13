 //Get All Values
 const inputTxt = document.querySelector(".inputTxt");
 var button = document.querySelector(".btn");
 const showData = document.querySelector(".showData");
 
 //Get API Key by login to openweather.org
 const API_Key = "f58047ad90b3df0f7ab71a4d8eabc08d";
 
 //Now Add Event Listener
 button.addEventListener("click", () => {
   //Get Input Value
   const cityInput = inputTxt.value;
   // console.log(cityInput);
 
   //Now Fetch Through Get API
   fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API_Key}`
   )
     .then((res) => res.json())
     .then((data) => {
       // console.log(data);
 
       //When Fill Input Field Then Clear Input Field
       inputTxt.value = " ";
 
       // Now Show All Data Value
       showData.innerHTML = `       
                             <ul>
                               <li class="desc">${data.weather[0].description}</li>
                               <li class"city">${data.name}</li>
                               <li class"temp">${data.main.temp}°c</li>
                             </ul>
                             `;
 
     });
 });
 
 