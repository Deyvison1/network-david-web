import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<SaveComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.form);
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const valuesForm = this.form.value;
    console.log(valuesForm);
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      speedDownload: [],
      speedUpload: [],
      taxaAdesao: [],
      valueWifi: [],
      value: [],
      category: {
        name: [''],
        description: ['']
      }
    });
  }
}
