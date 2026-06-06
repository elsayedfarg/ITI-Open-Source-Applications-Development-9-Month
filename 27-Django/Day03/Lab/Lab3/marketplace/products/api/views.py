from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.models import Product
from products.api.serializers import ProductModelSerializer


# GET all + CREATE
@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductModelSerializer(products, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


# GET single product
@api_view(['GET'])
def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

    serializer = ProductModelSerializer(product)
    return Response(serializer.data)


# UPDATE product
@api_view(['PUT', 'PATCH'])
def product_update(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

    serializer = ProductModelSerializer(
        product,
        data=request.data,
        partial=(request.method == 'PATCH')
    )

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)


# DELETE product
@api_view(['DELETE'])
def product_delete(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

    product.delete()
    return Response({"message": "Deleted successfully"})