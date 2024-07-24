# base/urls.py
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

schema_view = get_schema_view(
    openapi.Info(
        title="API Integrador",
        default_version="v1",
        description="Documentación de la API del Integrador",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contacto@integrador.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", include("users.urls")),  # Incluir las URLs de la app de usuarios
    path(
        "tasks/", include("tasks.urls")
    ),  # Asegúrate de hacer lo mismo para otras apps
    re_path(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
