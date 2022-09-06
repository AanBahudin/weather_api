import {AutoComplete} from '../components'
import {AiOutlineClose} from 'react-icons/ai'
import { useWeatherContext } from "../context/weatherContext"


const Search = () => {

    const {searchValue, handleSearch} = useWeatherContext()

    return (
        <section className="w-full text-center h-fit relative"> 
            <h1 className="mt-[10%] mb-[4%]">Weather APP</h1>

            <div className='flex items-stretch mx-auto justify-center'>
                <input value={searchValue} onChange={e => handleSearch(e.target.value)} type='text' placeholder="Search ..." className="text-sans text-center w-[40%] rounded-lg bg-transparent border-[1px] border-white/80 py-2 px-4 ring-0 outline-none" />
                <button onClick={() => handleSearch('')} className='my-auto ml-1 py-2 px-4 border-[1px] active:bg-white active:text-black duration-150 border-white/80 rounded-lg'> <AiOutlineClose /> </button>
            </div>
                {searchValue.length >= 3 ? <AutoComplete /> : null}
            
        </section>
    )
}

export default Search