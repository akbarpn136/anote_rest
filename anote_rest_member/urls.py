from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.DaftarMemberKegiatan.as_view(), name='daftar_member'),
    url(r'^(?P<member_id>\d+)/$', views.ModifikasiMemberKegiatan.as_view(), name='modifikasi_member'),
]
