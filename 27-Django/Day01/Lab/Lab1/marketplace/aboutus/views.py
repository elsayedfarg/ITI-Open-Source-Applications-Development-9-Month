from django.shortcuts import render

# Create your views here.
def landing(req):
    return render(req,'about-us/landing.html')