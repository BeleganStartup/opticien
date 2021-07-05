# Django
from django.http.response import JsonResponse
from django.db.models import Q
# Django Rest Framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import NotFound
# Membership
from membership.models import Patient


class SearchPatient(APIView):
    """
    Search for specific term or return current page, otherwise return first page
    """
    def get(self, request, search_term):
        queue = Q(first_name__icontains=search_term) | Q(last_name__icontains=search_term)
        patients = Patient.objects.filter(queue)
        resp = {
            "detail":[
                {
                    "name":patient.__str__(),
                    "visites":12,
                    "id":patient.id
                } for patient in patients
            ],
        }
        return Response(resp, status=status.HTTP_200_OK)


class GetPatients(APIView):
    """
    Get Patients with Pagination
    """
    def get(self, request):
        patients = Patient.objects.all()
        resp = {
            "detail":[
                {
                    "name":patient.__str__(),
                    "visites":12,
                    "id":patient.id
                } for patient in patients
            ],
        }
        return Response(resp, status=status.HTTP_200_OK)