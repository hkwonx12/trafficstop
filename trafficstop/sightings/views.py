from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Sighting
from .encoders import SightingEncoder


@require_http_methods(["GET"])
def api_sightings(request, person_id):
    """
    POST: creates a new sighting for a person
    GET: returns the list of sightings for a person
    """
    if request.method == "GET":
        sightings = Sighting.objects.filter(person=person_id)
        return JsonResponse(
            {"sightings": sightings},
            encoder=SightingEncoder,
            safe=False,
        )
