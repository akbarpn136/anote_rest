from django.shortcuts import get_object_or_404
from rest_framework import generics

from . import models
from . import serializers
from anote_rest_apl.permissions import IsSuperUser
from anote_rest_apl.models import Kegiatan


# Create your views here.
class DaftarMemberKegiatan(generics.ListCreateAPIView):
    queryset = models.MemberKegiatan.objects.all()
    serializer_class = serializers.MemberSerializer
    permission_classes = (IsSuperUser,)

    def get_queryset(self):
        q = models.MemberKegiatan.objects.filter(kegiatan=self.kwargs['kegiatan_id'])

        return q

    def perform_create(self, serializer):
        keg = get_object_or_404(Kegiatan, pk=self.kwargs['kegiatan_id'])

        serializer.save(kegiatan=keg)


class ModifikasiMemberKegiatan(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.MemberKegiatan.objects.all()
    serializer_class = serializers.MemberSerializer
    permission_classes = (IsSuperUser,)

    def get_object(self):
        q = get_object_or_404(models.MemberKegiatan, pk=self.kwargs['member_id'])

        return q

    def perform_update(self, serializer):
        keg = get_object_or_404(Kegiatan, pk=self.kwargs['kegiatan_id'])

        serializer.save(kegiatan=keg)
