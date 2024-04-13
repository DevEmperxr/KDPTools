import React from 'react'
import SodukuSelector from '../../Components/SodukuSelector'

function SodukuGenerator() {
  return (
    <div className='h-fit md:h-full flex flex-col p-4 items-center justify-center'>
    <div className='flex flex-col items-center justify-center border border-1 border-gray-200 rounded-xl shadow-2xl'>

    <h1 className='font-bold text-3xl row-span-2 mt-5'>Sudoku Generator:</h1>
    <div>
      <SodukuSelector />
    </div>
    </div>
  </div>
  )
}

export default SodukuGenerator