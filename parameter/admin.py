# Django
from django.contrib import admin
# Parameter
from parameter.models import Header

# Register your models here.
@admin.register(Header)
class HeaderAdmin(admin.ModelAdmin):
    pass
