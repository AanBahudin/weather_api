import moment from "moment";
import { filtering } from "../function/filtering";
import {filterData, description, unit, desc} from '../utils/helper'
import { useWeatherContext } from "../context/weatherContext";

const Forecast = () => {

    const {tabs, forecastInfo} = useWeatherContext()
    const {forecastday} = forecastInfo.forecast
    const currentForecast = forecastday[tabs]

    return (
        <section className="mt-20 w-[80%] mx-auto grid auto-cols-auto auto-rows-auto gap-8 text-[1.1rem]">

            <div data-aos="fade-up" className="row-start-1 row-end-3 col-start-1 col-end-5 md:col-end-6 grid grid-cols-1 sm:grid-cols-2 rounded backdrop-blur-3xl bg-white/[20%] dark:bg-cardDark duration-200">

                <section className="flex items-center p-4 font-kanit justify-center flex-col">
                    <h1 className="text-3xl text-sky-800 dark:text-silver">{moment(currentForecast.date).format('LL')}</h1>
                    <img className="w-[20%]" src={currentForecast.day.condition.icon} alt="icons" />
                    <h1 className="text-3xl text-white dark:text-darkSecondary">{currentForecast.day.condition.text}</h1>
                </section>

                <section className="hidden sm:flex justify-center font-kanit my-auto items-center gap-3 p-4 flex-wrap">
                    {Object.keys(forecastInfo.location).slice(0,6).map((item, index) => {
                        return ( 
                            <div key={index} className="flex flex-wrap my-auto justify-center space-x-2">
                                <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 dark:bg-silver gap-5 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-200 ease">
                                    {desc[index]}: {forecastInfo.location[item]}
                                </span>
                            </div>
                            )
                        })}
                </section>
            </div>

            <div className="row-start-3 row-end-6 col-start-1 col-end-5 md:row-start-3 md:row-end-6 md:col-start-1 md:col-end-4 py-4 px-2 flex gap-2 flex-wrap items-center justify-evenly rounded backdrop-blur-3xl bg-white/[20%] dark:bg-cardDark duration-200">
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

            <div className="row-start-6 row-end-9 p-4 col-start-1 col-end-5 md:row-start-3 md:row-end-6 md:col-start-4 md:col-end-6 flex gap-2 flex-wrap items-center justify-evenly rounded backdrop-blur-3xl bg-white/[20%] dark:bg-cardDark duration-200">
                    {Object.keys(currentForecast.astro).slice(0,5).map((key, index) => {
                        const newkey = (key.split('_'));
                        return (
                            <h5 key={index} className="flex flex-row gap-x-2 text-left">
                                <span className='font-kanit text-sky-800  dark:text-darkSecondary text-[1.2rem]'>{newkey.length === 2 ? `${newkey[0]}${newkey[1]}` : key} : </span>
                                <span className="font-dosis dark:text-silver"> {currentForecast.astro[key]}</span>
                            </h5>
                        )})}
            </div>
        </section>
    )
}

export default Forecast
