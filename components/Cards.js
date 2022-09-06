import {Card} from '../components'
import { useWeatherContext } from "../context/weatherContext"

const Cards = ({data = []}) => {

    const {allWeather, handleSearch, handleSuggestionBlock, loading, getSingelWeather} = useWeatherContext()
    return (
        <section className={`flex flex-wrap ${allWeather ? 'visible' : 'invisible'} flex-col w-full mx-auto items-stretch justify-evenly gap-x-5`}>
            {data.map((item) => {
                return (
                    <div key={item.id} onClick={() => {getSingelWeather(item.name), handleSearch(''), handleSuggestionBlock(false)}}>
                        <Card key={item.id} {...item} />
                    </div>
                )
            })}
        </section>
    )
}

export default Cards