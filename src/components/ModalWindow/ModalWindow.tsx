import React, { useState } from "react";
import styles from "./ModalWindow.module.scss";
import CardWrapper from "./../../UI/CardWrapper/CardWrapper";
import { RootState, SortType } from "../../types/stateTypes";
import ModalButtons from "../ModalButtons/ModalButtons";
import ModalRequestField from "../../UI/ModalField/ModalRequestField/ModalRequestField";
import ModalNameField from "../../UI/ModalField/ModalNameField/ModalNameField";
import ModalSortField from "../../UI/ModalField/ModalSortFiels/ModalSortField";
import ModalMaxCountField from "../../UI/ModalField/ModalMaxCountField/ModalMaxCountField";
import { useSelector } from "react-redux";

export type modalType = "push" | "replace";

const ModalWindow: React.FC<{}> = () => {
    const needToShow = useSelector(
        (state: RootState) => state.modalState.modalExist
    );
    const modalAction = useSelector(
        (state: RootState) => state.modalState.action
    );

    const typeOfModal: modalType = modalAction.kind;

    const getModalTitle = (type: modalType) =>
        type === "push" ? "Сохранить запрос" : "Изменить запрос";

    return (
        <div
            style={{ display: needToShow ? "block" : "none" }}
            className={styles.fillBackground}
        >
            <CardWrapper
                gap="0"
                paddingBottom="3.6rem"
                paddingTop="3.6rem"
                className={styles.wrapper}
            >
                <div className={styles.modalContentWrapper}>
                    <h3 className={styles.modalTitle}>
                        {getModalTitle(typeOfModal)}
                    </h3>
                    <ModalRequestField typeOfModal={typeOfModal} />
                    <ModalNameField />
                    <ModalSortField />
                    <ModalMaxCountField />
                    <ModalButtons typeOfModal={typeOfModal} />
                </div>
            </CardWrapper>
        </div>
    );
};

export default ModalWindow;
