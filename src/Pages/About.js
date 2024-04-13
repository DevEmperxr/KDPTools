import React from 'react'
import NavBar from '../Components/NavBar'


function About() {
 
  return (
    <div className=" font-Kanit ">
      <NavBar/>
      
        <div className='  h-screen   flex flex-col justify-center items-center '>
          <span className='text-5xl font-bold '>About</span>
          <span className='text-center text-xl'>This is a free tool to generate free kdp interiors. I made this tool due to the lack of free interior generators online.<br/>All of the files generated using this tool are free to use for both commercial and personal use.<br/>If you have any questions please contact: contact@kdptools.io</span>
        </div>

      
     
    </div>
  )
}

export default About