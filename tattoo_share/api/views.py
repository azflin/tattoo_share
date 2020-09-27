from django.http import JsonResponse

from api.models import Tattoo


def get_tattoo(request, tattoo_id):
    tattoo = Tattoo.objects.get(pk=tattoo_id)
    return JsonResponse(
        {"id": tattoo.id, "description": tattoo.description, "photo": tattoo.photo.url}
    )


def get_tattoos(request):
    tattoos = Tattoo.objects.all()
    tattoos = [
        {
            "id": tattoo.id,
            "description": tattoo.description,
            "photo": tattoo.photo.url
        } for tattoo in tattoos
    ]
    return JsonResponse(tattoos, safe=False)
