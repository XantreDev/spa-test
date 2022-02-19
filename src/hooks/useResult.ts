import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AC } from '../state'
import { SearchState } from '../types/stateTypes'

type ButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

const useResult = (favorites: SearchState[]): [(index: number) => () => void, (index: number) => (event: ButtonEvent) => void, (index: number) => (event: ButtonEvent) => void] => {
    const redirect = useNavigate()
    const dipatch = useDispatch()
    const { setSearchRequestState, removeFavoriteRequest, createModal, activateLike } = bindActionCreators(AC, dipatch)

    const showResult = (index: number) => () => {
        setSearchRequestState(favorites[index])
        activateLike(index)
        redirect('/')
    }

    const deleteResult = (index: number) => (event: ButtonEvent) => {
        event.stopPropagation()
        removeFavoriteRequest(index)
    }

    const editResult = (index: number) => (event: ButtonEvent) => {
        event.stopPropagation()
        createModal({ index: index, kind: 'replace' }, favorites[index])
    }


    return [showResult, deleteResult, editResult]
}

export default useResult