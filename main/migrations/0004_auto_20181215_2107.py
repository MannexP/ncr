# Generated by Django 2.1.4 on 2018-12-15 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20181212_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='billing',
            name='cvv',
            field=models.IntegerField(default=0),
        ),
    ]
