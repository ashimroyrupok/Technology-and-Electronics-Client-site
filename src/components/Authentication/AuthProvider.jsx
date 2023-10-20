import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";



export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("")
    const [loading,setLoading] =useState(true)



    // google signin
    const googleProvide = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvide)
    }


    // createUser 
    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // profile info

    const profileInfo = (name, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
        })
    }

        // logOUt
        const logOut =  () => {
            signOut(auth)
        }

    // ovserber
    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])




    const UserInfo = {
        user,
        signIn,
        signInWithGoogle,
        logIn,
        logOut,
        profileInfo,
        loading
    }

    return (
        <AuthContext.Provider value={UserInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;