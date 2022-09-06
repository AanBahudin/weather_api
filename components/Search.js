import {Cards} from '../components'
import { useWeatherContext } from "../context/weatherContext"


const Search = () => {

    const {allWeather, loading, searchValue, handleSearch} = useWeatherContext()

    return (
        <section className="w-full text-center h-fit"> 
            <h1 className="mt-[10%] mb-[4%]">Weather APP</h1>
            
            <input value={searchValue} onChange={e => handleSearch(e.target.value)} type='text' placeholder="Search ..." className="text-sans text-center w-[40%] rounded-lg bg-transparent border-[1px] border-white/80 py-2 px-4 ring-0 outline-none" />
            {searchValue.length >= 3 ? (
                <div className='w-[40%] mt-4 transition-shadow duration-200 bg-transparent border-x-2 p-6 border-2 border-white mx-auto h-[30vh] rounded-md overflow-y-auto'>
                    {loading ? <h1>Loading ...</h1> : <Cards data={allWeather} />}
                    {allWeather.length === 0 && !loading && searchValue.length >= 3 ? <h1>not found</h1> : null}
                </div>
            ) : null}
        </section>
    )
}

export default Search