from rest_framework.routers import DefaultRouter
from .controllers.User import *

router = DefaultRouter()

router.register(r"", UserController, basename="task")


urlpatterns = router.urls
