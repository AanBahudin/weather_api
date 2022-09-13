import React from "react";
import moment from "moment";
import {filterData, filterDataSecond, description, descriptionSecond, unit, unitSecond, informationSec, informationDescSec} from '../utils/helper'
import { useWeatherContext } from "../context/weatherContext";
import 'aos/dist/aos.css';
import Aos from "aos";

const Forecast = ({name, region, country}) => {

    const {tabs, forecastInfo} = useWeatherContext()
    const {forecastday} = forecastInfo.forecast

    React.useEffect(() => {
        Aos.init({duration: 1000})
    })
    const currentForecast = forecastday[tabs]

    return (
        <section className="mt-20">
            <div className="grid auto-cols-auto auto-rows-auto gap-8 text-[1.1rem]">

                <section className="col-start-1 col-end-4 row-start-1 row-end-3 border-black border-2">
                    <h1 className="font-kanit text-3xl">Astronomy Information</h1>
                    {Object.keys(currentForecast.astro).slice(0,5).map((key, index) => {

                        const newkey = (key.split('_'));
                        return (
                            <h5 key={index} className="flex flex-row text-left ">
                                <span className='w-[45%] flex md:w-[20%]'>{newkey.length === 2 ? `${newkey[0]}${newkey[1]}` : key}</span>
                                <span className='w-[15%] md:w-[10%]'>:</span>
                                <span className="font-dosis">{currentForecast.astro[key]}</span>
                            </h5>
                        )
                    })}
                </section>

                <section className="col-start-1 col-end-4 row-start-3 row-end-6 border-2 border-black">
                    <h1 className="py-3 font-kanit text-3xl">Weather Information</h1>
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
                </section>

                <section className="col-start-4 col-end-9 row-start-1 row-end-6 border-2 border-black">
                    <section className="row-span-2 flex items-center justify-center flex-col">
                        <h1 className="text-3xl text-purple-400">{moment(currentForecast.date).format('LL')}</h1>
                        <img className="w-[40%]" src={currentForecast.day.condition.icon} alt="icons" />
                        <h1 className="text-3xl">{currentForecast.day.condition.text}</h1>
                        <h1 className="text-[1.1rem] my-3">{`${name}, ${region}, ${country}`}</h1> 
                    </section>
                </section>

                <section className="col-start-9 col-end-12 row-start-1 row-end-3 border-black border-2">
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
                </section>

                <section className="col-start-9 col-end-12 row-start-3 row-end-6 border-2 border-black">
                    <h1 className="font-kanit text-3xl">Astronomy Information</h1>
                            {Object.keys(currentForecast.astro).slice(0,5).map((key, index) => {

                                const newkey = (key.split('_'));
                                return (
                                    <h5 key={index} className="flex flex-row text-left ">
                                        <span className='w-[45%] flex md:w-[20%]'>{newkey.length === 2 ? `${newkey[0]}${newkey[1]}` : key}</span>
                                        <span className='w-[15%] md:w-[10%]'>:</span>
                                        <span className="font-dosis">{currentForecast.astro[key]}</span>
                                    </h5>
                                )
                            })}
                </section>
            </div>
        </section>
    )
}

export default Forecast