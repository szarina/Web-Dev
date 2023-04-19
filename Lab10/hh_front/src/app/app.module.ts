import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
