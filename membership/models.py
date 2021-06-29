# Django
from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class Patient(models.Model):
    first_name = models.CharField("Prénom", max_length=64)
    last_name  = models.CharField("Nom", max_length=64)

    class Meta:
        verbose_name = "Patient"
        verbose_name_plural = "Patients"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Visite(models.Model):
    patient  = models.ForeignKey("membership.Patient", verbose_name="Patient", on_delete=models.CASCADE)
    medecin  = models.CharField("Médecin", max_length=64)
    date     = models.DateTimeField("Date & Heure", auto_now=False, auto_now_add=True)
    od       = models.TextField("Oeil Droit", help_text="(Sphere ; Cylindre ; Axe)")
    og       = models.TextField("Oeil Gauche", help_text="(Sphere ; Cylindre ; Axe)")
    addition = models.CharField("Addition", max_length=256)
    

    class Meta:
        verbose_name = "Visite"
        verbose_name_plural = "Visites"

    def __str__(self):
        return self.name

