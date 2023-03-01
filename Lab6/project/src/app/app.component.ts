import { Component } from '@angular/core';
import  {Category, categories} from "./categories";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  categories = categories;
}
