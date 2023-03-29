import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import CityComp from "./component/CityComp"
import WeatherComp from "./component/WeatherComp"
const APIkey = "acd41781fa0fa8ddac64683cd5e4428b"
 
const Container = styled.div`
display: flex;
flex-direction: column;
margin:  10px auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
background:white;
font-family:Josefin Sans;
width:380px;
`

const AppLabel = styled.span`
color:black;
font-size :20px;
font-weight:bold;
`

function App() {
  const[city,setCity]=useState()
  const[weather,setWeather]=useState()

  const fetchweather =async(e)=>{
    e.preventDefault()
    const response = 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);
    
    setWeather(response.data)
   
  }
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
     
        {weather? (
           <WeatherComp weather={weather}/>
          ): (
            <CityComp setCity={setCity} fetchweather={fetchweather}/>
            )}
    </Container>
  );
}

export default App;
