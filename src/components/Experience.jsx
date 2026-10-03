import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'Enthusia Softech Pvt Ltd',
      companyUrl: 'https://www.enthusiasoftech.com/',
      role: 'React Native Developer',
      period: 'March 2026 - August 2026',
      points: [
        'Developed and maintained mobile applications using React Native',
        'Integrated APIs and handled state management using Redux',
        'Debugged and resolved runtime issues and crash scenarios',
      ],
      technologies: ['React Native', 'Redux', 'API Integration', 'Debugging'],
    },
    {
      company: 'Enthusia Softech Pvt Ltd',
      companyUrl: 'https://www.enthusiasoftech.com/',
      role: 'React Native Developer Intern',
      period: 'August 2025 - February 2026',
      points: [
        'Assisted in building mobile UI screens and features using React Native',
        'Worked on debugging and fixing frontend issues',
        'Learned and applied best practices for clean and scalable code',
      ],
      technologies: ['React Native', 'Mobile UI', 'Frontend Debugging', 'Clean Code'],
    },
  ];

  return (
    <div id="Experience"
      className="py-16 my-16 px-0 bg-stone-300 dark:bg-gray-700 dark:text-white">

      <div className="flex justify-center">
        <div className="hover:text-orange-500 active:shadow-xl active:scale-120 hover:shadow-xl/100 hover:scale-120 lg:duration-800 dark:shadow-orange-500 shadow-blue-500 bg-stone-500 dark:bg-gray-600 p-2 px-6 text-white rounded-2xl mb-10">
          Experience
        </div>
      </div>

      <div
        className="active:shadow-xl active:scale-105 dark:shadow-orange-500 shadow-blue-500  text-white rounded-2xl p-6 lg:p-8"
      >
        {experiences.map((exp, index) => (
          <div
            key={index}

          >
            {/* Header: Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-green-400">
                  {exp.role}
                </h3>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg lg:text-xl font-semibold text-white hover:text-orange-400 hover:underline duration-300 inline-flex items-center gap-2 mt-1"
                >
                  <i className="fa-solid fa-building text-sm"></i>
                  {exp.company}
                </a>
              </div>
              <div>
                <span className="inline-block bg-stone-800 dark:bg-gray-900 text-yellow-400 px-4 py-2 rounded-2xl font-bold text-sm lg:text-base">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="mt-4">
              <ul className="list-disc list-inside space-y-2 text-base lg:text-lg leading-relaxed text-gray-100">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-stone-800 dark:bg-gray-900 p-1.5 px-4 rounded-2xl text-blue-400 font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
