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
        <section className="mt-5 mb-20">
            <div data-aos="fade-up" className="flex bg-white/[25%] backdrop-blur-3xl dark:bg-[#272727] rounded-md p-5 flex-row justify-around duration-200 self-stretch w-[96%] gap-x-4 mx-auto ">
                {filtering.length === 0 ? <h1 className="text-center text-[#575757] font-kanit ">No Prediction Right Now</h1> : (
                    filtering.slice(0,5).map((item, index) => {
                        const {icon, text} = item.condition
                        return (
                            <section key={index} className="text-sm text-center text-white py-2 px-4 w-[20%] h-fit rounded-lg">
                                <h1 className="text-[1.7rem] font-kanit text-center text-sky-800 dark:text-[#BFBFBF] mb-2">{item.time.split(' ')[1]}</h1>
                                <img src={icon} className="mx-auto w-32" alt="icon" />
                                <h1 className="text-[2rem] font-dosis">{item.temp_c} °C</h1>
                                <h1 className="text-center text-sky-800 dark:text-[#575757] text-[1.2rem] font-kanit mt-4">{text}</h1>
    
                                <section className="text-[1.3rem] mt-4 flex justify-around">
                                    <h1 className="font-kanit text-sky-800 dark:text-[#BFBFBF]"> {item.chance_of_rain} <span className="text-sky-800 dark:text-[#575757]">%</span> chance of rain</h1>
                                </section>
                            </section>
                        )
                    })

                )}
            </div>
        </section>
    )
}

export default HourlyForcast