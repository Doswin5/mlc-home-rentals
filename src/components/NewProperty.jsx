import React from 'react'

const NewProperty = () => {
  return (
    <div className='px-[100px] my-[100px]'>
      <h3 className="text-center  mb-[40px] font-medium">
        Your property with us and be Confident that Your Room will be Filled Out!
      </h3>
      <div className='p-[40px] border rounded-[10px]'>
        <h3 className="text-center font-bold text-primary mb-[60px]">
          Add A New Property
        </h3>
        <div className="grid grid-cols-3 w-full gap-x-[24px] gap-y-[40px]">
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              Name <span className="text-primary">*</span>
            </p>
            <input type="text" className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full" placeholder='Enter Name' />
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              Address <span className="text-primary">*</span>
            </p>
            <input type="text" className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full" placeholder='Enter Address' />
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              Unit Number <span className="text-primary">*</span>
            </p>
            <input type="text" className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full" placeholder='Enter Unit' />
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              City <span className="text-primary">*</span>
            </p>
            <select className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full">
              <option value="">Select City</option>
            </select>
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              State <span className="text-primary">*</span>
            </p>
            <select className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full">
              <option value="">Select State</option>
            </select>
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              Property Type <span className="text-primary">*</span>
            </p>
            <select className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full">
              <option value="">Select Property Type</option>
            </select>
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              Price <span className="text-primary">*</span>
            </p>
            <input type="text" className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full" placeholder='Enter Price' />
          </div>
          <div className='w-full'>
            <p className='font-semibold mb-[8px]'>
              Room Type <span className="text-primary">*</span>
            </p>
            <select className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full">
              <option value="">Select Room Type</option>
            </select>
          </div>
        </div>
        <div className='w-full mt-[40px]'>
          <p className='font-semibold mb-[8px]'>
            Description <span className="text-primary">*</span>
          </p>
          <textarea className="text-dimmerBlack font-normal text-[14px] py-[12px] px-[24px] bg-[#F9F9F9] border rounded-[5px] w-full h-[150px]" placeholder='Enter Description' />
        </div>
        <div className='w-full mt-[40px]'>
          <p className='font-semibold mb-[8px]'>
            Upload Photos
          </p>
          <div className="flex flex-col justify-center text-dimBlack font-normal text-[14px] py-[24px] bg-white border border-dashed rounded-[5px] w-full border-primary">
            <h4 className='text-dimBlack text-center font-medium text-[16px]'>Drag your images here, or <span className="text-primary">browse</span></h4>
            <span className=' text-center text-[12px] text-dimmerBlack mt-[8px]'>Supported:  JPG, JPEG, PNG</span>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button className="btn1 rounded-[10px] mt-[60px] text-center w-[500px]">
            Add New Property
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewProperty