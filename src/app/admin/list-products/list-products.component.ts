import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/models/dto/product.dto';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { SaveComponent } from '../save/save.component';
import { Messages } from 'src/app/utils/messages';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginacao: MatPaginator;

  listProducts: Product[] | null = [];
  totalItens: string | null;
  @Input() lengthCategory;

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
      .subscribe({
        next: (resp) => {
          this.listProducts = resp.body;
          this.totalItens = resp.headers.get('X_TOTAL_COUNT');
        },
        complete: () => {},
      });
  }

  trocarPagina() {
    this.getAll();
  }

  openDeleteProduct(productId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '360px',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.deleteProduct(productId);
      }
    });
  }

  notification(message: string, action: string, duration: number) {
    this.notificationService.notificationComplet(
      message,
      action,
      duration
    );
  }

  deleteProduct(productId: number) {
<<<<<<< HEAD
    this.productService.deleteProduct(productId).subscribe((resp) => {
      this.getAll();
      this.notificationService.notificationComplet(
        'Sucesso ao deletar produto',
        'OK',
        5000
      );
=======
    this.productService.deleteProduct(productId).subscribe({
      error: (err) => {
        this.notification( (err.status == 403)? Messages.ERR_UNAUTHORIZED : Messages.ERR_DELETE_PRODUCT, 'OK', 5000);
      },
      complete: () => {
        this.getAll();
        this.notification(Messages.SUCCESS_DELETE_PRODUCT, 'OK', 5000);
      },
    });
  }

  openDialogDeleteProduct(item?: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.deleteProduct(item.id);
        this.getAll();
      }
>>>>>>> feature/teste
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
