
interface CardProps{
    title:string,
    body:string
}

const CardPost:React.FC<CardProps>=({title, body})=>{
    const maxBody = body.slice(0, 20)

    return(
        <div className="lg:w-[500px] md:w-[500px] max-w-[500px] h-[200px] rounded-md  border-[1px] my-2">
            <div className="w-full bg-green-300 h-[100px] p-4">
                <p className="text-xl font-bold">
                    {title}
                </p>
            </div>
            <p className="text-md font-light p-4">
                {maxBody}...
            </p>
        </div>
    )
}

export default CardPost