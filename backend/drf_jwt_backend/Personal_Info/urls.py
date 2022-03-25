from django.urls import path, include
from .views import user_dater,user_sent_messages, find_user, user_received_messages


urlpatterns = [
    path('Dater/<int:pk>/', user_dater),
    path('find_user/<str:username>/', find_user),
    path('messages/sent/', user_sent_messages),
    path('messages/received/', user_received_messages),
]
