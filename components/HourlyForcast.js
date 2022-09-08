import { useWeatherContext } from "../context/weatherContext"


const HourlyForcast = ({data}) => {

    const {forecastInfo} = useWeatherContext()
    const {hour} = forecastInfo.forecast.forecastday[0]

    return (
        <section>
            <h1 className="text-5xl font-kanit text-right pr-5 border-r-[2px] my-[3%]"> <span className="text-purple-400"> Hourly </span> Predictions Today</h1>
            <div className="flex w-[96%] mx-auto overflow-x-auto">
                {hour.map((item, index) => {
                    return (
                        <section key={index} className="">
                            <h1>{item.time}</h1>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}

export default HourlyForcast