import { useWeatherContext } from "../context/weatherContext"
import {Information, Forecast, HourlyForcast} from "../components"

const WeatherInfo = () => {
    
    const {singleWeather} = useWeatherContext()
    const {current, location} = singleWeather

    return (
        <section className="w-[90%] mx-auto mt-[8%] py-8">

            <Information {...current} {...location} data={current}/>
            <HourlyForcast />
            <Forecast {...location} />

        </section>
    )
}

export default WeatherInfo