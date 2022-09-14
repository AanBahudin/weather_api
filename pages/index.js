import {  Footer, Search, WeatherInfo } from "../components"
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {singleWeather} = useWeatherContext()
 
  return (
    <div className='flex items-center w-full bg-[#5ab2f7] duration-300 dark:bg-[#1D1E18] flex-col justify-center text-3xl my-auto min-h-[100vh] h-fit'>
      <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
      {/* <Footer /> */}
    </div>
  )
}
// 46494C
// 474647