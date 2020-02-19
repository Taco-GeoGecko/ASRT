
from django.contrib import admin
from django.urls import path
from sliders.views import view
from mapGrids.views import view
from location.views import view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sliders/', view),
    path('mapGrids/', view),
    path('location/',view)

]
