import {AutoComplete} from '../components'
import {AiOutlineClose} from 'react-icons/ai'
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
            <h1 className="mt-[10%] font-kanit duration-200 text-bgLight mb-[4%]">Forecast WebApp</h1>

            <div className='flex items-stretch mx-auto justify-center'>
                <input value={searchValue} onChange={e => handleSearch(e.target.value)} type='text' placeholder="Search ..." className="text-sans font-dosis text-center w-[40%] rounded-lg bg-transparent text-bgLight dark:placeholder:text-white placeholder:text-bgLight border-[1px] border-bgLight/80 dark:border-white/80 py-2 px-4 ring-0 outline-none" />
                <button onClick={() => handleSearch('')} className='my-auto ml-1 py-2 px-4 border-[1px] active:bg-purple-400 bg-lightPrimary active:text-black duration-150 border-bgLight dark:border-white/80 rounded-lg'> <AiOutlineClose /> </button>
            </div>
            {searchValue.length >= 3 ? <AutoComplete /> : null}
        <button className='dark:text-white text-black' onClick={() => {handleTheme(!theme)}}>Button</button>
            
        </section>
    )
}

export default Search