from django.urls import path,include
from contactus.views import landing as contactus_landing

urlpatterns = [
    path("",contactus_landing,name="contactus.landing"),
]
