import { AuthLoginResponse } from "../models/auth-login-response";

export class StorageService {

    accessToken: string = '';

    constructor(){

    }

    setUser(data: AuthLoginResponse){
        localStorage.setItem('user', JSON.stringify(data));
        this.setAccessToken(data.access_token);
    }

    getUser() {
        let user = localStorage.getItem('user');
        return user ? new AuthLoginResponse(JSON.parse(user)) : null;
    }

    clearUser() {
        localStorage.removeItem('user');
    }

    setAccessToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken);
    }

    getAccessToken() {
        return localStorage.getItem('access_token');
    }

    clearAccessToken() {
        localStorage.removeItem('access_token');
    }

    clearAuthentication() {
        this.clearUser();
        this.clearAccessToken();
    }
}
