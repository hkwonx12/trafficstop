from django.db import models

from missing.models import MissingPerson
# from reporters.models import Reporter


class Sighting(models.Model):
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=20)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    date_sighted = models.DateTimeField()
    description = models.TextField(blank=True, null=True)
    photo_url = models.URLField(blank=True, null=True)
    sighting_reporter = models.CharField(max_length=50)
    person = models.ForeignKey(
        MissingPerson,
        related_name="sighting",
        on_delete=models.CASCADE,
    )
    # sighting_reporter = models.ForeignKey(
    #     Reporter,
    #     related_name="sighting",
    #     on_delete=models.PROTECT,
    # )
