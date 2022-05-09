import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyVisualizationComponent } from './company-visualization/company-visualization.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { PhonePipe } from '../pipes/phone.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavBarComponent,
    CompanyVisualizationComponent,
    ProductsComponent,
    FooterComponent,
    PhonePipe,
    HomePageComponent,
  ],
  imports: [CommonModule, MatCardModule, MatDialogModule],
  providers: [],
  exports: [
    NavBarComponent,
    CompanyVisualizationComponent,
    ProductsComponent,
    FooterComponent,
    PhonePipe,
    HomePageComponent,
  ],
})
export class ComponentsModule {}
