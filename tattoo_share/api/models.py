from django.db import models


class Tattoo(models.Model):
    description = models.TextField()
    photo = models.ImageField(upload_to='tattoos')