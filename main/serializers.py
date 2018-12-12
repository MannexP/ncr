from rest_framework import serializers

from .models import Profile, Shipping, OrderHistory, Billing, ProductType, Product, ShoppingCart, OrderItem, TrackPackage


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'image_url', 'first_name', 'last_name', 'phone')


class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = ('id', 'company_name', 'address', 'unit', 'city', 'profile_id')


class OrderHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderHistory
        fields = ('id', 'shipping_id', 'total')


class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = ('id', 'name')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'image_url', 'price', 'description', 'product_type_id')


class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = ('id', 'product_id', 'quantity', 'total')


class BillingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Billing
        fields = ('id', 'card_number', 'card_name', 'cvv', 'expiration_date', 'shipping_id', 'profile_id')


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'order_history_id', 'status', 'expected_date', 'image_url', 'product_id')


class TrackPackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrackPackage
        fields = ('id', 'order_history_id', 'track_status')
