from django.urls import path, include
from .views import user_dater,user_messages, find_user


urlpatterns = [
    path('Dater/<int:pk>/', user_dater),
    path('find_user/<str:username>/', find_user),
    path('messages/', user_messages),
]
