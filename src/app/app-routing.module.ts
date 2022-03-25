import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home-admin', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
