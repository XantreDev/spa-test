// SearchState

import { store } from "../state/store";


interface SRActionChangedRequest{
    type: "request/changed",
    payload: string
}


interface SRActionOrderSetted{
    type: "request/order-setted",
    payload: SortType
}

interface SRActionStarted {
    type: "request/started",
}

interface  SRActionFinished {
    type: "request/finished"
    payload: ResultObject
}


export type SRAction = SRActionChangedRequest | SRActionOrderSetted | SRActionFinished | SRActionSetState | SRActionStarted;

export interface SearchState {
    searchRequest: string;
    needToSearch: boolean;
    executed: boolean;
    ordedBy: SortType;
    searchName?: string | undefined;
    requiredCount: number;
    result?: ResultObject;
}

interface SRActionSetState {
    type: "request/set-new-state";
    payload: SearchState;
};

// AuthState

interface AActionEnter {
    type: 'auth/enter'
    payload: string
} 

interface AActionExit {
    type: 'auth/exit',
}

export type AAction = AActionEnter | AActionExit

// LikeState

export type likeStateType = {
    active: boolean,
    index: number,
    rightNowSetted: boolean
}

interface LActionActivate {
    type: 'like/activate',
    payload: {
        index: number
    }
}

interface LActionSet {
    type: 'like/set',
    payload: {
        index: number
    }
}

interface LActionDisable{
    type: 'like/disable',
}

export type LikeActions = LActionActivate | LActionSet | LActionDisable

// ModalState

export type SModal = {
    modalExist: boolean,
    editableResult: SearchState | null,
    action: SModalAction
}

export type SModalAction = { kind: 'push' } | { kind: 'replace', index: number }

interface MActionEdit {
    type: 'modal/edit',
    payload: SearchState
}

interface MActionCreate {
    type: 'modal/create',
    payload: {
        action: SModalAction,
        toEdit: SearchState
    }
} 

interface MActionKill {
    type: 'modal/kill'
}

export type MAction = MActionEdit | MActionCreate | MActionKill

// Last Search State

export type LSActionType = "last-search/set";

export type LSAction = {
    type: LSActionType;
    payload: SearchState | null;
};

// Favorite Requests State

interface FRActionSetAll {
    type: 'favorite-requests/set-all',
    payload: SearchState[]
}

interface FRActionUpdate {
    type: 'favorite-requests/update',
    payload: {
        index: number,
        data: SearchState
    }
}

interface FRActionPush {
    type: 'favorite-requests/push',
    payload: SearchState
}

interface FRActionRemove {
    type: 'favorite-requests/remove',
    payload: number
}

export type FRAction = FRActionPush | FRActionSetAll | FRActionUpdate | FRActionRemove



export interface VideoData {
    title: string;
    image: string;
    channelTitle: string;
    viewsCount: number;
    url: string;
}

export interface ResultObject {
    totalResults: number;
    sortedBy: SortType;
    results: VideoData[];
}

export type SortType = 'data' | 'rating' | 'relevance' | 'title' | 'viewCount' | 'null';



export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch