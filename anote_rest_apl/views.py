from django.shortcuts import get_object_or_404
from rest_framework import generics

from . import serializers
from . import models


# Create your views here.
class DaftarKegiatan(generics.ListCreateAPIView):
    queryset = models.Kegiatan.objects.all()
    serializer_class = serializers.KegiatanSerializer


class ModifikasiKegiatan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Kegiatan.objects.all()
    serializer_class = serializers.KegiatanSerializer

    def get_object(self):
        q = get_object_or_404(models.Kegiatan, pk=self.kwargs['kegiatan_id'])

        return q


class DaftarCatatan(generics.ListCreateAPIView):
    queryset = models.Catatan.objects.all()
    serializer_class = serializers.CatatanSerializer

    def get_queryset(self):
        q = models.Catatan.objects.filter(kegiatan=self.kwargs['kegiatan_id'])

        return q


class ModifikasiCatatan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Catatan.objects.all()
    serializer_class = serializers.CatatanSerializer

    def get_queryset(self):
        q = models.Catatan.objects.filter(kegiatan=self.kwargs['kegiatan_id'])

        return q

    def get_object(self):
        q = get_object_or_404(models.Catatan,
                              kegiatan=self.get_queryset(),
                              pk=self.kwargs['catatan_id'])

        return q
