"""anote_rest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api_1/', include('rest_framework.urls', namespace='api_admin')),
    url(r'^api_1/kegiatan/', include('anote_rest_apl.urls', namespace='api_1_kegiatan')),
    url(r'^api_1/butir/', include('anote_rest_butir.urls', namespace='api_1_butir')),
    url(r'^api_1/profil/', include('anote_rest_profil.urls', namespace='api_1_profil')),
]
