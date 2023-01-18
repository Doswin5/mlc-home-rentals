import React from 'react'
import { primaryLocation, primaryTelephone, primaryPrinter, primaryFacebook, primaryGoogle, primaryInstagram, primaryLinkedin, primaryPinterest, primaryRss, primaryTwitter, primaryYoutube } from '../assets'

const Footer = () => {
  return (
    <div className='px-[100px] mt-[200px] mb-[100px]'>
      <div className="py-[100px] border-t-2 border-t-primary border-b flex justify-between items-center mb-[24px]">
        <h1 className=''>Logo</h1>
        <div>
          <div className="flex items-center gap-4">
            <img src={primaryLocation} alt="" />
            <h4>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </h4>
          </div>
          <div className="flex items-center justify-between mt-[16px] mb-[40px]">
            <div className="flex items-center gap-4">
              <img src={primaryTelephone} alt="" />
              <h4>
                  (123) 456-7890
              </h4>
            </div>
            <div className="flex items-center gap-4">
              <img src={primaryPrinter} alt="" />
              <h4>
                  (123) 456-7890
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <h4 className='text-dimmerBlack'>Social Media</h4>
            <img src={primaryFacebook} alt="" />
            <img src={primaryTwitter} alt="" />
            <img src={primaryLinkedin} alt="" />
            <img src={primaryInstagram} alt="" />
            <img src={primaryPinterest} alt="" />
            <img src={primaryYoutube} alt="" />
            <img src={primaryGoogle} alt="" />
            <img src={primaryRss} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          <h4>ABOUT US</h4>
          <h4>CONTACT US</h4>
          <h4>HELP</h4>
          <h4>PRIVACY POLICY</h4>
          <h4>DISCLAIMER</h4>
        </div>
        <h4 className="text-dimmerBlack">
          Copyright © 2020 Minimumlivingcost. All rights reserved
        </h4>
      </div>
    </div>
  )
}

export default Footer