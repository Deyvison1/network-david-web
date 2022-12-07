export class User {
    constructor(
        public login?: string, public senha?: string, public role?: string, public id?: number, public createdAt?: Date, public updatedAt?: Date
    ) {}
}