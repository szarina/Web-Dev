import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CompanyVacanciesService {

  BASE_URL = ""

  constructor(private client: HttpClient) {
  }

  getCompanyVacancy(id:number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}\api\companies\${id}\vacancies`)
  }
}
