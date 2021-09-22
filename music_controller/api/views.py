from django.shortcuts import render
from rest_framework import generics

from .serializers import RoomSerializer
from .models import Room

# Create default view that returns all Room objects
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    # Converts into a serialized format
    serializer_class = RoomSerializer