import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/dto/product.dto';
import { ProductService } from 'src/app/services/product.service';
import { FormUtil } from 'src/app/utils/form.utils';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
})
export class SaveComponent implements OnInit {
  list = [
    {
      id: 1,
      name: 'Deyvison',
      description: 'Descrição 1',
    },
    {
      id: 2,
      name: 'Deyvison 2',
      description: 'Descrição 2',
    },
  ];

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SaveComponent>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.form = FormUtil.buildForm(Object.keys(new Product()));
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const valuesForm = this.form.value;
    console.log(valuesForm);
  }
}
