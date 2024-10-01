import Searchbox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        // city:"Kolkata",
        // humidity:62,
        // temp:31.97,
        // tempMax:31.97,
        // tempMin:31.97,
        // weather: "Haze",
    });
    let updateInfo =(result)=>{
        setWeatherInfo(result)
    }

    return (
        <div> 
        <h2>Weather App</h2>
        <Searchbox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        )
}