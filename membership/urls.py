# Django
from django.urls import path
# Membership
from membership.api.search import SearchPatient, GetPatients

urlpatterns = [
    path('search/<str:search_term>/', SearchPatient.as_view()),
    path('getPatients/', GetPatients.as_view()),
]