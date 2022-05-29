import React from "react";
import Login from '../components/Login';
import Hoteles from '../components/Hoteles';
import '../css/index.css';
import {
  BrowserRouter as Router,
   Route,
   Routes
  } from "react-router-dom";


function App() {
  return (
    <Router>
         <div >
           <h1>Prueba técnica Noktos - Frontend </h1>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/hoteles" element={<Hoteles/>}/>
            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
