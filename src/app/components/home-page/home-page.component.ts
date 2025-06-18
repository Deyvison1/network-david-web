import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/models/dto/product.dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  products: ProductDTO[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
