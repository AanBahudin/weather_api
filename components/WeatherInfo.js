import { useWeatherContext } from "../context/weatherContext"
import {Information, Forecast, HourlyForcast} from "../components"
import 'aos/dist/aos.css';
import Aos from "aos";
import React from "react";

const WeatherInfo = () => {
    
    React.useEffect(() => {
        Aos.init({duration: 1000})
    })

    const {singleWeather} = useWeatherContext()
    const {current, location} = singleWeather

    return (
        <section data-aos="fade-up" className="w-[90%] mx-auto mt-[8%] py-8">

            <Information {...current} {...location} data={current}/>
            <HourlyForcast />
            <Forecast {...location} />

        </section>
    )
}

export default WeatherInfo