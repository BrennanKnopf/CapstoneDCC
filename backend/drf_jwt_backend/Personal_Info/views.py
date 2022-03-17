from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Dater, Emergency_contact, Messages, Personal_info
from .serializers import DaterSerializer, Emergency_contactSerializer, MessagesSerializer
from .serializers import Personal_infoSerializer


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
        cars = Dater.objects.filter(user_id=request.user.id)
        serializer = DaterSerializer(cars, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        dater = Dater.objects.get(pk=pk)
        serializer = DaterSerializer(dater, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)



@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def user_personal_info(request,pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = Personal_infoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        personal_info = Personal_info.objects.filter(user_id=request.user.id)
        serializer = Personal_infoSerializer(personal_info, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        personal_info = Personal_info.objects.get(pk=pk)
        serializer = Personal_infoSerializer(personal_info, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
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
        emergency_contact = Emergency_contact.objects.filter(user_id=request.user.id)
        serializer = Emergency_contactSerializer(emergency_contact, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        emergency_contact = Emergency_contact.objects.get(pk=pk)
        serializer = Emergency_contactSerializer(emergency_contact, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)