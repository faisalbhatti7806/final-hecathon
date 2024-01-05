import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Dashboard from './Dashboard';
import "./Style.css";

const firebaseConfig = {
  apiKey: "AIzaSyBzowxPv27CB3uSUoaSVNdEbWFsZ0USi74",
  authDomain: "final-hecathon.firebaseapp.com",
  projectId: "final-hecathon",
  storageBucket: "final-hecathon.appspot.com",
  messagingSenderId: "999986011004",
  appId: "1:999986011004:web:915bcde923e03e1a06a2f9",
  measurementId: "G-89DSFP97ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       alert("logined")
        
        setTimeout(() => {
          window.location = './Dashborad';
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire({
          title: 'Login Failed',
          text: 'User does not exist or credentials are incorrect',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      });
  };

  return (
    
      <div className='containe'>
        <h1>Login Page</h1>
        <form onSubmit={handleSignIn} >
            <input className='inp'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            />

            <input className='inp'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'
            />
          <br />
          <button type="submit" className="bt">
            Login
          </button>
        </form>
    </div>
  );
}

export default Login;
