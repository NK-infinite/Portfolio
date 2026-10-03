import React from 'react';

export default function About() {
  return (
    <div id="About" className="py-16 px-6 bg-stone-200 dark:bg-gray-700 dark:text-white">
      <div className="flex justify-center">
        <div className="hover:text-orange-500 active:shadow-xl active:scale-120 hover:shadow-xl/100 hover:scale-120 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-10">
          About
        </div>
      </div>

      <div className="max-w-6xl mx-auto lg:flex lg:justify-between lg:items-start gap-15">
        {/* (Who Am I) */}
        <div className="mb-20 lg:mb-0">
          <h2 className="text-4xl flex items-center font-bold mb-6">
            Who Am I ?
            <div className="mt-2 ml-3 size-3 rounded-4xl bg-blue-500 dark:bg-orange-500">
              <div className="animate-ping size-3 rounded-4xl bg-blue-500 dark:bg-orange-500">
                <div className="animate-ping size-3 rounded-4xl bg-blue-500 dark:bg-orange-500"></div>
              </div>
            </div>
          </h2>
          <p className="text-lg leading-relaxed">
            I'm <span className="text-yellow-500 text-shadow-2xs text-shadow-blue-500">Nikhil Keshvala</span>,
            Currently Working as a{' '}
            <span className="font-semibold">React Native Developer</span> at{' '}
            <a
              href="https://www.enthusiasoftech.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Enthusia Softech Pvt Ltd
            </a>
          </p>
          <p className="mt-7 lg:mt-5 text-lg leading-relaxed">
            I’m Passionate About{' '}
            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              React Native
            </a>
            , And Frontend Development
          </p>
          <p className="mt-7 lg:mt-5 text-lg leading-relaxed">
            Specialize in Building Mobile Apps and Web Apps Using React Native
          </p>
          <p className="mt-7 lg:mt-5 text-lg leading-relaxed">
            I Focus Not only on Writing Clean And Efficient Code But Also on Delivering Smooth User Experiences.
          </p>
          <p className="mt-7 lg:mt-5 text-lg leading-relaxed">
            For me, Development is Not just About Coding — it’s About Solving Problems, Improving Usability, And Creating Digital Products That People Actually Enjoy Using.
          </p>
        </div>

        {/* (Quick Info / Education) */}
        <div className="lg:w-1/2">
          <h3 className="flex items-center text-3xl font-bold mb-6">
            Education Info
            <div className="mt-2 ml-3 size-3 rounded-4xl bg-blue-500 dark:bg-orange-500">
              <div className="animate-ping size-3 rounded-4xl bg-blue-500 dark:bg-orange-500">
                <div className="animate-ping size-3 rounded-4xl bg-blue-500 dark:bg-orange-500"></div>
              </div>
            </div>
          </h3>
          <p className="text-lg">
            Bachelor of Science in Information Technology (BSc IT)
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            2024 - Present at{' '}
            <a
              href="https://sarvajanikuniversity.ac.in/#gsc.tab=0"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Sarvajanik University
            </a>{' '}
            In College:{' '}
            <a
              href="https://www.srki.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Shree Ramkrishna Institute of Computer Education and Applied Sciences
            </a>
          </p>
          <br />
          <p className="text-lg mb-4">
            <span>Higher Secondary (12th - Science Stream)</span>
            <br />
            <span className="text-gray-600 dark:text-gray-300">2022 - 2024</span>
            <br />
            Gujarat Secondary and Higher Secondary Education Board (GSHSEB)
          </p>
          <br />
          <p className="text-lg mb-4">
            <span>Secondary School (10th)</span>
            <br />
            <span className="text-gray-600 dark:text-gray-300">2020</span>
            <br />
            Gujarat Secondary and Higher Secondary Education Board (GSHSEB)
          </p>
        </div>
      </div>
    </div>
  );
}
