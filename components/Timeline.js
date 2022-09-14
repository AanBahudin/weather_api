import 'aos/dist/aos.css';
import React from "react";
import { useWeatherContext } from "../context/weatherContext" 

const Timeline = ({}) => {
    const {forecastInfo} = useWeatherContext();
    const data = forecastInfo.forecast.forecastday[0].astro

    return (
        <ol data-aos="fade" className="items-center mx-auto w-full sm:flex">
            {Object.keys(data).slice(0,4).map((item, index) => {
                return (
                    <li key={index} className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="flex z-10 justify-between items-center w-6 h-6 rounded-full bg-white dark:text-silver shrink-0">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
                            </div>
                            <div className="hidden sm:flex w-52 bg-gray-700 dark:text-silver h-0.5"></div>
                        </div>
                        <div className="mt-3 sm:pr-16">
                            <h3 className="flex items-center mb-1 text-sky-800 dark:text-silver text-lg font-kanit">{item}</h3>
                            <h3 className="block mb-2 text-sm font-normal leading-none text-darkSecondary">{data[item]}</h3>
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}

export default Timeline



        // <ol className="relative border-l border-gray-700">           
        //     {Object.keys(data).slice(0,4).map((item, index) => {
        //         return (
        //             <li key={index} className="mb-10 ml-6">            
        //                 <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-white">
        //                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
        //                 </span>
        //                 <h3 className="flex items-center mb-1 text-lg font-kanit">{item}</h3>
        //                 <time className="block mb-2 text-sm font-normal leading-none text-darkSecondary">{data[item]}</time>
        //             </li>

        //         )
        //     })}       
            
        // </ol>