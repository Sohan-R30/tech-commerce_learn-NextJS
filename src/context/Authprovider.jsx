"use client"

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "@/utils/firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)


const Authprovider = ({ children }) => {
    const [users, setUsers] = useState(null);
    
    const [userLoading, setUserLoading] = useState(true);


    const createUser = (email, password) => {
        setUserLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordSignIn = (email, password) => {
        setUserLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setUserLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }


    const updateUserProfile = (property, value) => {
        if(property === "profilePicture"){
            return updateProfile(auth.currentUser,{ photoURL: value})
        }
        if(property === "profileName"){
           return updateProfile(auth.currentUser, { displayName: value})
        }
       
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
            setUserLoading(false);
            // TODO TRY TO VERIFY WITH COOKIES WORK IN LOCAL HOST BUT NOT FIRIBASE LIVE SITE


            // if (currentUser) {
            //     const user = {
            //         displayName: currentUser?.displayName,
            //         email: currentUser?.email,
            //         uid: currentUser?.uid,
            //     }
            //     axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user)
            //         .then(() => {
            //             setUserLoading(false)
            //         })
            //         .catch(() => {})
            // }
            // else {
            //     axios.delete(`${import.meta.env.VITE_API_URL}/jwt`,)
            //         .then(() => {
            //             setUserLoading(false)
            //         })
            //         .catch(() => {})
            // }


            //* VERIFY WITH LOCAL STORAGE

            // if (currentUser) {
            //     axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser.email })
            //         .then(data => {
            //             setUserLoading(false);
            //             localStorage.setItem('access-token', data?.data?.token)
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token')
            //     setUserLoading(false);
            // }
        })
        return () => unsubscribe();

    }, [])

    const authInfo = {
        users,
        setUsers,
        userLoading,
        setUserLoading,
        googleSignIn,
        emailPasswordSignIn,
        createUser,
        emailVerification,
        logOut,
        updateUserProfile
    }

    console.log("🚀 ~ file: Authprovider.jsx:16 ~ Authprovider ~ users:", users)
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default Authprovider;