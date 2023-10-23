from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Sighting
from .encoders import SightingEncoder
# from reporters.models import Reporter
from missing.models import MissingPerson


@require_http_methods(["GET", "POST"])
def api_sightings(request, person_id):
    """
    GET: returns the list of sightings for a person
    POST: creates a new sighting for a person
    """
    if request.method == "GET":
        sightings = Sighting.objects.filter(person=person_id)
        return JsonResponse(
            {"sightings": sightings},
            encoder=SightingEncoder,
            safe=False,
        )
    else:
        # POST
        new_sighting = json.loads(request.body)

        # try:
        #     reporter = Reporter.objects.get(id=new_sighting["sighting_reporter"])
        #     new_sighting["sighting_reporter"] = reporter
        # except Reporter.DoesNotExist:
        #     return JsonResponse(
        #         {"ERROR": f"Reporter {new_sighting['reporter_id']} does not exist"},
        #         status=404
        #     )

        try:
            person = MissingPerson.objects.get(id=person_id)
            new_sighting["person"] = person
        except MissingPerson.DoesNotExist:
            return JsonResponse(
                {"ERROR": f"Person {person_id} does not exist."},
                status=404
            )

        sighting = Sighting.objects.create(**new_sighting)
        return JsonResponse(
            sighting,
            encoder=SightingEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_sighting(request, person_id, sighting_id):
    """
    GET: returns the sighting
    PUT: updates the sighting
    DELETE: deletes the sighting
    """
    if request.method == "GET":
        try:
            sighting = Sighting.objects.get(id=sighting_id, person=person_id)
            return JsonResponse(
                sighting,
                encoder=SightingEncoder,
                safe=False,
            )
        except Sighting.DoesNotExist:
            return JsonResponse(
                {"ERROR": f"Sighting {sighting_id} does not exist."},
                status=404
            )
    elif request.method == "PUT":
        content = json.loads(request.body)
        Sighting.objects.filter(id=sighting_id).update(**content)
        try:
            sighting = Sighting.objects.get(id=sighting_id)
            return JsonResponse(
                sighting,
                encoder=SightingEncoder,
                safe=False
            )
        except Sighting.DoesNotExist:
            return JsonResponse(
                {"ERROR": f"Sighting {sighting_id} does not exist."},
                status=404
            )
    else:
        # DELETE
        try:
            count, _ = Sighting.objects.filter(id=sighting_id).delete()
            return JsonResponse({"delete": count > 0})
        except Sighting.DoesNotExist:
            return JsonResponse(
                {"ERROR": f"Sighting {sighting_id} does not exist."},
                status=404
            )
