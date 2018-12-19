from django.contrib import admin
from main.models import Product, ProductType, Profile, Shipping, OrderHistory, ShoppingCart, Billing, OrderItem, TrackPackage

admin.site.register([Product, ProductType, Profile, Shipping, OrderHistory, ShoppingCart, Billing, OrderItem, TrackPackage])
# Register your models here.
