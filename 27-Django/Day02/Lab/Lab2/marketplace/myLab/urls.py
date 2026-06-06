from django.contrib import admin
from django.urls import path,include
from products.views import home
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path("products/", include("products.urls")),
    path("about-us/",include("aboutus.urls")),
    path("contact-us/",include("contactus.urls")),
    path("categories/",include("category.urls"))
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
