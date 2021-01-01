# Generated by Django 3.1.4 on 2020-12-26 21:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('tel', models.CharField(blank=True, max_length=50)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('address', models.CharField(blank=True, max_length=100)),
                ('facebook', models.URLField(blank=True)),
                ('desc', models.CharField(blank=True, max_length=250)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
