import { Search } from "../components"

export default function Home () {
  return (
    <div className='flex items-center w-full flex-col justify-center text-3xl my-auto h-[100vh]'>
      <h1 className="my-[3%]">Wheather API</h1>

      <Search />
    </div>
  )
}
