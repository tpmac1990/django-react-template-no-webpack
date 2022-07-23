from django.urls import path

from todos.views import detail_view, index_view

app_name = 'todos'
urlpatterns = [
    path('', index_view, name='index'),
    path('other/', detail_view, name='detail'),
]
