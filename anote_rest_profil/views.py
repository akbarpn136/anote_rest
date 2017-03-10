from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.generic import ListView


# Create your views here.
class GetPersonil(ListView):
    def get_queryset(self):
        q = User.objects.all()

        return q

    def get_object(self):
        q = get_object_or_404(User, pk=self.kwargs['personil_id'])

        return q

    def get(self, request, *args, **kwargs):
        personil = {
            'nama': self.get_object().get_full_name()
        }

        return JsonResponse(data=personil, safe=False)
