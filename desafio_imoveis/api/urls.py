from django.conf.urls import patterns, url, include
from views import index, grid, list, content, ad_list, ad, realty_types, states, ad_types

urlpatterns = patterns('',
    url(r'^$', index, name='index'),
    url(r'^grid.html$', grid, name='grid'),
    url(r'^list.html$', list, name='list'),
    url(r'^content.html$', content, name='content'),
    url(r'^list/$', ad_list),
    url(r'^(?P<slug>)/$', ad),
    url(r'^house/$', realty_types),
    url(r'^state/$', states),
    url(r'^ad/$', ad_types),
)