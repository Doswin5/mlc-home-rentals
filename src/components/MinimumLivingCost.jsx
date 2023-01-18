import React from 'react'
import { primaryDash, mlcImage, mlcIcon1, mlcIcon2, mlcIcon3, mlcIcon4, mlcIcon5, mlcIcon6 } from '../assets'

const MinimumLivingCost = () => {
  return (
    <div className='mx-[100px] my-[80px] text-dimBlack'>
      <div className='mb-[40px]'>
        <h2>
          Minimum Living Cost Takes Care Of Everything
        </h2>
        <img src={primaryDash} alt="" className='w-[430px]' />
      </div>
      <div className='flex items-center gap-[40px]'>
        <img src={mlcImage} alt="" className='w-[40%]' />
        <div className="grid grid-cols-3 gap-x-[0px] gap-y-[24px]">
          <div>
            <img src={mlcIcon1} alt="" />
            <h3>
              Pay as Little as possible!
            </h3>
          </div>
          <div>
            <img src={mlcIcon2} alt="" />
            <h3>
              Enjoy wisdom of community!
            </h3>
          </div>
          <div>
            <img src={mlcIcon3} alt="" />
            <h3>
              Let's somebody else take care of Landlord!
            </h3>
          </div>
          <div>
            <img src={mlcIcon4} alt="" />
            <h3>
              Enjoy peaceful Environment!
            </h3>
          </div>
          <div>
            <img src={mlcIcon5} alt="" />
            <h3>
              Stay Safe! Save Money!
            </h3>
          </div>
          <div>
            <img src={mlcIcon6} alt="" />
            <h3>
              Pay for what you use !
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinimumLivingCost