from rest_framework import viewsets
from rest_framework import permissions
from .models import User
from .serializers import Userserializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer
    # permission_classes = [permissions.IsAuthenticated]
