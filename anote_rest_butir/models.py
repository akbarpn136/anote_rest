from django.db import models


# Create your models here.
class ButirKerekayasaan(models.Model):
    OPSI_HASIL = (
        ('LK', 'Lembar Kerja'),
        ('LKB', 'Lembar Kerja/Logbook'),
        ('LKF', 'Lembar Kerja/Foto'),
        ('BKL', 'Benda Kerja/Lembar Kerja'),
        ('LB', 'Logbook'),
        ('SKP', 'Surat Keputusan'),
        ('TN', 'Technical Note'),
    )

    OPSI_PELAKSANA = (
        ('pertama', 'Perekayasa Pertama'),
        ('pertama_muda', 'Perekayasa Pertama/Muda'),
        ('muda', 'Perekayasa Muda'),
        ('muda_madya', 'Perekayasa Muda/Madya'),
        ('madya', 'Perekayasa Madya'),
        ('madya_utama', 'Perekayasa Madya/Utama'),
        ('utama', 'Perekayasa Utama'),
        ('semua', 'Semua Jenjang'),
    )

    nama = models.TextField()
    butir = models.CharField(max_length=120)
    hasil = models.CharField(max_length=3, choices=OPSI_HASIL, default='LK')
    angka = models.FloatField()
    pelaksana = models.CharField(max_length=15, choices=OPSI_PELAKSANA, default='pertama')

    class Meta:
        verbose_name_plural = 'Butir Kerekayasaan'

    def __str__(self):
        return '%s: %s' % (self.butir, self.nama)
