import React, { useState, useContext } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Weather from './component/weather';
import MultipleWeather from './component/multipleweather';
import Signup from './component/signup';

function App() {

  const [name, setName] = useState("vaishnavi");
  const [nameSend, setnameSend] = useState("test");


  return (
    <UserContext.Provider value={name}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Weather />} />
          <Route path='/multipleWeather' exact element={<MultipleWeather />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route element={<Signup />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

