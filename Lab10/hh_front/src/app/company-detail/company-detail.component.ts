import { Component } from '@angular/core';
import {Company, Vacancy} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {CompanyVacanciesService} from "../company-vacancies.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  company:Company = {} as Company;

  vacancies:Vacancy[] = []
  constructor(private  route :ActivatedRoute,private companyService:CompanyService,private vacanciesService:CompanyVacanciesService) {
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.companyService.getCompany(id).subscribe((company)=>{
        this.company = company
      });
      this.vacanciesService.getCompanyVacancy(id).subscribe((vacancies)=>{
      this.vacancies = vacancies
      });

  })}

}
