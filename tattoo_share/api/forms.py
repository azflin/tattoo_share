from django import forms
from api.models import Tattoo


class TattooForm(forms.ModelForm):

	class Meta:
		model = Tattoo
		fields = ['description', 'photo']

