from rest_framework import serializers
from products.models import Product
from category.models import Category
from category.api.serializers import CategorySerializer


class ProductModelSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    image_url = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        category_id = validated_data.pop('category_id')
        category = Category.objects.get(id=category_id)
        return Product.objects.create(category=category, **validated_data)