from django.conf.urls import url, include
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    url(r'^$', views.DaftarKegiatan.as_view(), name='daftar_kegiatan'),
    url(r'^token-auth/$', obtain_auth_token),
    url(r'^token-check/(?P<token>\w+)$', views.CheckToken.as_view(), name='cek_token'),
    url(r'^(?P<kegiatan_id>\d+)/$', views.ModifikasiKegiatan.as_view(), name='modifikasi_kegiatan'),
    url(r'^(?P<kegiatan_id>\d+)/catatan/$', views.DaftarCatatan.as_view(), name='daftar_catatan'),
    url(r'^(?P<kegiatan_id>\d+)/anggota/', include('anote_rest_member.urls', namespace='anggota_kegiatan')),
    url(r'^(?P<kegiatan_id>\d+)/catatan/(?P<catatan_id>\d+)/$', views.ModifikasiCatatan.as_view(),
        name='modifikasi_catatan'),
    url(r'^(?P<kegiatan_id>\d+)/member/$', views.DaftarCatatan.as_view(), name='daftar_member'),
]
