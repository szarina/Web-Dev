from django.contrib import admin

from Lab9.hh_back.api.models import Company, Vacancy


# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')


@admin.register(Vacancy)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'company')