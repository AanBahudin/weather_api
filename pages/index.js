import {  Footer, Search, WeatherInfo } from "../components"
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {darkTheme, handleTheme, singleWeather, allWeather} = useWeatherContext()
 
  return (
    <div className='flex items-center w-full bg-white duration-200 dark:bg-[#121212] flex-col justify-center text-3xl my-auto h-fit'>
      <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
      {/* <Footer /> */}
    </div>
  )
}
