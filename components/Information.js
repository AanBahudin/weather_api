import moment from "moment"
import {WiHumidity} from 'react-icons/wi'
import {MdLightMode, MdCloud, MdVisibility} from 'react-icons/md'

const Information = ({cloud, data, name, country, region, lat, lon, tz_id, localtime, air_quality, condition, feelslike_c, humidity, temp_c, uv, gust_kph, vis_km, wind_dir, wind_kph }) => {

    const {text, icon} = condition
    const {co, no2, o3, so2, pm_5} = air_quality
    const time = localtime.split(' ')
    return (
        <section>
            <article className="flex  gap-y-1 justify-between text-center">
                <div className="text-center">
                    <h1>{moment(time[0]).format('l')}</h1>
                    <h1>{tz_id}</h1>
                </div>

                <div className="text-center mr-10">
                    <h1>{name}</h1>
                    <h1 className="text-[1.1rem] font-extralight">{region}, {country}</h1>
                    <h1></h1>
                </div>

                <div>
                    <h1>{time[1]}</h1>
                    <h1>{lat}, {lon}</h1>
                </div>
            </article>

            <article className="flex flex-col justify-center items-center mt-[5%]">
                <h1 className="text-4xl font-extralight">{text}</h1>
                <img className="w-40 animate-pulse" src={icon} alt="icons" />
                <h1>{temp_c} °C</h1>
                <h1 className="text-[1.1rem] gap-y-0">Feels like {feelslike_c} °C</h1>
            </article>

            <h1 className="text-center mt-[7%] mb-[3%]">Additional Information</h1>

            <article className="flex items-stretch justify-around">

                <div className="text-left">
                    <h1 className="text-center font-semibold mb-4   ">Weather Information</h1>

                    <section className="text-[1.2rem] mt-[3]">
                        <h1 className="flex"> Humidity : {humidity}</h1>
                        <h1 className="flex">UV Level : {uv}</h1>
                        <h1 className="flex">Cloud : {cloud}</h1>
                        <h1 className="flex"> Visibility : {vis_km}</h1>
                    </section>
                </div>
                
                <div>
                    <h1 className="text-center">Wind Information</h1>
                    <h1>Gust : {gust_kph} km/h</h1>
                    <h1>Direction : {wind_dir}</h1>
                    <h1>Speed : {wind_kph} km/h</h1>
                </div>

                <div>
                    <h1>Air Quality</h1>
                    <h1>CO : {co.toFixed(2)}</h1>
                    <h1>NO2 : {no2.toFixed(2)}</h1>
                    <h1>O3 : {o3.toFixed(2)}</h1>
                    <h1>SO2 : {so2.toFixed(2)}</h1>
                    <h1>{pm_5}</h1>
                </div>


                {/* Shorter Code */}
                {/* <div className="flex flex-col">
                    { Object.keys(data).filter((item, index) => {
                        return typeof data[item] !== 'object'
                    }).sort().reverse().map((newItem, index) => {
                        const title = newItem.split('_')
                        return (
                            <h1 key={index}>{`${title[0]} ${title[1] ? title[1] : ''}`} : {data[newItem]}</h1>
                        )
                    })}
                </div> */}
            </article>
            

        </section>
    )
}

export default Information