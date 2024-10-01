
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import "./SearchBox.css"
export default function Searchbox({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
let API_URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "b4d029560a28488dcc8a32e13718b4fb"

let getWheaterInfo = async()=>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
        }
        console.log (result);
        return result;
    } catch (err){
        throw(err)
    }
}
    let handelChange = (event)=>{
        setCity(event.target.value);
    }
    let handelSubmit = async (event)=>{
    try{
        event.preventDefault();
        console.log(city)
        setCity("");
        let newinfo = await getWheaterInfo();
        updateInfo(newinfo);
        setError(false);
    } catch (err){
        setError(true);
    }
    }
   
return(
    <div className='SearchBox'>
        <form onSubmit={handelSubmit}>
        <TextField id="City Name" label="City Name" variant="filled" color='blue' required value={city} onChange={handelChange}/>
        <br /> <br />
        <Button variant="contained" type="submit" endIcon={<SearchIcon />}> Search City </Button>
        {error && <p style={{backgroundColor:"red"}}>NO SUCH PLACE EXIST IN OUR API</p>}
        </form>
    </div>
)
}