# from django.db import models

# from reporters.models import Reporter


# class MissingPerson(models.Model):
#     name = models.CharField(max_length=200)
#     height = models.CharField(max_length=100)
#     weight = models.CharField(max_length=100)
#     birth_date = models.DateField
#     last_seen = models.DateField
#     description = models.TextField
#     photo_url = models.CharField(max_length=200)
#     created_on = models.DateField
#     reporter = models.ForeignKey(
#         Reporter,
#         related_name="reporter",
#         on_delete=models.PROTECT,
#     )
