from . import views
from django.urls import path
from django.urls import re_path


app_name = 'dcim'
urlpatterns = [
    path(
        'datacenter',
        views.DataCenter.as_view(),
        name='datacenter'
    ),
    re_path(
        r'^(?P<cluster>[\w/-]+)/physical/back',
        views.PhysicalClusterViewBack.as_view(),
        name='PhysicalClusterViewBack'
    ),
    re_path(
        r'^(?P<cluster>[\w/-]+)/physical/front',
        views.PhysicalClusterViewFront.as_view(),
        name='PhysicalClusterViewFront'
    ),
    path(
        'layout_data/<path:cluster>',
        views.layout_data,
        name="layout_data"
    ),
]
