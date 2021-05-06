//Correction du code
//Code Corrigé

import {loadUser} from "./actions/authActions";
import {Provider} from "react-redux";
 
import React ,{useState} from 'react';
import LoginModal from './components/auth/LoginModel';

function App() {
  

  return (
    <div className="App">
      
        <LoginModal/>
         
    </div>
  );
}


export default App;
