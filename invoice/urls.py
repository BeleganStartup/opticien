# Django
from django.urls import path
# Invoice
from invoice.api.facture import FactureR

urlpatterns = [
    path('', FactureR.as_view(), name="PrintFacture"),
]