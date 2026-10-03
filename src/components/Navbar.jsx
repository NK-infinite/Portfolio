import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="group border-b-1 border-l-1 bg-stone-500 border-black dark:border dark:bg-gray-900 dark:text-white">
        <ul className="flex items-center justify-between p-5">
          <a href="#" className="text-3xl pr-5 text-white font-extrabold">&lt;NK/&gt;</a>

          <div className="hidden lg:flex items-center" id="Navbar">
            <li>
              <a
                href="/assets/resume/Nikhil_Resumes (2).pdf"
                target="_blank"
                rel="noreferrer"
                className="flex p-2 px-6 mx-2 rounded-2xl text-blue-700 hover:text-orange-500 hover:shadow-xl duration-500 dark:shadow-orange-500 shadow-blue-500"
              >
                Resume
                <img src="/assets/images/download.png" className="size-6 ml-1" alt="Download" />
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="p-2 px-6 mx-2 rounded-2xl text-white hover:text-orange-500 hover:outline-1 hover:shadow-xl duration-500 dark:shadow-orange-500 shadow-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                className="p-2 px-6 mx-2 rounded-2xl text-white hover:text-orange-500 hover:outline-1 hover:shadow-xl duration-500 dark:shadow-orange-500 shadow-blue-500"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Skill"
                className="p-2 px-6 mx-2 rounded-2xl text-white hover:text-orange-500 hover:outline-1 hover:shadow-xl duration-500 dark:shadow-orange-500 shadow-blue-500"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#Project"
                className="p-2 px-6 mx-2 rounded-2xl text-white hover:text-orange-500 hover:outline-1 hover:shadow-xl duration-500 dark:shadow-orange-500 shadow-blue-500"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="p-2 px-6 mx-2 rounded-2xl text-white hover:text-orange-500 hover:outline-1 hover:shadow-xl duration-500 dark:shadow-orange-500 shadow-blue-500"
              >
                Contact
              </a>
            </li>
          </div>

          {/* bar button */}
          <button
            className="block lg:hidden text-2xl cursor-pointer text-white"
            id="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </ul>
      </div>

      <ul
        id="mobile-menu"
        className={`${isOpen ? 'flex' : 'hidden'} lg:hidden flex-col space-y-4 p-5 bg-stone-400 dark:bg-gray-800`}
      >
        <li>
          <a
            href="/assets/resume/Nikhil_Resumes (2).pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex p-2 rounded hover:bg-stone-300 dark:hover:bg-gray-700 text-blue-800"
          >
            Resume
            <img src="/assets/images/download.png" className="size-6 ml-1" alt="Download" />
          </a>
        </li>
        <li>
          <a
            href="#About"
            onClick={() => setIsOpen(false)}
            className="p-2 my-5 text-white rounded active:shadow-xl dark:shadow-orange-500 shadow-white block"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            onClick={() => setIsOpen(false)}
            className="p-2 my-5 text-white rounded active:shadow-xl dark:shadow-orange-500 shadow-white block"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Skill"
            onClick={() => setIsOpen(false)}
            className="p-2 my-5 text-white rounded active:shadow-xl dark:shadow-orange-500 shadow-white block"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            href="#Project"
            onClick={() => setIsOpen(false)}
            className="p-2 my-5 text-white rounded active:shadow-xl dark:shadow-orange-500 shadow-white block"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onClick={() => setIsOpen(false)}
            className="p-2 my-5 text-white rounded active:shadow-xl dark:shadow-orange-500 shadow-white block"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
