import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/dto/product.dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProducts().subscribe(
      (resp: Product[]) => {
        this.products = resp;
      }, (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

}
