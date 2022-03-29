interface IAuthSignupReq {
    name: string;
    email: string;
    password: string;
}

export class AuthSignupReq implements IAuthSignupReq {
    public name: string = '';
    public email: string = '';
    public password: string = '';

    constructor() {}

    public setName(name: string) {
        if (name && name.trim()) {
            this.name = name.trim();
        }
    }

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