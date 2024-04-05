import "./navLink.css"
import Link from 'next/link'
export default function NavLink({id,url, children }){return(<>

<div className='w-[48px] xl:w-full'>
    <Link href={url} className='w-full'>
    <div className='rounded-full aspect-square flex justify-center items-center xl:aspect-auto xl:w-full xl:p-3 xl:justify-start gap-3 transition-colors hover:bg-slate-100 navLink'>
        {children }
    <h1 className='hidden xl:block'>{id}</h1>
    </div>
    </Link>
</div>

</>)
}

// contoh ketika pemanggilan component
/* 
<NavLink id url>
<svg />
</NavLink>
*/