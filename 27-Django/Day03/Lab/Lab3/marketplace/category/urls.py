from django.urls import path
from category.views import landing as cat_landing,show
urlpatterns = [
    path('landing/', cat_landing, name='categories.landing'),
    path('<int:id>/', show, name='categories.show'),
]