import React from 'react'
import Button from '../../UI/Button/Button';
import { modalType } from '../ModalWindow/ModalWindow';
import styles from "./ModalButtons.module.scss";
import useSubmit from '../../hooks/useSubmit';


const ModalButtons: React.FC<{typeOfModal: modalType}> = ({typeOfModal}) => {
    const submitButtonCaption = typeOfModal === 'push' ? 'Сохранить' : "Изменить"
    const discardButtonCaption = typeOfModal === 'push' ? 'Не сохранять' : 'Не изменять'

    const [submitCallback, killModal] = useSubmit(typeOfModal)

    const discardCallback = () => {
        killModal()
    }

    return (
    <div className={styles.buttons}>
        <Button color="white" onClick={discardCallback} customClass={styles.buttonText} borderRadius="1rem">{discardButtonCaption}</Button>
        <Button color="blue" onClick={submitCallback} customClass={styles.buttonText} borderRadius="1rem">{submitButtonCaption}</Button>
    </div>
  )
}

export default ModalButtons