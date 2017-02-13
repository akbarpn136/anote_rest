from django.db import models

from anote_rest_apl.models import Kegiatan


# Create your models here.
class MemberKegiatan(models.Model):
    kegiatan = models.ForeignKey(Kegiatan, related_name='nama_kegiatan', on_delete=models.CASCADE)
    personil = models.ForeignKey('auth.User', related_name='personil')
