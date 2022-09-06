import {  Search, WeatherInfo } from "../components"
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {allWeather, singleWeather} = useWeatherContext()
 
  return (
    <div className='flex items-center w-full flex-col justify-center text-3xl my-auto h-fit'>
        <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
    </div>
  )
}
