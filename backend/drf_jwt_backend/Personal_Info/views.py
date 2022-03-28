from multiprocessing import allow_connection_pickling
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Dater, Messages, User
from .serializers import DaterSerializer, MessagesSerializer



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
    elif request.method == 'DELETE':
        dater = Dater.objects.get(dater_id=request.id)
        serializer = DaterSerializer(dater, data=request.data)
        if serializer.is_valid():
            dater.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def find_user(request, username):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        
    if request.method == 'POST':
        serializer = DaterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        dater = Dater.objects.get(user_id=request.user.id)
        emergency_contact = Dater.objects.get(user__username = username)
        print(emergency_contact)
        dater.emergency_contact = emergency_contact
        dater.save()
        return Response(status=status.HTTP_200_OK)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_sent_messages(request):
    if request.method == 'POST':
        serializer = MessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        message = Messages.objects.filter(dater__user_id= request.user.id) 
        serializer = MessagesSerializer(message, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_received_messages(request):
    if request.method == 'POST':
        serializer = MessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        message = Messages.objects.filter(emergency_contact_id= request.user.id) 
        serializer = MessagesSerializer(message, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)   

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def ec_sent_messages(request):
    if request.method == 'POST':
        serializer = MessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        message = Messages.objects.filter(dater_id= request.dater.id) 
        serializer = MessagesSerializer(message, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)