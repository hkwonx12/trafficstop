from django.urls import path
from .views import api_reporter

urlpatterns = [
    path("", api_reporter, name="api_reporter"),
]
