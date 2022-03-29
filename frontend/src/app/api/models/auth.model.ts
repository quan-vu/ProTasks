export interface IAuth {
    email: string;
    password: string;
}

export class Auth implements IAuth {
    public email: string = '';
    public password: string = '';
  
    constructor(obj: any){
        Object.assign(this, obj);
    }
}