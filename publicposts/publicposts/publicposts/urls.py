from django.contrib import admin
from django.urls import path
from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/', posts),
    path('api/like_post/<int:post_id>/', like_post),
]
