import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyVisualizationComponent } from './company-visualization/company-visualization.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ViewQrCodeComponent } from './view-qr-code/view-qr-code.component';

import { MatCardModule } from '@angular/material/card';
import { PhonePipe } from '../pipes/phone.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    NavBarComponent,
    CompanyVisualizationComponent,
    ProductsComponent,
    FooterComponent,
    PhonePipe,
    HomePageComponent,
    ViewQrCodeComponent,
  ],
  imports: [CommonModule, MatCardModule, MatDialogModule, MatMenuModule, MatButtonModule, MatIconModule],
  providers: [],
  exports: [
    NavBarComponent,
    CompanyVisualizationComponent,
    ProductsComponent,
    FooterComponent,
    PhonePipe,
    HomePageComponent,
    ViewQrCodeComponent,
  ],
})
export class ComponentsModule {}
