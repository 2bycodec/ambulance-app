import React from 'react';

const Feature = () => {
    return(
              <div className="bg-gray-100">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                    <svg
                      viewBox="0 0 88 88"
                      className="w-full max-w-screen-xl text-indigo-100"
                    >
                      <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                      <circle
                        fillOpacity="0.2"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="44"
                      />
                      <circle
                        fillOpacity="0.2"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="37.5"
                      />
                      <circle
                        fillOpacity="0.3"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="29.5"
                      />
                      <circle
                        fillOpacity="0.3"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="22.5"
                      />
                    </svg>
                  </div>
                  <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                      <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                          <svg
                            className="w-8 h-8 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                          >
                            <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                          </svg>
                        </div>
                        <p className="mb-2 font-bold">Instant Ambulance Dispatch</p>
                        <p className="text-sm leading-5 text-gray-900">
                        Users can request an ambulance swiftly and effortlessly with just a few clicks. The platform ensures an immediate response, crucial during emergencies.
                        </p>
                      </div>
                      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                      <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                          <svg
                            className="w-8 h-8 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                          >
                            <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                          </svg>
                        </div>
                        <p className="mb-2 font-bold">Real-Time Location Tracking</p>
                        <p className="text-sm leading-5 text-gray-900">
                        Integrated GPS tracking allows users to monitor the ambulance's real-time location on a map. This feature offers transparency and peace of mind to individuals awaiting medical assistance.
                        </p>
                      </div>
                      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                      <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                          <svg
                            className="w-8 h-8 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                          >
                            <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                          </svg>
                        </div>
                        <p className="mb-2 font-bold">Automated Emergency Alerts</p>
                        <p className="text-sm leading-5 text-gray-900">
                        The platform automatically alerts and updates the user's emergency contacts or designated individuals about the situation, providing crucial information about the user's status and location.
                        </p>
                      </div>
                      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                      <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                          <svg
                            className="w-8 h-8 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                          >
                            <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                          </svg>
                        </div>
                        <p className="mb-2 font-bold">Secure Medical Profile Storage</p>
                        <p className="text-sm leading-5 text-gray-900">
                        Users can create and maintain their medical profiles securely on the platform. This feature ensures that ambulance personnel have access to vital medical information to deliver appropriate care during transit and at the destination.
                        </p>
                      </div>
                      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>     

                  </div>
                </div>
              </div>
    );
};

export default Feature;