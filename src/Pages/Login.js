import React from 'react'
import { useState } from 'react'
import {UseAuthContext } from '../Context/AuthContext'
import Logo from "../Content/KDPTOOLS.IO.png"

function Login() {
    const {signin , navigate  , verifyEmail  , user} = UseAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [v, setV] = useState(false)
    const [s, setS] = useState(false)
    const [btn, setBtn] = useState(false)

    function handlelogin(e){
        e.preventDefault()
        setS(false)
        setV(false)
        if(email.length === 0 || password.length=== 0){
            alert("Please fill in all the details")
        }else {
            signin(email , password , setS , setV , setBtn )
        }
    }
    if (user && user.emailVerified == true) { 
        navigate('/dashboard')
    } else {

  return (
    <div className=' w-screen h-screen bg-white flex flex-col'  >
        <img src={Logo} className="pt-5 w-40 self-center" onClick={()=> navigate('/')}/>
        <form onSubmit={(e) => handlelogin(e)} className=' border border-blue-500 shadow-xl border-3 border solid w-[30%] h-content py-5 px-2 m-auto flex flex-col justify-around items-center shadow-md min-w-[20rem] '>
            <span className='text-3xl font-bold text-main py-5'>
                Log In
            </span>
            {v &&  <span className='mx-3 text-center bg-blue-100 text-blue-500 p-3 rounded-xl border border-2 border-blue-500'>Email not verified. please confirm your email and log in. <br/>  You can request another verification email by clicking <span className='underline hover:cursor-pointer' onClick={verifyEmail}>here</span>please check you spam folder as well</span>}
            {s && <span className='mx-3 text-center bg-red-100 text-red-500 p-3 rounded-xl border border-2 border-red-500'>invalid email/password combination</span>}
            <div className=' w-[80%]'>
            <div className='flex flex-col justify-between items-left'>
                <span className='fond-semibold text-main'>Email :</span>
                <input onChange={(e) => setEmail(e.target.value)} className='drop-shadow-md px-3 py-2 border border-2 border-solid border-blue-500 rounded-md my-1' type='email' name='email' placeholder='example@domain.com' />
            </div>
            <div className='flex flex-col justify-between items-left '>
                <span className='fond-semibold text-main'>Password :</span>
                <input onChange={(e) => setPassword(e.target.value)} className='drop-shadow-md px-3 py-2 border border-2 border-solid border-blue-500 rounded-md my-1' type='password' name='password' placeholder='Password' />
            </div>
            </div>
            <div className='flex flex-col items-center justify-between' >

            <button disabled={btn} onClick={handlelogin} type='submit' className=' mt-5 drop-shadow-lg text-white bg-blue-500 rounded-md py-3 px-6 text-lg font-semibold hover:bg-blue-400 mb ' >Log In</button>
                <span className='text-xs pt-3'>
                    Don't have an account yet ? <span onClick={() => {navigate('/signup')                }}  className='text-blue-500'><u>Sign Up</u></span>
                </span>
            </div>
        </form>
    </div>
          )
}
}
export default Login