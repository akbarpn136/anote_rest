# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-02-12 05:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('anote_rest_apl', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='catatan',
            options={'ordering': ('tanggal',), 'verbose_name_plural': 'Catatan'},
        ),
        migrations.AlterModelOptions(
            name='kegiatan',
            options={'ordering': ('-tanggal',), 'verbose_name_plural': 'Kegiatan'},
        ),
        migrations.AddField(
            model_name='catatan',
            name='isi',
            field=models.TextField(default=None),
        ),
    ]