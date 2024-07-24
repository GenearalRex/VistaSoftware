from django.contrib import admin
from .models import Task

# Register your models here.


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "description", "done", "checkbox"]
    list_display_links = ("title",)
    search_fields = [
        "description",
        "id",
    ]
