export class SearchProjectReq {
    public keyword: string = '';

    constructor() {}

    public setKeyword(keyword: string) {
        if (keyword && keyword.trim()) {
            this.keyword = keyword.trim();
        }
    }

    public toQuery() {
        let params: Array<string> = [];
        if (this.keyword && params.indexOf(this.keyword) === -1) {
            params.push(`keyword=${this.keyword}`);
        }
        return `?${params.join('&')}`;
    }
}