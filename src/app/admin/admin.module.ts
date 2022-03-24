import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { SaveComponent } from './save/save.component';
import { SaveCategoryComponent } from './save-category/save-category.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, SaveComponent, SaveCategoryComponent],
  imports: [CommonModule, MatCardModule, FormsModule, ReactiveFormsModule, MatSnackBarModule],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class AdmimModule {}
