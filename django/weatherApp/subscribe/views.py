from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from django.http import HttpResponse

# render index.html of React app, which will render other js bundle files
# 'frontend/build/index.html' will be rendered
catchall = TemplateView.as_view(template_name='index.html')

def about_view(request, *args, **kwargs):
    return HttpResponse(<h1>"Hello world!"</h1>)
