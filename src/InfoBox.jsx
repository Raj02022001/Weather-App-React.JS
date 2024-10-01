import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"

export default function InfoBox({info}){
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const RAIN_URL = "https://images.unsplash.com/photo-1603232644299-3111a520928d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwY29sZHxlbnwwfHwwfHx8MA%3D%3D"
  
    return(
        <div className='InfoBox'>
        <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345,
            width: 400
         }}>
      <CardMedia className='cardcontainer'
        sx={{ height:150, width :20}}
        image= 
          {
            info.humidity > 80 ? RAIN_URL : info.temp > 26 ? HOT_URL : COLD_URL
          }
          
      />
      <CardContent className='cardcontainer'>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity>80 ?<ThunderstormIcon/> : info.temp>26 ? <WbSunnyRoundedIcon/> :<AcUnitTwoToneIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p> Temperature : {info.temp}&deg;C</p>
         <p> Humidity : {info.humidity}</p>
         <p> TempMax : {info.tempMax}&deg;C</p>
         <p> TempMin : {info.tempMin}&deg;C</p>
         <p> Weather: {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}