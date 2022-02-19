import { bindActionCreators } from "@reduxjs/toolkit";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../Services/AuthService";
import { AC } from "../state";
import { RootState } from "../types/stateTypes";

const useAuth = () => {
    const userToken = useSelector((state: RootState) => state.userToken);
    const dispatch = useDispatch();
    const { getAuth } = bindActionCreators(AC, dispatch);

    useLayoutEffect(() => {
        if (AuthService.checkAuth()) {
            AuthService.authInState(getAuth);
        }
    }, []);

    return userToken === "" ? true : false;
};

export default useAuth;
