from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers

from . import views

router = router.DefaultRouter()
router.register('profile', views.ProfileView)
router.register('shipping', views.ShippingView)
router.register('orderhistory', views.OrderHistoryView)
router.register('producttype', views.ProductTypeView)
router.register('product', views.ProductView)
router.register('shoppingcart', views.ShoppingCartView)
router.register('billing', views.BillingView)
router.register('orderitem', views.OrderItemView)
router.register('trackpackage', views.TrackPackageView)


urlpatterns = [
    # url(r'^$', views.FrontendAppView.as_view())
    path('', include(router.urls))
]
