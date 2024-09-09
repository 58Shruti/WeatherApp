import React, { useState } from 'react'
import weatherdata from './WeatherData';


function App() {

  const [inputCity, setInputCity] = useState('');
  const [cities, setCities] = useState([]);
  const [showData, setshowData] = useState('');

 function handleSubmit(e){
  e.preventDefault();
  setInputCity('');
  
  const city = weatherdata.find(value => value.city === inputCity);

  if (city) {
    setshowData(city);
    if (!cities.includes(inputCity)) {
      const updatedCities = [...cities, inputCity];
      setCities(updatedCities)}
    } else {
      setshowData("Data not found");
    }
  }
  
   function btnData(city){
     weatherdata.find((val) =>{  
      if( val.city === city.toUpperCase()){
        setshowData(val);
     }
    });
   }
  

   return (
    <div>   
    <h3>Get weather update !</h3>
    <form onSubmit={handleSubmit}>
    <input type="text"
     placeholder="Enter City" 
     name='cityname' 
    value= {inputCity} 
    onChange={(e) => setInputCity(e.target.value.toUpperCase())}/>
    <button>Submit</button>
    </form>
    <br/>

{
  showData && typeof showData == "object"  ? 
             (
              <div>
              <h3 >City: {showData.city}</h3>
                    <p>Temperature: {showData.temperature}</p>
                    <p>Humidity: {showData.humidity}</p>     
                    <p>Wind Speed: {showData.wind}</p>
                    </div>
                    ) : showData
}
<br/>
{
  cities.map((city)=>{
    return(
      <button onClick={() => btnData(city)}>{city}</button>
    )
  })
}
    </div>
  )
  
}
export default App
