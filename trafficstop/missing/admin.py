from django.contrib import admin

from .models import MissingPerson


@admin.register(MissingPerson)
class MissingPersonAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "height",
        "weight",
        "birth_date",
        "last_seen",
        "description",
        "photo_url",
        "created_on",
    )
