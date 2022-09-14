import React from "react";
import moment from "moment";
import { filtering } from "../function/filtering";
import {filterData, description, unit, desc} from '../utils/helper'
import { useWeatherContext } from "../context/weatherContext";
import 'aos/dist/aos.css';
import Aos from "aos";

const Forecast = () => {

    const {tabs, forecastInfo} = useWeatherContext()
    const {forecastday} = forecastInfo.forecast


    React.useEffect(() => {
        Aos.init({duration: 1000})
    })
    const currentForecast = forecastday[tabs]
    

    return (
        <section className="mt-20 w-[80%] mx-auto">
            <article className="grid auto-cols-auto auto-rows-auto gap-8 text-[1.1rem]">

                <div className="row-start-1 row-end-3 col-start-1 col-end-6 grid grid-cols-2 rounded backdrop-blur-3xl bg-white/[20%] dark:bg-cardDark duration-200">

                    <section className="flex items-center p-4 font-kanit justify-center flex-col">
                        <h1 className="text-3xl text-sky-800 dark:text-silver">{moment(currentForecast.date).format('LL')}</h1>
                        <img className="w-[20%]" src={currentForecast.day.condition.icon} alt="icons" />
                        <h1 className="text-3xl text-white dark:text-darkSecondary">{currentForecast.day.condition.text}</h1>
                    </section>

                    <section className="flex justify-center font-kanit my-auto items-center gap-3 p-4 flex-wrap">
                        {Object.keys(forecastInfo.location).slice(0,6).map((item, index) => {
                            return ( 
                                <div key={index} className="flex flex-wrap my-auto  justify-center space-x-2">
                                    <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 dark:bg-silver gap-5 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-200 ease">
                                       {desc[index]}: {forecastInfo.location[item]}
                                    </span>
                                </div>
                                )
                            })}
                    </section>
                </div>

                <div className="row-start-3 row-end-6 col-start-1 col-end-4 py-4 px-2 flex gap-2 flex-wrap items-center justify-evenly rounded backdrop-blur-3xl bg-white/[20%] dark:bg-cardDark duration-200">
                        {filtering(currentForecast.day, filterData).map((item, index) => {
                            return (
                                <h5 key={index} className="flex flex-row gap-x-2 text-left">
                                    <span className='font-kanit text-sky-800  dark:text-darkSecondary text-[1.2rem]'>{description[index]} :</span>
                                    {/* <span className='w-[15%] md:w-[10%]'>:</span> */}
                                    <span className="font-dosis dark:text-silver">{currentForecast.day[item]} {unit[index]}</span>
                                </h5>
                            )
                        })}
                </div>

                <div className="row-start-3 row-end-6 p-4 col-start-4 col-end-6 flex gap-2 flex-wrap items-center justify-evenly rounded backdrop-blur-3xl bg-white/[20%] dark:bg-cardDark duration-200">
                        {Object.keys(currentForecast.astro).slice(0,5).map((key, index) => {
                            const newkey = (key.split('_'));
                            return (
                                <h5 key={index} className="flex flex-row gap-x-2 text-left">
                                    <span className='font-kanit text-sky-800  dark:text-darkSecondary text-[1.2rem]'>{newkey.length === 2 ? `${newkey[0]}${newkey[1]}` : key} : </span>
                                    <span className="font-dosis dark:text-silver"> {currentForecast.astro[key]}</span>
                                </h5>
                            )})}
                </div>

            </article>
        </section>
    )
}

export default Forecast
{/* <section className="col-start-1 col-end-4 row-start-1 row-end-3 border-black border-2">
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
</section> */}