import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SaveCategoryComponent } from '../save-category/save-category.component';
import { SaveComponent } from '../save/save.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  sair() {
    this.clearLocalStorage();
    this.redirection('home');
  }

  redirection(url: string) {
    this.router.navigateByUrl(url);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  save(item?: any) {
    this.dialog.open(SaveComponent, {
      data: item
    });
  }

  saveCategory(item?: any) {
    this.dialog.open(SaveCategoryComponent, {
      width: '600px',
      data: item
    });
  }
}
