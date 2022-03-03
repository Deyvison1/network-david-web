import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'nav', component: NavBarComponent },
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  { path: '**', redirectTo: 'nav' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
