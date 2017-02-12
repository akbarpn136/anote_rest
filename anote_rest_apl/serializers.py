from rest_framework import serializers

from . import models


class KegiatanSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Kegiatan
        fields = (
            'id',
            'nama',
            'stkk',
            'kode',
            'tanggal',
        )


class CatatanSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Catatan
        fields = (
            'id',
            'jenis',
            'kegiatan',
            'nomor',
            'referensi',
            'tanggal',
            'butir',
            'angka',
            'isi',
            'dibuat',
            'diketahui',
        )
