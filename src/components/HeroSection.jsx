import React from 'react'
import { heroBgImage, map, searchIcon } from '../assets'

const HeroSection = () => {
  const styles = {
    backgroundImage: `linear-gradient(to bottom-left, rgba(0,0,0,0.01), rgba(0,0,0,0.51)), url(${heroBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }
  return (
    <div
      style={styles} 
      className=' pt-[140px] pb-[80px] px-[100px] flex justify-between items-center gap-[80px]'
    >
      <h1 className='text-white'>
        The Most Affordable Place To Stay In The San Franciso Bay Area
      </h1>
      <div className='w-[100%]'>
        <img src={map} alt="" className='' />
        <div className="flex p-[16px] bg-white rounded-[10px] mx-5">
          <div className="flex bg-[#F9F9F9] text-[14px] font-medium border rounded-[5px]">
            <select className='bg-transparent p-[16px] outline-none'>
              <option value="">All Type</option>
            </select>
            <select className='bg-transparent p-[16px] ml-[16px] outline-none border-l'>
              <option value="">Neighbourhood</option>
            </select>
            <div className='bg-[#23A6F0] p-[16px] rounded-tr-[5px] rounded-br-[5px] ml-[8px]'>
              <img src={searchIcon} alt="" className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection