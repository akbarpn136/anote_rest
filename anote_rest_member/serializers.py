from rest_framework import serializers

from . import models


class MemberSerializer(serializers.ModelSerializer):
    personil_fullname = serializers.SerializerMethodField('get_user_fullname')
    nama_kegiatan = serializers.SerializerMethodField('ambil_nama_kegiatan')

    class Meta:
        model = models.MemberKegiatan
        fields = (
            'id',
            'kegiatan',
            'nama_kegiatan',
            'personil_fullname',
            'personil',
            'jabatan',
            'kode_jabatan',
            'order'
        )

    @staticmethod
    def get_user_fullname(obj):
        return obj.get_user_fullname()

    @staticmethod
    def ambil_nama_kegiatan(obj):
        return obj.get_nama_kegiatan()
