import { useState } from "react"
import {FaHome, FaUser} from 'react-icons/fa'
import Link from "next/link"
import { useRouter } from "next/router"


const Navbar=()=>{
    const router = useRouter()

    interface list {
        label: string,
        link: string,
        icon: any,
    }

    const Navlist: list[] = [
        {
            label: 'Home',
            icon: FaHome,
            link: '/Home'
        },
        {
            label: 'User',
            icon: FaUser,
            link: '/User'
        },
    ]


    return(
        <div className="fixed w-full flex justify-center items-center p-5 gap-5">
            {Navlist.map((item, index) => (
                <Link href={item.link} key={index}>
                    <p className={`${router.pathname === item.link ? 'text-green-500' : 'text-black'} text-[24px] shadow-lg hover:shadow-green-500 transition-300 transform hover:translate-y-[-5px] p-4 backdrop-blur-sm`}>
                            <span className="text-[24px]"><item.icon /></span>
                        </p>
                </Link>
            
            ))}


        </div>
    )
}
export default Navbar