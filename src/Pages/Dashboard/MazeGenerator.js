import React from 'react'
import MazeSelector from '../../Components/MazeSelector'

function MazeGenerator() {
  return (
    <div className='h-fit md:h-full flex flex-col items-center p-4 justify-center'>
      <div className='flex flex-col items-center justify-center border border-1 border-gray-200 rounded-xl  shadow-2xl'>

      <h1 className='font-bold text-3xl row-span-2 mt-5'>Maze Generator:</h1>
      <div className='flex flex-row items-center justify-center'>
        <MazeSelector />
      </div>
      </div>
    </div>
  )
}

export default MazeGenerator