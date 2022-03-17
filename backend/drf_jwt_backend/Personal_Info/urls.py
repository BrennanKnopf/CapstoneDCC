from django.urls import path, include
from .views import user_dater,user_personal_info,user_emergency_contact,get_all_messages


urlpatterns = [
    path('<int:pk>/Dater/', user_dater),
    path('<int:pk>/personal_info/', user_personal_info),
    path('<int:pk>/emergency_contact/', user_emergency_contact),
    path('<int:pk>/messages/', get_all_messages),
]
