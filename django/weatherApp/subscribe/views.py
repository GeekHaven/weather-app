from django.shortcuts import render

import os
import requests
from requests.auth import HTTPBasicAuth

def api(request):
    name = request.POST.get('name')
    email = request.POST.get('email')

    url = os.environ.get("URL", 'http://myhost:port/projectname/api/addposition?compName=Google&category=Developer')
    url = "%s" % (url)
    body = {"name" : "%s" % name, "email" : "%s" % email}
        response = requests.post(url, auth=HTTPBasicAuth('USER', 'PASSWORD'), headers={'Content-Type': 'application/json'}, json=body)
    if response.status_code == 200:
        print("Code 200")
    else:
        print("Code not 200")
