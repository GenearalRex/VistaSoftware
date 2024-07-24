from django.db import models
from .choices import CATEGORY_CHOICES
import os
from django.conf import settings
from django.core.exceptions import ValidationError
from django.utils.timezone import now


def validate_file_size(value):
    max_size = 1073741824  # 1 GB
    if value.size > max_size:
        raise ValidationError("El tamaño del archivo no puede ser mayor de 1 GB.")


def get_upload_path(instance, filename):
    if instance.pk is None:
        return f"uploads/temp/{filename}"
    current_date = now().strftime("%Y%m%d")
    return f"uploads/{current_date}_{instance.pk}/{filename}"


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    git = models.URLField(verbose_name="GitHub URL", blank=True)
    video = models.FileField(upload_to=get_upload_path, validators=[validate_file_size])
    archivo = models.FileField(
        upload_to=get_upload_path, validators=[validate_file_size]
    )
    done = models.BooleanField(default=False)
    checkbox = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(default=now)

    class Meta:
        db_table = "INTEGRADOR_CAT_TASK"
        managed = True
        verbose_name = "Tarea"
        verbose_name_plural = "Tareas"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):

        # Si el objeto se acaba de crear, mover los archivos al directorio correcto
        temp_dir = os.path.join(settings.MEDIA_ROOT, "uploads/temp")
        current_date = now().strftime("%Y%m%d")
        new_dir = os.path.join(settings.MEDIA_ROOT, f"uploads/{current_date}_{self.pk}")

        if not os.path.exists(new_dir):
            os.makedirs(new_dir)

        for field in ["video", "archivo"]:
            file_field = getattr(self, field)
            temp_file_path = os.path.join(temp_dir, os.path.basename(file_field.name))
            if file_field and os.path.exists(temp_file_path):
                new_file_path = os.path.join(new_dir, os.path.basename(file_field.name))
                os.rename(temp_file_path, new_file_path)
                file_field.name = f"uploads/{current_date}_{self.pk}/{os.path.basename(file_field.name)}"

        # Guardar de nuevo para actualizar las rutas de los archivos
        super().save(*args, **kwargs)
