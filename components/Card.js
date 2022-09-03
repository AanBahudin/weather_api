import {ImLocation2} from 'react-icons/im'

const Card = ({name, region, country}) => {
    return (
        <section className="cursor-auto text-left flex flex-col gap-y-2 hover:bg-cyan-400/70 rounded-lg duration-200 p-4 border-b-[0.1px] border-white/50">
            <p>{name}</p>
            <span className='flex gap-x-2'>
                <ImLocation2 size={20} className='fill-white my-auto' />
            <h1 className="max-w-[80%] text-sm">{country}</h1>
            </span>
                <p className="max-w-[80%] text-sm my-auto">{region}</p>
        </section>
    )
}

export default Card