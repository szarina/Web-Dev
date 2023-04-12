from django.shortcuts import render
from django.urls import path

# Create your views here.
from . import views

urlpatterns = [
    path('companies/', views.companies_list, name='list of companies'),
    path('companies/<int:id>/', views.company_details, name='company details'),
    path('companies/<int:id>/vacancies/', views.company_vacancies_list, name='list of vacancies in company'),
    path('vacancies/', views.vacancies_list, name='list of vacancies'),
    path('vacancies/<int:id>/', views.vacancy_details, name='vacancy details'),
    path('vacancies/top_ten/', views.top_ten_vacancies_list, name='list of top 10 vacancies'),

]