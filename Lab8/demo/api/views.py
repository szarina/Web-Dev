from django.shortcuts import render
from django.http import JsonResponse
from .models import Category, Product
# Create your views here.
def getProducts(request):
    products = Product.objects.all()

    products = [prod.to_json() for prod in products]

    return JsonResponse(products, safe=False, json_dumps_params={'indent': 2})


def getProductById(request, id):
    product = Product.objects.get(id=id)

    return JsonResponse(product.to_json(), safe=False, json_dumps_params={'indent': 2})


def getCategories(request):
    categories = Category.objects.all()

    categories = [cat.to_json() for cat in categories]

    return JsonResponse(categories, safe=False, json_dumps_params={'indent': 2})


def getCategoryById(request, id):
    category = Category.objects.get(id=id)

    return JsonResponse(category.to_json(), safe=False, json_dumps_params={'indent': 2})


def getProductsByCategory(request, id):
    category = Category.objects.get(id=id)

    productsByCat = Product.objects.filter(category=category)

    productsByCat = [prod.to_json() for prod in productsByCat]

    return JsonResponse(productsByCat, safe=False, json_dumps_params={'indent': 2})
