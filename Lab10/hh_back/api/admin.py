from django.contrib import admin

from .models import Company, Vacancy

# from .import models
# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')


@admin.register(Vacancy)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'company')