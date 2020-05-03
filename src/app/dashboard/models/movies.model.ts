export class Movies {

    constructor(
        public id: number,
        public year: number,
        public title: string,
        public studios: any[],
        public producers: any[],
        public winner: boolean
    ) { }

}