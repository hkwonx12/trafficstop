from django.urls import path
from .views import api_missingperson, api_persondetails

urlpatterns = [
    path("", api_missingperson, name="api_missingperson"),
    path("<int:id>/", api_persondetails, name="api_persondetails"),
]
