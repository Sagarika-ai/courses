import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/frontend_assets/assets'
import Subscribe from '../Component/Subscribe'

const About = () => {
  return (
    
   <div>
     <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Forever Was Born Of A Passion For Innovation And A Desire To Revolution The Way People book Online.</p>
      <p>SInce Our Inception, We Haven Worked Tireless To Curate A Diverse Selection Of High-Quality Products That Ccater To Every Taste And Preference.</p>
      <b>Our Mission Is To Reach To The Student And Provide Service As Much As Possible.</b>
      </div>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border  border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p>We Ensure Our Product Gets To The Full Satisfation To The Client</p>
      </div>
      <div className='border  border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convinience</b>
        <p>We Ensure The Better Convinience To The Client</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Excepitonal Customer Service</b>
        <p>We EnsureThe Full Customer Service To The Client</p>
      </div>
    </div>
    <Subscribe />
   </div>

    

    
  )
}

export default About
