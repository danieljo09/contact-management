from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.translation import gettext_lazy as _

def upload_to(instance, filename):
    return 'contacts/{filename}'.format(filename=filename)

class Contact(models.Model):
    # Details of the contact
    name = models.CharField(max_length=100)
    tel = models.CharField(max_length=50)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=100, blank=True)
    facebook = models.URLField(blank=True)
    desc = models.CharField(max_length=250, blank=True)
    image = models.ImageField(
        _("Image"), upload_to=upload_to, default='contacts/default.jpg')

    # Date and time of when contact was created
    created = models.DateTimeField(default=timezone.now)

    # User
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='contact_entries')
    objects = models.Manager()

    def __str__(self):
        return self.name