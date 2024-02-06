"use client"
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function ThemeChange() {


useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])
  return (
    <>
    <select data-choose-theme className="select select-accent w-full max-w-xs">
        <option value="dark">Dark</option>
        <option value="">Default</option>
        <option value="pink">Pink</option>
    </select>
    
    </>
  );
}
