import Link from "next/link"


export const Footer = () =>{
  return(
    <>
      <footer className="mt-40 w-ful bg-black">
       <div className="w-[80%] mx-auto py-10 flex flex-wrap md:flex-row sm:flex-col">
        <div className="md:w-[50%] block md:mb-0 sm:w-full mb-8 sm">
            <h2 className="text-white font-bold text-[20px] mb-6">ADDRESS</h2>
            <span className="text-white flex my-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4" width="30" height="32" viewBox="0 0 256 256"><path fill="#888888" d="M83.19 174.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.88 67.88 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2ZM112 112a24 24 0 1 1 24 24a24 24 0 0 1-24-24Zm96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H64V40h144Z"/></svg>
              #44, Sothearos Blvd, Chey Chumneas, Daun Penh, Phnom Penh, Cambodia
            </span>
            <span className="text-white flex my-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4" width="30" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3h-2Zm3.95 10q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/></svg>
              +855 (023) 900 011/ 23 900 012
            </span>
            <span className="text-white flex my-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4" width="30" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"/></svg>
              info@palacegatepp.com / reservation@palacegatepp.com
            </span>
            <span className="text-white flex my-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4" width="30" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M21.99 6.547a10.59 10.59 0 0 0-.103-1.282a4.312 4.312 0 0 0-.363-1.09A3.853 3.853 0 0 0 19.83 2.48a4.299 4.299 0 0 0-1.083-.362a10.523 10.523 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a10.565 10.565 0 0 0-1.282.103a4.312 4.312 0 0 0-1.09.363A3.854 3.854 0 0 0 2.48 4.17a4.303 4.303 0 0 0-.362 1.083a10.545 10.545 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a10.565 10.565 0 0 0 .103 1.282a4.313 4.313 0 0 0 .363 1.09A3.854 3.854 0 0 0 4.17 21.52a4.305 4.305 0 0 0 1.083.362a10.52 10.52 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a10.578 10.578 0 0 0 1.282-.103a4.316 4.316 0 0 0 1.09-.363a3.854 3.854 0 0 0 1.696-1.694a4.301 4.301 0 0 0 .362-1.083a10.533 10.533 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53Zm-9.773 12.41h-.003a7.126 7.126 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57Z"/><path fill="#888888" d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.918 5.918 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.834 1.834 0 0 1-1.202.847a2.443 2.443 0 0 1-1.122-.07a10.276 10.276 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.463 3.463 0 0 1-.728-1.842a1.997 1.997 0 0 1 .624-1.485a.655.655 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.328.328 0 0 1 .015.312a1.216 1.216 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.366 5.366 0 0 0 .991 1.234a4.863 4.863 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.488 1.488 0 0 1-.104.847Z"/></svg>
              WhatsApp
            </span>
          </div>
          <div className="md:w-[25%] w-[50%] sm">
            <h2 className="text-white font-bold text-[20px] mb-6 ">ADDRESS</h2>
            <Link href={``} className="text-white block my-2">Attractions</Link>
            <Link href={``} className="text-white block my-2" >Attractions</Link>
          </div>
          <div className="md:w-[25%] w-[50%] sm">
            <img src="../logo.webp" className="flex float-right" width={120} alt="" />
          </div>


          <div className="w-full block mt-8">
            <h6 className="text-white text-center">Copyright © 2023 - Palace Gate Hotel & Resort</h6>
            <div className="items-center justify-center flex p-4">
                <span className="py-[0.6px] bg-[#ddd] cursor-pointer rounded-sm hover:bg-red-200 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                </span>
                <span className="py-[0.6px] rounded-sm bg-[#ddd] cursor-pointer hover:bg-red-200 mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                </span>
                <span className="py-[0.6px] rounded-sm bg-[#ddd] cursor-pointer hover:bg-red-200 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                </span>
            </div>
          </div>
       </div>

      </footer>
    </>
  )
}