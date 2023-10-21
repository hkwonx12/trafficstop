from common.json import ModelEncoder
from .models import MissingPerson
from reporters.encoders import ReporterEncoder


class MissingPersonEncoder(ModelEncoder):
    model = MissingPerson
    properties = [
        "name",
        "height",
        "weight",
        "birth_date",
        "last_seen",
        "description",
        "photo_url",
        "created_on",
        "reporter",
    ]
    encoders = {
        "reporter": ReporterEncoder(),
    }
