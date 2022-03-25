import { Category } from './category.dto';

export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public speedDownload?: number,
    public speedUpload?: number,
    public taxaAdesao?: number,
    public valueWifi?: number,
    public value?: number,
    public description?: string,
    public category?: Category
  ) {}
}
