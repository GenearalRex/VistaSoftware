from rest_framework.routers import DefaultRouter
from .controller.TascksController import *

router = DefaultRouter()


router.register(r"", TaskController, basename="task")
urlpatterns = router.urls
