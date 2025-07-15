import Card from '@mui/material/Card';
import './InfoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
  const IMAGE_URL = "https://images.unsplash.com/photo-1611687401370-66c929ba4edb?auto=format&fit=crop&w=800&q=80"; // ✅ DIRECT image URL


  return (
    <div className="InfoBox">
     
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMAGE_URL}
            title="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Temperature: {info.temp}°C<br />
              Humidity: {info.humidity}%<br />
              Min Temp: {info.tempMin}°C<br />
              Max Temp: {info.tempMax}°C<br />
              The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
