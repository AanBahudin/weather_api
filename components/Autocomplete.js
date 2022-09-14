import { useWeatherContext } from "../context/weatherContext"
import {ImLocation2} from 'react-icons/im'
import {Loading} from '../components'

const AutoComplete = () => {

    const {allWeather, getSingelWeather, handleSearch, loading} = useWeatherContext()

    return (
        <section data-aos="fade" className="w-[90%] z-10 bg-white/30 backdrop-blur-3xl dark:bg-cardDark duration-200 border-[1px] border-white/50 mx-auto overflow-y-auto h-[30vh] px-5 rounded mt-1 absolute top-[100%]">
            <section className={`flex flex-col justify-around`}>
            {loading ? <Loading /> : (
                allWeather.map((item) => {
                    return (
                        <div key={item.id} onClick={() => {getSingelWeather(item.name), handleSearch('')}}>
                            <section className="cursor-auto font-kanit text-left hover:bg-sky-400 p-2 rounded dark:hover:bg-silver duration-200 dark:fill-darkSecondary text-sky-800 dark:text-darkSecondary">
                                <span className='flex gap-x-2'>
                                    <ImLocation2 size={20} className='fill-white/80 dark:fill-darkSecondary my-auto' />
                                    <h1 className="max-w-full xl:max-w-[80%] duration-200 text-[1rem] xl:text-[1.1rem]"> {item.name}, {item.region}, {item.country}</h1>
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