import { useWeatherContext } from "../context/weatherContext"


const HourlyForcast = ({data}) => {

    const {forecastInfo} = useWeatherContext()
    const {hour} = forecastInfo.forecast.forecastday[0]

    const filtering = hour.filter(item => {
        return Number(item.time_epoch) > Number(String(new Date().getTime()).slice(0,8) + '00')
    })

    return (
        <section className="my-[10%]">
            <h1 className="text-5xl font-kanit text-right pr-5 border-r-[2px] my-[3%]"> <span className="text-purple-400"> Hourly </span> Predictions Today</h1>
            <div className="flex flex-row self-stretch w-[96%] gap-x-4 mx-auto overflow-x-auto">
                {filtering.map((item, index) => {
                    const {icon, text} = item.condition
                    return (
                        <section key={index} className="text-sm border-2 py-2 px-4 w-[40%] h-fit rounded-md border-white">
                            <h1 className="text-[1.7rem] mb-2">{item.time.split(' ')[1]}</h1>
                            <h1 className="my-2 text-center text-[1.3rem]">{text}</h1>
                            <img src={icon} className="text-center w-20" alt="icon" />

                            <section className="text-[1.3rem] mt-3">
                                <h1>{item.temp_c} °C</h1>
                                <h1>{item.chance_of_rain} %</h1>
                            </section>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}

export default HourlyForcast