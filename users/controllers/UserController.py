from rest_framework.decorators import action
from rest_framework.response import Response
from base.viewsets import GenericViewSet
from django.contrib.auth import authenticate

from ..models import User
from users.serializer import Userserializer, TokenSerializer

from django.contrib.auth.models import User as UserModel


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
        user = UserModel.objects.all()
        print(user)
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

    @action(detail=False, methods=["GET"], url_path="select", url_name="select")
    def select(self, request):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(
        detail=False, methods=["POST"], url_path="authenticate", url_name="authenticate"
    )
    def authenticate(self, request):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        user = authenticate(username=username, password=password)
        if user:
            login_serializer = TokenSerializer(data=request.data)
            # print(login_serializer)
            if login_serializer.is_valid():
                data = {
                    "access": login_serializer.validated_data.get("access"),
                    "refresh": login_serializer.validated_data.get("refresh"),
                    "username": user.username,
                }

                return Response(data, status=201)
        return Response(
            {"error": "Credenciales incorrectas. Por favor, inténtalo de nuevo."},
            status=400,
        )
