import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/dto/product.dto';
import { ProductService } from 'src/app/services/product.service';
import { RouterService } from 'src/app/services/router.service';
import { ViewQrCodeComponent } from '../view-qr-code/view-qr-code.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  openModalViewQrCode() {
    this.dialog.open(ViewQrCodeComponent, {
      width: '800',
      height: '800',
    });
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
