from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.generic import ListView

from anote_rest_member.models import OPSI_JABATAN


# Create your views here.
class GetUser(ListView):
    def get(self, request, *args, **kwargs):
        user = [
            {'pk': u.pk, 'nama': u.get_full_name()} for u in User.objects.all()
        ]

        return JsonResponse(data=user, safe=False)


class GetJabatan(ListView):
    def get(self, request, *args, **kwargs):
        # jabatan = {o[0]: o[1] for o in OPSI_JABATAN}
        jabatan = [
            {'simbol': o[0], 'nama': o[1]} for o in OPSI_JABATAN
        ]

        return JsonResponse(data=jabatan, safe=False)
