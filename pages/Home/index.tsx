import React, {useEffect, useState} from 'react'
import HomeView from "./view"
import { useGetBlogData } from "@/hooks"


const index=()=>{
    const [stateData, setStateData] = useState<any[]>([]);
    const { data, loading } = useGetBlogData();
  
    useEffect(() => {
      if (data && data.length > 0) {
        setStateData((prev) => [...prev, ...data]);
      }
    }, [data, loading]);



    return(
        <HomeView postData={stateData} />
    )
}
export default index