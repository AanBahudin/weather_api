import { Search, WeatherInfo } from "../components"
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {singleWeather} = useWeatherContext()
 
  return (
    <div className='flex items-center w-full flex-col justify-center text-3xl my-auto h-[100vh]'>
      <h1 className="my-[3%]">Weather APP</h1>

      <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
    </div>
  )
}
