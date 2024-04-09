"use client"
import Image from 'next/image'
import RoundedProfile from './roundedProfile';
import { Carousel } from "@material-tailwind/react";


export default function Article({data,text}){
    const {profileImgUrl,username} = data;
    return(<>
    
    <div className="w-full max-w-[470px] max-h-[100vh] mb-3 bg-slate-400">

    {/* profile pemosting */}
    <div className="w-full py-2">
      <div className="flex justify-between h-[44px]">
        <div className="h-full flex">
        
        <div className='min-w-[42px] aspect-square'>
        <RoundedProfile url={profileImgUrl}/>
        </div>

        <div className="h-full flex flex-col overflow-hidden text-ellipsis ml-3 max-w-full justify-center">
        <h6 className="p-0 m-0 focus:font-black">{username}</h6>
        </div>

      </div>

        {/* Button*/}
        <div className="flex h-100">
        <button className="p-0 px-2 self-center">{text}</button>
        </div>
      </div>
    </div>

    {/* img / vido carousel  */}
    <Carousel className="rounded-xl aspect-[1/1]" transition={{duration:0.2}}>
    {[
        "https://th.bing.com/th/id/OIP.QIW1lKgrtrspQv8luNDugQHaEK?rs=1&pid=ImgDetMain"
    
    ].map((e,i)=>{
    return(<img src={e} className="h-full w-full object-cover" />
    )})}
    </Carousel>

    {/* caption */}
    <div className="w-full"></div>

    </div>
    </>)
}