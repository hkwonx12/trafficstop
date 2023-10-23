from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import MissingPerson
from .encoders import MissingPersonEncoder
# from reporters.models import Reporter


@require_http_methods(["POST", "GET"])
def api_missingperson(request):
    """
    POST: creates a new missing person
    GET: returns the list of missing persons
    """
    if request.method == "POST":
        new_person = json.loads(request.body)

        # try:
        # reporter = Reporter.objects.get(id=new_person["reporter_id"])
        # new_person["reporter"] = reporter
        person = MissingPerson.objects.create(**new_person)
        return JsonResponse(
            person,
            encoder=MissingPersonEncoder,
            safe=False,
        )
        # except Reporter.DoesNotExist:
        #     return JsonResponse(
        #         {"ERROR": "Reporter with this ID does not exist"},
        #     )
    else:
        people = MissingPerson.objects.all()
        return JsonResponse(
            {"people": people},
            encoder=MissingPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_persondetails(request, id):
    """
    GET: returns the missing person object
    PUT: updates the missing person object
    DELETE: deletes the missing person object
    """
    if request.method == "GET":
        try:
            person = MissingPerson.objects.get(id=id)
            return JsonResponse(
                person,
                encoder=MissingPersonEncoder,
                safe=False,
            )
        except MissingPerson.DoesNotExist:
            return JsonResponse(
                {"ERROR": f"No person with ID {id} exists"},
                status=404
            )
    elif request.method == "PUT":
        content = json.loads(request.body)
        MissingPerson.objects.filter(id=id).update(**content)
        try:
            person = MissingPerson.objects.get(id=id)
            return JsonResponse(
                person,
                encoder=MissingPersonEncoder,
                safe=False
            )
        except MissingPerson.DoesNotExist:
            return JsonResponse(
                {"ERROR": f"No person with ID {id} exists"},
                status=404
            )
    else:
        # DELETE
        try:
            count, _ = MissingPerson.objects.filter(id=id).delete()
            return JsonResponse({"delete": count > 0})
        except MissingPerson.DoesNotExist:
            return JsonResponse(
                {"ERROR": "No person with ID {id} exists"},
                status=404
            )
