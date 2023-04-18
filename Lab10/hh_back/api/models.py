from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    class Meta:
        verbose_name="company"
        verbose_name_plural="companies"

    def __str__(self):
        return f'{self.name},address:{self.address}'

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "vacancy"
        verbose_name_plural = "vacancies"
    def __str__(self):
        return f'{self.name}:{self.company}'

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.to_json()
        }
