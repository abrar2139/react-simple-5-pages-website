
import React from 'react'

import { Link } from 'react-router-dom'



const Navbar =() => {
  
  return (
   <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link  to='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="favicon.ico" alt="" className='rounded-full h-12 w-12' />
      <span class="ml-3 text-xl text-green-400">Tour & Explore</span>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' class="mr-5 text-green-500 hover:text-green-600">Home</Link>
      <Link to='/about' class="mr-5  text-green-500 hover:text-green-600">About</Link>
      <Link to='/price' class="mr-5  text-green-500 hover:text-green-600">Pricing</Link>
      <Link to='/service' class="mr-5  text-green-500 hover:text-green-600">Service</Link>
      <Link to='/contact' class="mr-5  text-green-500 hover:text-green-600">Contact</Link>
    </nav>
    
  </div>
</header>
  )
}
export default Navbar