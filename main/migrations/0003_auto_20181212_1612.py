# Generated by Django 2.1.4 on 2018-12-12 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_remove_orderhistory_field'),
    ]

    operations = [
        migrations.RenameField(
            model_name='billing',
            old_name='profie_id',
            new_name='profile_id',
        ),
    ]