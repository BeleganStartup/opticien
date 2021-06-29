# Python
import json
# Django
from django.db import models

# Create your models here.
class Bon(models.Model):
    patient = models.ForeignKey("membership.Patient", verbose_name="Patient", on_delete=models.CASCADE)
    age     = models.PositiveIntegerField("Âge")
    date    = models.DateTimeField("Date & Heure", auto_now=False, auto_now_add=True)
    od      = models.DecimalField("Oeil Droit", max_digits=15, decimal_places=2, blank=True, null=True)
    og      = models.DecimalField("Oeil Gauche", max_digits=15, decimal_places=2, blank=True, null=True)
    monture = models.DecimalField("Monture", max_digits=15, decimal_places=2, blank=True, null=True)


    def total(self):
        """ Calculate Total of the Note only when og, od and monture
        are real numbers and note null values """
        total = 0.00
        if self.og:
            total += self.og
        if self.od:
            total += self.od
        if self.monture:
            total += self.monture
        return total

    class Meta:
        verbose_name = "Bon"
        verbose_name_plural = "Bons"

    def __str__(self):
        return f"{self.user.first_name} {self.user.first_name}"



class Facture(models.Model):
    patient = models.ForeignKey("membership.Patient", verbose_name="Patient", on_delete=models.CASCADE)
    age     = models.PositiveIntegerField("Âge")
    date    = models.DateTimeField("Date & Heure", auto_now=False, auto_now_add=True)
    content = models.TextField("Contenu")

    def total(self):
        """ Calculate total amount of the facture in numbers
        from JSON list of objects (items) """
        items = json.loads(self.content)
        # TODO: calculate the sum of invoice
        return items

    class Meta:
        verbose_name = "Facture"
        verbose_name_plural = "Factures"

    def __str__(self):
        return self.name
