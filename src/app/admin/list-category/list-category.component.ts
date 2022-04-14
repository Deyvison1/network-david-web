import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from 'src/app/models/dto/category.dto';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SaveCategoryComponent } from '../save-category/save-category.component';
import { Messages } from 'src/app/utils/messages';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginacao: MatPaginator;

  totalItens: string | null;
  listCategory: Category[] | null = [];

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
      });
  }

  trocarPagina() {
    this.getAll();
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe({
      next: () => {},
      error: () => {
        this.notificationService.notificationComplet(
          Messages.ERR_DELETE_CATEGORY,
          'OK',
          5000
        );
      },
      complete: () => {
        this.getAll();
        this.notificationService.notificationComplet(
          Messages.SUCCESS_DELETE_CATEGORY,
          'OK',
          5000
        );
      },
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
