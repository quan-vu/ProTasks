export class AuthLoginResponse {
    public user_id: string = '';
    public name: string = '';
    public email: string = '';
    public access_token: string = '';

    constructor(obj: any){
        Object.assign(this, obj);
    }
}