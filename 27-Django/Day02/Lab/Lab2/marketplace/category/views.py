from django.shortcuts import redirect, render,get_object_or_404

from category.models import Category
# Create your views here.
def landing(req):
    categories=Category.objects.all()

    return render(req,'categories/index.html',
                  context={'categories':categories})

def show(req,id):
    category=get_object_or_404(Category,id=id)

    return render(req,'categories/show.html',{'category':category})