from rest_framework import serializers

from . import models


class ButirSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ButirKerekayasaan
        fields = '__all__'
