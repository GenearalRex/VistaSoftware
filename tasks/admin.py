from django.contrib import admin
from .models import task

# Register your models here.


@admin.register(task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "description", "done"]
    list_display_links = ("title",)
    search_fields = [
        "description",
        "id",
    ]
