"use client"
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
    <button data-set-theme="" data-act-class="ACTIVECLASS"></button>
<button data-set-theme="dark" data-act-class="ACTIVECLASS"></button>
<button data-set-theme="pink" data-act-class="ACTIVECLASS"></button>
      <h2 className="text-2xl py-2">Latest Product</h2>
    </>
  );
}
