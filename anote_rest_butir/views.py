from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import permissions

from . import models
from . import serializers


# Create your views here.
class IsSuperUser(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_superuser:
            return True
        else:
            return False


class DaftarButirKerekayasaan(generics.ListCreateAPIView):
    queryset = models.ButirKerekayasaan.objects.all()
    serializer_class = serializers.ButirSerializer
    permission_classes = (IsSuperUser, )


class ModifikasiButirKerekayasaan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ButirKerekayasaan.objects.all()
    serializer_class = serializers.ButirSerializer
    permission_classes = (IsSuperUser,)

    def get_object(self):
        q = get_object_or_404(models.ButirKerekayasaan, pk=self.kwargs['butir_id'])

        return q
