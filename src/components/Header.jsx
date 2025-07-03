import React from 'react'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex
    items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
    <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6x1 md:text-[82px] inline-block
        max-w-3x1 font-semibold pt-20'>Explore homes that fit your dream</h2>
        <div>
            <a href="">Projects</a>
            <a href="">Contact Us</a>
        </div>
    </div>
    </div>
  )
}

export default Header
