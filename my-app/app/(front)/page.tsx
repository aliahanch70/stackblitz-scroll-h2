"use client"
import ThemeChange from "@/components/theme/ThemeChange";
import Image from "next/image";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function Home() {


useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])
  return (
    <>
      <h2 className="text-2xl py-2">Latest Product</h2>
    </>
  );
}
