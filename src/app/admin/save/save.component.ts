import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/dto/category.dto';
import { Product } from 'src/app/models/dto/product.dto';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { FormUtil } from 'src/app/utils/form.utils';
import { Messages } from 'src/app/utils/messages';
import { Requireds } from 'src/app/utils/requireds';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
})
export class SaveComponent implements OnInit {
  listCategory: Category[] = [];
  form: FormGroup;
  editOrInsert: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SaveComponent>,
    private productService: ProductService,
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = FormUtil.buildForm(Object.keys(new Product()), Requireds.requiredsproduct);
    this.getAllCategory();
    this.insertOrEdit();
  }

<<<<<<< HEAD
  editOrInsert() {
    if (!!this.data) {
=======
  insertOrEdit() {
    if (!!this.data) {
      this.editOrInsert = `Editar produto: ${this.data.name}`;
>>>>>>> feature/teste
      this.form.patchValue(this.data);
    } else {
      this.editOrInsert = 'Adicionar';
      this.form.reset();
    }
  }

  getAllCategory() {
<<<<<<< HEAD
    this.categoryService.getAllCategory().subscribe((resp) => {
      this.listCategory = resp;
=======
    this.categoryService.getAllCategory().subscribe({
      next: (resp) => {
        this.listCategory = resp;
      },
      error: () => {},
      complete: () => {},
>>>>>>> feature/teste
    });
  }

  cancel(refreshPage: boolean, isMessage: boolean, message?: string, action?: string, duration?: number) {
    if(isMessage) {
      this.notificationService.notificationComplet(
        message,
        action,
        duration
      );
    }
    this.dialogRef.close(refreshPage);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  insert(valuesForm: any) {
    this.productService.insertProduct(valuesForm).subscribe({
      next: () => {},
      error: (err) => {
        this.cancel(false, true, (err.status == 403)? Messages.ERR_UNAUTHORIZED : Messages.ERR_SAVE_PRODUCT, 'OK', 5000);
      },
      complete: () => {
        this.cancel(true, true, Messages.SUCCESS_SAVE_PRODUCT, 'OK', 5000);
      },
    });
  }

  edit(valuesForm: any) {
    this.productService.editProduct(valuesForm).subscribe({
      next: () => {},
      error: (err) => {
        this.cancel(false, true, (err.status == 403)? Messages.ERR_UNAUTHORIZED : Messages.ERR_EDIT_PRODUCT, 'OK', 5000);
      },
      complete: () => {
        this.cancel(true, true, Messages.SUCCESSE_EDIT_PRODUCT, 'OK', 5000);
      },
    });
  }

  save() {
    const valuesForm = this.form.value;
    this.getAllCategory();
    if (valuesForm.id == null || valuesForm == '') {
<<<<<<< HEAD
      this.productService.insertProduct(valuesForm).subscribe(
        (resp) => {
          this.cancel(true);
          this.notificationService.notificationComplet(
            'Sucesso ao salvar product',
            'OK',
            5000
          );
        },
        (err) => {
          this.cancel(false);
          this.notificationService.notificationComplet(
            'Error ao salvar product',
            'OK',
            5000
          );
        }
      );
    } else {
      this.productService.editProduct(valuesForm).subscribe(
        (resp) => {
          this.cancel(true);
          this.notificationService.notificationComplet(
            'Sucesso ao salvar product',
            'OK',
            5000
          );
        },
        (err) => {
          this.cancel(false);
          this.notificationService.notificationComplet(
            'Error ao salvar product',
            'OK',
            5000
          );
        }
      );
=======
      this.insert(valuesForm);
    } else {
      this.edit(valuesForm);
>>>>>>> feature/teste
    }
  }
}
