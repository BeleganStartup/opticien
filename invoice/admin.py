# Django
from django.contrib import admin
# Invoice
from invoice.models import Bon, Facture

# Register your models here.
@admin.register(Bon)
class BonAdmin(admin.ModelAdmin):
    pass


@admin.register(Facture)
class FactureAdmin(admin.ModelAdmin):
    pass