from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import permissions

from anote_rest_apl.permissions import IsSuperUser
from . import models
from . import serializers


# Create your views here.
class DaftarButirKerekayasaan(generics.ListCreateAPIView):
    queryset = models.ButirKerekayasaan.objects.all()
    serializer_class = serializers.ButirSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class ModifikasiButirKerekayasaan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ButirKerekayasaan.objects.all()
    serializer_class = serializers.ButirSerializer
    permission_classes = (IsSuperUser,)

    def get_object(self):
        q = get_object_or_404(models.ButirKerekayasaan, pk=self.kwargs['butir_id'])

        return q
