import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import Head from './components/Head/Head';
import Favorite from './components/Favorite/Favorite';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import useAuth from './hooks/useAuth';

export const ROUTES = {index: '/', search: '/', favorite: '/favorite'}

function App() {
    const needToLogin = useAuth()

    const canShow = useSelector((state: RootState) => state.searchState.canShow)

    return (
    <div className="App">
        <BrowserRouter>
            {
                needToLogin ?
                <Routes>
                    <Route path='' element={<Login/>}/>
                </Routes>
                : 
                (<Routes>
                    <Route path='/' element={
                        <React.Fragment>
                            <Head/>
                            { !canShow ? <Results/> : <Search/> }
                        </React.Fragment>
                        }/>
                    <Route path={ROUTES.favorite} element={
                        <React.Fragment>
                            <Head/>
                            <Favorite/>
                        </React.Fragment>
                    }/>
                </Routes>
                )
            }
        </BrowserRouter>
    </div>
  );
}

export default App;
