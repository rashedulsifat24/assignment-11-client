import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firebaseInitilization = () => {
  initializeApp(firebaseConfig);
};
export default firebaseInitilization;
