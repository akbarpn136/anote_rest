# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-02-12 10:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('anote_rest_apl', '0002_auto_20170212_1208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catatan',
            name='kegiatan',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='catatan_kegiatan', to='anote_rest_apl.Kegiatan'),
        ),
    ]
