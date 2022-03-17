from django.urls import path, include
from Personal_Info import views


urlpatterns = [
    path('<int:pk>/Dater/', views.user_dater),
    path('<int:pk>/personal_info/', views.user_personal_info),
    path('<int:pk>/emergency_contact/', views.user_emergency_contact),
    path('<int:pk>/messages/', views.get_all_messages),
]
