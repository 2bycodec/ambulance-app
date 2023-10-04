import React from 'react';

const Header = () => {
    return (
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Seamless
                <br className="hidden md:block" />
                <span className="inline-block text-red-500">
                Ambulance Booking
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              RapidRescue connects you to emergency services instantly. Book an ambulance at your fingertips, ensuring rapid response during critical moments. Your safety is our priority.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
              <p 
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 pr-6"
              >
                OR
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex border border-red-500 border-opacity-50 p-4 items-center justify-center h-12 px-3 mr-6 font-medium tracking-wide text-red-500 transition duration-200 rounded shadow-md "
              >
                +91 9999999999
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full max-w-xs lg:max-w-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <img
            src="https://cdn.dribbble.com/users/1481285/screenshots/6084001/___.gif"
            alt="/"
          />
        </div>
      </div>
    );
  };

  export default Header;