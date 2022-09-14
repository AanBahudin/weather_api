import {ImLocation2} from 'react-icons/im'
import { filtering } from '../function/filtering';
import { information, informationDesc, informationUnit, informationSec, informationDescSec, informationUnitSec, airQualityDesc, airQualityValue } from "../utils/helper";
import {Timeline} from '../components'

const Information = ({data, name, region, condition, feelslike_c, temp_c}) => {
    const {text, icon} = condition

    return (
        <section className="font-kanit place-items-center grid auto-rows-auto auto-cols-auto gap-8">

            <div className="grid row-start-1 row-end-6 col-start-1 col-end-2">
                <article data-aos="fade-up" className=" text-center text-white bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark  relative duration-200 p-7 flex flex-col justify-center">
                    <h1 className="text-[3rem] text-sky-800 dark:text-silver font-extralight">{text}</h1>
                    <img className="w-40 mx-auto animate-pulse mt-6 duration-75" src={icon} alt="icons" />
                    <h1 className="font-dosis py-3 text-[3rem]">{temp_c} °C</h1>
                    <h1 className="text-[1.5rem] font-dosis">Feels like {feelslike_c} °C</h1>
                    <h1 className="dark:text-darkSecondary text-sky-800">{name}</h1>
                    <h1 className="text-[1.1rem] text-sky-800 dark:text-darkSecondary mx-auto font-extralight flex gap-x-3"> <ImLocation2 size={20} className="fill-sky-800 my-auto"/> {region || 'Unknown'}</h1>
                </article>
            </div>

            <section className="grid grid-cols-2 row-start-3 row-end-6 gap-8 col-start-2 col-end-8">
                <Timeline />
            </section>

            <section className="grid grid-cols-3 row-start-1 gap-8 text-white duration-200 row-end-3 col-start-2 col-end-8">

                <div className=" bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark dark:text-darkSecondary text-sky-800 relative duration-200 p-7 flex flex-col justify-center">
                        <h1 className="text-[1.6rem] font-light mb-4 text-center text-white">Weather Information</h1>
                            <section className="text-[1.2rem]">
                                {filtering(data, information).map((item, index) => {
                                    return (
                                        <h1 key={index} className="flex flex-row text-left w-full  font-montserrat font-[600] text-md my-1"> 
                                        <span className="w-[45%] md:w-[40%]">{informationDesc[index]}</span>
                                        <span className='w-[15%] md:w-[20%]'>:</span>
                                        <span className="font-dosis dark:text-silver">{index === 1  ? `${informationUnit[index]} ${data[item]}` : `${data[item]} ${informationUnit[index]}` }</span> 
                                    </h1>
                                    )
                                })}
                            </section>
                    </div>

                <div className="bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark dark:text-darkSecondary text-sky-800 relative duration-200 p-7 flex flex-col justify-center">
                    <h1 className="text-[1.6rem] font-light mb-4 text-center text-white">Wind Information</h1>
                    <section className="text-[1.2rem] mt-[3]">
                        {filtering(data, informationSec).map((item, index) => {
                            return (
                                <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                                    <span className="w-[45%] md:w-[40%]">{informationDescSec[index]}</span>
                                    <span className='w-[15%] md:w-[10%]'>:</span>
                                    <span className="font-dosis dark:text-silver">{data[item]} {informationUnitSec[index]}</span> 
                                </h1>
                            )
                        })}
                    </section>
                </div>

                <div className=" bg-white/[25%] rounded backdrop-blur-3xl dark:bg-cardDark dark:text-darkSecondary text-sky-800 relative duration-200 p-7 flex flex-col justify-center">
                    <h1 className="text-[1.6rem] font-light mb-4 text-center text-white">Air Quality</h1>
                    <section className="text-[1.2rem] mt-[3]">
                        {filtering(data.air_quality, airQualityValue).map((item, index) => {
                            return (
                                <h1 key={index} className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                                    <span className="w-[45%] md:w-[30%]">{airQualityDesc[index]}</span>
                                    <span className='w-[15%] md:w-[10%]'>:</span>
                                    <span className="font-dosis dark:text-silver">{data.air_quality[item].toFixed(2)}</span> 
                                </h1>
                            )
                        })}
                    </section>

                </div>
            </section>
        </section>
    )
}

    export default Information