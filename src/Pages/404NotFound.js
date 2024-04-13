import React from 'react'

function NotFound() {
  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center justify-center' >
        <div className='border border-blue-500 border-3 p-10 shadow-xl rounded-xl'>
            <p className='text-4xl'>404: Page not found<br></br></p>
            <p className='text-xl mt-10'>We are sorry but the page you requested does not exist</p>
        </div>

    </div>
  )
}

export default NotFound