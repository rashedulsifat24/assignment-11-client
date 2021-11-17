import { useState, useEffect } from "react";
import firebaseInitilization from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

firebaseInitilization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoding,setIsLoding]=useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  //singin with google
  const singInWithGoogle = () => {
    setIsLoding(true)
    return signInWithPopup(auth, provider).then((result) => {
      // setUser(result.user);
      
    })
    .finally(()=>{
      setIsLoding(false)
    })

  };

  //logout
  const logOut = () => {
    setIsLoding(true)
    signOut(auth)
     .then(() => {
      setUser({});
    })
    .finally(()=>{
      setIsLoding(false)
    })
    ;
  };
  //manage user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({})
      }
      setIsLoding(false)
    });
  }, []);
  return {
    user,
    singInWithGoogle,
    logOut,
    isLoding
  };
};
export default useFirebase;
