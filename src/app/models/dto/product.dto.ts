import { Category } from "./category.dto";

export class Product {
    constructor(
        public name?: string,
        public speedDownload?: number,
        public speedUpload?: number,
        public taxaAdesao?: number,
        public valueWifi?: number,
        public value?: number,
        public category?: Category
    ) {

    }

}