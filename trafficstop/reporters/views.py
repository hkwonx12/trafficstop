from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Reporter
from .encoders import ReporterEncoder


@require_http_methods(["GET", "POST"])
def api_reporter(request):
    """
    POST: creates a new reporter
    GET: returns the list of reporters
    """
    if request.method == "POST":
        new_reporter = json.loads(request.body)
        reporter = Reporter.objects.create(**new_reporter)
        return JsonResponse(
            reporter,
            encoder=ReporterEncoder,
            safe=False,
        )
    else:
        reporters = Reporter.objects.all()
        return JsonResponse(
            {"reporters": reporters},
            encoder=ReporterEncoder,
            safe=False,
        )
