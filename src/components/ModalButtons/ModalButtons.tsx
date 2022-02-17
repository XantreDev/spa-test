import React from 'react'
import Button from '../../UI/Button/Button';
import { modalType } from '../ModalWindow/ModalWindow';
import styles from "./ModalButtons.module.scss";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../state';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { searchState } from './../../state/reducers/searchStateReducer';

const ModalButtons: React.FC<{typeOfModal: modalType}> = ({typeOfModal}) => {
    const submitButtonCaption = typeOfModal === 'push' ? 'Сохранить' : "Изменить"
    const discardButtonCaption = typeOfModal === 'push' ? 'Не сохранять' : 'Не изменять'

    const afterEditRequest = useSelector((state: RootState) => (state.modalState.editableResult as searchState))
    const lastSearchRequest = useSelector((state: RootState) => (state.lastSearchState as searchState))

    const dispatch = useDispatch()
    const { killModal, pushFavoriteResult } = bindActionCreators(AC, dispatch)

    const changeCallback = () => {
    }
    const pushCallback = () => {
        const favRequest: searchState = (lastSearchRequest.ordedBy === afterEditRequest.ordedBy) ? ({
            ...afterEditRequest,
            executed: true,
            needToSearch: false,
            result: lastSearchRequest.result
        }) : ({ ...afterEditRequest })
        pushFavoriteResult(favRequest)
        killModal()
    }

    const submitCallback = typeOfModal === 'push' ? pushCallback : changeCallback
    const discardCallback = () => {
        killModal()
    }

    return (
    <div className={styles.buttons}>
        <Button color="white" onClick={discardCallback} borderRadius="1rem">{discardButtonCaption}</Button>
        <Button color="blue" onClick={submitCallback} borderRadius="1rem">{submitButtonCaption}</Button>
    </div>
  )
}

export default ModalButtons