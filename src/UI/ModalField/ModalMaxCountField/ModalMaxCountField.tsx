import React from 'react'
import styles from './ModalMaxCountField.module.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../../state';
import { RootState, SearchState } from '../../../types/stateTypes';

const ModalMaxCountField = () => {
    const editableResult = (useSelector((state: RootState) => state.modalState.editableResult) as SearchState) 
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
        <div className={styles.customInputWrapper}>    
            <input id="maxCount" type="range" min={1} max={50} value={maxCount} onChange={event => setMaxCount(parseInt(event.target.value))}/>
            <div className={styles.fakeRunningPath}></div>
            <div style={{width: `${(100 / 50 * maxCount)}%`}} className={styles.fakeFilledPath}></div>
            <div style={{left: `calc(${(100 / 50 * maxCount)}% - .9rem)`}} className={styles.fakeSlider}></div>
        </div>
        </div>
    <div className={styles.counter}>{maxCount}</div>
</div>
  )
}

export default ModalMaxCountField