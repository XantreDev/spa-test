import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';
import useAuth from './hooks/useAuth';
import MainContent from './MainContent';
import { useEffect } from 'react';


function App() {
    useEffect(() => {
        document.title = 'SPA Test'
    }, [])

    const needToLogin = useAuth()

    return (
    <div className="App">
        <BrowserRouter>
            {
                needToLogin ?
                <Routes>
                    <Route path='' element={<Login/>}/>
                </Routes>
                : <MainContent/>
            }
        </BrowserRouter>
    </div>
  );
}

export default App;
