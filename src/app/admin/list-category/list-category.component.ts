import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from 'src/app/models/dto/category.dto';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SaveCategoryComponent } from '../save-category/save-category.component';
import { Messages } from 'src/app/utils/messages';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component'

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginacao: MatPaginator;

  totalItens: string | null;
  listCategory: Category[] | null = [];
  @Output() totalItensParam = new EventEmitter<string>()

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.paginacao._intl.itemsPerPageLabel = 'Itens por página';
    this.getAll();
  }

  getAll() {
    this.categoryService
      .getAllCategoryPage(this.paginacao.pageIndex, this.paginacao.pageSize)
      .subscribe((resp) => {
        this.listCategory = resp.body;
        this.totalItens = resp.headers.get('X_TOTAL_COUNT');
        this.totalItensParam.emit(this.totalItens);
      });
  }

  trocarPagina() {
    this.getAll();
  }

  openModalDeleteCategory(categoryId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '360px',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.deleteCategory(categoryId);
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

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe({
      next: () => {},
      error: (err) => {
        this.notification( (err.status == 403)? Messages.ERR_UNAUTHORIZED : Messages.ERR_DELETE_CATEGORY, 'OK', 5000);
      },
      complete: () => {
        this.getAll();
        this.notification(Messages.SUCCESS_DELETE_CATEGORY, 'OK', 5000);
      },
    });
  }

  openDialogDeleteCategory(categoryId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.deleteCategory(categoryId);
        this.getAll();
      }
    });
  }

  addDialogCategory(category?: Category) {
    const dialogRef = this.dialog.open(SaveCategoryComponent, {
      width: '600px',
      data: category,
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.getAll();
      }
    });
  }
}
