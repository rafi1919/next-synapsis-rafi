import Layout from "@/templates/components/Layout"
import {FaUser} from 'react-icons/fa'

interface detailProps{
    postId?:any
    commentsData:any
    userName:any
    body: string
    title: string
}

const PostDetailView:React.FC<detailProps>=({ commentsData, title, body, userName})=>{
    return(
        <Layout  heading={title}>
                <div className="w-full">
                    {/* <p className="text-xl font-bold py-2">{title}</p> */}
                    <p className="text-left">by: 

                    <span className="text-green-600 font-medium">{userName}</span>
                    </p>
                    <p className="text-[18px] py-5">{body}</p>
                
                </div>
            <div className="flex flex-col w-full">
                <p className="text-md font-bold ">Comments:</p>
                <div className="py-3">
                    <ul className="flex flex-col gap-4">
                        {(commentsData?.length ?? 0)> 0 ? <>
                            
                            {commentsData.map((item:any)=>(
                                <div className="">
                                    <div className=" flex items-center">
                                        <div className="rounded-l-md p-3 border-[1px]  text-black bg-green-500">
                                            <FaUser />
                                        </div>
                                        <p className="bg-green-300 p-2 rounded-r-md text-white w-fit">{item.name}</p>
                                    </div>
                                    <p className="px-2 text-xl font-semibold">{item.body}</p>
                                </div>
                            ))}
                        
                        </>: <>
                            <p className="font-bold text-xl">No Comments</p>
                        </>}
                       
                    </ul>
                </div>
            </div>
            
        </Layout>
    )
}

export default PostDetailView