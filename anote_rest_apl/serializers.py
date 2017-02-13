from rest_framework import serializers

from . import models


class KegiatanSerializer(serializers.ModelSerializer):
    catatan_kegiatan = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    anggota_kegiatan = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = models.Kegiatan
        fields = (
            'id',
            'nama',
            'stkk',
            'kode',
            'tanggal',
            'catatan_kegiatan',
            'anggota_kegiatan',
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
