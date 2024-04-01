from rest_framework.routers import DefaultRouter

from .controllers import *

router = DefaultRouter()

router.register(r"", UserController, basename="")


urlpatterns = router.urls
