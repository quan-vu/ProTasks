export class SearchTaskReq {
    public keyword: string = '';
    public status: string = '';
    public project: string = '';

    constructor() {}

    public setKeyword(keyword: string) {
        if (keyword && keyword.trim()) {
            this.keyword = keyword.trim();
        }
    }

    public setProject(project: string) {
        if (project && project.trim()) {
            this.project = project.trim();
        }
    }

    public setStatus(status: string) {
        this.status = status;
    }

    public toQuery() {
        let params: Array<string> = [];
        if (this.keyword && params.indexOf(this.keyword) === -1) {
            params.push(`keyword=${this.keyword}`);
        }
        if (this.project && params.indexOf(this.project) === -1) {
            params.push(`project=${this.project}`);
        }
        if (this.status.length) {
            params.push(`status=${this.status}`)
        }
        return `?${params.join('&')}`;
    }
}