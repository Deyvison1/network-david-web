import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { SaveComponent } from './save/save.component';
import { SaveCategoryComponent } from './save-category/save-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { DragAndDropComponent } from '../utils/drag-and-drop/drag-and-drop.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SaveComponent,
    SaveCategoryComponent,
    ListCategoryComponent,
    ListProductsComponent,
    DragAndDropComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DragDropModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class AdmimModule {}
