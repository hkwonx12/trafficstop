from django.urls import path
from .views import api_sightings, api_sighting

urlpatterns = [
    path("<int:person_id>/sightings/", api_sightings, name="api_sightings"),
    path("<int:person_id>/sightings/<int:sighting_id>/", api_sighting, name="api_sighting"),
]
