interface IAuthSignupReq {
    email: string;
    password: string;
}

export class AuthSignupReq implements IAuthSignupReq {
    public email: string = '';
    public password: string = '';

    constructor() {}

    public setEmail(email: string) {
        if (email && email.trim()) {
            this.email = email.trim();
        }
    }

    public setPassword(password: string) {
        if (password && password.trim()) {
            this.password = password.trim();
        }
    }
}