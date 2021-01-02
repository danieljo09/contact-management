from django.shortcuts import get_object_or_404
from contacts.models import Contact
from .serializers import ContactSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

# Display Contacts

class ContactList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class ContactDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ContactSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Contact, tel=item)

# Contact Search

class ContactListDetailfilter(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

# Contact Admin

class CreateContact(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminContactDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class EditContact(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class DeleteContact(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()