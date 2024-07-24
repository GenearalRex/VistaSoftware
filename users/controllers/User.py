from rest_framework.decorators import action
from rest_framework.response import Response
from base.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

from ..models import User
from ..serializers import Userserializer

# from django.contrib.auth.models import User


class UserController(GenericViewSet):
    model = User
    serializers = {
        "default": Userserializer,
    }

    def retrieve(self, request, pk):
        data = self.get_object(pk)
        serializer = self.get_serializer(data)
        return Response(serializer.data)

    def list(self, request):
        print("Listing users")
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Registro creado correctamente", **serializer.data}
            )

        return Response(
            {"error": "Error al crear el registro", "errors": serializer.errors},
            status=400,
        )

    def update(self, request, pk):
        data = self.get_object(pk)
        serializer = self.get_serializer(data, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registro actualizado correctamente"})

        return Response(
            {
                "error": "Error al actualizar el Registro",
                "errors": serializer.errors,
            },
            status=400,
        )

    def destroy(self, request, pk):
        data = self.get_object(pk)

        try:
            data.delete()
            return Response({"message": "Registro eliminado correctamente"})
        except:
            return Response(
                {
                    "error": "No se puede eliminar el registro porque se esta utilizado en algún lado"
                },
                status=400,
            )

    @action(detail=False, methods=["post"], url_path="login", url_name="login")
    def login(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        print("jahsdkja")
        user = authenticate(username=username, password=password)
        print(request.data)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            roles = user.roles.values_list(
                "name", flat=True
            )  # Obtiene los nombres de los roles del usuario
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "username": user.username,
                    "roles": list(roles),  # Incluye los roles en la respuesta
                }
            )
        else:
            return Response({"error": "Invalid credentials"}, status=400)
