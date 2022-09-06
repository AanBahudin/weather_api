import {  Search, WeatherInfo } from "../components"
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {darkTheme, handleTheme, singleWeather} = useWeatherContext()
 
  return (
    <div className='flex items-center w-full flex-col justify-center text-3xl my-auto h-fit'>
      <button className="mt-10" onClick={() => handleTheme(!darkTheme)}>{darkTheme ? <BsSunFill /> : <BsMoonFill />}</button>
      <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
    </div>
  )
}
