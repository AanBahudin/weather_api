import {tabsDatas} from '../utils/helper'
import { useWeatherContext } from "../context/weatherContext";

const Tabs = () => {
    const {tabs, handleTabs} = useWeatherContext()

    return (
        <section data-aos="fade-up" className='w-[95%] text-[1.5rem] md:text-[2rem] md:w-[70%] mx-auto duration-200 rounded font-kanit bg-white/[25%] backdrop-blur-3xl dark:bg-[#272727] dark:border-[1px] box-border'>
            <ul className='w-full mx-auto flex justify-evenly p-1 md:p-3'>
                {tabsDatas.map(item => {
                    return (
                        <li onClick={() => handleTabs(item.id)} className={`${tabs === item.id ? 'border-b-[2px]' : null} dark:text-silver cursor-default text-sky-800 place-self-strech duration-200 border-white py-1`} key={item.id}>{item.name}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Tabs