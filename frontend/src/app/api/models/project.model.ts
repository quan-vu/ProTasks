export interface IProject {
    id: string;
    name: string;
}

export class Project {
    public id: string = '';
    public name: string = '';

    constructor(obj: any){
        Object.assign(this, obj);
    }
}