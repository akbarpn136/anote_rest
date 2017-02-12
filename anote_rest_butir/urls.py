from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.DaftarButirKerekayasaan.as_view(), name='daftar_butir_kerekayasaan'),
    url(r'^(?P<butir_id>\d+)/$', views.ModifikasiButirKerekayasaan.as_view(),
        name='modifikasi_butir_kerekayasaan'),
]
