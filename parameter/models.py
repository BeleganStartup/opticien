# Django
from django.db import models

# Create your models here.
class Header(models.Model):
    bon_content     = models.TextField("Bon Entête")
    facture_content = models.TextField("Facture Entête")

    class Meta:
        verbose_name = "Entête"
        verbose_name_plural = "En-têtes"

    def __str__(self):
        return "En-têtes"
