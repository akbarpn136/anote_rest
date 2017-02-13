from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.DaftarKegiatan.as_view(), name='daftar_kegiatan'),
]
