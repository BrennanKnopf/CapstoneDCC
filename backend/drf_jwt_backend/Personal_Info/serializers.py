from rest_framework import serializers
from .models import Messages, Dater, Emergency_contact




class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['id', 'first_check_in', 'second_check_in', 'final_warning']
        depth = 1

class DaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dater
        fields = ['id', 'emergency_contact', 'date_info', 'unique_password', 'user']

class Emergency_contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emergency_contact
        fields = ['id', 'user']
