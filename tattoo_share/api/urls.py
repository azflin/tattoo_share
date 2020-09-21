from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from api.views import upload_tattoo, success


urlpatterns = [
    path('upload_tattoo', upload_tattoo, name='upload_tattoo'),
    path('success', success, name='success'),
]

