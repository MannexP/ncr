from django.db import models

# Create your models here.
from django.db.models import ForeignKey


class Profile(models.Model):
    image_url = models.TextField()
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    user_id = models.CharField(max_length=400)
    phone = models.Integer()

class Shipping(models.Model):
    company_name = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    unit = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='shipping')

class OrderHistory(models.Model):
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='order_history')
    shipping_id = models.ForeignKey(Shipping, on_delete=models.CASCADE, related_name='order_history')
    total = models.Interger()
    field = models.CharField(max_length=200)

class ProductType(models.Model):
    name = models.CharField(max_length=200)


class Product(models.Model):
    product_type_id = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    image_url = models.TextField()
    price = models.Interger()
    description = models.TextField()
    product_type_id = models.ForeignKey(ProductType, on_delete=models.CASCADE, related_name='product_type')


class ShoppingCart(models.Model):
    product_id = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    total = models.Interger()

class Billing(models.model):
    card_number = models.Interger()
    card_name = models.CharField(max_length=200)
    cvv = models.Interger()
    expiration_date = models.DateField()
    shipping_id = models.ForeignKey(Shipping, on_delete=models.CASCADE, related_name='shipping')
    profie_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile')

class OrderItem(models.Model):
    order_history_id = models.ForeignKey(OrderHistory, on_delete=models.CASCADE, related_name='order_history')
    status = models.CharField(max_length=200)
    expected_date = models.DateField()
    image_url = models.TextField()
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product')

class TrackPackage(models.Model):
    order_history_id = models.ForeignKey(OrderHistory, on_delete=models.CASCADE, related_name='order_history')
    track_status = models.CharField(max_length=200)








