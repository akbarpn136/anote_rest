from django.db import models

from anote_rest_apl.models import Kegiatan


# Create your models here.
class MemberKegiatan(models.Model):
    OPSI_JABATAN = (
        ('TS', 'Technical Staff'),
        ('ES', 'Engineering Staff'),
        ('LD', 'Leader'),
        ('GL', 'Group Leader'),
        ('PM', 'Program Manager'),
        ('CE', 'Chief Engineering'),
    )

    kegiatan = models.ForeignKey(Kegiatan, related_name='nama_kegiatan', on_delete=models.CASCADE)
    personil = models.ForeignKey('auth.User', related_name='personil')
    jabatan = models.CharField(max_length=2, choices=OPSI_JABATAN, default='ES')
    kode_jabatan = models.CharField(max_length=10, verbose_name='Kode Jabatan')

    class Meta:
        ordering = ('kode_jabatan',)
        verbose_name_plural = 'Member Kegiatan'

    def __str__(self):
        return '%s: %s' % (self.kode_jabatan, self.personil.get_full_name())
