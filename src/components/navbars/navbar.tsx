"use client"

import Link from "next/link"
import { useState } from "react"

type NavProps={
  classBG ? : boolean
}

export const Navbar = ({classBG}:NavProps) =>{
  const[menu, setMenu] = useState(false)
  // const GetY = (e:any) =>{
  //   console.log('=>','ddd')
  // }
  return(
    <>
      <header className={classBG?"w-full py-2 fixed top-0 left-0 z-40 bg-white border-b-[1px]":"w-full py-2 fixed top-0 left-0 z-40"} id="navbar" >
        <div className="w-[80%] mx-auto flex justify-between">
          <span>
            <img src="../logo.webp" width={55} alt="" />
          </span>
          <div className={classBG?"text-black md:flex hidden sm ":"text-white md:flex hidden sm "}>
            <ul className="md:py-6 flex ">
              <li className="md:mx-10 md:py-4"><Link className=" font-medium text-[18px]" href={``}>Home</Link></li>
              <li className="md:mx-10 md:py-4"><Link className=" font-medium text-[18px]" href={``}>Home</Link></li>
              <li className="md:mx-10 md:py-4"><Link className=" font-medium text-[18px]" href={``}>Home</Link></li>
              <li className="md:mx-10 md:py-4"><Link className=" font-medium text-[18px]" href={``}>Home</Link></li>
              <li className="md:mx-10 md:py-4"><Link className="font-medium text-[18px]" href={``}>Home</Link></li>
              <li className="md:mx-10 md:py-4"><Link className=" font-medium text-[18px]" href={``}>Home</Link></li>
            </ul>
          </div>
          <div className="md:hidden items-center justify-center flex cursor-pointer" >
            <span onClick={()=> setMenu(!menu)} id="menu_id">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#888888" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"/></svg>
            </span>
          </div>
        </div>
        <div className={menu?"w-full mt-3 bg-slate-100":"hidden"}>
            <ul className="pb-0">
              <li className="w-full items-center justify-center hover:bg-yellow-500 p-3 flex"><Link className="text-[19px] font-medium hover:text-white" href={``}>Home</Link></li>
              <li className="w-full items-center justify-center hover:bg-yellow-500 p-3 flex"><Link className="text-[19px] font-medium hover:text-white" href={``}>Home</Link></li>
              <li className="w-full items-center justify-center hover:bg-yellow-500 p-3 flex"><Link className="text-[19px] font-medium hover:text-white" href={``}>Home</Link></li>
              <li className="w-full items-center justify-center hover:bg-yellow-500 p-3 flex"><Link className="text-[19px] font-medium hover:text-white" href={``}>Home</Link></li>
            </ul>
        </div>
      </header>
    </>
  )
}