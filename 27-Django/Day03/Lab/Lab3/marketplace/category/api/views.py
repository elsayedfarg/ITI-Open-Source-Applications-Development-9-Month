from rest_framework.decorators import api_view
from rest_framework.response import Response
from category.models import Category
from category.api.serializers import CategorySerializer


@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)