import { bindActionCreators } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AC } from '../../../state';
import { searchState } from '../../../state/reducers/searchStateReducer';
import { RootState } from '../../../state/store';
import Input from '../../Input/Input';
import styles from './ModalNameField.module.scss'

const ModalNameField = () => {
    const editableResult = (useSelector((state: RootState) => state.modalState.editableResult) as searchState) 
    const requestTitle = editableResult?.searchName ?? ''
    const dispatch = useDispatch()
    const { modalEdit } = bindActionCreators(AC, dispatch)

    const setRequestTitle = (title: string) => {
        modalEdit({
            ...editableResult,
            searchName: title
        })
    }

    return (
    <div className={styles.field}>
        <label htmlFor="name">
            <span>*</span> Название
        </label>
    <br />
        <Input
            data={requestTitle}
            setter={setRequestTitle}
            placeholder="Укажите название"
            id="name"
        />
    </div>
  )
}

export default ModalNameField