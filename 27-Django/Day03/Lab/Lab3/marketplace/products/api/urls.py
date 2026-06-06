from django.urls import path
from .views import index, product_detail, product_update, product_delete

urlpatterns = [
    path('', index, name='product-list-create'),
    path('<int:pk>/', product_detail, name='product-detail'),
    path('<int:pk>/update/', product_update, name='product-update'),
    path('<int:pk>/delete/', product_delete, name='product-delete'),
]