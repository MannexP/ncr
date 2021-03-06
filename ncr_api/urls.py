"""ncr_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from . import views

urlpatterns = [
    path('api/', include('main.urls')),
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),
    url(r'^$', views.FrontendAppView.as_view())
]

REACT_ROUTES = ['build-a-solution', 'checkout', 'products', 'create-profile', 'profile', 'thank-you', 'login', 'signup', 'solution-products']

for route in REACT_ROUTES:

    urlpatterns += [
        path(f'{route}', views.FrontendAppView.as_view())
    ]