from django.db import models
from django.shortcuts import reverse
from category.models import Category

class Product(models.Model):
    name = models.CharField(max_length=100) 
    price = models.DecimalField(max_digits=10, decimal_places=2) 
    image =models.ImageField(upload_to='images/',null=True)
    # image = models.CharField(max_length=200) 
    created_at=models.DateTimeField(auto_now_add=True,null=True)
    updated_at=models.DateTimeField(auto_now=True,null=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE,null=True,
                               related_name='products')

    def __str__(self):
        return f'{self.name}'
    
    @property
    def image_url(self):
        # return f'images/products/{self.image}'
        return f'/media/{self.image}'
    
    @property
    def show_product(self):
        return reverse("product_info",args=[self.id])
    
    @property
    def delete_url(self):
        return reverse("products.delete",args=[self.id])