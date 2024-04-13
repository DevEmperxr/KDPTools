import React from 'react'
import { useState } from 'react'
import WordSearchFile from './WordSearchFile'
function WordSearchSelector() {
    const [wordlistarr , setWordlistArr ] = useState([])
    const sizes = [[360 , 576] ,[364.32 , 562.32 ] ,  [378 , 576] , [396 , 612] , [432 , 648] , [442.08 , 663.12] , [481.68 , 691.92] , 
    [504 , 720] , [535.68 , 697.68] ,[540 , 666]   , [576 , 720] , [594 , 432] ,[594 , 594] , [612 , 612] , [612 , 792] , [627.84 , 841.68]  ]
    var hasNumer = {}
    const [size, setSize] = useState([])
    const [wordlist, setWordlist] = useState('')
    const [gbtn, setGbtn] = useState(false)
    const handleGenerate = () => {
        if ( size== undefined){
            alert("submit a valid size")
          } else if(wordlist === '') {
              alert('enter a valid wordlist')

        } else {
          setWordlistArr( wordlist.split(/[\s,]+/).map((item) => (item.trim()) ))
           try {
             
             wordlistarr.forEach(item => {
               var ans = item.match(/^[A-Za-z]+$/) ? "true" : "false"
               if(ans === "false" ){
                 throw hasNumer
                }
            });
            setGbtn(true)
            
          }catch (e) {
            if (e == hasNumer) {
              alert("only letters are allowed!")
            }
          }
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
          <div className=' col-span-2 flex flex-col mb-3 w-full h-full mx-3'>
            <label className='font-semibold text-lg mb-1'>Word list:</label>
            <textarea placeholder='word1 , word2, word3...' className='px-2 py-3 rounded-xl border-blue-500 border-2' onChange={(e)=>{
                setGbtn(false)
                setWordlist(e.target.value)
            }}></textarea>
          </div>
    
        </div>
          {!gbtn ? <button disabled={gbtn} className={ gbtn ? 'bg-gray-300 py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white font-semibold text-xl ' :'bg-main py-3 px-5 m-2 mb-5 self-center shadow-lg rounded-xl text-white  text-xl hover:bg-red-400 hover:shadow-xl'} onClick={handleGenerate}>Generate</button>
                : <WordSearchFile className={'w-100'}  size={size} wl={wordlistarr} />}
        </div>
      )
    }

export default WordSearchSelector