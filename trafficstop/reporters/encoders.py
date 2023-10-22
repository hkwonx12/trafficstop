from common.json import ModelEncoder
from .models import Reporter


class ReporterEncoder(ModelEncoder):
    model = Reporter
    properties = [
        "id",
        "name"
    ]
