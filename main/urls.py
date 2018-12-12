import router as router
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers

from . import views

router = router.DefaultRouter()
router.register('profile', views.ProfileView)
router.register('shipping', views.ShippingView)
router.register('order_history', views.OrderHistoryView)
router.register('product_type', views.ProductTypeView)
router.register('product', views.ProductView)
router.register('shopping_cart', views.ShoppingCartView)
router.register('billing', views.BillingView)
router.register('order_item', views.OrderItemView)
router.register('track_package', views.TrackPackageView)


urlpatterns = [
    # url(r'^$', views.FrontendAppView.as_view())
    path('', include(router.urls))
]
