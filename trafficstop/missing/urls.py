from django.urls import path
from .views import api_missingperson

urlpatterns = [
    path("", api_missingperson, name="api_missingperson"),
]
