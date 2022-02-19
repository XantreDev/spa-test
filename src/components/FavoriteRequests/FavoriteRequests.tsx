import React from "react";
import { useSelector } from "react-redux";
import styles from "./FavoriteRequests.module.scss";
import { RootState, SearchState } from "../../types/stateTypes";
import useResult from "../../hooks/useResult";

const FavoriteResults = () => {
    const favorites: SearchState[] = useSelector(
        (state: RootState) => state.favoriteResults
    );

    const [showResult, deleteResult, editResult] = useResult(favorites);

    return (
        <div className={styles.favorite}>
            {favorites.map((request, index) => (
                <div key={index} className={styles.favoriteRequest}>
                    {request.searchName
                        ? request.searchName
                        : request.searchRequest}
                    <div
                        onClick={showResult(index)}
                        className={styles.actionsWrapper}
                    >
                        <button
                            onClick={editResult(index)}
                            className={`${styles.blue} ${styles.button}`}
                        >
                            Изменить
                        </button>
                        <button
                            onClick={deleteResult(index)}
                            className={`${styles.red} ${styles.button}`}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavoriteResults;
