# Generated by Django 3.1.4 on 2020-12-30 21:43

import contacts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0007_remove_contact_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='image',
            field=models.ImageField(default='contacts/default.jpg', upload_to=contacts.models.upload_to, verbose_name='Image'),
        ),
    ]