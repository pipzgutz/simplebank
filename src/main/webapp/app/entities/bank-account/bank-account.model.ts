import { BaseEntity, User } from './../../shared';

export class BankAccount implements BaseEntity {
    constructor(
        public id?: number,
        public balance?: number,
        public user?: User,
    ) {
    }
}
