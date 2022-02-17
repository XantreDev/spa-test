import React from 'react'
import styles from './ModalMaxCountField.module.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { searchState } from '../../../state/reducers/searchStateReducer';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../../state';

const ModalMaxCountField = () => {
    const editableResult = (useSelector((state: RootState) => state.modalState.editableResult) as searchState) 
    const maxCount = editableResult?.requiredCount ?? 12
    const dispatch = useDispatch()
    const { modalEdit } = bindActionCreators(AC, dispatch)

    const setMaxCount = (maxCount: number) => {
        modalEdit({
            ...editableResult,
            requiredCount: maxCount
        })
    }
  return (
    <div className={styles.field}>
    <div className={styles.slider}>
        <label htmlFor="maxCount">Максимальное количество</label>
        <br />  
        <input id="maxCount" type="range" min={1} max={50} value={maxCount} onChange={event => setMaxCount(parseInt(event.target.value))}/>
    </div>
    <div className={styles.counter}>{maxCount}</div>
</div>
  )
}

export default ModalMaxCountField