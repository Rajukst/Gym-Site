import initialFirebase from "../Firebase/firebase.init";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider ,
    signInWithPopup,
    updateProfile,
  } from "firebase/auth";
import { useState, useEffect } from "react";


initialFirebase();

const useFirebase=()=>{
    const [isLoading, setIsLoading]= useState(true)
    const [user, setUser]= useState({})
    const [authError, setAuthError]= useState("")
    const [admin, setAdmin]= useState(false)

    // allProviders
    const googleProvider= new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider= new FacebookAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            setAuthError("");
           
            // console.log(newUser);
            // send to firebase
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user to database
            saveUser(email, name, "POST")
            // send to firebase
            updateProfile(auth.currentUser, {
              displayName: name
            })
              .then(() => {
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
              history.push("/")
          })
          .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message);
            // ..
          })
          .finally(() => setIsLoading(false));
      };
      const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || "/";
            history.replace(destination);
            // Signed in
            setAuthError("");
          })
          .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
      };
    
      const signWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, "PUT")
            setAuthError("");
            const destination = location?.state?.from || "/";
            history.replace(destination);
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
      };
 // observing users
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
    // verifying user is admin or just a user on client side

  useEffect(()=>{
    fetch(`https://protected-basin-36315.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
      },[user.email])
      const logOut = () => {
        setIsLoading(true);
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
      };
      const saveUser=(email, displayName, method)=>{
        const user= {email, displayName};
        fetch('https://protected-basin-36315.herokuapp.com/users',{
          method: method,
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(user)
        })
        .then()
    
      }
      return {
        user,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
        signWithGoogle,
        admin
      };
    };
export default useFirebase;