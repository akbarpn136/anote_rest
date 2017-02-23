from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.generic import ListView
from rest_framework import generics
from rest_framework.authtoken.models import Token

from anote_rest_apl.permissions import (
    IsSuperUser, HasActivityPermission,
    IsSuperUserOrReadonly, IsOwner
)

from . import serializers
from . import models


# Create your views here.
class DaftarKegiatan(generics.ListCreateAPIView):
    queryset = models.Kegiatan.objects.all()
    serializer_class = serializers.KegiatanSerializer
    permission_classes = (IsSuperUserOrReadonly, )


class ModifikasiKegiatan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Kegiatan.objects.all()
    serializer_class = serializers.KegiatanSerializer
    permission_classes = (IsSuperUserOrReadonly,)

    def get_object(self):
        q = get_object_or_404(models.Kegiatan, pk=self.kwargs['kegiatan_id'])

        return q


class DaftarCatatan(generics.ListCreateAPIView):
    queryset = models.Catatan.objects.all()
    serializer_class = serializers.CatatanSerializer
    permission_classes = (HasActivityPermission,)
    izin_kegiatan = {}

    def dispatch(self, request, *args, **kwargs):
        self.izin_kegiatan['GET'] = kwargs['kegiatan_id']
        self.izin_kegiatan['POST'] = kwargs['kegiatan_id']

        return super(DaftarCatatan, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
        q = models.Catatan.objects.filter(kegiatan=self.kwargs['kegiatan_id'])

        return q

    def perform_create(self, serializer):
        keg = get_object_or_404(models.Kegiatan, pk=self.kwargs['kegiatan_id'])

        serializer.save(dibuat=self.request.user, kegiatan=keg)


class ModifikasiCatatan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Catatan.objects.all()
    serializer_class = serializers.CatatanSerializer
    permission_classes = (HasActivityPermission, IsOwner, )
    izin_kegiatan = {}

    def dispatch(self, request, *args, **kwargs):
        self.izin_kegiatan['GET'] = kwargs['kegiatan_id']
        self.izin_kegiatan['POST'] = kwargs['kegiatan_id']
        self.izin_kegiatan['PUT'] = kwargs['kegiatan_id']
        self.izin_kegiatan['DELETE'] = kwargs['kegiatan_id']

        return super(ModifikasiCatatan, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
        q = models.Catatan.objects.filter(kegiatan=self.kwargs['kegiatan_id'])

        return q

    def get_object(self):
        q = get_object_or_404(models.Catatan,
                              kegiatan=self.kwargs['kegiatan_id'],
                              pk=self.kwargs['catatan_id'])

        return q

    def perform_update(self, serializer):
        serializer.save(dibuat=self.request.user)


class CheckToken(ListView):
    model = Token

    def get_queryset(self):
        token = Token.objects.filter(key=self.kwargs['token'])

        return token

    def get(self, request, *args, **kwargs):
        isExist = self.get_queryset().exists()
        stat = {
            'exist': isExist
        }

        return JsonResponse(data=stat, safe=False)
