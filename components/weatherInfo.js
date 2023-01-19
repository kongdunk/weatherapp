export default function WeatherInfo({data, w, index}) {
    return(
        <div key={index} className="weather">
        <div className='location'> {data.name} </div>
        <div> {w.main} </div>
        <div>{w.description}</div>  
        </div>
    )
}