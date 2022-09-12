import {tabsDatas} from '../utils/helper'
import { useWeatherContext } from "../context/weatherContext";

const Tabs = () => {

    const {tabs, handleTabs} = useWeatherContext()
    return (
        <section className='w-full font-kanit box-border'>
            <ul className='w-[90%] mx-auto flex justify-around p-3'>
                {tabsDatas.map(item => {
                    return (
                        <li onClick={() => handleTabs(item.id)} className={`${tabs === item.id ? 'border-b-[2px]' : null} cursor-default place-self-strech duration-200 border-purple-400 py-1`} key={item.id}>{item.name}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Tabs