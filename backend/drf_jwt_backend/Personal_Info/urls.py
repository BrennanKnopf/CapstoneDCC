from django.urls import path, include
from Personal_Info import views


urlpatterns = [
    path('', views.user_dater),
]
