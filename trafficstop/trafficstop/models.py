from django.db import models
from django.conf import settings

class Person(models.model):
    name = models.CharField(max_length=200)
    weight = models.BigIntegerField()
    age = models.IntegerField()
    last_seen = models.DateTimeField(auto_now=False)
    description = models.TextField()
