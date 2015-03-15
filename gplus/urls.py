from django.conf.urls import patterns, include, url
# from django.contrib import admin
from rest_framework_nested import routers # use pip install drf-nested-routers

from authentication.views import AccountViewSet
from gplus.views import IndexView

"""
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gplus.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$',AccountViewSet, name='home'),
    url(r'^$',IndexView.as_view(), name='index'),

)
"""
"""
router = routers.SimpleRouter() # Use pip install drf-nested-routers to install
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
     '',
    # ... URLs
    url(r'^api/v1/', include(router.urls)),

    url('^.*$', IndexView.as_view(), name='index'),
)
"""

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
     '',
    # ... URLs
    url(r'^api/v1/', include(router.urls)),

    url('^.*$', IndexView.as_view(), name='index'),
)
