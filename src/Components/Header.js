import React from 'react'

const Header = () => {
  return (
    <div>
        <>
        <nav className="flex flex-wrap py-2 lg:px-12 bg-blue shadow border-solid border-t-2 ">
           <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="flex flex-col text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight"><a href={'/'}>Dashboard</a></span>
                </div>
                <div className="flex flex-col text-gray-800 mr-16">
                    
                    <span className="font-semibold text-xl tracking-tight"><a href={'/link'}>Link</a></span>
                </div>
                <div className="flex flex-col text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight"><a href={'/posts'}>Posts Page</a></span>
                </div>
            </div>
        </nav>
        
        </>
    </div>
  )
}

export default Header