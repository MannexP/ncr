from django.db import models


class Profile(models.Model):
    image_url = models.TextField()
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    user_id = models.CharField(max_length=400)
    phone = models.IntegerField()


class Shipping(models.Model):
    company_name = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    unit = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='shipping')


class OrderHistory(models.Model):
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='order_histories')
    shipping_id = models.ForeignKey(Shipping, on_delete=models.CASCADE, related_name='order_histories')
    total = models.IntegerField()
    field = models.CharField(max_length=200)


class ProductType(models.Model):
    name = models.CharField(max_length=200)


class Product(models.Model):
    name = models.CharField(max_length=200)
    image_url = models.TextField()
    price = models.IntegerField()
    description = models.TextField()
    product_type_id = models.ForeignKey(ProductType, on_delete=models.CASCADE, related_name='products')


class ShoppingCart(models.Model):
    product_id = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    total = models.IntegerField()


class Billing(models.Model):
    card_number = models.IntegerField()
    card_name = models.CharField(max_length=200)
    cvv = models.IntegerField()
    expiration_date = models.DateField()
    shipping_id = models.ForeignKey(Shipping, on_delete=models.CASCADE, related_name='billing')
    profie_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='billing')


class OrderItem(models.Model):
    order_history_id = models.ForeignKey(OrderHistory, on_delete=models.CASCADE, related_name='order_items')
    status = models.CharField(max_length=200)
    expected_date = models.DateField()
    image_url = models.TextField()
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items')


class TrackPackage(models.Model):
    order_history_id = models.ForeignKey(OrderHistory, on_delete=models.CASCADE, related_name='track_packages')
    track_status = models.CharField(max_length=200)
