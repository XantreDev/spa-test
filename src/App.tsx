import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
