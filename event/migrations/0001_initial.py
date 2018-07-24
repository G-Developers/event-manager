# Generated by Django 2.0.7 on 2018-07-24 06:21

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('organisation', '0003_organisation_logo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('registration_url', models.TextField(default=None, null=True)),
                ('start_datetime', models.DateTimeField()),
                ('end_datetime', models.DateTimeField()),
                ('cover', models.FileField(null=True, upload_to='events/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png'])])),
            ],
        ),
        migrations.CreateModel(
            name='EventLocation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('logo', models.FileField(null=True, upload_to='location/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png'])])),
            ],
        ),
        migrations.CreateModel(
            name='EventSponser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('logo', models.FileField(null=True, upload_to='sponser/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png'])])),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='event.EventLocation'),
        ),
        migrations.AddField(
            model_name='event',
            name='organisation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='organisation.Organisation'),
        ),
        migrations.AddField(
            model_name='event',
            name='sponser',
            field=models.ManyToManyField(blank=True, to='event.EventSponser'),
        ),
    ]
