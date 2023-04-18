import { Component } from '@angular/core';
import {Company} from "../../models";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  companies:Company[] =[]


}
