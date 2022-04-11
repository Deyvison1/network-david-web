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
    this.form = FormUtil.buildForm(Object.keys(new Product()));
    this.getAllCategory();
    this.insertOrEdit();
  }

  insertOrEdit() {
    console.log(this.data);
    if(!!this.data) {
      this.form.patchValue(this.data);
    } else {
      this.editOrInsert = 'Adicionar';
      this.form.reset();
    }
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(
      (resp) => {
        this.listCategory = resp;
      }
    );
  }

  cancel(refreshPage: boolean) {
    this.dialogRef.close(refreshPage);
  }

  compareFn(c1: any, c2:any): boolean {     
    return c1 && c2 ? c1.id === c2.id : c1 === c2; 
}

  save() {
    const valuesForm = this.form.value;
    this.getAllCategory();
    if(valuesForm.id == null || valuesForm == '') {
      this.productService.insertProduct(valuesForm).subscribe(
        (resp) => {
          this.cancel(true);
          this.notificationService.notificationComplet(Messages.SUCESSSAVEPRODUCT, 'OK', 5000);
        }, err => {
          this.cancel(false);
          this.notificationService.notificationComplet(Messages.ERRSAVEPRODUCT, 'OK', 5000);
        }
      );
    } else {
      this.productService.editProduct(valuesForm).subscribe(
        (resp) => {
          this.cancel(true);
          this.notificationService.notificationComplet(Messages.SUCESSSAVEPRODUCT, 'OK', 5000);
        }, err => {
          this.cancel(false);
          this.notificationService.notificationComplet(Messages.ERREDITPRODUCT, 'OK', 5000);
        }
      );
    }
  }
}
