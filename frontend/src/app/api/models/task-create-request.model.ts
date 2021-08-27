export class TaskCreateReq {
    public content: string = '';

    constructor() {}

    public setContent(content: string) {
        if (content && content.trim()) {
            this.content = content.trim();
        }
    }
}