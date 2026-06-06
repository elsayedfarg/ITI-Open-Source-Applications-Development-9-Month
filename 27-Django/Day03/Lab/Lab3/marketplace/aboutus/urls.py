from django.urls import path,include
from aboutus.views import landing as aboutus_landing

urlpatterns = [
    path("",aboutus_landing,name="aboutus.landing"),
]
