"use client"

import { Navbar } from "@/components/navbars/navbar"
import { BodyCard } from "@/components/cards/bodycard"
import { Footer } from "@/components/footers/footer"
import { useEffect, useState } from "react";

export const MainLayout = ({children}:any) =>{
  const[valueY, setValueY]= useState(false)
  const handleScroll = (e:any) => {
    const sc = window.scrollY;
    sc>0? setValueY(true) : setValueY(false)
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return(
    <>
      <Navbar classBG={valueY} />
      <BodyCard />
        {children}

      <Footer/>
    </>
  )
}