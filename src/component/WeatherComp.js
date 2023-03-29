import React from 'react'
import styled from 'styled-components'

export const WeatherInfoIcon={
    sunset:"/icon/temp.svg",
    sunrise:"/icon/temp.svg",
    humidity:"/icon/humidity.svg",
    wind:"/icon/wind.svg",
    pressure:"/icon/pressure.svg"
}
export const WeatherIcons={
    "01d":"/icon/sunny.svg",
    "01n":"/icon/night.svg",
    "02d":"/icon/day.svg",
    "02n":"/icon/cloudy-night.svg",
    "03d":"/icon/cloudy.svg",
    "03n":"/icon/cloudy.svg",
    "04d":"/icon/perfect-day.svg",
    "04n":"/cloudy-night.svg",
    "09d":"/icon/rain.svg",
    "09n":"/icon/rain-night.svg",
    "10d":"/icon/rain.svg",
    "10n":"/icon/rain-night.svg",
    "11d":"/icon/storm.svg",
    "11n":"/icon/storm.svg"
}


const WeatherCondition = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:space-between;
margin:30px auto;
`;
const Condition= styled.span`
margin:20px auto;
font-size:14px;
& span{
    font-size:28px;
   
}
`;
const WeatherLogo = styled.img`
width:100px;
height:100px;
margin:5px;
`;
const Location= styled.span`
font-size:28px;
font-weight:bold`;

const WeatherInfoLabel= styled.span`
font-size:20px;
font-weight:bold
margin:20px 25px 15px;
text-align:start;
width:80%`;

const WeatherInfoContainer= styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:90%;
justify-content:space-evenly;
margin:30px auto;
flex-wrap:wrap;
`;

const InfoContainer= styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
margin:5px 10px;
`;
const InfoIcon= styled.img`
width:36px;
heighgt:36px;
`;
const InfoLanel = styled.span`
display:flex;
flex-direction:column;
font-size:14px;
margin:15px;
& span{
    font-size:12px;
    font-weight:bold;
    text-transform:capitalize;
}
`;

const WeatherInfoComp=(props)=>{
    const{name,value}=props
    
    return(
        <React.Fragment>
            <InfoContainer>
                <InfoIcon src={WeatherInfoIcon[name]}/>
                <InfoLanel>
                 {value}   
                <span>{name}</span>
                </InfoLanel>
            </InfoContainer>
        </React.Fragment>
    )
}


function WeatherComp(props) {
    console.log(props)
    const{weather} =props
    const isDay = weather.weather[0].icon.includes('d')

    const getTime = (timeStamp)=>{
        return`${new Date(timeStamp*1000).getHours()}:${new Date(timeStamp*1000).getMinutes()}`
    }

    
  return (
   <React.Fragment>
    <WeatherCondition>
        <Condition>
            <span>{`${Math.floor(weather.main.temp-273)}`}c</span> {` | ${weather.weather[0].description}`}
        </Condition>
        <WeatherLogo src='/icon/perfect-day.svg'/>
    </WeatherCondition>
    <Location>{`${weather.name} ${weather.sys.country}`}</Location>
    <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
    <WeatherInfoContainer>
        <WeatherInfoComp 
         name={isDay? "sunset": "sunrise"}
         value={getTime(weather.sys[isDay? "sunset": "sunrise"])}/>

        <WeatherInfoComp name="humidity" value={weather.main.humidity}/>
        <WeatherInfoComp name="wind" value={weather.wind.speed}/>
        <WeatherInfoComp name="pressure" value={weather.main.pressure }/>
    </WeatherInfoContainer>
   </React.Fragment>
  )
}

export default WeatherComp