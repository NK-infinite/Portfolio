import React from 'react';

const skills = [
  {
    name: 'HTML',
    link: 'https://html.com/',
    img: '/assets/images/html.png',
    widthClass: 'w-35',
  },
  {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    img: '/assets/images/JS.png',
    widthClass: 'w-30',
  },
  {
    name: 'React Native',
    link: 'https://reactnative.dev/docs/getting-started',
    img: '/assets/images/reactnative.png',
    widthClass: 'w-40',
  },
  {
    name: 'Git',
    link: 'https://git-scm.com/',
    img: '/assets/images/git.png',
    widthClass: 'w-35',
  },
  {
    name: 'Tailwind',
    link: 'https://tailwindcss.com/docs/installation/using-vite',
    img: '/assets/images/tailwind.png',
    widthClass: 'w-35',
  },
  {
    name: 'firebase',
    link: 'https://firebase.google.com/docs?gclsrc=aw.ds&gad_source=1&gad_campaignid=20100026058&gbraid=0AAAAADpUDOhpEDlqrYGt0R0pF7wl_M79p&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPtf0V2iMbzYs0ShAUE59tjgL8_1797tmhXkbQ0BdgaNCf0FAn4PteAaAi2GEALw_wcB',
    img: '/assets/images/firebase.png',
    widthClass: 'w-30',
  },
];

export default function Skills() {
  return (
    <div id="Skill" className="px-20 py-10 bg-stone-300 dark:bg-zinc-800 dark:text-white">
      <div className="flex justify-center">
        <div className="hover:text-orange-500 active:shadow-xl active:scale-120 hover:shadow-xl hover:scale-120 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-10">
          Skill
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-40 gap-y-10 place-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`${skill.widthClass} hover:text-orange-500 active:shadow-xl active:scale-110 hover:shadow-lg dark:shadow-orange-500 shadow-blue-500 hover:scale-125 lg:duration-1000`}
            >
              <a href={skill.link} target="_blank" rel="noreferrer">
                <img src={skill.img} alt={skill.name} />
              </a>
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center mt-1"
              >
                {skill.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
