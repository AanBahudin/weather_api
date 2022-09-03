import { useWeatherContext } from "../context/weatherContext"
import {Information} from "../components"

const WeatherInfo = () => {
    
    const {singleWeather} = useWeatherContext()

    const {current, location} = singleWeather

    return (
        <section className="w-[90%] mx-auto border-t-[1px] mt-[8%] py-8">

            <Information {...current} {...location} />

        </section>
    )
}

export default WeatherInfo