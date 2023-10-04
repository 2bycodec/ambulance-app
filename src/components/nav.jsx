import React from 'react';

const Nav = () => {
    return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ambulance" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" /> <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /> <path d="M6 10h4m-2 -2v4" /> </svg>
      <span className="ml-3 text-xl">RapidRescue</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-900">About</a>
      <a href="/" className="mr-5 hover:text-gray-900">Service</a>
      <a href="/" className="mr-5 hover:text-gray-900">Plans</a>
    </nav>
    <button className="text-white inline-flex items-center bg-red-600 border-0 py-2 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4  md:mt-0">Book Now
    </button>
  </div>
</header>
    );
  };
  
  export default Nav;