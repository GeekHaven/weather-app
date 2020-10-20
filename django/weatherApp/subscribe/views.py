from django.shortcuts import render

import requests
from django.shortcuts import render
from .models import User


def api(request):
    name = request.POST.get('name')
    email = request.POST.get('email')
