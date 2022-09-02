import {Card} from '../components'
import { useWeatherContext } from "../context/weatherContext"

const Cards = ({data = []}) => {

    const {loading, getSingelWeather} = useWeatherContext()

    if(loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <section className='flex flex-wrap w-[80%] mx-auto items-stretch justify-evenly gap-x-5'>
            {data.map((item) => {
                return (
                    <div key={item.id} onClick={() => getSingelWeather(item.name)}>
                        <Card key={item.id} {...item} />
                    </div>
                )
            })}
        </section>
    )
}

export default Cards