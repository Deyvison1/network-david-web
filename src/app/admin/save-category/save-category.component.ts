import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-category',
  templateUrl: './save-category.component.html',
  styleUrls: ['./save-category.component.scss']
})
export class SaveCategoryComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SaveCategoryComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  saveCategory() {
    console.log(this.form.value);
  }

  cancel() {
    this.dialogRef.close();
  }

}
