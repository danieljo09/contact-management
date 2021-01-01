from django.contrib import admin
from . import models

@admin.register(models.Contact)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'tel', 'email', 'address', 'facebook', 'desc', 'created', 'author')

