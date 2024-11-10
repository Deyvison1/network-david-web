import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewQrCodeComponent } from './components/view-qr-code/view-qr-code.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home-admin', component: HomeComponent },
  { path: 'view-qr-code', component: ViewQrCodeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
