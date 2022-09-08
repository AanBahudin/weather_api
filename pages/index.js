import {  Footer, Search, WeatherInfo } from "../components"
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import { useWeatherContext } from "../context/weatherContext"

export default function Home () {

  const {darkTheme, handleTheme, singleWeather, allWeather} = useWeatherContext()

  /* const sample = Object.keys(singleWeather).filter((item, index) => {
    return typeof item !== 'object'
  }).sort().reverse().map((newItem, index) => {
    console.log(allWeather[newItem])
  })

  console.log(sample); */

    {/* <div className="flex flex-col">
      { Object.keys(data).filter((item, index) => {
          return typeof data[item] !== 'object'
      }).sort().reverse().map((newItem, index) => {
          const title = newItem.split('_')
          return (
              <h1 key={index}>{`${title[0]} ${title[1] ? title[1] : ''}`} : {data[newItem]}</h1>
          )
      })}
  </div> */}
 
  return (
    <div className='flex items-center w-full flex-col justify-center text-3xl my-auto h-fit'>
      {/* <button className="mt-10" onClick={() => handleTheme(!darkTheme)}>{darkTheme ? <BsSunFill /> : <BsMoonFill />}</button> */}
      <Search />
      {singleWeather.length === 0 ? null : <WeatherInfo />}
      {/* <Footer /> */}
    </div>
  )
}
