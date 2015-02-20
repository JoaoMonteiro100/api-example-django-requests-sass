from django.conf.urls import patterns, url, include
from views import index, grid, list, content, ad_page #ad_list, ad, realty_types, states, ad_types

urlpatterns = patterns('',
    url(r'^$', index, name='index'),
    url(r'^grid.html$', grid, name='grid'),
    url(r'^list.html$', list, name='list'),
    url(r'^content.html$', content, name='content'),
    url(r'^ad_page.html$', ad_page, name='ad_page'),
)