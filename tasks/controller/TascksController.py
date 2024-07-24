from rest_framework.decorators import action
from rest_framework.response import Response
from base.viewsets import GenericViewSet
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Task
from ..serializer import TaskSerializer
from ..filters import TaskFilter


class TaskController(GenericViewSet):
    model = Task
    serializers = {
        "default": TaskSerializer,
    }
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TaskFilter

    def retrieve(self, request, pk):
        data = self.get_object(pk)
        serializer = self.get_serializer(data)
        return Response(serializer.data)

    def list(self, request):

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
                    "error": "No se puede eliminar el registro porque se está utilizando en algún lado"
                },
                status=400,
            )
