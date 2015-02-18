from django.conf.urls import patterns, url, include
from views import index, ad_list, ad, realty_types, states, ad_types

urlpatterns = patterns('',
    url(r'^$', index, name='index'),
    url(r'^list/$', ad_list),
    url(r'^(?P<slug>)/$', ad),
    url(r'^house/$', realty_types),
    url(r'^state/$', states),
    url(r'^ad/$', ad_types),
)