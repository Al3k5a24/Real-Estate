import React from 'react'

const About = () => {
    // This component renders the About section of the website

  return (
    <div className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2x1 sm:text-4xl font-bold mb-2'>About 
        <span className='underline underline-offset-4 decoration-1 under font-light'> Our brand</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src="./assets/brand_img.png" alt="" className='w-full sm:w-1/2 max-w-1g'/>
      <div className='flex flex-col items-center md:items-start max-w-2xl mt-10'>
        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2x1 pr-28'>
            <div>
                <p className='text-4x1 font-medium text-gray-800'>10+</p>
                <p>Years of Excellence</p>
            </div>
            <div>
                <p className='text-4x1 font-medium text-gray-800'>12+</p>
                <p>Projects Completed</p>
            </div>
            <div>
                <p className='text-4x1 font-medium text-gray-800'>20+</p>
                <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
                <p className='text-4x1 font-medium text-gray-800'>25+</p>
                <p>Ongoing projects</p>
            </div>
        </div>
        <p className='text-gray-500 text-lg mb-4 my-10 max-w-lg'>We are a team of dedicated professionals who are passionate about real estate. Our mission is to help you find the perfect property that fits your needs and budget. We believe in providing exceptional service and building long-lasting relationships with our clients.</p>
        <p className='text-gray-500 text-lg'>Whether you are looking to buy, sell, or rent a property, we are here to guide you every step of the way. Our expertise in the real estate market allows us to provide you with valuable insights and advice to make informed decisions.</p>
        <button className='bg-blue-600 text-white px-8 py-2 rounded mt-5'>Learn more</button>
      </div>
      </div>
    </div>
  )
}

export default About
