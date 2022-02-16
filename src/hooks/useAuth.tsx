import { bindActionCreators } from '@reduxjs/toolkit'
import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { AuthService } from '../Services/AuthService';
import { AC } from '../state';

const useAuth = () => {
    const userToken = useSelector((state: RootState) => state.userToken)
    const dispatch = useDispatch()
    const { getAuth } = bindActionCreators(AC, dispatch)

    useLayoutEffect(() => {
        if (AuthService.checkAuth()) {
            AuthService.authInState(getAuth)
        }
    } ,[])

    return userToken === '' ? true : false
}

export default useAuth