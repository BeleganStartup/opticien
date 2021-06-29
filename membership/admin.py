# Django
from django.contrib import admin
# Membership
from membership.models import Patient, Visite

# Register your models here.
@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    pass


@admin.register(Visite)
class VisiteAdmin(admin.ModelAdmin):
    pass