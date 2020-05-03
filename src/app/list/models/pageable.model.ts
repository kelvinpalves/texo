import { Sort } from './sort.model';

export class Pageable {

    constructor(
        public sort: Sort,
        public pageSize: number,
        public pageNumber: number,
        public offset: number,
        public paged: boolean,
        public unpaged: boolean
    ) { }

}