"use client"
import "./navLink.css"
import Link from 'next/link'
import {useSelector} from 'react-redux'

export default function NavLink({id,url, children }){
const page = useSelector((state)=>state.page)
return(<>
<div className='w-[48px] xl:w-full'>
    <Link href={url} className='w-full'>
    <div className={`rounded-full aspect-square flex justify-center items-center xl:aspect-auto xl:w-full xl:p-3 xl:justify-start gap-3 transition-colors hover:bg-gray-100 navLink ${id==page.activePage?"activePage":""}`}>
        {children }
    <h1 className='hidden xl:block'>{id}</h1>
    </div>
    </Link>
</div>

</>)
}