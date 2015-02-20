from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
import json
import client

def index(request):
    c = client.Client()
    data = json.loads(c.get_ad_list())
    context = {'ads_list': data}
    return render(request, 'api/index.html', context)


def grid(request):
    c = client.Client()
    data = json.loads(c.get_ad_list())
    context = {'ads_list': data}
    return render(request, 'api/grid.html', context)


def list(request):
    c = client.Client()
    data = json.loads(c.get_ad_list())
    context = {'ads_list': data}
    return render(request, 'api/list.html', context)


def content(request):
    c = client.Client()
    data = json.loads(c.get_ad_list())
    context = {'ads_list': data}
    return render(request, 'api/content.html', context)


def ad_page(request):
    c = client.Client()
    data = json.loads(c.get_ad_list())
    context = {'ads_list': data}
    return render(request, 'api/ad_page.html', context)