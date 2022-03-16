from django.db import models
from django.contrib.auth.models import User


class Personal_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hair_color = models.CharField(max_length=30)
    eye_color = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    weight = models.IntegerField()
    height = models.IntegerField()


class Emergency_contact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Dater(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    personal_info = models.ForeignKey(Personal_info, on_delete=models.CASCADE)
    date_info = models.CharField(max_length=100)
    unique_password = models.CharField(max_length=50)
    emergency_contact= models.ForeignKey(Emergency_contact, on_delete=models.CASCADE, default=None)

class Messages(models.Model):
    dater = models.ForeignKey(Dater, on_delete=models.CASCADE)
    emergency_contact = models.ForeignKey(Emergency_contact, on_delete=models.CASCADE, default=None)
    first_check_in = models.CharField(max_length=100)
    second_check_in = models.CharField(max_length=100)
    final_warning = models.CharField(max_length=100)