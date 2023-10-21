from django.urls import path
from .views import api_sightings

urlpatterns = [
    path("<int:person_id>/sightings/", api_sightings, name="api_sightings"),
]
