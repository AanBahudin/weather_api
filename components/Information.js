import Head from "next/head"

const Information = ({cloud, name, country, region, localtime, air_quality, condition, feelslike_c, humidity, temp_c, uv}) => {

    const {text, icon} = condition

    return (
        <section>
            <article className="flex flex-col gap-y-1 text-center">
                <h1>{name.toUpperCase()}</h1>
                <h1>{country}</h1>
                <h1>{region}</h1>
            </article>
            <h1>Waktu : {localtime}</h1>
            <h1>{text}</h1>
            <img src={icon} alt="icons" />
            <h1>Terasa seperti : {feelslike_c}</h1>
            <h1>Kelembapan : {humidity}</h1>
            <h1>Suhu : {temp_c}</h1>
            <h1>UV level : {uv}</h1>
            {cloud}
        </section>
    )
}

export default Information