import React from "react";
import moment from "moment";
import {filterData, filterDataSecond, description, descriptionSecond, unit, unitSecond} from '../utils/helper'
import { useWeatherContext } from "../context/weatherContext";
import 'aos/dist/aos.css';
import Aos from "aos";

const Forecast = ({name, region, country}) => {

    const {tabs, forecastInfo} = useWeatherContext()
    const {forecastday} = forecastInfo.forecast

    React.useEffect(() => {
        Aos.init({duration: 1000})
    })

    console.log(window.performance.timing.connectEnd - window.performance.timing.connectStart);

    const currentForecast = forecastday[tabs]

    return (
        <section className="mt-20">
            <article data-aos="fade-up" className="flex flex-col gap-y-6 font-kanit justify-around">
                <div data-aos="fade-up" className="">
                    <div className="grid grid-rows-2 grid-flow-col text-[1.1rem]">

                        <section className="row-span-2 flex items-center justify-center flex-col">
                            <h1 className="text-3xl text-purple-400">{moment(currentForecast.date).format('LL')}</h1>
                            <img className="w-[40%]" src={currentForecast.day.condition.icon} alt="icons" />
                            <h1 className="text-3xl">{currentForecast.day.condition.text}</h1>
                            <h1 className="text-[1.1rem] my-3">{`${name}, ${region}, ${country}`}</h1> 
                        </section>

                        <section className="col-span-4 py-4 px-3">
                            <h1 className="py-3 border-b-2 border-purple-400 text-purple-400 font-kanit text-3xl">Weather Information</h1>

                            <div className="flex justify-evenly w-full py-3">
                                <article className="w-1/2">
                                    {Object.keys(currentForecast.day).filter(item => {
                                        return filterData.includes(item)
                                    }).map((item, index) => {
                                        return (
                                            <h5 key={index} className="flex flex-row text-left w-full">
                                                <span className='w-[45%] md:w-[30%]'>{description[index]}</span>
                                                <span className='w-[15%] md:w-[10%]'>:</span>
                                                <span className="font-dosis">{currentForecast.day[item]} {unit[index]}</span>
                                            </h5>

                                        )
                                    })}

                                </article>

                                <article className="w-1/2">
                                    {Object.keys(currentForecast.day).filter(item => {
                                        return filterDataSecond.includes(item)
                                    }).map((item, index) => {
                                        return (
                                            <h5 key={index} className="flex flex-row text-left w-full">
                                                <span className='w-[20%]'>{descriptionSecond[index]}</span>
                                                <span className='w-[10%]'>:</span>
                                                <span className="font-dosis"> {item === 'uv' ? `level ${currentForecast.day[item]}` : `${currentForecast.day[item]} ${unitSecond[index]}` } </span>
                                            </h5>
                                        )
                                    })}
                                </article>
                            </div>
                        </section>

                        <section className="row-span-1 col-span-1 py-4 px-3">
                            <h1 className="py-6 font-kanit text-3xl">Astronomy Information</h1>

                                {Object.keys(currentForecast.astro).slice(0,5).map((key, index) => {
                                    return (
                                        <h5 key={index} className="flex flex-row text-left w-full">
                                            <span className='w-[45%] flex md:w-[30%]'>{key}</span>
                                            <span className='w-[15%] md:w-[10%]'>:</span>
                                            <span className="font-dosis">{currentForecast.astro[key]}</span>
                                        </h5>
                                    )
                                })}
                        </section>
                    </div>
                </div>
                    
            </article>
        </section>
    )
}

export default Forecast