export class Todo {
    id: string;

    constructor(
        public todoText: string,
    ) {
        this.id = new Date().toISOString();
    }
}