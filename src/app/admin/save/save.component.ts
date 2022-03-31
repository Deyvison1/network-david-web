import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/dto/category.dto';
import { LabelValueDTO } from 'src/app/models/dto/label-value-dto.dto';
import { Product } from 'src/app/models/dto/product.dto';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { FormUtil } from 'src/app/utils/form.utils';

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
    this.insertOrEdit();
    this.getAllCategory();
  }

  insertOrEdit() {
    if(!!this.data) {
      this.editOrInsert = `Editar Plano ${this.data.name}`;
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

  save() {
    const valuesForm = this.form.value;
    this.getAllCategory();
    console.log(valuesForm);
    if(valuesForm.id === '') {
      this.productService.insertProduct(valuesForm).subscribe(
        (resp) => {
          this.cancel(true);
          this.notificationService.notificationComplet('Sucesso ao salvar product', 'OK', 5000);
        }, err => {
          this.cancel(false);
          this.notificationService.notificationComplet('Error ao salvar product', 'OK', 5000);
        }
      );
    } else {
      this.productService.editProduct(valuesForm).subscribe(
        (resp) => {
          this.cancel(true);
          this.notificationService.notificationComplet('Sucesso ao salvar product', 'OK', 5000);
        }, err => {
          this.cancel(false);
          this.notificationService.notificationComplet('Error ao salvar product', 'OK', 5000);
        }
      );
    }
  }
}
