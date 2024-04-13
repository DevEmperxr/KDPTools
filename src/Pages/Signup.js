import React from 'react'
import { useState } from 'react'
import { UseAuthContext } from '../Context/AuthContext'
import Logo from "../Content/KDPTOOLS.IO.png"


function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [name, setName] = useState("")
    const [v, setV] = useState(false)
    const [s, setS] = useState(false)
    const [dbut, setDbut] = useState(false)
    const {signup , navigate  , user} = UseAuthContext()
    const handleSubmit = (e) => {
        setV(false)
        setS(false)
        e.preventDefault()
        if(email.length === 0 || password.length=== 0 || name.length === 0){
            alert("Please fill in all the details")
        }else {
         signup(name , email , password , setV , setS , setDbut)
        }
    }
    if (user && user.emailVerified == true) { 
        navigate('/dashboard')
    } else {

    
  return (
    <div className='w-screen h-screen bg-white flex flex-col'  >
        <img src={Logo} className="pt-5 w-40 self-center" onClick={()=> navigate('/')}/>

        <form onSubmit={(e)=>  handleSubmit(e)} className=' border border-blue-500 shadow-xl border solid w-[30%] h-content py-5 px-2 m-auto flex flex-col justify-around items-center min-w-[20rem]'>

            <span className='text-3xl font-bold text-main py-5'>
                Sign Up
            </span>
            {s &&  <span className='mx-3 text-center bg-blue-100 text-blue-500 p-3 rounded-xl border border-2 border-blue-500'>Email verification sent (check spam folder). please confirm your email and log in</span>}
            {v &&<span className='mx-3 text-center bg-red-100 text-red-500 p-3 rounded-xl border border-2 border-red-500'>Email Already in use</span>}
            <div className='bg-white w-[80%]'>
            <div className='flex flex-col justify-between items-left mb-4'>
                <span className='fond-semibold text-main'>Name :</span>
                <input onChange={(e) => setName(e.target.value)} className='drop-shadow-md px-3 py-2 border border-2 border-solid border-blue-500 rounded-md my-1' type='name' name='name' placeholder='John Doe' />
            </div>

            <div className='flex flex-col justify-between items-left mb-4'>
                <span className='fond-semibold text-main'>Email :</span>
                <input onChange={(e) => setEmail(e.target.value)} className='drop-shadow-md px-3 py-2 border border-2 border-solid border-blue-500 rounded-md my-1' type='email' name='email' placeholder='example@domain.com' />
            </div>
            <div className='flex flex-col justify-between items-left mb-4 '>
                <span className='fond-semibold text-main'>Password :</span>
                <input onChange={(e) => setPassword(e.target.value)} className='drop-shadow-md px-3 py-2 border border-2 border-solid border-blue-500 rounded-md my-1' type='password' name='password' placeholder='password' />
            </div>
            </div>
            <div className='flex flex-col items-center justify-between' >

            <button disabled={dbut} onClick={handleSubmit} type='submit' className=' mt-5 drop-shadow-lg text-white bg-blue-500 rounded-md py-3 px-6 text-lg font-semibold hover:bg-blue-400 mb' >Sign Up</button>
                <span className='text-xs pt-3 text-gray-500 text-center font-normal'>
                    by signing up, you agree to share you details for verification and marketing purposes. Check <span className='text-main underline cursor-pointer' onClick={() => navigate("/TCS")}>T&C</span> and <span className='text-main underline cursor-pointer' onClick={() => navigate("/privacy")}>Privacy Policy</span>
                </span>
                <span className='text-xs pt-3'>
                    Already have an account ? <span onClick={() =>{ navigate('/login')                    }} className='text-blue-500'><u>Log In</u></span>
                </span>
            </div>
        </form>
    </div>
          )
    }
}
export default SignUp