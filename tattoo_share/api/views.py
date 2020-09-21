from django.http import HttpResponse
from django.shortcuts import render, redirect
from api.forms import TattooForm


def upload_tattoo(request):

    if request.method == 'POST':
        form = TattooForm(request.POST, request.FILES)

        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = TattooForm()
    return render(request, 'tattoo_upload.html', {'form': form})


def success(request):
    return HttpResponse('successfully uploaded')

