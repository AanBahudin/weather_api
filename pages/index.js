import {  Footer, Search, WeatherInfo } from "../components"
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {darkTheme, handleTheme, singleWeather, allWeather} = useWeatherContext()
 
  return (
    <div className='flex items-center w-full bg-gradient-to-t from-[#5ab2f7] to-[#12cff3] duration-300 dark:from-gray-800 dark:to-gray-900 flex-col justify-center text-3xl my-auto min-h-[100vh] h-fit'>
      <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
      {/* <Footer /> */}
    </div>
  )
}
