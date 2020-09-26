from django.urls import path

from . import views


urlpatterns = [
    path('tattoos/<int:tattoo_id>/', views.get_tattoo),
    path('tattoos/', views.get_tattoos),
]
