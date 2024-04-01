from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Define la información de la API para Swagger
api_info = openapi.Info(
    title="INTEGRADOR",
    default_version="v1",
    description="INTEGRADOR API",
    terms_of_service="https://www.example.com/terms/",
    contact=openapi.Contact(email="contact@example.com"),
    license=openapi.License(name="BSD License"),
)

# Crea una vista de esquema Swagger
schema_view = get_schema_view(
    api_info,
    public=True,
)

# Define las URL de tu aplicación
urlpatterns = [
    path("admin/", admin.site.urls),
    path("tasks/", include("tasks.urls")),
    path("users/", include("users.urls")),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("login/", auth_views.LoginView.as_view(), name="login"),
]

# Si DEBUG está habilitado, sirve los archivos estáticos
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
