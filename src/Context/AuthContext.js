import { createContext , useContext, useEffect, useState } from 'react'
import { app } from '../Helpers/firebase'
import { useNavigate } from 'react-router-dom'
import {
    getAuth,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    sendEmailVerification,
} from 'firebase/auth'

const AuthContext = createContext()
const auth = getAuth(app)

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState()
    const [verified, setVerified] = useState(false)
    const [error, seterror] = useState(false)
    function signup(name , email, password , errr , verification , btn) {
        btn(true)
     createUserWithEmailAndPassword(auth , email, password )
        .then( (user) => {
            updateProfile(auth.currentUser , {
                displayName : name 
            }
            ).then( () => {sendEmailVerification(user.user) 
                verification(true)
                btn(false)
            })            
            
            
        }).catch((err)=> {
            errr(true)
            btn(false)
        })

    }




    function signin( email, password , errr , verifi , btn) {
        btn(true)
        signInWithEmailAndPassword(auth , email, password)
        .then( (user) => {
            if(user.user.emailVerified == false){
                verifi(true)
                logout()
                btn(false)
            } else {
                btn(false)
                setVerified(false)
                navigate('/dashboard')
            }
        })
        .catch( (err) =>{
            errr(true)
            btn(false)
        } )



        
    }

    function logout() {
        signOut(auth).catch((err) => console.log(err.message))
        navigate('/login')

    }

    function verifyEmail(){
        sendEmailVerification(user).catch( (err) => console.log(err.message))
    }


    useEffect( () => {
         const unsubscribe = onAuthStateChanged(auth , (user) => {
            setUser(user)
            setloading(false)
         })

         return () => {
            unsubscribe()
         }
    }   ,[] ) 


    const values = {signup , signin  , logout , navigate,user, verifyEmail  , verified  , error}
    

    return (
        <AuthContext.Provider value ={values} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UseAuthContext = () =>{
    return useContext(AuthContext)
}