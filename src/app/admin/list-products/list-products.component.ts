import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/models/dto/product.dto';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { SaveComponent } from '../save/save.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginacao: MatPaginator;

  listProducts: Product[] | null = [];
  totalItens: string | null;

  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService
      .getAllProductsPage(this.paginacao.pageIndex, this.paginacao.pageSize)
      .subscribe((resp) => {
        this.listProducts = resp.body;
        this.totalItens = resp.headers.get('X_TOTAL_COUNT');
      });
  }

  trocarPagina() {
    this.getAll();
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe((resp) => {
      this.getAll();
      this.notificationService.notificationComplet(
        'Sucesso ao deletar produto',
        'OK',
        5000
      );
    });
  }

  openDialogProduct(item?: any) {
    const dialogRef = this.dialog.open(SaveComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.getAll();
      }
    });
  }
}
