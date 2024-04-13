import React, { useState }  from 'react'
import {ChromePicker} from 'react-color'
import MazeFile from './MazeFile'

function MazeSelector() { 
  const sizes = [[360 , 576] ,[364.32 , 562.32 ] ,  [378 , 576] , [396 , 612] , [432 , 648] , [442.08 , 663.12] , [481.68 , 691.92] , 
  [504 , 720] , [535.68 , 697.68] ,[540 , 666]   , [576 , 720] , [594 , 432] ,[594 , 594] , [612 , 612] , [612 , 792] , [627.84 , 841.68]  ]
  const [size, setSize] = useState([sizes[0]])
  const [generateSOl, setGenerateSOl] = useState(false)
  const [mazeColor, setMazeColor] = useState('#000000')
  const [mazeColorPicker, setMazeColorPicker] = useState(false)
  const [solColor, setSolColor] = useState('#000000')
  const [solColorPicker, setSolColorPicker] = useState(false)
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [gbtn, setGbtn] = useState(false)
  const [pages , setPages] = useState()
  const handleGenerate = () => {
    
    if(size === undefined  ){
      alert("Select a valid size")
    }
    else if(!parseInt(width) || width > 50){
      alert("invalid width: make sure input is a number and between 0 and 50")
  }else if (!parseInt(height) || height > 50){
      alert("invalid height: make sure input is a number and between 0 and 50")
    } else if (!parseInt(pages) || pages > 120){
      alert("invalid pages: make sure input is a number and between 0 and 120")
    } else {
      setGbtn(true)
    }

  }



  
  return (
    <div className='flex flex-col p-4 items-center '>
    <div className='grid grid-cols-1  md:grid-cols-3 '>
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
        <label className='font-semibold text-lg mb-1'>Maze Width:</label>
        <input type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) => {
          setGbtn(false)
          setWidth(e.target.value) 
        
        }}/>
      </div>
      
      <div className='flex flex-col mx-3'>
        <label className='font-semibold text-lg mb-1'>Maze Height:</label>
        <input type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) =>{ setGbtn(false) 
          setHeight(e.target.value)} }/>
      </div>
      <div className='flex flex-col mx-3'>
        <label className='font-semibold text-lg mb-1'>Pages :</label>
        <input type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) =>{ setGbtn(false) 
          setPages(e.target.value)} }/>
      </div>
      <div className='flex flex-col mx-3 relative'>
        <label className='font-semibold text-lg mb-1'>Maze Color:</label>
        <button type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2' onClick={() =>{ setMazeColorPicker(true)}}>{mazeColor.toUpperCase()}</button>
        <div className={mazeColorPicker ? 'absolute' : 'hidden'} onBlur={()=>setMazeColorPicker(false)} tabIndex={0}>
          <ChromePicker color={mazeColor} disableAlpha onChange={(color) => {setGbtn(false )
             setMazeColor(color.hex)}}/>
        </div>
      </div>
      <div className='flex flex-col mb-3 mx-3'>
        <label className='font-semibold text-lg mb-1'>Generate Solutions ?</label>
        <select className=' px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e) => e.target.value === 'false'? setGenerateSOl(false) : setGenerateSOl(true)}>
          <option value='false'>No</option>
          <option value='true' className=''>Yes</option>
        </select>
      </div>   
      <div className={generateSOl ? 'flex flex-col mx-3' : 'hidden'}>
        <label className='font-semibold text-lg mb-1'>Solution Color:</label>
        <button type='text' className=' px-2 py-3 rounded-xl border-blue-500 border-2'  onClick={() =>{ setSolColorPicker(true)}} >{solColor.toUpperCase()}</button>
        <div className={solColorPicker ? 'absolute' : 'hidden'} onBlur={()=>setSolColorPicker(false)} tabIndex={0}>
          <ChromePicker color={solColor} disableAlpha onChange={(color) => { setGbtn(false ) 
            setSolColor(color.hex)}}/>
        </div>

      </div>
    </div>
      {!gbtn ? <button disabled={gbtn} className={ gbtn ? 'bg-gray-300 py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white font-semibold text-xl ' :'bg-main py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white  text-xl hover:bg-red-400 hover:shadow-xl'} onClick={handleGenerate}>Generate</button>
            : <MazeFile pages={parseInt(pages)} size={size} width={parseInt(width)} height={parseInt(height)} mazeColor={mazeColor} solve={generateSOl} gbtn={setGbtn} solcolor={solColor}/>}
    </div>
  )
}

export default MazeSelector