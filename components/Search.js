import {Cards} from '../components'
import { useWeatherContext } from "../context/weatherContext"


const Search = () => {

    const {allWeather, searchValue, handleSearch} = useWeatherContext()

    return (
        <section className="w-full text-center h-fit">
            
            <input value={searchValue} onChange={(e => handleSearch(e.target.value))} type='text' placeholder="Search ..." className="text-sans w-1/2 rounded-sm bg-transparent border-b-[1px] border-white/50 ring-0 outline-none" />

            <section className="my-[5%]">
                <Cards data={allWeather} />
            </section>
        </section>
    )
}

export default Search