from django.shortcuts import render
from django.http import HttpResponse

products = [
    {"id": 1, "name": "Laptop", "price": 1200, "image": "images/1.jpeg"},
    {"id": 2, "name": "Smartphone", "price": 800, "image": "images/2.jpeg"},
    {"id": 3, "name": "Headphones", "price": 150, "image": "images/3.jpeg"},
    {"id": 4, "name": "Keyboard", "price": 50, "image": "images/4.jpeg"},
    {"id": 5, "name": "Mouse", "price": 30, "image": "images/5.jpeg"},
]

def product_info(req,id):
    print(id)


    found_product = None
    for product in products:
        if product["id"]==id:
          found_product=product
          break

    if found_product is None:
        return HttpResponse("Product not found", status=404)

    return render(req, "products/profile.html", context={"product": found_product})

def landing(req):
    return render(req,"products/landing.html")

def index(req):
    return render(req,"products/index.html",context={"name":"sayed",
                                                     "products":products})
