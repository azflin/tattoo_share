from django.db import models


class Tattoo(models.Model):
    description = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='tattoos')
    artist = models.CharField(max_length=200)

    def __str__(self):
        return "<Tattoo(id={}, description={})>".format(self.id, self.description)
