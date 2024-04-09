import Image from 'next/image'
export default function RoundedProfile({url}){
    return(
      <div className="w-full p-[2px] rounded-full aspect-square flex justify-center items-center bg-gradient-to-tr from-orange-500 via-pink-400 to-violet-500">
        <div className="w-full p-[2px] rounded-full aspect-square flex justify-center items-center bg-white">
          <div className="h-full rounded-full overflow-hidden aspect-square relative border-solid border-slate-300 border-1">
            <Image className="object-cover" src={url} alt="profile-img" fill={true}></Image>
          </div>
        </div>
      </div>
    )
  }