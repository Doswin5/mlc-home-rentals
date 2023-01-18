import React from 'react'
import { HeroSection, MinimumLivingCost, PropertyList, Flexibility, NewProperty, Testimonials } from '../components'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <MinimumLivingCost />
      <PropertyList />
      <Flexibility />
      <NewProperty />
      <Testimonials />
    </div>
  )
}

export default HomePage