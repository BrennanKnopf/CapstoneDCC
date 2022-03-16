from rest_framework import serializers
from .models import Personal_info, Messages, Dater



class Personal_infoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal_info
        fields = ['id', 'hair_color', 'eye_color', 'name', 'user_id', 'weight', 'height']
        depth = 1

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['id', 'first_check_in', 'second_check_in', 'name', 'final_warning']
        depth = 1

class DaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dater
        fields = ['id', 'personal_info', 'emergency_contact', 'date_info', 'user_id', 'unique_password', 'messages']
        depth = 1