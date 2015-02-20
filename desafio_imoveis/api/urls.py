from django.conf.urls import patterns, url, include
from views import index, grid, list, content, ad_page #ad_list, ad, realty_types, states, ad_types

urlpatterns = patterns('',
    url(r'^$', index, name='index'),
    url(r'^grid.html$', grid, name='grid'),
    url(r'^list.html$', list, name='list'),
    url(r'^content.html$', content, name='content'),
    url(r'^ad_page.html$', ad_page, name='ad_page'),
    #url(r'^(?P<slug>)/$', ad_page, name='ad_page'),
    #url(r'\w+(?:-\w+)+', ad_page, name='ad_page'),
    #url(r'^ad_page.html$', ad_page, name='ad_page'),
    #r'^(?P<slug>)/$', 'object_detail', dict(info_dict, slug_field='slug',template_name='ad_page.html')),
    """
    url(r'^list/$', ad_list),
    url(r'^(?P<slug>)/$', ad),
    url(r'^house/$', realty_types),
    url(r'^state/$', states),
    url(r'^ad/$', ad_types),
    """
)