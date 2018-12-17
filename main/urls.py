
from django.urls import path, include
from rest_framework import routers

from .views import current_user, UserList
from . import views

router = routers.DefaultRouter()
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
    path('', include(router.urls)),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]
