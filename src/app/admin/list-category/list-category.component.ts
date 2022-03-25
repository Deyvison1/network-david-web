import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaveCategoryComponent } from '../save-category/save-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  list = [
    {
      name: 'eu',
      idade: 25,
    },
    {
      name: 'eu',
      idade: 25,
    },
    {
      name: 'eu',
      idade: 25,
    },
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addDialogCategory(item?: any) {
    this.dialog.open(SaveCategoryComponent, {
      width: '600px',
      data: item,
    });
  }
}
