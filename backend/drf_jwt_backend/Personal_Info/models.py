from django.db import models
from django.contrib.auth.models import User



class Dater(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_info = models.CharField(max_length=100)
    unique_password = models.CharField(max_length=50)
    emergency_contact= models.ForeignKey('self', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name="emergency_contact1")

class Messages(models.Model):
    dater = models.ForeignKey(Dater, on_delete=models.CASCADE, related_name="dater1")
    emergency_contact = models.ForeignKey(Dater, on_delete=models.CASCADE, default=None, related_name= "emergency_contact2")
    message = models.CharField(max_length=200, default=None)