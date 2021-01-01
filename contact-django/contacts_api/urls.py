from .views import ContactList, ContactDetail, ContactListDetailfilter, CreateContact, EditContact, AdminContactDetail, DeleteContact
from django.urls import path

app_name = 'contacts_api'

urlpatterns = [
    path('', ContactList.as_view(), name='listcontact'),
    path('contact/<str:pk>/', ContactDetail.as_view(), name='detailcontact'),
    path('search/', ContactListDetailfilter.as_view(), name='searchcontact'),

    # Contact Admin URLs
    path('admin/create/', CreateContact.as_view(), name='createcontact'),
    path('admin/edit/contactdetail/<int:pk>/', AdminContactDetail.as_view(), name='admindetailcontact'),
    path('admin/edit/<int:pk>/', EditContact.as_view(), name='editcontact'),
    path('admin/delete/<int:pk>/', DeleteContact.as_view(), name='deletecontact'),
]