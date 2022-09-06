import {ImLocation2} from 'react-icons/im'

const Card = ({name, region, country}) => {
    return (
        <section className="cursor-auto text-left flex flex-col hover:bg-cyan-400/70 duration-200 pt-2 border-b-[0.1px] border-white/50">
            <span className='flex gap-x-2'>
                <ImLocation2 size={20} className='fill-white my-auto' />
                <h1 className="max-w-[80%] my-auto text-[1.1rem]"> {name}, {region}, {country}</h1>
            </span>
        </section>
    )
}

export default Card