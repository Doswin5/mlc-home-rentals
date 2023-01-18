import React from 'react'
import { flexibilityImage } from '../assets'

const Flexibilty = () => {
  return (
    <div className='px-[100px] py-[80px] flex justify-between items-center gap-[60px]'>
      <img src={flexibilityImage} alt="" />
      <div>
        <h2>
          Flexibility and options to suit your lifestyle.
        </h2>
        <p className='mt-[16px] mb-[40px] font-normal'>
          You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
        </p>
        <button className="btn1 rounded-[12px]">
          Search Rooms
        </button>
      </div>
    </div>
  )
}

export default Flexibilty