from django.contrib import admin
from .models import User


# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    # add_form_template = "admin/auth/user/add_form.html"
    change_user_password_template = None
    fieldsets = (
        (
            None,
            {"fields": ("username", "password")},
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    # "roles",
                    "is_staff",
                    "is_superuser",
                    # "groups",
                    # "user_permissions"
                ),
            },
        ),
        (
            "Important dates",
            {"fields": ("last_login", "date_joined")},
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "password1",
                    "password2",
                ),
            },
        ),
    )
    list_display = ("id", "username", "is_staff", "is_active")
    list_display_links = ("username",)
    # actions = None
    list_filter = (
        "is_staff",
        "is_superuser",
        "is_active",
    )
    search_fields = ("username",)
    readonly_fields = ("last_login", "date_joined")
