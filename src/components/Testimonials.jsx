import React from 'react'

const testimonials = [
  {
    name: 'Donald Jackson',
    image: '/assets/profile_img_1.png',
    text: 'Buying my first home was a breeze with this agency. The team was supportive and made the process stress-free!',
    rating: Math.floor(Math.random() * 3) + 3 // 3-5
  },
  {
    name: 'Richard nelson',
    image: '/assets/profile_img_2.png',
    text: 'Professional, friendly, and always available for questions. I highly recommend them to anyone looking for a new place.',
    rating: Math.floor(Math.random() * 3) + 3
  },
  {
    name: 'James Washington',
    image: '/assets/profile_img_3.png',
    text: 'From start to finish, everything was handled perfectly. I found my dream home thanks to their dedication.',
    rating: Math.floor(Math.random() * 3) + 3
  }
]

const StarRating = ({ count }) => (
  <div className="flex justify-center mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer 
        <span className='underline underline-offset-4 decoration-1 font-light'> Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from those who found Home with Us</p>
      <div className='grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {testimonials.map((t, i) => (
          <div key={i} className='bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow'>
            <img src={t.image} alt={t.name} className='w-20 h-20 rounded-full mb-4 object-cover border-4 border-gray-100 shadow'/>
            <p className='text-gray-700 mb-2 italic'>"{t.text}"</p>
            <StarRating count={t.rating} />
            <span className='font-semibold text-lg text-gray-900'>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
