# Generated by Django 4.2.6 on 2023-10-23 01:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("missing", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Sighting",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("address", models.CharField(max_length=200)),
                ("city", models.CharField(max_length=100)),
                ("state", models.CharField(blank=True, max_length=20, null=True)),
                ("postal_code", models.CharField(blank=True, max_length=20, null=True)),
                ("country", models.CharField(max_length=100)),
                ("date_sighted", models.DateTimeField()),
                ("description", models.TextField(blank=True, null=True)),
                ("photo_url", models.URLField(blank=True, null=True)),
                ("sighting_reporter", models.CharField(max_length=50)),
                (
                    "person",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="sighting",
                        to="missing.missingperson",
                    ),
                ),
            ],
        ),
    ]
