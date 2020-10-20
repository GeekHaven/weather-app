from django.shortcuts import render

import requests

from .models import User


def api(request):
    if request.method=="POST":
    name = request.POST['name']
    email = request.POST['email']
    print(name,email)
    ins = User(name=name, email=email)
    ins.save()
