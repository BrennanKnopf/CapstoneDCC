from django.contrib import admin
from .models import Personal_info
from .models import Dater
from .models import Messages

# Register your models here.
admin.site.register(Personal_info)
admin.site.register(Dater)
admin.site.register(Messages)
