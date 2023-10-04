import React from 'react'
import { useState } from "react"

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  const FAQ = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span class="relative">FAQs:</span>
              </span>{' '}
              Answering Your Questions about Ambulance Services
            </h2>
          </div>
          <div class="space-y-4">
            <Item title="How do I request an ambulance through this service ?">
            To request an ambulance, simply visit our website or use our mobile app. Enter your location and medical details to initiate the request. Our system will connect you with the nearest available ambulance for prompt assistance.
            </Item>
            <Item title="Can I cancel or modify my ambulance request ?">
            Yes, you can cancel or modify your ambulance request before the ambulance reaches your location. However, please note that cancellations may be subject to a cancellation fee. It's important to provide accurate and updated information to avoid any issues.
            </Item>
            <Item title="Can I track the ambulance's location once my request is accepted ?">
            Yes, you can track the real-time location of the assigned ambulance through our platform. We provide a live map feature that allows you to monitor the ambulance's progress as it travels to your location.
            </Item>
            <Item title="Is this service available 24/7 ?">
              Yes, our ambulance booking service operates 24 hours a day, 7 days a week. We are always available to assist you during emergencies, ensuring you have access to timely medical transportation and care.
            </Item>
          </div>
        </div>
      </div>
    );
  };

  export default FAQ;