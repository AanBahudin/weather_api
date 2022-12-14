import {AutoComplete} from '../components'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useWeatherContext } from "../context/weatherContext"


const Search = () => {

    const {searchValue, handleSearch, handleTheme, theme} = useWeatherContext()

    return (
        <section className="w-full text-center relative mt-[30%] md:mt-0 text-white dark:text-silver"> 
            <h1 className="font-kanit duration-200 my-2">Forecast WebApp</h1>

            <div className='flex mx-auto justify-center w-[90%]'>
                <input value={searchValue} onChange={e => handleSearch(e.target.value)} type='text' placeholder="Search ..." className="text-sans font-dosis text-center w-full rounded bg-transparent dark:placeholder:text-silver placeholder:text-white border-[1px] border-white/80  py-2 px-4 ring-0 outline-none" />
                {/* <button onClick={() => handleSearch('')} className='my-auto ml-1 py-2 px-4 border-[1px] active:bg-sky-800 dark:active:bg-silver bg-lightPrimary active:text-black duration-150 border-white dark:border-silver rounded-lg'> <AiOutlineClose className='fill-white' /> </button> */}
                {searchValue.length >= 3 ? <AutoComplete /> : null}
            </div>
        <button className='duration-200 z-50 fixed top-4 fill-white right-8' onClick={() => {handleTheme(!theme)}}>{theme ? <BsFillSunFill /> : <BsFillMoonFill />}</button>
        </section>
    )
}

export default Search