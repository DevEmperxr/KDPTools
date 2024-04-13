import React from 'react'
import { UseAuthContext } from '../Context/AuthContext'

function ProfileInfo() {
    const {user} = UseAuthContext()

  return (
    <div className='border rounded-xl shadow-lg m-10'>
        <div className=''>

        <h1 className='font-bold text-3xl px-6 py-3'>Info:</h1>
        <hr/>
        <ul className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 px-6 py-2'>
            <li className='py-3'><span className='font-bold'>Name: </span><br/> {user.displayName}</li>
            <li className='py-3'><span className='font-bold'>Email: </span><br/> {user.email}</li>
            <li className='py-3'><span className='font-bold '>UUID: </span> <br/><span className='text-sm md:text-md'>{user.uid}</span></li>
        </ul>
        </div>
    </div>
  )
}

export default ProfileInfo