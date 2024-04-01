from django.db import models

# from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError


def validate_file_size(value):
    max_size = 1073741824  # 1 GB
    if value.size > max_size:
        raise ValidationError("El tamaño del archivo no puede ser mayor de 1 GB.")


class task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    git = models.URLField(verbose_name="GitHub URL", blank=True)
    video = models.FileField(upload_to="videos/", validators=[validate_file_size])
    archivo = models.FileField(upload_to="Archivos/", validators=[validate_file_size])
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title
