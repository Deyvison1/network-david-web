import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { AdmimModule } from './admin/admin.module';
import { DragAndDropComponent } from './utils/drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    AdmimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }