import React from 'react'
import WordSearchSelector from '../../Components/WordSearchSelector'

function WordSearchGenerator() {
  return (
    <div className='h-fit md:h-full flex flex-col items-center justify-center'>
    <div className='flex flex-col items-center justify-center border border-1 border-gray-200 rounded-xl p-4 shadow-2xl'>

    <h1 className='font-bold text-3xl row-span-2 text-center mt-5'>Word Search Generator:</h1>
    <div>
      <WordSearchSelector />
    </div>
    </div>
  </div>
  )
}

export default WordSearchGenerator