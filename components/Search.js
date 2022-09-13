import {AutoComplete} from '../components'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useWeatherContext } from "../context/weatherContext"
import { useState } from 'react'


const Search = () => {

    const {searchValue, handleSearch} = useWeatherContext()
    const [theme, setTheme] = useState(false)

    const handleTheme = (value) => {
        setTheme(value)
        if(value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <section className="w-full text-center h-fit relative"> 
            <h1 className="font-kanit duration-200 text-white mb-[2%]">Forecast WebApp</h1>

            <div className='flex mx-auto justify-center'>
                <input value={searchValue} onChange={e => handleSearch(e.target.value)} type='text' placeholder="Search ..." className="text-sans font-dosis text-center w-[40%] rounded-lg bg-transparent text-white dark:placeholder:text-white placeholder:text-white border-[1px] border-white/80 dark:border-white/80 py-2 px-4 ring-0 outline-none" />
                <button onClick={() => handleSearch('')} className='my-auto ml-1 py-2 px-4 border-[1px] active:bg-purple-400 bg-lightPrimary active:text-black duration-150 border-white dark:border-white/80 rounded-lg'> <AiOutlineClose className='fill-white' /> </button>
            </div>
            {searchValue.length >= 3 ? <AutoComplete /> : null}
        <button className='duration-200 fixed top-4 right-8' onClick={() => {handleTheme(!theme)}}>{theme ? <BsFillSunFill className='fill-white' /> : <BsFillMoonFill className='fill-white' />}</button>
        <button></button>
        </section>
    )
}

export default Search