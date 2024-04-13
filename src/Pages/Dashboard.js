import React from 'react'
import { UseAuthContext } from '../Context/AuthContext'
import { Outlet , Link} from 'react-router-dom'
import icon from "../Content/settings_icon.png"



function Dashboard() {
  const {user , navigate } = UseAuthContext()

  if (user === null){
    navigate( '/login')
  } else {

  return (
    <div className=' md:grid md:grid-cols-4 md:grid-rows-1'>

      <div className='sidenavbar bg-main  md:col-span-1 row-span-2   col-span-1 text-white flex flex-col justify-start md:justify-between shadow-lg min-w-fit'>
        <div className=' flex flex-col '>
          <Link to='maze-generator' className='px-10 py-4  mt-1 text-center hover:bg-blue-900 hover:text-white'>  Maze Generator </Link>
          <Link to='sudoku-generator' className='px-10 py-4  mt-1 text-center hover:bg-blue-900 hover:text-white'> Soduku Generator</Link>
          <Link to='word-search-generator' className='px-10 py-4  mt-1 text-center hover:bg-blue-900 hover:text-white'>Word Search Generator</Link>
          <Link to='template-generator' className='px-10 py-4  mt-1 text-center hover:bg-blue-900 hover:text-white'>Template Generator</Link>
        </div>
        <div className='ProfileMenu flex flex-col text-center'>
           
          <Link to='profile' className='px-10 py-4  mt-1 flex justify-between items-center hover:bg-blue-900 hover:text-white'>
            {user.displayName}
            <img className='mx-3 scale-150' src={icon} alt="Avatar"/>
          </Link>
        </div>
      </div>
      <div className='h-screen p-4 col-span-1 row-span-2 md:col-span-3 md:row-span-1'>

      <Outlet />
      </div>

    </div>
    
    )
}
}

export default Dashboard