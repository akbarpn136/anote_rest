from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^(?P<personil_id>\d+)/personil/$', views.GetPersonil.as_view(), name='ambil_personil'),
]
