# Generated by Django 2.1 on 2021-04-05 15:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='isActive',
            new_name='is_active',
        ),
    ]
