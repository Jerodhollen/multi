import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD86M1KfAn9I6XzXjzfvx_zE5v3P_dQZ_s",
  authDomain: "multi-c6238.firebaseapp.com",
  projectId: "multi-c6238",
  storageBucket: "multi-c6238.appspot.com",
  messagingSenderId: "376710698827",
  appId: "1:376710698827:web:b2702f47aaafb08862bace",
  measurementId: "${config.measurementId}"
}
const fb = firebase.initializeApp(firebaseConfig);
export default fb;
