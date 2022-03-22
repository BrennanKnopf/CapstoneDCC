from django.urls import path, include
from .views import user_dater,user_emergency_contact,user_messages


urlpatterns = [
    path('Dater/<int:pk>/', user_dater),
    path('emergency_contact/<int:pk>/', user_emergency_contact),
    path('messages/', user_messages),
]
