import { Post } from './post';

export class Group {
    constructor(
        public id: number,
        public path: string,
        public name: string,
        public members: number,
        public albumId: string,
        public posts?: Post[]
    ){}
}
