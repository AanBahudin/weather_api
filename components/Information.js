import moment from "moment"
import {ImLocation2} from 'react-icons/im'
import { information, informationDesc, informationUnit, informationSec, informationDescSec, informationUnitSec, airQualityDesc, airQualityValue } from "../utils/helper";
import {Timeline} from '../components'
import 'aos/dist/aos.css';
import Aos from "aos";
import React from "react";

const Information = ({data, name, country, region, lat, lon, tz_id, localtime, condition, feelslike_c, temp_c}) => {

    React.useEffect(() => {
        Aos.init({duration: 1000})
    })
    const {text, icon} = condition
    return (
        <section className="font-kanit place-items-center">
            <article className=" grid  auto-rows-auto auto-cols-auto gap-8">

                <div className="grid row-start-1 row-end-6 col-start-1 col-end-2 border-white border-[1px]">
                    <article data-aos="fade-up" className="flex flex-col justify-center items-center p-7">
                        <h1 className="text-[3rem] font-extralight">{text}</h1>
                        <img className="w-40 animate-pulse mt-6 animate-pulse duration-75" src={icon} alt="icons" />
                        <h1 className="font-dosis py-3 text-[4rem]">{temp_c} °C</h1>
                        <h1 className="text-[1.5rem] py-3 font-dosis">Feels like {feelslike_c} °C</h1>
                        <h1 className="text-[#575757]">{name}</h1>
                        <h1 className="text-[1.1rem] font-extralight flex gap-x-3"> <ImLocation2 size={20} className="fill-purple-400 my-auto"/> {region || 'Unknown'}</h1>
                    </article>
                </div>

                <section className="grid grid-cols-2 row-start-3 row-end-6 gap-8 col-start-2 col-end-8">
                    <Timeline />
                </section>

                <section className="grid grid-cols-3 row-start-1 gap-8 row-end-3 col-start-2 col-end-8">

                    <div className="border-white  p-7 flex flex-col justify-center border-[1px]">
                            <h1 className="text-[1.6rem] font-semibold mb-4 text-center text-[#575757]">Weather Information</h1>
                            <section className="text-[1.2rem]">
                                {Object.keys(data).filter(item => {
                                    return information.includes(item)
                                }).map((item, index) => {
                                    return (
                                        <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                                            <span className="w-[45%] md:w-[40%]">{informationDesc[index]}</span>
                                            <span className='w-[15%] md:w-[20%]'>:</span>
                                            <span className="font-dosis">{index === 1  ? `${informationUnit[index]} ${data[item]}` : `${data[item]} ${informationUnit[index]}` }</span> 
                                        </h1>
                                    )
                                })}
                            </section>
                        </div>

                    <div className="border-white  p-7 flex flex-col justify-center border-[1px]">
                        <h1 className="text-center font-semibold mb-4 text-[#575757]">Wind Information</h1>
                        <section className="text-[1.2rem] mt-[3]">
                            {Object.keys(data).filter(item => {
                                return informationSec.includes(item)
                            }).map((item, index) => {
                                return (
                                    <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                                        <span className="w-[45%] md:w-[40%]">{informationDescSec[index]}</span>
                                        <span className='w-[15%] md:w-[10%]'>:</span>
                                        <span className="font-dosis">{data[item]} {informationUnitSec[index]}</span> 
                                    </h1>
                                )
                            })}
                        </section>
                    </div>

                    <div className="border-white  p-7 flex flex-col justify-center border-[1px]">
                        <h1 className="text-[1.6rem] font-semibold mb-4 text-center text-[#575757]">Air Quality</h1>
                        <section className="text-[1.2rem] flex flex-wrap justify-center items-center mt-[3]">
                            {Object.keys(data.air_quality).filter(item => {
                                return airQualityValue.includes(item)
                            }).map((item, index) => {
                                return (
                                    <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                                        <span className="w-[45%] md:w-[30%]">{airQualityDesc[index]}</span>
                                        <span className='w-[15%] md:w-[30%]'>:</span>
                                        <span className="font-dosis">{data.air_quality[item].toFixed(2)}</span> 
                                    </h1>
                                )
                            })}
                        </section>

                    </div>
                </section>

                {/* <section className="row-start-1 row-end-6 flex justify-center items-center col-start-8 col-end-12">
                    <Timeline />
                </section> */}

            </article>
        </section>
    )
}

    export default Information



{/* <div className="text-center">
    <h1>{moment(localtime.split(' ')[0]).format('l')}</h1>
    <h1>{tz_id}</h1>
</div>

<div className="text-center mr-10">
    <h1 className="text-[#575757]">{name}</h1>
    <h1 className="text-[1.1rem] font-extralight flex gap-x-3"> <ImLocation2 size={20} className="fill-purple-400 my-auto"/> {region || 'Unknown'}, {country}</h1>
</div>

<div>
    <h1>{localtime.split(' ')[1]}</h1>
    <h1>{lat}, {lon}</h1>
</div>
</article>

<article data-aos="fade-up" className="flex flex-col justify-center items-center mt-[5%] mr-4">
<h1 className="text-[4rem] font-extralight">{text}</h1>
<img className="w-52 animate-pulse mt-6" src={icon} alt="icons" />
<h1 className="font-dosis py-3 text-[4rem]">{temp_c} °C</h1>
<h1 className="text-[1.5rem] py-3 font-dosis">Feels like {feelslike_c} °C</h1>
</article>

<hr data-aos="slide-right" className="mx-auto w-[30%] my-[3%]" />
<article data-aos="fade-up" className="flex items-stretch justify-between font-kanit w-[80%] mx-auto">
<div className="text-left">
    <h1 className="text-center font-semibold mb-4 text-[#575757]">Weather Information</h1>
    <section className="text-[1.2rem] mt-[3]">
        {Object.keys(data).filter(item => {
            return information.includes(item)
        }).map((item, index) => {
            return (
                <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                    <span className="w-[45%] md:w-[40%]">{informationDesc[index]}</span>
                    <span className='w-[15%] md:w-[10%]'>:</span>
                    <span className="font-dosis">{index === 1  ? `${informationUnit[index]} ${data[item]}` : `${data[item]} ${informationUnit[index]}` }</span> 
                </h1>
            )
        })}
    </section>

</div>

<div>
    <h1 className="text-center font-semibold mb-4 text-[#575757]">Wind Information</h1>
    <section className="text-[1.2rem] mt-[3]">
        {Object.keys(data).filter(item => {
            return informationSec.includes(item)
        }).map((item, index) => {
            return (
                <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                    <span className="w-[45%] md:w-[40%]">{informationDescSec[index]}</span>
                    <span className='w-[15%] md:w-[10%]'>:</span>
                    <span className="font-dosis">{data[item]} {informationUnitSec[index]}</span> 
                </h1>
            )
        })}
    </section>
</div>

<div>
    <h1 className="text-center font-semibold mb-4 text-[#575757]">Air Quality</h1>
    <section className="text-[1.2rem] mt-[3]">
        {Object.keys(data.air_quality).filter(item => {
            return airQualityValue.includes(item)
        }).map((item, index) => {
            return (
                <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                    <span className="w-[45%] md:w-[40%]">{airQualityDesc[index]}</span>
                    <span className='w-[15%] md:w-[10%]'>:</span>
                    <span className="font-dosis">{data.air_quality[item].toFixed(2)}</span> 
                </h1>
            )
        })}
    </section>
</div> */}



//   <div className="border-white text-[1.2rem] roborder-white  p-7 flex flex-col justify-center border-[1px]">
//         <h1 className="text-[1.6rem] font-semibold mb-4 text-center text-[#575757]">Location</h1>
//         <h1>{localtime.split(' ')[1]}</h1>
//         <h1>{moment(localtime.split(' ')[0]).format('l')}</h1>
//         <h1>{tz_id}</h1>
//         <h1>{lat}, {lon}</h1>
//     </div>