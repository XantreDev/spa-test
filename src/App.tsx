import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';
import { AuthService } from './components/Login/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import Header from './components/Nav/Nav';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from './state';

export const ROUTES = {index: '/', search: '/', favorite: '/favorite'}

function App() {
    const userToken = useSelector((state: RootState) => state.userToken)
    const dispatch = useDispatch()
    const { getAuth } = bindActionCreators(AC, dispatch)

    useLayoutEffect(() => {
        if (AuthService.checkAuth()) {
            AuthService.authInState(getAuth)
        }
    } ,[])

    const needToLogin = userToken === '' ? true : false

    return (
    <div className="App">
        <BrowserRouter>
                {
                    needToLogin ?
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                    </Routes>
                    : 
                    (<Routes>
                        <Route path='/' element={<Header/>}>
                        </Route>
                    </Routes>
                    )
                }
        </BrowserRouter>
    </div>
  );
}

export default App;
