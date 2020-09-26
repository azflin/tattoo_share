from django.http import HttpResponse
from django.core import serializers

from api.models import Tattoo


def get_tattoo(request, tattoo_id):
    tattoo = Tattoo.objects.get(pk=tattoo_id)
    tattoo_json = serializers.serialize("json", [tattoo])[1:-1]
    return HttpResponse(tattoo_json, content_type='application/json')


def get_tattoos(request):
    tattoos = Tattoo.objects.all()
    tattoos_json = serializers.serialize("json", tattoos)
    return HttpResponse(tattoos_json, content_type='application/json')
