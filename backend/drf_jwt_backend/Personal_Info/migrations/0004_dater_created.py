# Generated by Django 4.0.3 on 2022-03-28 20:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Personal_Info', '0003_alter_dater_emergency_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='dater',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
