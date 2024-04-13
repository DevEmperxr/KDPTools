import React , { useState}from 'react'
import Logo from "../Content/KDPTOOLS.IO.png"
import {UseAuthContext} from "../Context/AuthContext"
import menu from "../Content/menu.svg"


function NavBar() {
    const {navigate } = UseAuthContext()

    const [isMenu, setIsMenu] = useState(false)
  const handleMenu = () =>{
    setIsMenu(!isMenu)
  }
  return (
    <div className={`navbar py-3 px-5 flex flex-row justify-between items-center absolute w-full top-0  z-10`}>
    <img src={Logo} alt={"Hero logo"} className="w-60 cursor-pointer" onClick={()=> navigate("/")} />   
      <div className="hidden lg:flex ">
        <span onClick={() => navigate("/TCS")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">Terms & Conditions</span>
        <span onClick={() => navigate("/Privacy")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">Privacy Policy</span>
        <span onClick={() => navigate("/about")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">About</span>
        <span onClick={() => navigate("/login")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">Sign in</span>
        <span onClick={() => navigate("/signup")} className="font-Kanit text-lg font-medium ml-3 px-2 py-2 bg-main text-white rounded rounded-lg cursor-pointer hover:scale-110">Sign up</span>
      </div>
      <div className="lg:hidden" > 
        <img src={menu} alt={"menu"} onClick={handleMenu} className={"min-w-full scale-150 py-2"}/>
        <div className={ isMenu ? "flex flex-col absolute right-0 bg-gray-100 " : "hidden"} >
          <span onClick={() => navigate("/TCS")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">Terms & Conditions</span>
          <span onClick={() => navigate("/Privacy")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">Privacy Policy</span>
          <span onClick={() => navigate("/about")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">About</span>
          <span onClick={() => navigate("/login")} className="font-Kanit text-lg font-medium mx-3 px-2 py-2 cursor-pointer hover:scale-110">Sign in</span>
          <span onClick={() => navigate("/signup")} className="font-Kanit text-lg font-medium ml-3 px-2 py-2 cursor-pointer hover:scale-110">Sign up</span>
        
        </div>
    </div>
  </div>
  )
}

export default NavBar