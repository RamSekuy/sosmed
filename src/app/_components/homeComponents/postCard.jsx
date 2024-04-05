"use client"

import { useState } from "react"

export default function PostCards(){
    const [data,setData] = useState([]);
    // fetch data masukin ke state
    return(<>
    
    {data.map((e,i)=>{return(<>
    
        {/* Buat Struktur PostCards */}

    </>)})}

    </>)
}