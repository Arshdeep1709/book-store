import React from 'react'
import books from '../assets/books.png'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Hello, and Welcome to <span className='text-pink-500'>Store</span></h1>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur possimus molestiae non et quidem, quam laudantium nam nisi aperiam sit mollitia suscipit. Dolor, earum!</p>
        
        <label className="input validator text-pink-950 border-pink-800 outline-none">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>

<button className="btn btn-soft hover:bg-pink-100 border-none text-pink-500">Sucscribe</button>
<div className="validator-hint hidden">Enter valid email address</div>
        </div>
        </div>

        <div className="w-full md:w-1/2">
            <img
              src={books}
              alt="Books"
              className="w-90 h-90"
            />
        </div>
    </div>
  )
}

export default Banner