from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import MissingPerson
from .encoders import MissingPersonEncoder
from reporters.models import Reporter


@require_http_methods(["GET", "POST"])
def api_missingperson(request):
    """
    POST: creates a new missing person
    GET: returns the list of missing persons
    """
    if request.method == "POST":
        new_person = json.loads(request.body)

        reporter = Reporter.objects.get(id=new_person["reporter_id"])
        new_person["reporter"] = reporter

        try:
            person = MissingPerson.objects.create(**new_person)
            return JsonResponse(
                person,
                encoder=MissingPersonEncoder,
                safe=False,
            )
        except Reporter.DoesNotExist:
            return JsonResponse(
                {"ERROR": "Reporter with this ID does not exist"},
            )
    else:
        people = MissingPerson.objects.all()
        return JsonResponse(
            {"people": people},
            encoder=MissingPersonEncoder,
            safe=False,
        )
