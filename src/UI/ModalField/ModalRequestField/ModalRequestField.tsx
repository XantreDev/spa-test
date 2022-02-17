import React, { useState } from 'react'
import Input from './../../Input/Input';
import styles from './ModalRequestField.module.scss'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../../state';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { searchState } from './../../../state/reducers/searchStateReducer';
import { modalType } from '../../../components/ModalWindow/ModalWindow';

const ModalRequestField: React.FC<{typeOfModal: modalType}> = ({typeOfModal: typeOfModel}) => {
    const editableResult = (useSelector((state: RootState) => state.modalState.editableResult) as searchState) 
    const searchRequest = editableResult?.searchRequest ?? ''
    const dispatch = useDispatch()
    const { modalEdit } = bindActionCreators(AC, dispatch)

    const setSearchRequest = (newSearchRequest: string) => {
        modalEdit({
            ...editableResult,
            searchRequest: newSearchRequest
        })
    }    


  return (
  <div className={styles.field}>
        <label htmlFor="request">Запрос</label>
        <br />
        <Input
            setter={setSearchRequest}
            data={searchRequest}
            disabled={typeOfModel === 'push'}
            id="request"
        />
    </div>
  )
}

export default ModalRequestField