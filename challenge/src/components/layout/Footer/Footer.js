import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-300 w-full py-2 px-4">
        <div className="flex items-center justify-between my-4">
            <p className="text-blue-500">All rights reserved</p>
            <p className="inline-flex text-blue-500 px-2">Built with 
                <svg fill="#e53e3e" viewBox="0 0 24 24"  className="w-5 h-5 mx-1 pt-px text-red-600" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>by André Tavares.</p>
            <div className="flex items-center">
                <a href="https://www.linkedin.com/in/andretavares97/">
                    <svg className="h-6 w-6 fill-current text-blue-600 mr-6" viewBox="0 0 512 512">
                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer
