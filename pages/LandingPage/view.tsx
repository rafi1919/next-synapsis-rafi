import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/templates/components/Button";


const LandingView=()=>{
    const router = useRouter()

    const handleNavigate=()=>{
        router.push('/Home')

    }
  
    return(
      <div className="w-full h-[100%] p-7">
        <div className="rounded-xl h-[90vh] bg-green-600 p-4 flex flex-col justify-center items-center">

            <p className="text-[5vw] font-black text-black">Green Blog</p>
            <p className="font-medium text-white">its all green and its a blog for some purpose</p>
            <Button text="Read more..." onClick={handleNavigate} />
        </div>
      </div>
    )
}
export default LandingView