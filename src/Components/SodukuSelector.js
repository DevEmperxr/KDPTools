import React, { useState } from 'react'
import {ChromePicker} from 'react-color'
import SodukuFile from './SodukuFile'

function SodukuSelector() {
const sizes = [[360 , 576] ,[364.32 , 562.32 ] ,  [378 , 576] , [396 , 612] , [432 , 648] , [442.08 , 663.12] , [481.68 , 691.92] , 
[504 , 720] , [535.68 , 697.68] ,[540 , 666]   , [576 , 720] , [594 , 432] ,[594 , 594] , [612 , 612] , [612 , 792] , [627.84 , 841.68]  ]

const [size, setSize] = useState([])
const [difficulty , setDifficulty] = useState('easy')
const [pages, setPages] = useState()
const [solve , setSolve ] = useState(false)
const [color , setColor] = useState('#000000')
const [colorActive , setColorActive] = useState(false)
const [solveColor , setSolveColor] = useState('#000000')
const [solColorActive , setSolColorActive] = useState(false)
const [gbtn, setGbtn] = useState(false)
const handleGenerate = () => {

    if(pages > 120 || pages <= 0 || pages== undefined  ){
        alert("enter a valid size between 1 and 120 ")
    
    }else if ( size== undefined){
      alert("submit a valid size")
    } else {
      setGbtn(true)
    }

}


  return (
    <div className='flex flex-col items-center '>
    <div className='grid grid-cols-1 md:grid-cols-3  p-10 '>
      <div className='flex flex-col mb-3 w mx-3'>
        <label className='font-semibold text-lg mb-1'>Size:</label>
        <select className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) => { setGbtn(false)
          setSize(sizes[parseInt(e.target.value)])
          
        } }>
          <option value={'default'}>Select a size</option>
          <option value={0}>5" x 8"</option>
          <option value={1}>5.06" x 7.81"</option>
          <option value={2}>5.25" x 8"</option>
          <option value={3}>5.5" x 8.5"</option>
          <option value={4}>6" x 9"</option>
          <option value={5}>6.14" x 9.21"</option>
          <option value={6}>6.69" x 9.61"</option>
          <option value={7}>7" x 10"</option>
          <option value={8}>7.44" x 9.69"</option>
          <option value={9}>7.5" x 9.25"</option>
          <option value={10}>8" x 10"</option>
          <option value={11}>8.25" x 6"</option>
          <option value={12}>8.25" x 8.25"</option>
          <option value={13}>8.5" x 8.5"</option>
          <option value={14}>8.5" x 11"</option>
          <option value={15}>8.27" x 11.69"</option>
        </select>
      </div>
      <div className='flex flex-col mx-3'>
        <label className='font-semibold text-lg mb-1'>Difficulty:</label>
        <select className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) => { setGbtn(false)
          setDifficulty(e.target.value)
          
        } }>
          <option value={'easy'}>Easy</option>
          <option value={'medium'}>Medium</option>
          <option value={'hard'}>Hard</option>
          <option value={'insane'}>Insane</option>
          <option value={'inhumane'}>Inhumane</option>
        </select>
      </div>
      
      <div className='flex flex-col mx-3'>
        <label className='font-semibold text-lg mb-1'>Pages :</label>
        <input type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) =>{ setGbtn(false) 
          setPages(e.target.value)} }/>
      </div>
      <div className='flex flex-col mx-3 relative'>
        <label className='font-semibold text-lg mb-1'>Grid Color:</label>
        <button type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2' onClick={() =>{ setGbtn(false)
          setColorActive(true)}}>{color.toUpperCase()}</button>
        <div className={colorActive ? 'absolute' : 'hidden'} onBlur={()=>setColorActive(false)} tabIndex={0}>
          <ChromePicker color={color} disableAlpha onChange={(color) => {setGbtn(false )
             setColor(color.hex)}}/>
        </div>
      </div>
      <div className='flex flex-col mb-3 mx-3'>
        <label className='font-semibold text-lg mb-1'>Generate Solutions ?</label>
        <select className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) => { setGbtn(false)
        e.target.value === 'false'? setSolve(false) : setSolve(true)}}>
          <option value='false'>No</option>
          <option value='true' className=''>Yes</option>
        </select>
      </div>   
      <div className={solve ? 'flex flex-col mx-3' : 'hidden'}>
        <label className='font-semibold text-lg mb-1'>Solution Color:</label>
        <button type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2'  onClick={() =>{ 
          setGbtn(false)
          setSolColorActive(true)}} >{solveColor.toUpperCase()}</button>
        <div className={solColorActive ? 'absolute' : 'hidden'} onBlur={()=>setSolColorActive(false)} tabIndex={0}>
          <ChromePicker color={solveColor} disableAlpha onChange={(color) => { setGbtn(false ) 
            setSolveColor(color.hex)}}/>
        </div>

      </div>
    </div>
      {!gbtn ? <button disabled={gbtn} className={ gbtn ? 'bg-gray-300 py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white font-semibold text-xl ' :'bg-main py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white  text-xl hover:bg-red-400 hover:shadow-xl'} onClick={handleGenerate}>Generate</button>
            : <SodukuFile className={'w-100'}  pages={parseInt(pages)} size={size} color={color} solve={solve} gbtn={setGbtn} solcolor={solveColor} difficulty={difficulty}/>}
    </div>
  )
}

export default SodukuSelector