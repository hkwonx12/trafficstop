from django.db import models

# from reporters.models import Reporter


class MissingPerson(models.Model):
    name = models.CharField(max_length=200)
    height = models.CharField(max_length=100)
    weight = models.CharField(max_length=100)
    birth_date = models.DateTimeField()
    last_seen = models.DateTimeField()
    description = models.TextField(blank=True, null=True)
    photo_url = models.URLField(blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    # reporter = models.ForeignKey(
    #     Reporter,
    #     related_name="person",
    #     on_delete=models.PROTECT,
    # )
    reporter = models.CharField(max_length=50)
