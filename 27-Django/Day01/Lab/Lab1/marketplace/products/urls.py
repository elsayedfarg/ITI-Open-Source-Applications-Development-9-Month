from django.urls import path
from products.views import product_info,landing,index

urlpatterns = [
    path("", landing, name="landing"),
    path("<int:id>/", product_info, name="product_info"),
    path("index/", index, name="products.index"),

]
