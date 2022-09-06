import moment from "moment"

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
                    <h1 className="text-purple-400">{name}</h1>
                    <h1 className="text-[1.1rem] font-extralight">{region}, {country}</h1>
                    <h1></h1>
                </div>

                <div>
                    <h1>{time[1]}</h1>
                    <h1>{lat}, {lon}</h1>
                </div>
            </article>

            <article className="flex flex-col justify-center items-center mt-[5%] mr-4">
                <h1 className="text-4xl font-extralight">{text}</h1>
                <img className="w-40 animate-pulse" src={icon} alt="icons" />
                <h1>{temp_c} °C</h1>
                <h1 className="text-[1.1rem] gap-y-0">Feels like {feelslike_c} °C</h1>
            </article>

            <hr className="mx-auto w-[30%] my-[3%]" />

            <article className="flex items-stretch justify-between w-[80%] mx-auto">

                <div className="text-left">
                    <h1 className="text-center font-semibold mb-4 text-purple-400">Weather Information</h1>

                    <section className="text-[1.2rem] mt-[3]">
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">Humidity</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{humidity} gr/m3</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">UV Level</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{uv}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">Cloud</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{cloud}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">Visibility</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{vis_km} km</span> 
                        </h1>
                    </section>

                </div>
                
                <div>
                    <h1 className="text-center font-semibold mb-4 text-purple-400">Wind Information</h1>

                    <section className="text-[1.2rem] mt-[3]">
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">Gust</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{gust_kph}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">Direction</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{wind_dir}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">Speed</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{wind_kph}</span> 
                        </h1>
                    </section>
                </div>

                <div>
                    <h1 className="text-center font-semibold mb-4 text-purple-400">Air Quality</h1>

                    <section className="text-[1.2rem] mt-[3]">
                    <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">CO</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{co.toFixed(2)}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">NO2</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{no2.toFixed(2)}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">O3</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{o3.toFixed(2)}</span> 
                        </h1>
                        <h1 className="flex flex-row text-left w-full font-montserrat font-[600] text-md my-1"> 
                            <span className="w-[45%] md:w-[40%]">SO2</span>
                            <span className='w-[15%] md:w-[10%]'>:</span>
                            <span>{so2.toFixed(2)}</span> 
                        </h1>
                    </section>
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