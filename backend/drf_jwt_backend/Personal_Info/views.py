from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Dater
from .serializers import DaterSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_dater(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = DaterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        cars = Dater.objects.filter(user_id=request.user.id)
        serializer = DaterSerializer(cars, many=True)
        return Response(serializer.data)
