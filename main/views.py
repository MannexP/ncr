from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ProfileSerializer, ProductSerializer, ProductTypeSerializer, BillingSerializer, ShoppingCartSerializer, ShippingSerializer, OrderItemSerializer, TrackPackageSerializer, OrderHistorySerializer
from .models import Profile, Product, ProductType, Billing, ShoppingCart, Shipping, OrderItem, TrackPackage, OrderHistory

class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductTypeView(viewsets.ModelViewSet):
    queryset = ProductType.objects.all()
    serializer_class = ProductTypeSerializer

class BillingView(viewsets.ModelViewSet):
    queryset = Billing.objects.all()
    serializer_class = BillingSerializer

class ShoppingCartView(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer

class ShippingView(viewsets.ModelViewSet):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer

class OrderHistoryView(viewsets.ModelViewSet):
    queryset = OrderHistory.objects.all()
    serializer_class = OrderHistorySerializer

class OrderItemView(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class TrackPackageView(viewsets.ModelViewSet):
    queryset = TrackPackage.objects.all()
    serializer_class = TrackPackageSerializer