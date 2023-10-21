from django.db import models
from django.urls import reverse


class Reporter(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200, null=True, blank=True)
    receive_updates = models.BooleanField(default=False)

    def __str__(self):
        return self.name
        # returns the model name in the Django admin interface

    def get_api_url(self):
        return reverse("api_reporter", kwargs={"pk": self.id})
