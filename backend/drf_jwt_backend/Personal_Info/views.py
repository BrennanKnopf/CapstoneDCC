from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Dater, Emergency_contact, Messages
from .serializers import DaterSerializer, Emergency_contactSerializer, MessagesSerializer



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_dater(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        
    if request.method == 'POST':
        serializer = DaterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        dater = Dater.objects.filter(user_id=request.user.id)
        serializer = DaterSerializer(dater, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        dater = Dater.objects.get(pk=pk)
        serializer = DaterSerializer(dater, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_messages(request, pk):
    messages = Messages.objects.filter(user_id=pk)
    serializer = MessagesSerializer(messages, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def user_emergency_contact(request,pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = Emergency_contactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        emergency_contact = Emergency_contact.objects.filter(username=request.user.username)
        serializer = Emergency_contactSerializer(emergency_contact, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        emergency_contact = Emergency_contact.objects.get(pk=pk)
        serializer = Emergency_contactSerializer(emergency_contact, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)