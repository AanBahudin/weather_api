import { useWeatherContext } from "../context/weatherContext"
import 'aos/dist/aos.css';
import Aos from "aos";
import React from "react";

const HourlyForcast = () => {

    React.useEffect(() => {
        Aos.init({duration: 1000})
    })

    const {forecastInfo} = useWeatherContext()
    const {hour} = forecastInfo.forecast.forecastday[0]

    const filtering = hour.filter(item => {
        return Number(item.time_epoch) > Number(String(new Date().getTime()).slice(0,8) + '00')
    })

    return (
        <section className="my-[10%]">
            <h1 data-aos="slide-left" className="text-5xl font-kanit text-right pr-5 border-r-[2px] my-[3%]"> <span className="text-purple-400"> Hourly </span> Predictions Today</h1>
            <div className="flex flex-row justify-between self-stretch w-[96%] gap-x-4 mx-auto ">
                {filtering.slice(0,4).map((item, index) => {
                    const {icon, text} = item.condition
                    return (
                        <section data-aos="fade-up" key={index} className="text-sm text-center border-2 py-2 px-4 w-[20%] h-fit rounded-md border-white">
                            <h1 className="text-[1.7rem] font-kanit text-purple-400 text-left mb-2">{item.time.split(' ')[1]}</h1>
                            <img src={icon} className="mx-auto w-32" alt="icon" />
                            <h1 className="text-[2rem] font-dosis">{item.temp_c} °C</h1>
                            <h1 className="text-center text-[1.3rem] font-kanit mt-4">{text}</h1>

                            <section className="text-[1.3rem] mt-4 flex justify-around">
                                <h1 className="font-kanit text-purple-400">{item.chance_of_rain} % chance of rain</h1>
                            </section>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}

export default HourlyForcast