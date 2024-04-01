from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
)


class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class TokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token
