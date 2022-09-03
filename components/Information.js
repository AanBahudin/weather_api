import moment from "moment"

const Information = ({cloud, name, country, region, localtime, air_quality, condition, feelslike_c, humidity, temp_c, uv}) => {

    const {text, icon} = condition
    const time = localtime.split(' ')

    return (
        <section>
            <article className="flex  gap-y-1 justify-between text-center">
                <div>
                    <h1>{moment(time[0]).format('l')}</h1>
                </div>
                <div className="text-center mr-10">
                    <h1>{name}</h1>
                    <h1 className="text-[1.1rem] font-extralight">{region}, {country}</h1>
                    <h1></h1>
                </div>
                <h1>{time[1]}</h1>
            </article>

            <article className="flex flex-col justify-center items-center mt-[5%]">
                <h1 className="text-4xl font-extralight">{text}</h1>
                <img className="w-40 animate-pulse" src={icon} alt="icons" />
                <h1>{temp_c} °C</h1>
                <h1 className="text-[1.1rem] gap-y-0">Feels like {feelslike_c} °C</h1>
            </article>

            <h1>Kelembapan : {humidity}</h1>
            <h1>UV level : {uv}</h1>
            {cloud}
        </section>
    )
}

export default Information