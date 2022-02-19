import md5 from "md5";
import data from "../users.json";

const USER_TOKEN_KEY = "userToken";

export class AuthService {
    static users = data.users;

    static tryAuth(login: string, password: string, userSetter: any) {
        const isRealUser = this.users.some(
            ({ login: dataLogin, password: dataPassword }) =>
                login === dataLogin && password === dataPassword
        );

        if (isRealUser) {
            const userToken = md5(login + password);
            userSetter(userToken);
            localStorage.setItem(USER_TOKEN_KEY, userToken);
        }
    }

    static logOut(userLogout: any) {
        localStorage.removeItem(USER_TOKEN_KEY);
        userLogout();
    }

    static checkAuth() {
        return Boolean(localStorage.getItem(USER_TOKEN_KEY));
    }

    static authInState(getAuth: (userToken: string) => void) {
        getAuth(localStorage.getItem(USER_TOKEN_KEY) ?? "");
    }
}
