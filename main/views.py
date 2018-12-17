from rest_framework import viewsets
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import IsAdminOrReadOnly, IsOwner
from .serializers import ProfileSerializer, ProductSerializer, ProductTypeSerializer, BillingSerializer, \
    ShoppingCartSerializer, ShippingSerializer, OrderItemSerializer, TrackPackageSerializer, OrderHistorySerializer, \
    UserSerializer, UserSerializerWithToken
from .models import Profile, Product, ProductType, Billing, ShoppingCart, Shipping, OrderItem, TrackPackage, \
    OrderHistory


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProductView(viewsets.ModelViewSet):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductTypeView(viewsets.ModelViewSet):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = ProductType.objects.all()
    serializer_class = ProductTypeSerializer


class BillingView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = Billing.objects.all()
    serializer_class = BillingSerializer


class ShoppingCartView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer


class ShippingView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer


class OrderHistoryView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = OrderHistory.objects.all()
    serializer_class = OrderHistorySerializer


class OrderItemView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class TrackPackageView(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticated, IsOwner)
    queryset = TrackPackage.objects.all()
    serializer_class = TrackPackageSerializer
