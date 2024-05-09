
type ButtonProps = {
    text:string;
    onClick?:()=>void
    type?:"button" | "submit" | "reset" | undefined
}

const Button:React.FC<ButtonProps> =({ text, onClick, type})=>{
    return(
        <div className='p-3 w-fit'>

            <button className='bg-white p-3 w-[160px] transform hover:translate-y-[-5px] shadow-md hover:shadow-green-500 active:shadow-blue-700 transition-500' onClick={onClick} type={type}>
                <p className="font-bold">
                    {text}
                </p>
            </button>
        </div>
    )
}

export default Button