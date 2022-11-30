import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/dto/category.dto';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { FormUtil } from 'src/app/utils/form.utils';
import { Messages } from 'src/app/utils/messages';
import { Requireds } from 'src/app/utils/requireds';

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
    private dialogRef: MatDialogRef<SaveCategoryComponent>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = FormUtil.buildForm(Object.keys(new Category()), Requireds.requiredsCategory);
    this.insertOrEdit();
  }

  insertOrEdit() {
    if (!!this.data) {
      this.editOrInsert = `Editar categoria: ${this.data.name}`;
      this.form.patchValue(this.data);
    } else {
      this.editOrInsert = 'Inserir';
    }
  }

  edit(valuesForm: any) {
    this.categoryService.editCategory(valuesForm).subscribe({
      next: () => {},
      error: () => {
        this.cancel(true, true, Messages.ERR_EDIT_CATEGORY, 'OK', 5000);
      },
      complete: () => {
        this.cancel(true, true, Messages.SUCCESS_EDIT_CATEGORY, 'OK', 5000);
      },
    });
  }

  insert(valuesForm: any) {
    this.categoryService.insertCategory(valuesForm).subscribe({
      next: () => {},
      error: () => {
        this.cancel(true, true, Messages.ERR_SAVE_CATEGORY, 'OK', 5000);
      },
      complete: () => {
        this.cancel(true, true, Messages.SUCCESS_SAVE_CATEGORY, 'OK', 5000);
      },
    });
  }

  saveCategory() {
    const valuesForm = this.form.value;
    if (valuesForm.id === '' || valuesForm.id === null) {
      this.insert(valuesForm);
    } else {
      this.edit(valuesForm);
    }
  }

  cancel(reloead: boolean, isMessage: boolean, message?: string, action?: string, duration?: number) {
    if(isMessage) {
      this.notificationService.notificationComplet(
        message,
        action,
        duration
      );
    }
    this.dialogRef.close(reloead);
  }
}
