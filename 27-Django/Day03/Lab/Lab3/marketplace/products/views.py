from django.shortcuts import redirect, render,get_object_or_404
from django.http import HttpResponse
from products.models import Product
from category.models import Category

# products = [
#     {"id": 1, "name": "Laptop", "price": 1200, "image": "images/1.jpeg"},
#     {"id": 2, "name": "Smartphone", "price": 800, "image": "images/2.jpeg"},
#     {"id": 3, "name": "Headphones", "price": 150, "image": "images/3.jpeg"},
#     {"id": 4, "name": "Keyboard", "price": 50, "image": "images/4.jpeg"},
#     {"id": 5, "name": "Mouse", "price": 30, "image": "images/5.jpeg"},
# ]

def product_info(req,id):
    found_product =get_object_or_404(Product,pk=id)

    if found_product is None:
        return HttpResponse("Product not found", status=404)

    return render(req, "products/profile.html", context={"product": found_product})

def landing(req):
    return render(req,"products/landing.html")

def index(req):
    products=Product.objects.all()
    return render(req,"products/index.html",context={"name":"sayed",
                                                     "products":products})

def home(request):
    return render(request, "home.html")

def create_product(req):
    categories=Category.objects.all()
    if req.method == "POST":
        new_name = req.POST.get('name')
        new_price = req.POST.get('price')
        new_img = req.FILES.get('image_url')

        new_id=req.POST.get('category')
        new_category = Category.objects.filter(pk=new_id).first()


        product= Product.objects.create(
            name=new_name, 
            price=new_price, 
            image=new_img,
            category=new_category or None
        )
        return redirect(product.show_product) 
        
    return render(req, "products/create.html",context={"categories":categories})

def delete_product(req, id):
    product = get_object_or_404(Product, pk=id)
    if req.method == "POST":
        product.delete()
        return redirect("products.index")
    return redirect("products.index")
