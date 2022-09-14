import {ImLocation2} from 'react-icons/im'
import { filtering } from '../function/filtering';
import { information, informationDesc, informationUnit, informationSec, informationDescSec, informationUnitSec, airQualityDesc, airQualityValue } from "../utils/helper";
import {Timeline} from '../components'
import 'aos/dist/aos.css';
import Aos from "aos";
import React from "react";

const Information = ({data, name, region, condition, feelslike_c, temp_c}) => {

    React.useEffect(() => {
        Aos.init({duration: 1000})
    })
    const {text, icon} = condition

    return (
        <section className="font-kanit place-items-center">
            <article className=" grid auto-rows-auto auto-cols-auto gap-8">

                <div className="grid row-start-1 row-end-6 col-start-1 col-end-2">
                    <article data-aos="fade-up" className=" text-center bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark  relative duration-200 p-7 flex flex-col justify-center">
                        <h1 className="text-[3rem] text-sky-800 dark:text-silver text-center font-extralight">{text}</h1>
                        <img className="w-40 mx-auto animate-pulse mt-6 duration-75" src={icon} alt="icons" />
                        <h1 className="font-dosis py-3 text-white text-[4rem]">{temp_c} °C</h1>
                        <h1 className="text-[1.5rem] py-3 text-white font-dosis">Feels like {feelslike_c} °C</h1>
                        <h1 className="dark:text-darkSecondary text-center text-sky-800">{name}</h1>
                        <h1 className="text-[1.1rem] text-center dark:text-darkSecondary font-extralight flex gap-x-3"> <ImLocation2 size={20} className="fill-sky-800 my-auto"/> {region || 'Unknown'}</h1>
                    </article>
                </div>

                <section className="grid grid-cols-2 row-start-3 row-end-6 gap-8 col-start-2 col-end-8">
                    <Timeline />
                </section>

                <section className="grid grid-cols-3 row-start-1 gap-8 text-white duration-200 row-end-3 col-start-2 col-end-8">

                    <div className=" bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark relative duration-200 p-7 flex flex-col justify-center">
                            <h1 className="text-[1.6rem] font-light mb-4 text-center text-white dark:text-silver">Weather Information</h1>
                                <section className="text-[1.2rem]">
                                    {filtering(data, information).map((item, index) => {
                                        return (
                                            <h1 key={index} className="flex flex-row text-left w-full text-sky-800 font-montserrat font-[600] text-md my-1"> 
                                            <span className="w-[45%] md:w-[40%] dark:text-darkSecondary">{informationDesc[index]}</span>
                                            <span className='w-[15%] md:w-[20%] dark:text-darkSecondary'>:</span>
                                            <span className="font-dosis dark:text-silver">{index === 1  ? `${informationUnit[index]} ${data[item]}` : `${data[item]} ${informationUnit[index]}` }</span> 
                                        </h1>
                                        )
                                    })}
                                </section>
                        </div>

                    <div className="  bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark relative duration-200 p-7 flex flex-col justify-center">
                        {/* <div className="w-full h-full absolute -z-10 blur-2xl rounded-md top-0 right-0"></div> */}
                        <h1 className="text-center font-light mb-4 dark:text-silver text-secondary">Wind Information</h1>
                        <section className="text-[1.2rem] mt-[3]">
                            {filtering(data, informationSec).map((item, index) => {
                                return (
                                    <h1 key={index} className="flex flex-row text-left w-full font-montserrat text-sky-800 font-[600] text-md my-1"> 
                                        <span className="w-[45%] md:w-[40%] dark:text-darkSecondary">{informationDescSec[index]}</span>
                                        <span className='w-[15%] md:w-[10%] dark:text-darkSecondary'>:</span>
                                        <span className="font-dosis dark:text-silver">{data[item]} {informationUnitSec[index]}</span> 
                                    </h1>
                                )
                            })}
                        </section>
                    </div>

                    <div className=" bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark relative duration-200 p-7 flex flex-col justify-center">
                        <h1 className="text-[1.6rem] font-light mb-4 text-center dark:text-silver">Air Quality</h1>
                        <section className="text-[1.2rem] flex flex-wrap justify-center items-center mt-[3]">
                            {filtering(data.air_quality, airQualityValue).map((item, index) => {
                                return (
                                    <h1 key={index} className="flex flex-row text-left w-full font-montserrat text-sky-800 font-[600] text-md my-1"> 
                                        <span className="w-[45%] md:w-[30%] dark:text-darkSecondary">{airQualityDesc[index]}</span>
                                        <span className='w-[15%] md:w-[30%] dark:text-darkSecondary'>:</span>
                                        <span className="font-dosis dark:text-silver">{data.air_quality[item].toFixed(2)}</span> 
                                    </h1>
                                )
                            })}
                        </section>

                    </div>
                </section>
            </article>
        </section>
    )
}

    export default Information