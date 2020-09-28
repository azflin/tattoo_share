from django.db import models


class Tattoo(models.Model):
    description = models.TextField()
    photo = models.ImageField(upload_to='tattoos')

    def __str__(self):
        return "<Tattoo(id={}, description={})>".format(self.id, self.description)
