import { Movies } from '../../dashboard/models';
import { Pageable } from './pageable.model';
import { Sort } from './sort.model';

export class List {

    constructor(
        public content: Movies[],
        public pageable: Pageable,
        public totalPages: number,
        public last: boolean,
        public first: boolean,
        public empty: boolean
    ) { }

}