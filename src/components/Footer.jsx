import React from 'react';

export default function Footer() {
  return (
    <footer className="px-5 pb-16 bg-stone-300 dark:bg-zinc-800 dark:text-white">
      {/* Platform */}
      <div className="flex justify-center mt-15 lg:text-4xl md:text-3xl sm:text-3xl font-bold text-green-500">
        Available Platform
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-40 md:gap-20 pt-10">
        <a
          href="https://www.linkedin.com/in/nikhil-keshvala-985786327/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/Platfrom/LinkedIn_icon.png"
            className="active:scale-140 active:shadow-xl hover:shadow-xl dark:shadow-orange-500 shadow-blue-500 md:duration-700 hover:scale-150 lg:duration-500 size-10 lg:size-12 rounded-3xl"
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://github.com/NK-infinite?tab=overview&from=2025-08-01&to=2025-08-21"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/Platfrom/Octicons-mark-github.svg.png"
            className="active:scale-140 active:shadow-xl hover:shadow-xl dark:shadow-orange-500 shadow-blue-500 hover:scale-150 md:duration-700 lg:duration-500 bg-yellow-600 rounded-4xl size-10 lg:size-12"
            alt="GitHub"
          />
        </a>

        <a
          href="https://www.fiverr.com/users/nikhil_keshvala/manage_gigs"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/Platfrom/fiverr.png"
            className="active:scale-140 active:shadow-xl hover:shadow-xl dark:shadow-orange-500 shadow-blue-500 w-10 lg:w-12 hover:scale-150 md:duration-700 lg:duration-500 rounded-4xl"
            alt="Fiverr"
          />
        </a>

        <a
          href="https://www.upwork.com/freelancers/~0168f5e4a783f999cb"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/Platfrom/upwork.png"
            className="active:scale-140 active:shadow-xl hover:shadow-xl dark:shadow-orange-500 shadow-blue-500 w-10 lg:w-12 hover:scale-150 md:duration-700 lg:duration-500 rounded-4xl"
            alt="Upwork"
          />
        </a>
      </div>
    </footer>
  );
}
