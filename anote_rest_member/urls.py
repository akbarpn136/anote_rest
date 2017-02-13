from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.DaftarMemberKegiatan.as_view(), name='daftar_member'),
]
