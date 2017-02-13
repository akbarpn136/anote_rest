from rest_framework import generics

from . import models
from . import serializers
from anote_rest_butir.views import IsSuperUser


# Create your views here.
class DaftarMemberKegiatan(generics.ListCreateAPIView):
    queryset = models.MemberKegiatan.objects.all()
    serializer_class = serializers.MemberSerializer
    permission_classes = (IsSuperUser,)
