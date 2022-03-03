import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyVisualizationComponent } from './company-visualization/company-visualization.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

// Material
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NavBarComponent, CompanyVisualizationComponent, ProductsComponent, FooterComponent],
  imports: [CommonModule, MatCardModule],
  providers: [],
  exports: [NavBarComponent, CompanyVisualizationComponent, ProductsComponent, FooterComponent],
})
export class ComponentsModule {}
