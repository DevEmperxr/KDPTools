import React from 'react'
import {UseAuthContext} from '../../Context/AuthContext'
import ProfileInfo from '../../Components/ProfileInfo'


function Profile() {
  const {user , logout} = UseAuthContext()

  const handlelogout = () => {
    logout()
  }

  return (
    <div className='h-fit md:h-full flex flex-col justify-evenly'>
      <div>

    <ProfileInfo/>
      </div>
    <div className='flex flex-row justify-center'>

    <button className='bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-xl font-bold shadow-lg' onClick={handlelogout}>Logout</button>
    </div>
    </div>
  )
}

export default Profile