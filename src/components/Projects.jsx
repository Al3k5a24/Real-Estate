import React from 'react'

const Projects = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 
    md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects  
        <span className='underline underline-offset-4 decoration-1 under font-light'> Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      
      {/* slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button className='cursor-pointer p-3 bg-gray-200 rounder mr-2' aria-label='Previous Project'>
            <img src="./assets/left_arrow.svg" alt="Previous" />
        </button>
        <button className='cursor-pointer p-3 bg-gray-200 rounder mr-2' aria-label='Next Project'>
            <img src="./assets/right_arrow.svg" alt="Next" />
        </button>
      </div>

      {/* projects slider container */}
      <div>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {/* Project Card */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <img src="./assets/project_img_1.jpg" alt="Project 1" className='w-full h-48 object-cover' />
                <div className='p-4'>
                    <h2 className='text-xl font-semibold'>Luxury Villa</h2>
                    <p className='text-gray-500'>A beautiful luxury villa with modern amenities.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-gray-700 font-semibold'>Price: </span>
                        <span className='text-blue-600 font-bold'>$2 500 000</span>
                    </div>
                </div>
                </div>
    
                {/* Project Card */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <img src="./assets/project_img_2.jpg" alt="Project 2" className='w-full h-48 object-cover' />
                <div className='p-4'>
                    <h2 className='text-xl font-semibold'>Urban Apartment</h2>
                    <p className='text-gray-500'>Stylish urban apartment in the heart of the city.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-gray-700 font-semibold'>Price: </span>
                        <span className='text-blue-600 font-bold'>$2 500 000</span>
                    </div>
                </div>
                </div>
    
                {/* Project Card */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <img src="./assets/project_img_3.jpg" alt="Project 3" className='w-full h-48 object-cover' />
                <div className='p-4'>
                    <h2 className='text-xl font-semibold'>Modern Office Space</h2>
                    <p className='text-gray-500'>Innovative office space designed for productivity.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-gray-700 font-semibold'>Price: </span>
                        <span className='text-blue-600 font-bold'>$2 500 000</span>
                    </div>
                </div>
                </div>

                {/* Project Card */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>     
                <img src="./assets/project_img_4.jpg" alt="Project 4" className='w-full h-48 object-cover' />
                <div className='p-4'>                       
                    <h2 className='text-xl font-semibold'>Cozy Cottage</h2>
                    <p className='text-gray-500'>A charming cottage perfect for a weekend getaway.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-gray-700 font-semibold'>Price: </span>
                        <span className='text-blue-600 font-bold'>$2 500 000</span>
                    </div>
                    </div>
                    </div>

                {/* Project Card */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <img src="./assets/project_img_5.jpg" alt="Project 5" className='w-full h-48 object-cover' />
                <div className='p-4'>
                    <h2 className='text-xl font-semibold'>Beachfront Property</h2>
                    <p className='text-gray-500'>Stunning beachfront property with breathtaking views.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-gray-700 font-semibold'>Price: </span>
                        <span className='text-blue-600 font-bold'>$2 500 000</span>
                    </div>
                </div>
                </div>

                {/* Project Card */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>     
                <img src="./assets/project_img_6.jpg" alt="Project 6" className='w-full h-48 object-cover' />
                <div className='p-4'>                       
                    <h2 className='text-xl font-semibold'>Mountain Retreat</h2>
                    <p className='text-gray-500'>A serene mountain retreat surrounded by nature.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-gray-700 font-semibold'>Price: </span>
                        <span className='text-blue-600 font-bold'>$2 500 000</span>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
