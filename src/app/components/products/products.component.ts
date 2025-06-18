import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDTO } from 'src/app/models/dto/product.dto';
import { ViewQrCodeComponent } from '../view-qr-code/view-qr-code.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products: ProductDTO[] = [];

  constructor(private readonly dialog: MatDialog) {}
  
  openModalViewQrCode() {
    this.dialog.open(ViewQrCodeComponent, {
      width: '800',
      height: '800',
    });
  }
}