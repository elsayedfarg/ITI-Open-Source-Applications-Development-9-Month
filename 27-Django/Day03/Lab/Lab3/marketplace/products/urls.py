from django.urls import path
from products.views import product_info,landing,index,create_product,delete_product

urlpatterns = [
    path("", landing, name="landing"),
    path("<int:id>/", product_info, name="product_info"),
    path("index/", index, name="products.index"),
    path("create/", create_product, name="products.create_product"),
    path("delete/<int:id>/", delete_product, name="products.delete"), 
]
