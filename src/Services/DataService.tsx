import { SearchState } from "../types/stateTypes";

type userStorage = {
    lastRequest?: SearchState;
    favorites: SearchState[];
};

// function isUserStorage(data: any): data is userStorage {
//     return (
//         (data as userStorage)?.favorites?.every((state) =>
//             isSearchState(state)
//         ) && isSearchState((data as userStorage)?.lastRequest)
//     );
// }

const defaultStorage: userStorage = {
    favorites: []
}

export default class DataService {
    static getStorage(token: string){
        const storage: userStorage = JSON.parse(localStorage.getItem(token) ?? JSON.stringify(defaultStorage))
        return storage
    }

    static setStorage(token: string, storage: userStorage){
        localStorage.setItem(token, JSON.stringify(storage))
    }

    static updateLastRequestStorage(token: string, lastRequest: SearchState){
        const previousStorage = this.getStorage(token)
        this.setStorage(token, {
            ...previousStorage,
            lastRequest
        })
    }

    static updateFavoriteStorage(token: string, favoriteStorage: SearchState[]){
        const previousStorage = this.getStorage(token)
        this.setStorage(token, {
            ...previousStorage,
            favorites: favoriteStorage       
        })
    }

}
