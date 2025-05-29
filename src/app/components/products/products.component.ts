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

<<<<<<< HEAD
  constructor(private productService: ProductService) {}
=======
  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}
>>>>>>> feature/teste

  ngOnInit(): void {
    this.getAll();
  }

<<<<<<< HEAD
  getAll() {
    this.productService.getAllProducts().subscribe(
      (resp: Product[]) => {
        this.products = resp;
      },
      (err: HttpErrorResponse) => {
      }
    );
  }
=======
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
>>>>>>> feature/teste
}
