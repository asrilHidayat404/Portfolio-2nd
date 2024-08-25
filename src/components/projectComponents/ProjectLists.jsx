import React from 'react'

const ProjectLists = () => {
  return (
        <div className="lg:w-1/6 md:w-1/4 sm:w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://repository-images.githubusercontent.com/213608013/45592f00-ea1b-11e9-8846-ccfcb8897f62" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    RMDB
                </h5>
                </a>
                <a
                href="#"
                className="inline-flex items-center lg:px-3 lg:py-2 px-2 py-1 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:text-[10px]"
                >
                View Project
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                </a>
            </div>
        </div>
  )

  }

export default ProjectLists
