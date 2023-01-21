export default function WeatherInfo({data, w, index, temp, feelsLikeTemp, gust}) {
    return(
        <div key={index} className="weather">
            <div className='location'> {data.name} </div>
            <div> {w.main} </div>
            <div>{w.description}</div>  
            <div>Temp: {temp}°C</div>
            <div>Feels like: {feelsLikeTemp}°C</div>
            <div>Gust: {gust}</div>
        </div>
    )
}