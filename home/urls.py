from __future__ import print_function, division
from __future__ import unicode_literals, absolute_import
from django.urls import re_path, path
from home import views

app_name = 'home'

urlpatterns = [
    path(
        '',
        views.SiteIndex.as_view(),
        name='index'
    ),
    re_path(
        r'^(?P<ajax>ajax)$',
        views.SiteIndex.as_view(),
        name='index'
    ),
]