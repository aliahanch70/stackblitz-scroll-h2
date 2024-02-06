import Link from 'next/link'
import React from 'react'
import ThemeChange from '../theme/ThemeChange'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='nevbar flex justify-between bg-base-300'>
          <Link href='/' className='btn btn-ghost text-lg'>
            Costom Kala
          </Link>
          <ul className='flex'>
            <li>
              <ThemeChange/>
            </li>
            <li>
              <Link className='btn btn-ghost rounded-btn' href="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className='btn btn-ghost rounded-btn' href="/signin">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header