from django.contrib import admin
from main.models import Product, ProductType
admin.site.register([Product, ProductType])
# Register your models here.
