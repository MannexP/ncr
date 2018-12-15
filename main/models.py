from django.db import models

# Create your models here.
from django.db.models import ForeignKey


class Profile(models.Model):
    image_url = models.TextField()
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Shipping(models.Model):
    company_name = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    unit = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='shipping')


class OrderHistory(models.Model):
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='order_histories')
    shipping_id = models.ForeignKey(Shipping, on_delete=models.CASCADE, related_name='order_histories')
    total = models.DecimalField(max_digits=10, decimal_places=2)


class ProductType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    image_url = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    product_type_id = models.ForeignKey(ProductType, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.name


class ShoppingCart(models.Model):
    product_id = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    total = models.IntegerField(default=0)


class Billing(models.Model):
    card_number = models.IntegerField(default=0)
    card_name = models.CharField(max_length=200)
    cvv = models.IntegerField(default=0)
    expiration_date = models.DateField()
    shipping_id = models.ForeignKey(Shipping, on_delete=models.CASCADE, related_name='billing')
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='billing')


class OrderItem(models.Model):
    order_history_id = models.ForeignKey(OrderHistory, on_delete=models.CASCADE, related_name='order_items')
    status = models.CharField(max_length=200)
    expected_date = models.DateField()
    image_url = models.TextField()
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items')


class TrackPackage(models.Model):
    order_history_id = models.ForeignKey(OrderHistory, on_delete=models.CASCADE, related_name='track_packages')
    track_status = models.CharField(max_length=200)
