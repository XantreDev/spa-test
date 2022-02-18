import React from 'react'
import Button from '../../UI/Button/Button';
import { modalType } from '../ModalWindow/ModalWindow';
import styles from "./ModalButtons.module.scss";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../state';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { searchState as searchStateType } from './../../state/reducers/searchStateReducer';

const ModalButtons: React.FC<{typeOfModal: modalType}> = ({typeOfModal}) => {
    const submitButtonCaption = typeOfModal === 'push' ? 'Сохранить' : "Изменить"
    const discardButtonCaption = typeOfModal === 'push' ? 'Не сохранять' : 'Не изменять'

    const afterEditRequest = useSelector((state: RootState) => (state.modalState.editableResult as searchStateType))
    const lastSearchRequest = useSelector((state: RootState) => (state.lastSearchState as searchStateType))
    const index = useSelector((state: RootState) => (state.modalState.action.kind === 'replace' ? state.modalState.action.index : 0))
    const favoritesLenght = useSelector((state: RootState) => (state.favoriteResults as searchStateType[]).length)

    const dispatch = useDispatch()
    const { killModal, pushFavoriteResult, updateFavoriteResult, setLike } = bindActionCreators(AC, dispatch)

    const changeCallback = () => {
        updateFavoriteResult(afterEditRequest, index)
        killModal()
    }
    const pushCallback = () => {
        const favRequest: searchStateType = (lastSearchRequest.ordedBy === afterEditRequest.ordedBy) ? ({
            ...afterEditRequest,
            executed: true,
            needToSearch: false,
            result: lastSearchRequest.result
        }) : ({ ...afterEditRequest })
        pushFavoriteResult(favRequest)
        setLike(favoritesLenght)
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