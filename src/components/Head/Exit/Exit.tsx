import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AC } from '../../../state'
import HeaderButton from '../../../UI/HeaderButton/HeaderButton'
import { AuthService } from '../../../Services/AuthService';

const Exit = () => {
    const dispatch = useDispatch()
    const { getExit } = bindActionCreators(AC, dispatch)


  return (
    <HeaderButton onClick={() => AuthService.logOut(getExit)} link='/' type='logOut' >Выйти</HeaderButton>
  )
}

export default Exit