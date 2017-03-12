from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^user/$', views.GetUser.as_view(), name='ambil_user'),
    url(r'^jabatan/$', views.GetJabatan.as_view(), name='ambil_jabatan'),
]
