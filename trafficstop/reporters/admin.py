from django.contrib import admin

from .models import Reporter


@admin.register(Reporter)
class ReporterAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "receive_updates"
    )
