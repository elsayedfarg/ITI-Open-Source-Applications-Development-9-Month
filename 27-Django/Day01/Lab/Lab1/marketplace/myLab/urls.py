from django.contrib import admin
from django.urls import path,include
from products.views import product_info,landing
from aboutus.views import landing as aboutus_landing
from contactus.views import landing as contactus_landing

urlpatterns = [
    path('admin/', admin.site.urls),
    path("products/", include("products.urls")),
    path("about-us/",include("aboutus.urls")),
    path("contact-us/",include("contactus.urls"))
]
