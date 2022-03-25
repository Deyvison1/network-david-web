import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/dto/category.dto';
import { CategoryService } from 'src/app/services/category.service';
import { FormUtil } from 'src/app/utils/form.utils';

@Component({
  selector: 'app-save-category',
  templateUrl: './save-category.component.html',
  styleUrls: ['./save-category.component.scss'],
})
export class SaveCategoryComponent implements OnInit {
  form: FormGroup;

  editOrInsert: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<SaveCategoryComponent>
  ) {}

  ngOnInit(): void {
    this.form = FormUtil.buildForm(Object.keys(new Category()));
    this.insertOrEdit();
  }

  insertOrEdit() {
    if(!!this.data) {
      this.editOrInsert = 'Editar';
      this.form.patchValue(this.data);
    } else {
      this.editOrInsert = 'Inserir';
    }
  }

  saveCategory() {
    const valuesForm = this.form.value;
    this.categoryService.insertCategory(valuesForm).subscribe(
      (resp) => {
        this.cancel(true);
      }, err => {
        this.cancel(false);
      }
    )
  }

  cancel(reloead?: boolean) {
    this.dialogRef.close(reloead);
  }
}
