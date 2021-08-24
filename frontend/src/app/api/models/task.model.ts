export interface ITask {
    id: string;
    content: string;
    created_date: string;
}

export class Task {
    public id: string = '';
    public content: string = '';
    public created_date: string = '';
  
    constructor(obj: any){
        Object.assign(this, obj);
    }
}