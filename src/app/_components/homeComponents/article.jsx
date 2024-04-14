"use client"
import RoundedProfile from './roundedProfile';
import { Carousel } from "@material-tailwind/react";
import { useState } from 'react';
import Link from 'next/link'


export default function Article(
{
  keyChild,
  data={
    username:"",
    profileImgUrl:"",
    postImgs:[""],
    likes:0,
    liked:false,
    captionText:[""]
}}){

  const [postData,setPostData] = useState(data)
  const [captionToggle,setCaptionToggle] = useState(false)
    return(<>
    
    <div className="w-full max-w-[470px] max-h-[100vh] mb-3 bg-slate-400">

    {/* profile pemosting */}
    <div className="w-full py-2">
      <div className="flex h-[44px] justify-between px-1">
        <div className="h-full flex">
        
        <div className='min-w-[42px] aspect-square'>
        <RoundedProfile url={postData.profileImgUrl}/>
        </div>

        <div className="h-full flex flex-col overflow-hidden text-ellipsis ml-3 max-w-full justify-center">
        <h6 className="p-0 m-0 focus:font-black">{postData.username}</h6>
        </div>

      </div>

        {/* Button*/}
        <div className="flex h-100">
        <button className="p-0 px-2 self-center">...</button>
        </div>
      </div>
    </div>

    {/* img / vido carousel  */}
    <Carousel className="rounded-xl aspect-[1/1] bg-black" transition={{duration:0.2}}>
    {postData.postImgs.map((e,i)=>{
    return(<img onClick={(e)=>{e.currentTarget.classList.toggle("object-contain");e.currentTarget.classList.toggle("object-cover")}} key={keyChild+" img"+i} src={e} className="h-full w-full object-cover" />
    )})}
    </Carousel>

    {/* caption */}
    <div className="w-full p-2">
      <div className="w-full">
        <div className='flex justify-between'>

          <div className='flex justify-between'>
            {/* Like  */}
            <button className='h-[40px] aspect-square flex justify-center items-center hover:opacity-70'
            onClick={()=>{
              const tmp = postData
              postData.like
              ? tmp.like = false
              : tmp.like = true;
              setPostData({...tmp});
            }}>

            {!postData.like
              ?<img className="h-[24px]" src="data:image/png;base64,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"/>
              :<img className="h-[24px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgklEQVR4nO2cSYgdVRSGf0dEoyZOiAO41LiSSOj0O6dqkTghKBonFEQRBEEiLkQRcZO1GIMIblSE7AxxVlojKqgbiahRSUSJAyREiZJWSGL0l1uv0rRJbN5Qt+659c4HZ9W8rvOfv4Z7q869gOM4juM4juM4juM4juM4juM4zphwCmewwI0UrKNghoodVOyh4h8KZin4iYItVDxHwRoKlsYqOnu4tD7G81R8Vh97tsqln9OOKkfBk+zhBgqWIEcIHEvF9VS8SsUBKjhUCL6m4jGuxJlj51LiLAoep+CbofNQ7KfgFRa4jsAxyAEqVlPx1QhieRQj/qDiCZZYPHQeJRZXZ3L/f4yfi2JruCpgFZa4gIK3GxLLw4zYyQK3DJyL4LbqNzFyUbzJaZwHS1BwNQW/RBLMefEMl+GE/81jKU6k4tkW8thNxZWwAAV3U/BXC6JZx/ucxqlH5LEcp1HwYWt59DXflabqh0T3cGc9gmir+KzFf8QSi+byWIaTK2PazqOv/Z40xVdcS8HBBKJZx2thZFKNuARvJMsjXAk9XNN28S+k4NeExWcdj1DwqIE89rDERe0UP5x1gs0GRLM6+9p9/iyUy0w7BijuSC5WzcatcYt/M46jYLsBoTQZgm9DjeIZECY4qUWq8Rhiwji8AYp3kgtU8/FWnOKXOJeKvw0IpOkIQ3PB2c0bUOD25OJ0gm9D1XuY1MI0kxA8HcOAFFN9ZhmCzc0bEL4epRam2cQPMQyYNSCMWYTg9xgGpHzxxqxCcDCGAU192puE2BvDAH8GaMpngI+COMQt6L0YBqw3cGkzk1jfvAGCmwwIYyaxunkD+n02+wyIo+kINRqhj2kwEwQbkwtU4yF4OUrxKwN6mEouUM1HEc2AyoR+g21qkZyY0c8RBiimkwtVoyEooxtQmSDYkFysGgvBS60UvzJgFU6n4MfkotVM7OYKnNOaAZUJglVJ2hJ1Qsb9A5qw1oB4Jg3BuiTFn+uSU7w4wcV/PWof0EAmhJ58K62K2mp8yitwCixQP5Q/NlAUthSfR2k9GYdwNkzElSDYEhb+wSKVCYp3kxdJo8Un0V60NfxMeMFAsdhwbAorcZALLPBAh1oZnworcZAbdTf1nwYKyBEjLNS+FznDEhfXK9+ZWfzMAivQBeolpPl8zBF8ELrB0SXqWfNDI+0doa22lq9liePRVTiNy6ulPPaKv8vM6veWbkkbDBV/pnO3nIFX2kvClsfQwSB4OMshZqObKCm2JjBgGwtcllq/CVjipJZ2OTl05m8MLxBT6568W5JgX5ihp9aZw8TtywgGhL3qlqfWlwUssajhUdIm828xLULBfWNN3PobedyfWkfWULCSgt9GMGBv2NModf6dgAUuoeD7IYr/XfhN6rw7BcNWCYO8VQ27uUzh/NT5dhL296tYaE/SbV78drZL23WUM39n2Ls09vEdzHVo759nwIHoffnOf6HgwXln/5rD/uzEhv3t076ongld/oBiGYYtkxVXpc7DcRzHcRzHcRzHcRzHcRzHcRwHC/AvHB6fPHB0HZ4AAAAASUVORK5CYII="/>
            }
            </button>

            {/* comment  */}
            <button className='h-[40px] aspect-square flex justify-center items-center hover:opacity-70'>
            <svg className='h-[24px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path></svg>
            </button>

            {/* Share  */}
            <button className='h-[40px] aspect-square flex justify-center items-center hover:opacity-70'>
            <img className='h-[24px] rotate-[-45deg]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADjUlEQVR4nO2cT4hNURzHv2bEoJkmUzNIYTFEkemxMcRCKP9W8mdjIVPEzp+ymiIssbOgiJLClkaxsPFnIUWNMgZDhJA/04y4uvndvNH87rw59753zjvn+6mzeq97f3/Oued8zz+AEEIIIYQQQgghhBBCCCHkH1MAdAHYBKCWgbHDcwARgFcAOgE0W7IjWC5IApIyAOASgBUAxtg2LgR2/ZeA4tIN4CCAJttG+sz8lAQkpR/AZQArbRvrIzUAPpWQhKTcB7ADwETbhvvE9VEkIClfAJyWFkQy0mmQgOLyAEAHgLqshoTK6owJSMpbAMcBzLLtULXRCOBXTkmI5FmJwBtr27lq4YkSzK3yiXpnmIzX0iqm23bQdc4oAYx1QMw4qdFxzf5tkIiBoqEsBd4w7FQCd22Y/86WWv3BsFV0U+CVLsjiT49GnbSKO4aJ6KfAGyrIPiuBKmVUUxBd8C3jUHYSAqZLCc62UTyjQQL5yDARQQu8w0pQThk+ryDB/JGxVQQj8NamzP9koVk63WeGiQhG4DUpQ8zBnCbfamQYGg9HfxokIgiB1604vyzn90yTVvHSsFV4K/DOKQ7vL9P7agGsp8AbeYXsKspPq9Tq9yELvIUpHWGlGF807RGcwIs/CV8Vx2ZasGcugJMpNnkp8G4pzmyxaFO9BPJhCALvqOJEXBNdoCDB/O6rwNugGH4P7i0kdQB47JvAa1YMjgXZBLhHTZHAG/RF4GnTBu1wm6kyFO2tdoF30dCByJOSbNFcbisBexwIQuRISQTe5EomYJEDjkeOlVjgnQfQVokELHbA4SjkBOx1wOEo5E8QO2HY7YR7lNqwBNUxDH1hWNv7XBiGUohZZqNSO+7CLRp9nYo4phh8Am5Q8H23xW3F8M0WbaoPZTo6bUFmhgV75oW2INOmOPKmCpck21GF7FaculKBd7dyUf6v1B4uAfvKFPRabksZylMlAUsd25jV54JgyhtuTbTMujKtBbdIbe/xTTDlzZGcd0MUfBdMeXMz5aRkqTTwgIb5zoIvGXbE8YhSRhakfH/LfUivPavxPtAxil3Rc6RT/BjyLua8OasE64D8zoPalq4q2C7T06ZXFfQCOCRDUaLAyzoss8awdgcrmPKGFzZZ5obPK0yuw0v7HBVgFEyWV8AomCoEry62THKShJd3W6BFFttXSWdMCCGEEEIIIYQQQgghhBBCMDJ/ABjWto1PJbXwAAAAAElFTkSuQmCC"/>
            </button>
          </div>

          {/* Bookmark  */}
          <div>
            <button className='h-[40px] aspect-square flex justify-center items-center'
            onClick={()=>{
              const tmp = postData
              postData.bookmark
              ? tmp.bookmark = false
              : tmp.bookmark = true;
              setPostData({...tmp});
            }}>
              {!postData.bookmark
              ?<svg xmlns="http://www.w3.org/2000/svg" className='h-[24px] aspect-square' x="0px" y="0px" viewBox="0 0 50 50"><path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path></svg>
              :<svg xmlns="http://www.w3.org/2000/svg" className='h-[24px] aspect-square' x="0px" y="0px" viewBox="0 0 50 50"><path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path></svg>
              }
            </button>
          </div>

        </div>
      </div>

      <div className='w-full px-2'>
        <h1><b>100 like</b></h1>
        {
          postData.captionText.length<2
          ?<p>{postData.username+" "+postData.captionText[0]}</p>
          :<>
            {
            !captionToggle
            ?<>
              <p>{postData.username+" "+postData.captionText[0]+ " ... "}
              <button className='text-gray-400' onClick={()=>{setCaptionToggle(!captionToggle)}}>Selanjutnya</button>
              </p>
            </>
            :<>
            <p>
              {postData.captionText.map((e,i)=>i==0?<p key={keyChild+" captionLine"+i}>{postData.username+" "+e}</p>:<p key={keyChild+" captionLine"+i}>{e}</p>)}
            </p>
            </>
            }
          </>
              
        }

      <Link href={"idPostingan"}><p className='text-gray-400'>Lihat Semua 100 Komentar</p></Link>
      </div>
    </div>

    </div>
    </>)
}