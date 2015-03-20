from django.conf.urls import patterns, include, url
# from django.contrib import admin
from rest_framework_nested import routers # use pip install drf-nested-routers

from authentication.views import AccountViewSet, LoginView, LogoutView
from gplus.views import IndexView
from posts.views import AccountPostsViewSet, PostViewSet

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
router.register(r'posts', PostViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)
accounts_router.register(r'posts', AccountPostsViewSet)


urlpatterns = patterns(
     '',
    # ... URLs
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url('^.*$', IndexView.as_view(), name='index'),
)
