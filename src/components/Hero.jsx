import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [devStoreUrl, setDevStoreUrl] = useState("https://dev-store-by-nikhil.netlify.app/");
  const [isBackup, setIsBackup] = useState(false);

  useEffect(() => {
    const mainURL = "https://dev-store-by-nikhil.netlify.app/";
    const backupURL = "https://dev-world-by-nikhil.pages.dev/";

    async function checkMainSite() {
      try {
        const response = await fetch(mainURL, { method: "GET", mode: "cors" });
        if (!response.ok) throw new Error("Main site not reachable");
        console.log("Main site up — using main:", mainURL);
      } catch (err) {
        console.warn("Main site down — using backup:", backupURL);
        setDevStoreUrl(backupURL);
        setIsBackup(true);
      }
    }

    checkMainSite();
  }, []);

  return (
    <div className="px-6 2xl:px-0 dark:bg-zinc-800 dark:text-white">
      <div className="lg:flex sm:flex lg:flex-row sm:flex-col mb-35 gap-10 items-center justify-center">
        {/* Image */}
        <div className="active:shadow-xl active:scale-110 hover:shadow-2xl hover:scale-105 duration-500 dark:shadow-orange-400 shadow-blue-500 lg:mt-38 mt-20">
          <img
            className="lg:size-90 rounded-bl-fullxl md:size-80 sm:size-60"
            src="/assets/images/nikhil.png"
            alt="Nikhil Keshvala"
          />
        </div>
        {/* Info */}
        <div className="lg:mt-38 mt-15">
          {/* Heading */}
          <div>
            <h1 className="text-4xl flex items-center font-bold">
              Hello I'am Nikhil Keshvala
            </h1>
          </div>

          <br />
          <div className="text-1xl grid grid-rows-3 gap-y-2">
            <p>
              I’m a passionate Frontend &amp; Mobile App Developer with experience in building responsive websites
            </p>
            <p>
              By Using HTML, CSS, JavaScript, and Tailwind CSS, and cross-platform apps with React Native.
            </p>
            <p>
              Currently, I’m focused on improving my skills in modern frameworks and building real-world projects to grow as a developer.
            </p>
          </div>
          <div className="mt-12">
            <a
              id="dev-store-link"
              href={devStoreUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:text-orange-500 hover:shadow-2xl hover:dark:shadow-orange-400 shadow-blue-500 text-lg ${
                isBackup ? 'text-orange-400' : ''
              }`}
            >
              <div>
                <i className="fa-solid fa-user mr-3 transition-transform"></i>
                Visit My Dev Store
                <i className="fa-solid fa-arrow-up-right-from-square ml-3 transition-transform"></i>
              </div>
            </a>
          </div>
          <div className="flex mt-10 font-bold">
            <div className="mt-2 mr-3 size-3 rounded-4xl bg-blue-500 dark:bg-orange-500">
              <div className="animate-ping size-3 rounded-4xl bg-blue-500 dark:bg-orange-500">
                <div className="animate-ping size-3 rounded-4xl bg-blue-500 dark:bg-orange-500"></div>
              </div>
            </div>
            <span>Surat, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
