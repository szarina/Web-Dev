import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";

const routes: Routes = [
  {path:"company-list/:id",component:CompanyDetailComponent},
  {path:"",component:CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
