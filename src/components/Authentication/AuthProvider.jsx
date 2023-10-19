import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";



export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user,setUser]= useState("")


    // createUser 
    const signIn  = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }




    const UserInfo = {
        user,
        signIn,
        logIn
    }

    return (
        <AuthContext.Provider value={UserInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;