interface IAuthSignupResponse {
    user_id: string;
    name: string;
    email: string;
    access_token: string;
}

export class AuthSignupResponse implements IAuthSignupResponse {
    public user_id: string = '';
    public name: string = '';
    public email: string = '';
    public access_token: string = '';

    constructor(obj: any){
        Object.assign(this, obj);
    }
}