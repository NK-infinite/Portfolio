import React from 'react';

export default function Projects() {
  return (
    <div id="Project" className="px-5 py-10 bg-stone-200 dark:bg-gray-700 dark:text-white">
      <div className="flex justify-center">
        <div className="hover:text-orange-500 active:shadow-xl active:scale-120 hover:shadow-xl hover:scale-120 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-10">
          Project
        </div>
      </div>
      <div className="grid lg:p-10 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 items-center">
        {/* project 1 */}
        <div className="h-full active:shadow-xl active:scale-110 duration-900 hover:scale-105 lg:duration-700 md:duration-700 hover:shadow-2xl dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 text-white rounded-2xl">
          <div className="grid gap-y-3 pb-3 grid-cols-2 rounded-2xl bg-white">
            <img src="/assets/project_image/taskif/Untitled design3.png" className="rounded-tl-2xl" alt="Taskify Screenshot 1" />
            <img src="/assets/project_image/taskif/Untitled design4.png" className="rounded-tr-2xl" alt="Taskify Screenshot 2" />
            <img src="/assets/project_image/taskif/Untitled design5.png" alt="Taskify Screenshot 3" />
            <img src="/assets/project_image/taskif/Untitled design.png" alt="Taskify Screenshot 4" />
          </div>

          <div className="p-6">
            <div className="flex justify-center text-2xl font-bold">
              <h3 className="p-2 px-6 rounded-2xl text-green-400">Taskify</h3>
            </div>
            <div className="flex justify-center">
              <p className="mt-3 text-white text-center">
                A simple to-do app built with React Native &amp; Firebase Realtime Database.
              </p>
            </div>
            <div className="flex justify-center text-2xl font-bold">
              <h3 className="p-2 px-6 rounded-2xl text-green-400">Features:-</h3>
            </div>
            <div className="flex justify-center">
              <ul className="list-disc list-inside">
                <li>Add, update, and delete tasks instantly</li>
                <li>Real-time data sync across devices</li>
                <li>Efficient UI built with React Native components</li>
              </ul>
            </div>
            <div className="flex mt-3 justify-around font-bold">
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-6 rounded-2xl text-blue-400">
                React Native
              </h3>
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-6 rounded-2xl text-yellow-400">
                Firebase
              </h3>
            </div>
            <div className="flex mt-3 justify-around font-bold">
              <a
                href="https://www.amazon.in/dp/B0F9TDXYGJ/ref=sr_1_1?crid=3R27GNX8KT5E1&dib=eyJ2IjoiMSJ9.0ab8hhB9tPgG24NvaC1W-A.PF1Rjh-BchTxRTP0cn87EH_eAyR9EVIerRf9pLvvyWQ&dib_tag=se&keywords=Taskify&qid=1748088565&s=mobile-apps&sprefix=taskify%2Cmobile-apps%2C241&sr=1-1"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-6 rounded-2xl text-yellow-400">
                  <button type="button" className="cursor-pointer">LiveDemo</button>
                </h3>
              </a>
              <a href="https://github.com/NK-infinite/Taskify" target="_blank" rel="noreferrer">
                <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-6 rounded-2xl text-blue-400">
                  <button type="button" className="cursor-pointer">GitHub</button>
                </h3>
              </a>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="h-full active:shadow-xl active:scale-110 duration-900 hover:scale-105 lg:duration-700 md:duration-700 hover:shadow-2xl dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 text-white rounded-2xl">
          <div className="grid gap-y-3 pb-3 grid-cols-2 rounded-2xl bg-white">
            <img src="/assets/project_image/accountapp/Untitled design (1).png" className="rounded-tl-2xl" alt="Account App Screenshot 1" />
            <img src="/assets/project_image/accountapp/Untitled design (2).png" className="rounded-tr-2xl" alt="Account App Screenshot 2" />
            <img src="/assets/project_image/accountapp/Untitled design (3).png" alt="Account App Screenshot 3" />
            <img src="/assets/project_image/accountapp/Untitled design.png" alt="Account App Screenshot 4" />
          </div>
          <div className="p-6">
            <div className="flex justify-center text-2xl font-bold">
              <h3 className="p-2 px-6 hover:scale-110 duration-800 rounded-2xl text-green-400">
                Account App
              </h3>
            </div>
            <div className="flex justify-center">
              <p className="mt-3 text-white text-center">
                A simple Account App app built with React Native And Local Storeg.
              </p>
            </div>

            <div className="flex justify-center text-2xl font-bold">
              <h3 className="p-2 px-6 rounded-2xl text-green-400">Features:-</h3>
            </div>
            <div className="flex justify-center">
              <ul className="list-disc list-inside">
                <li>Local storage ensures data is retained even when offline</li>
                <li>Analysis Your Data(Incom &amp; Expense) with Grap And Chart</li>
                <li>Clean UI for easy navigation and entry</li>
                <li className="text-red-500">
                  Note:- The Project Is Currently Working That Reason for not LiveDemo
                </li>
              </ul>
            </div>
            <div className="flex mt-3 justify-around font-bold">
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-3 rounded-2xl text-blue-400">
                React Native
              </h3>
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-3 rounded-2xl text-yellow-400">
                AsyncStorage
              </h3>
            </div>
            <div className="flex mt-3 justify-center font-bold">
              <a href="https://github.com/NK-infinite/AccountApp" target="_blank" rel="noreferrer">
                <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-6 rounded-2xl text-blue-400">
                  <button type="button" className="cursor-pointer">GitHub</button>
                </h3>
              </a>
            </div>
          </div>
        </div>

        {/* project 4
        <div className="h-full active:shadow-xl active:scale-110 duration-900 hover:scale-105 lg:duration-700 md:duration-700 hover:shadow-2xl dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 text-white rounded-2xl">
          <div className="grid gap-y-3 pb-3 grid-cols-2 rounded-2xl bg-white">
            <img src="/assets/project_image/countryapp/Untitled design (15).png" className="rounded-tl-2xl" alt="Country Info App Screenshot 1" />
            <img src="/assets/project_image/countryapp/Untitled design (16).png" className="rounded-tr-2xl" alt="Country Info App Screenshot 2" />
            <img src="/assets/project_image/countryapp/Untitled design (14).png" alt="Country Info App Screenshot 3" />
            <img src="/assets/project_image/countryapp/Untitled design (13).png" alt="Country Info App Screenshot 4" />
          </div>

          <div className="p-6">
            <div className="flex justify-center text-2xl font-bold">
              <h3 className="p-2 px-6 hover:scale-110 duration-800 rounded-2xl text-green-400">
                🌍 Country Info App
              </h3>
            </div>

            <div className="flex justify-center">
              <p className="mt-3 text-white text-center">
                A modern React Native application that allows users to explore detailed information about countries worldwide including capital, population, currency, language, and national flag with a clean and responsive UI.
              </p>
            </div>

            <div className="flex justify-center text-2xl font-bold mt-4">
              <h3 className="p-2 px-6 rounded-2xl text-green-400">Features:-</h3>
            </div>

            <div className="flex justify-center">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Browse all countries with search functionality</li>
                <li>View capital, population, currency &amp; language details</li>
                <li>Real-time data from REST APIs</li>
                <li>Country flag preview</li>
                <li>Responsive &amp; optimized UI</li>
                <li>Smooth performance handling large datasets</li>
              </ul>
            </div>

            <div className="flex mt-3 justify-around font-bold flex-wrap gap-2">
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-3 rounded-2xl text-blue-400">
                React Native
              </h3>
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-3 rounded-2xl text-purple-400">
                TypeScript
              </h3>
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-3 rounded-2xl text-yellow-400">
                REST Countries API
              </h3>
              <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-3 rounded-2xl text-green-400">
                World Bank API
              </h3>
            </div>

            <div className="flex mt-3 justify-center font-bold gap-4 flex-wrap">
              <a href="https://lnkd.in/eq8hfnGe" target="_blank" rel="noreferrer">
                <h3 className="bg-stone-800 dark:bg-gray-900 p-2 px-6 rounded-2xl text-blue-400">
                  <button type="button" className="cursor-pointer">GitHub</button>
                </h3>
              </a>

              <a href="https://lnkd.in/eG7XUzM6" target="_blank" rel="noreferrer">
                <h3 className="bg-green-600 p-2 px-6 rounded-2xl text-white">
                  <button type="button" className="cursor-pointer">Download APK</button>
                </h3>
              </a>

              <a href="https://lnkd.in/eqkG2zFu" target="_blank" rel="noreferrer">
                <h3 className="bg-orange-600 p-2 px-6 rounded-2xl text-white">
                  <button type="button" className="cursor-pointer">Uptodown</button>
                </h3>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
