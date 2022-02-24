# Generated by Django 2.2.6 on 2022-02-23 12:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0006_auto_20220218_1528'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentpapercontact',
            name='cumulative_time',
            field=models.DurationField(default=datetime.timedelta(0), verbose_name='答题累计时间'),
        ),
        migrations.AlterField(
            model_name='studentanswer',
            name='score',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='学生这道题的得分'),
        ),
        migrations.AlterField(
            model_name='studentpapercontact',
            name='score',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='总分'),
        ),
    ]