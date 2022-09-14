import { useWeatherContext } from "../context/weatherContext"
import {ImLocation2} from 'react-icons/im'
import {Loading} from '../components'
import 'aos/dist/aos.css';
import Aos from "aos";
import React from "react";

const AutoComplete = () => {

    const {allWeather, getSingelWeather, handleSearch, loading} = useWeatherContext()
    React.useEffect(() => {
        Aos.init({duration: 300})
    })

    return (
        <section data-aos="fade" className="w-[40%] z-10 bg-white/30 backdrop-blur-3xl dark:bg-cardDark duration-200 border-[1px] border-white/50 mx-auto overflow-y-auto h-[30vh] p-5 rounded-lg mt-1 absolute left-[28%]">
            <section className={`flex flex-wrap ${allWeather ? 'visible' : 'invisible'} flex-col w-full mx-auto items-stretch justify-around gap-x-5`}>
            {loading ? <Loading /> : (
                allWeather.map((item) => {
                    return (
                        <div key={item.id} onClick={() => {getSingelWeather(item.name), handleSearch('')}}>
                            <section className="cursor-auto font-kanit text-left hover:bg-sky-400 dark:hover:bg-silver duration-200">
                                <span className='flex gap-x-2'>
                                    <ImLocation2 size={20} className='fill-gray-800 dark:fill-darkSecondary my-auto' />
                                    <h1 className="max-w-[80%] text-sky-800 dark:text-darkSecondary my-auto text-[1.1rem]"> {item.name}, {item.region}, {item.country}</h1>
                                </span>
                            </section>
                        </div>
                    )
                })
            )}
        </section>
        </section>
    )
}

export default AutoComplete