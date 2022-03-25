import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RouterService } from 'src/app/services/router.service';
import { SaveCategoryComponent } from '../save-category/save-category.component';
import { SaveComponent } from '../save/save.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: RouterService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  sair() {
    this.localStorageService.clearAll();
    this.router.redirectionTo('home');
  }

  redirecionarPagePrincipal() {
    this.router.redirectionTo('home');
  }
}
