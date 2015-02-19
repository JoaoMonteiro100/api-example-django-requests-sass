from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
import json
import client

def index(request):
    c = client.Client()
    data = json.loads(c.get_ad_list())
    #data = c.get_ad_list()
    context = {'ads_list': data}
    #return HttpResponse(data, content_type="application/json")
    return render(request, 'api/index.html', context)
    #return JsonResponse(data)


def ad_list():
    c = client
    data = c.get_ad_list()
    return HttpResponse(data, mimetype="application/json")

def ad(slug):
    c = client
    data = c.get_ad(slug)
    return HttpResponse(data, mimetype="application/json")

def realty_types():
    c = client
    data = c.get_realty_types()
    return HttpResponse(data, mimetype="application/json")

def states():
    c = client
    data = c.get_states()
    return HttpResponse(data, mimetype="application/json")

def ad_types():
    c = client
    data = c.get_ad_types()
    return HttpResponse(data, mimetype="application/json")