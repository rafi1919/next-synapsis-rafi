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
        <div className="rounded-xl h-[90vh] bg-green-600 p-4 ">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 ">
              <div className="lg:col-span-1 md:col-span-2 col-span-2">
                    <h1 className='lg:text-[11vw] md:text-[20vw] text-[20vw] font-bold lg:leading-[10rem] md:leading-[6rem] leading-[5rem] text-green'>GREAD BLOG</h1>
                    <p className="font-medium text-white p-4 max-w-[500px] lg:text-[14px] text-[8px]">Welcome to our gread blog! Dive into the lush world of eco-conscious living with our green website blog. Join us in nurturing a greener future, one click at a time.</p>
                    <div className="lg:mx-0 md:mx-auto mx-auto w-fit">
                      <Button text="Read more..." onClick={handleNavigate} />
                    </div>
              </div>
              <div className="lg:col-span-1 md:col-span-2 col-span-2 ">
                  <img src="../assets/image/smart-people.png" className="lg:w-[500px] md:w-[200px] w-[200px] lg:mx-0 md:mx-auto mx-auto" alt="header-image"/>
              </div>
            </div>
        </div>
      </div>
    )
}
export default LandingView