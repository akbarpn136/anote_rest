from django.db import models


# Create your models here.
class Kegiatan(models.Model):
    nama = models.CharField(max_length=255)
    stkk = models.CharField(max_length=255)
    kode = models.CharField(max_length=100)
    tanggal = models.DateField()

    class Meta:
        verbose_name_plural = 'Kegiatan'
        ordering = ('-tanggal',)

    def __str__(self):
        return '%s: %s' % (self.stkk, self.nama)


class Catatan(models.Model):
    OPSI_JENIS = (
        ('LK', 'Lembar Kerja'),
        ('LB', 'Logbook'),
    )

    jenis = models.CharField(max_length=3, choices=OPSI_JENIS, default='LK')
    kegiatan = models.ForeignKey(Kegiatan, on_delete=models.CASCADE, related_name='catatan_kegiatan')
    nomor = models.CharField(max_length=255)
    referensi = models.CharField(max_length=255)
    tanggal = models.DateField()
    butir = models.CharField(max_length=120)
    angka = models.FloatField()
    isi = models.TextField(default=None)
    dibuat = models.ForeignKey('auth.User', related_name='dibuat_oleh')
    diketahui = models.ForeignKey('auth.User', related_name='diketahui_oleh')

    class Meta:
        verbose_name_plural = 'Catatan'
        ordering = ('tanggal',)

    def __str__(self):
        return self.nomor
