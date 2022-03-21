from django.urls import path, include
from .views import user_dater,user_emergency_contact,get_all_messages


urlpatterns = [
    path('Dater/<int:pk>/', user_dater),
    path('emergency_contact/<int:pk>/', user_emergency_contact),
    path('messages/<int:pk>/', get_all_messages),
]
