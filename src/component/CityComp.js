import React from 'react'
import styled from 'styled-components'
 

const WeatherLogo = styled.img`
width:140px;
height:140px;
margin:40px;
`
const ChooseCity = styled.span`
color:black;
font-size:20px;
font-weight:bold
margin:10px auto`

const SearchBox = styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
font-size:20px;
font-weight:bold;
margin:20px auto;

& input{
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
}


& button{
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
    color:white;
    background-color:black;
    cursor:pointer;
}

`


function CityComp(props) {
  console.log(props)
  const{setCity,fetchweather}= props
  return (
   <React.Fragment>
      <WeatherLogo  src='/icon/perfect-day.svg'/>
      <ChooseCity>Find Weather Of City</ChooseCity>
      <SearchBox onSubmit={fetchweather}>
        <input placeholder='City' onChange={(e)=>setCity(e.target.value)}/>
        <button type='submit'>Search</button>
      </SearchBox>
   </React.Fragment>
  )
}

export default CityComp