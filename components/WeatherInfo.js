import { useWeatherContext } from "../context/weatherContext"
import {Information, Forecast, HourlyForcast, Tabs} from "../components"

const WeatherInfo = () => {
    
    const {singleWeather} = useWeatherContext()
    const {current, location} = singleWeather

    return (
        <section data-aos="fade-up" className="w-[98%] mx-auto mt-[8%] md:py-8">

            <Information {...current} {...location} data={current}/>
            <HourlyForcast />
            <Tabs />
            <Forecast {...location} />

        </section>
    )
}

export default WeatherInfo