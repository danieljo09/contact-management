from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # API Token Management
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Project URLs
    path('admin/', admin.site.urls),
    path('', include('contacts.urls', namespace='contacts')),

    # User Management
    path('api/user/', include('users.urls', namespace='users')),    

    # Contact_API App
    path('api/', include('contacts_api.urls', namespace='contacts_api')),

    # API Schema and Documentation
    path('docs/', include_docs_urls(title='ContactsAPI')),
    path('schema', get_schema_view(
        title="ContactsAPI",
        description="API for the ContactsAPI",
        version="1.0.0"
    ), name='openapi-schema'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)