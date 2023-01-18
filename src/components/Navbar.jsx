import React from 'react'
import { Link } from 'react-router-dom'
import { mlcLogo, line } from '../assets'

const Navbar = () => {
  return (
    <div className='bg-[#797ba6] text-white px-[100px] fixed left-0 right-0'>
      <div className='py-[24px] flex justify-between items-end lightBorderBottom'>
        <Link to='/'>
          <img src={mlcLogo} alt="" />
        </Link>
        <div className="flex justify-end items-center gap-[40px]">
          <div className="flex flex-col items-center relative px-6">
            <Link className=''>Home</Link>
            <img src={line} alt="" className='w-[200px] absolute top-[49px] h-[2px] left-0 right-0' />
          </div>
          <Link>Landlords</Link>
          <Link>Tenants</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar