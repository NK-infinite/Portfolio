import React from 'react';

export default function Contact() {
  return (
    <div id="Contact" className="px-5 py-10 bg-stone-300 dark:bg-zinc-800 dark:text-white">
      <div className="flex justify-center">
        <div className="hover:text-orange-500 active:shadow-xl active:scale-120 md:duration-700 hover:shadow-xl hover:scale-120 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-10">
          Contact
        </div>
      </div>

      {/* My info */}
      <div className="flex justify-center">
        <div>
          <p className="text-3xl md:text-3xl sm:text-3xl text-green-500 font-bold text-center">
            You Have a Query ? Simply Way To Connect
          </p>
          <br />
          <div className="active:shadow-xl active:scale-110 md:duration-700 hover:text-orange-500 hover:shadow-xl hover:scale-110 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-5 mt-10">
            <a href="mailto:nikhilkeshvala1@gmail.com">
              <p className="flex items-center gap-3 lg:text-3xl lg:pb-2 lg:pt-5 md:text-3xl sm:text-2xl">
                <img
                  src="/assets/images/email.png"
                  className="h-12 pt-3 active:animate-ping hover:animate-bounce"
                  alt="Email icon"
                />
                Email:
              </p>
            </a>
            <a
              href="mailto:nikhilkeshvala1@gmail.com"
              className="pl-12 lg:text-4xl md:text-3xl sm:text-2xl text-blue-500 break-all"
            >
              nikhilkeshvala1@gmail.com
            </a>
          </div>
          <div className="active:shadow-xl active:scale-110 md:duration-700 hover:text-orange-500 hover:shadow-xl hover:scale-110 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-10 mt-10">
            <a href="tel:+919727064969">
              <p className="flex items-center pt-3 gap-3 lg:text-3xl lg:pb-2 lg:pt-5 md:text-3xl sm:text-2xl">
                <img
                  src="/assets/images/telephone.png"
                  className="h-10 active:animate-ping hover:animate-bounce"
                  alt="Telephone icon"
                />
                Phone:
              </p>
            </a>
            <a
              href="tel:+919727064969"
              className="pl-12 lg:text-4xl md:text-3xl sm:text-2xl text-blue-500"
            >
              +91 9727064969
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
