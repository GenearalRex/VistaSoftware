from django.apps import apps
from django.utils import timezone
from django.contrib import auth
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.contrib.auth.validators import UnicodeUsernameValidator


# ----Rol de Usuario---- #
class Role(models.Model):
    name = models.CharField("Nombre", max_length=25)
    description = models.CharField(max_length=30, verbose_name="Descripción")
    is_active = models.BooleanField("Activo", default=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "INTEGRADOR_CAT_ROLES"
        verbose_name = "Rol"
        verbose_name_plural = "Roles"


# ----Administrador de Usuarios---- #
class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError("El nombre de usuario es obligatorio")

        GlobalUserModel = apps.get_model(
            self.model._meta.app_label,
            self.model._meta.object_name,
        )
        username = GlobalUserModel.normalize_username(username)
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superusuario debe tener is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superusuario debe tener is_superuser=True.")

        user = self._create_user(username, password, **extra_fields)
        user.roles.add(Role.objects.get(id=1))
        return user

    def with_perm(
        self, perm, is_active=True, include_superusers=True, backend=None, obj=None
    ):
        if backend is None:
            backends = auth._get_backends(return_tuples=True)
            if len(backends) == 1:
                backend, _ = backends[0]
            else:
                raise ValueError(
                    "Tiene varios backends de autenticación configurados y por lo tanto, debe proporcionar el argumento `backend`"
                )
        elif not isinstance(backend, str):
            raise TypeError(
                "backend debe ser una cadena de ruta de importación con puntos (got %r)."
                % backend
            )
        else:
            backend = auth.load_backend(backend)
        if hasattr(backend, "with_perm"):
            return backend.with_perm(
                perm,
                is_active=is_active,
                include_superusers=include_superusers,
                obj=obj,
            )
        return self.none()


# --- Usuarios - Model --- #
class User(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        "Usuario",
        max_length=30,
        unique=True,
        null=False,
        help_text="Obligatorio. 30 caracteres o menos. Letras, dígitos y @/./+/-/_ únicamente.",
        validators=[username_validator],
        error_messages={"unique": "Ya existe un usuario con este username."},
    )

    roles = models.ManyToManyField(
        Role, verbose_name="Rol", help_text="Designa el rol que tendrá el usuario"
    )
    is_staff = models.BooleanField(
        "Es staff",
        default=False,
        help_text="Designa si el usuario puede iniciar sesión en este sitio de administración",
    )
    is_active = models.BooleanField(
        "Es activo",
        default=True,
        help_text="Designa si este usuario debe ser tratado como activo. Desmarcar esto en lugar de eliminar cuentas",
    )

    date_joined = models.DateTimeField("Fecha de registro", default=timezone.now)
    objects = UserManager()

    USERNAME_FIELD = "username"

    def __str__(self):
        return self.username

    class Meta:
        db_table = "INTEGRADOR_CAT_USERS"
        managed = True
        verbose_name = "Usuario"
        verbose_name_plural = "Users"
