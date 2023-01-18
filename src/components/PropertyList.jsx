import React from 'react'
import { primaryDash, propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5, propertyImage6, bed, shower, size } from '../assets'

const PropertyList = () => {
  return (
    <div className='px-[100px] py-[80px] bg-[#F5F5F5] text-dimBlack'>
      <div className="flex items-center justify-between mb-[60px]">
        <div>
          <h2>List Of Properties</h2>
          <img src={primaryDash} alt="" className='w-[95px] h-[3px]' />
        </div>
        <button className="btn1 rounded-[5px]">
          View All Property
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[40px]">
        <div className='rounded-[28px] bg-white border-2'>
          <img src={propertyImage1} alt="" className='w-full' />
          <div className='px-[24px] py-[16px]'>
            <h3 className="text-dimBlack font-bold mb-[16px]">
              2578 Folsom street, San Francisco, CA, 94110
            </h3>
            <p className="font-normal">
              Private Room
            </p>
            <h3 className="text-primary font-bold">
              $1200/month
            </h3>
          </div>
          <div className="flex items-center justify-between w-full border-t">
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-r'>
              <img src={bed} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full'>
              <img src={shower} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-l'>
              <img src={size} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
          </div>
        </div>
        <div className='rounded-[28px] bg-white border-2'>
          <img src={propertyImage2} alt="" className='w-full' />
          <div className='px-[24px] py-[16px]'>
            <h3 className="text-dimBlack font-bold mb-[16px]">
              2552 Falkaet street, Borussia Dortmund, CA, 94234
            </h3>
            <p className="font-normal">
              Private Room
            </p>
            <h3 className="text-primary font-bold">
              $1850/month
            </h3>
          </div>
          <div className="flex items-center justify-between w-full border-t">
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-r'>
              <img src={bed} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full'>
              <img src={shower} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-l'>
              <img src={size} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
          </div>
        </div>
        <div className='rounded-[28px] bg-white border-2'>
          <img src={propertyImage3} alt="" className='w-full' />
          <div className='px-[24px] py-[16px]'>
            <h3 className="text-dimBlack font-bold mb-[16px]">
              2247 Boston street, Eintracht Frankfurt, CA, 94520
            </h3>
            <p className="font-normal">
              Private Room
            </p>
            <h3 className="text-primary font-bold">
              $2400/month
            </h3>
          </div>
          <div className="flex items-center justify-between w-full border-t">
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-r'>
              <img src={bed} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full'>
              <img src={shower} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-l'>
              <img src={size} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
          </div>
        </div>
        <div className='rounded-[28px] bg-white border-2'>
          <img src={propertyImage4} alt="" className='w-full' />
          <div className='px-[24px] py-[16px]'>
            <h3 className="text-dimBlack font-bold mb-[16px]">
              2578 Folsom street, san francisco, CA, 94110
            </h3>
            <p className="font-normal">
              Private Room
            </p>
            <h3 className="text-primary font-bold">
              $1200/month
            </h3>
          </div>
          <div className="flex items-center justify-between w-full border-t">
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-r'>
              <img src={bed} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full'>
              <img src={shower} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-l'>
              <img src={size} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
          </div>
        </div>
        <div className='rounded-[28px] bg-white border-2'>
          <img src={propertyImage5} alt="" className='w-full' />
          <div className='px-[24px] py-[16px]'>
            <h3 className="text-dimBlack font-bold mb-[16px]">
              2578 Folsom street, san francisco, CA, 94110
            </h3>
            <p className="font-normal">
              Private Room
            </p>
            <h3 className="text-primary font-bold">
              $1200/month
            </h3>
          </div>
          <div className="flex items-center justify-between w-full border-t">
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-r'>
              <img src={bed} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full'>
              <img src={shower} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-l'>
              <img src={size} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
          </div>
        </div>
        <div className='rounded-[28px] bg-white border-2'>
          <img src={propertyImage6} alt="" className='w-full' />
          <div className='px-[24px] py-[16px]'>
            <h3 className="text-dimBlack font-bold mb-[16px]">
              2578 Folsom street, san francisco, CA, 94110
            </h3>
            <p className="font-normal">
              Private Room
            </p>
            <h3 className="text-primary font-bold">
              $1200/month
            </h3>
          </div>
          <div className="flex items-center justify-between w-full border-t">
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-r'>
              <img src={bed} alt="" />
              <p className="font-bold text-black">4</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full'>
              <img src={shower} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
            <div className='py-[16px] gap-[8px] flex items-center justify-center w-full border-l'>
              <img src={size} alt="" />
              <p className="font-bold text-black">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[80px]">
        <div className="flex rounded-[8px] border-2">
          <h4 className='p-[24px] bg-transparent text-[#BDBDBD] font-bold'>
            First
          </h4>
          <h4 className='p-[24px] bg-white text-primary font-bold border-x'>
            1
          </h4>
          <h4 className='p-[24px] bg-primary text-white font-bold border-x'>
            2
          </h4>
          <h4 className='p-[24px] bg-white text-primary font-bold border-x'>
            3
          </h4>
          <h4 className='p-[24px] bg-white text-primary font-bold'>
            Next
          </h4>
        </div>
      </div>
    </div>
  )
}

export default PropertyList