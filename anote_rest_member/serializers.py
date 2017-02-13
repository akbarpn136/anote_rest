from rest_framework import serializers

from . import models


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MemberKegiatan
        fields = (
            'id',
            'kegiatan',
            'personil',
            'jabatan',
            'kode_jabatan'
        )
