from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.DaftarKegiatan.as_view(), name='daftar_kegiatan'),
    url(r'^(?P<kegiatan_id>\d+)$', views.ModifikasiKegiatan.as_view(), name='modif_kegiatan'),
    url(r'^(?P<kegiatan_id>\d+)/catatan/$', views.DaftarCatatan.as_view(), name='daftar_catatan'),
    url(r'^(?P<kegiatan_id>\d+)/catatan/(?P<catatan_id>\d+)/$', views.DaftarCatatan.as_view(), name='daftar_catatan'),
]
