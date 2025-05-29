import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RouterService } from 'src/app/services/router.service';
import { SaveCategoryComponent } from '../save-category/save-category.component';
import { SaveComponent } from '../save/save.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @Input() totalCategory: string;
  
  constructor(
    private dialog: MatDialog,
    private router: RouterService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
  }

  sair() {
    this.localStorageService.clearAll();
    this.router.redirectionTo('home');
  }

  
  openDialogDeleteProduct(item?: any) {
    const dialogRef = this.dialog.open(UserComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
       
      }
    });
  }

  getLengthCategory(lengthCategory) {
    this.totalCategory = lengthCategory;
  }

  redirecionarPagePrincipal() {
    this.router.redirectionTo('home');
  }
}
