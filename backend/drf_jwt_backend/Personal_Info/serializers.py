from functools import partial
from rest_framework import serializers
from .models import Messages, Dater




class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['id', 'dater', 'emergency_contact', 'message', 'latitude', 'longitude']
    

class DaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dater
        fields = ['id', 'emergency_contact', 'date_info', 'unique_password', 'user']



