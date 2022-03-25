import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaveComponent } from '../save/save.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
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

  openDialogProduct(item?: any) {
    this.dialog.open(SaveComponent, {
      data: item,
    });
  }
}
