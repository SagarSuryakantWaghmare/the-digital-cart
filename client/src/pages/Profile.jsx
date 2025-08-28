import React from 'react'

const Profile = () => {
  return (
    <div className='min-h-screen flex  flex-col'>
        <div className='flex-grow container  mx-auto p-4 md:p-6'>
          <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
            {/* left section */}
            <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
            <h1 className='text-2xl md:text-3xl font-bold mb-4'></h1>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Profile