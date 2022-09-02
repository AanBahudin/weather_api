
const Card = ({name, region, country}) => {
    return (
        <section className="p-4 cursor-auto text-left border-white border-[1px] my-4 rounded-md">
            <h1 className="max-w-[80%] text-[1.7rem]">{country}</h1>
            <p className="max-w-[80%] text-sm">{region}</p>
            <p>{name}</p>
        </section>
    )
}

export default Card