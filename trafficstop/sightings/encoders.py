from common.json import ModelEncoder
from .models import Sighting
# from reporters.encoders import ReporterEncoder
from missing.encoders import MissingPersonEncoder


class SightingEncoder(ModelEncoder):
    model = Sighting
    properties = [
        "id",
        "address",
        "city",
        "state",
        "postal_code",
        "country",
        "date_sighted",
        "description",
        "photo_url",
        "sighting_reporter",
        "person",
    ]
    encoders = {
        "person": MissingPersonEncoder(),
        # "sighting_reporter": ReporterEncoder(),
    }
