import { useWeatherContext } from "../context/weatherContext"
import {ImLocation2} from 'react-icons/im'

const AutoComplete = () => {

    const {allWeather, getSingelWeather, handleSearch, loading} = useWeatherContext()

    return (
        <section className="w-[40%] z-10 bg-black border-[1px] border-white/50 mx-auto overflow-y-auto h-[30vh] rounded-lg mt-1 absolute left-[28%]">
            <section className={`flex flex-wrap ${allWeather ? 'visible' : 'invisible'} flex-col w-full mx-auto items-stretch justify-evenly gap-x-5`}>
            {loading ? <h1 className="mt-20">Loading ...</h1> : (
                allWeather.map((item) => {
                    return (
                        <div key={item.id} onClick={() => {getSingelWeather(item.name), handleSearch('')}}>
                            <section className="cursor-auto font-kanit text-left flex flex-col hover:bg-cyan-400/70 duration-200 pt-2 border-b-[0.1px] border-white/50">
                                <span className='flex gap-x-2'>
                                    <ImLocation2 size={20} className='fill-white my-auto' />
                                    <h1 className="max-w-[80%] my-auto text-[1.1rem]"> {item.name}, {item.region}, {item.country}</h1>
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