import React from 'react'
import { testimonialsBgImage, testimonialsImage, dp, sliders } from '../assets'

const Testimonials = () => {
  const styles = {
    backgroundImage: `url(${testimonialsBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }
  return (
    <div style={styles} className='flex items-center pl-[100px] gap-[60px]'>
      <div>
        <h3 className='text-dimBlack font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
        </h3>
        <div className="flex items-center gap-[24px] mt-[24px] mb-[60px]">
          <img src={dp} alt="" />
          <div>
            <p className='text-primary font-bold'>
              Harry Wilson
            </p>
            <h4 className='font-normal text-dimBlack'>Property Owner</h4>
          </div>
        </div>
        <img src={sliders} alt="" />
      </div>
      <img src={testimonialsImage} alt="" />
    </div>
  )
}

export default Testimonials