import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='nevbar justify-between bg-base-300'>
          <Link href='/' className='btn btn-ghost text-lg'>
            Costom Kala
          </Link>
          <ul className='flex'>
            <li>

            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header