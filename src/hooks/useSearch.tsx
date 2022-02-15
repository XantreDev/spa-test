import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AC } from '../state'
import { RootState } from '../state/store'

const useSearch = () => {
    const searchRequest = useSelector((state: RootState) => state.searchState)

    const dispatch = useDispatch()
    const { changeSearchRequest, startSearchRequest } = bindActionCreators(AC, dispatch)

    type returnType = [string, any, any]
    const returnData: returnType = [searchRequest.searchRequest ?? '', changeSearchRequest, startSearchRequest] 

    return returnData
}

export default useSearch