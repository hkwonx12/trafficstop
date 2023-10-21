from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .models import Reporter
from .encoders import ReporterEncoder


@require_http_methods(["GET"])
def api_reporter(request):
    """
    GET: returns the list of reporters
    """
    reporters = Reporter.objects.all()
    return JsonResponse(
        {"reporters": reporters},
        encoder=ReporterEncoder,
        safe=False,
    )
