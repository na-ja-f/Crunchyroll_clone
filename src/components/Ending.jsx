import end from "../assets/end.png"

function Ending() {
    return (
        <div className='w-full h-96 flex flex-col justify-center items-center gap-2 px-10 lg:px-0'>
            <img src={end} alt="" className="w-64"/>
            <h1 className="font-semibold text-xl lg:text-2xl">Still looking for something to watch?</h1>
            <h1 className="font-semibold text-xl lg:text-2xl mb-2">Check out our full library</h1>
            <button className="border-4 border-orange-600 font-bold h-10 px-4 text-orange-400">VIEW ALL</button>
        </div>
    )
}

export default Ending
