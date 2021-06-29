# Django
from django.http.response import JsonResponse
# Django Rest Framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import NotFound
# Paramter
from parameter.models import Header

""" CRUD for Facture """

class FactureR(APIView):

    @staticmethod
    def get_header_content():
        """
        Get Facture header or raise a 404 error
        """
        facture_header = Header.objects.last()
        if facture_header:
            facture_header = facture_header.facture_content
            return facture_header
        else:
            raise NotFound(detail="Erreur de paramètre, l'en-tête de la facture est introuvable, veuillez d'abord ajouter du contenu.")

    def get(self, request):
        facture_header = self.get_header_content()
        return Response({"detail":facture_header}, status=status.HTTP_200_OK)