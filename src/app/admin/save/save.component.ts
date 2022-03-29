import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/dto/category.dto';
import { LabelValueDTO } from 'src/app/models/dto/label-value-dto.dto';
import { Product } from 'src/app/models/dto/product.dto';
import { CategoryService } from 'src/app/services/category.service';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SaveComponent>,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.form = FormUtil.buildForm(Object.keys(new Product()));
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(
      (resp) => {
        this.listCategory = resp;
      }
    );
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const valuesForm = this.form.value;
    this.getAllCategory();
    console.log(valuesForm);
    if(valuesForm.id === '') {
      this.productService.insertProduct(valuesForm).subscribe(
        (resp) => {

        }
      );
    } else {
      this.productService.editProduct(valuesForm).subscribe(
        (resp) => {

        }
      );
    }
  }
}
