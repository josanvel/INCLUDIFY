from django.shortcuts import render
from django.http import HttpResponse


def index(request):
	context={'name':'Includify1'}
	return render(request,'entidad.html',context)

def entidades(request):
	context={'name':'Includify2'}
	return render(request,'entidad.html',context)

def dashboard(request):
	context={'name':'dashboard'}
	return render(request,'dashboard.html',context)

def game(request):
	context={'name':'game'}
	return render(request,'game.html',context)

# Create your views here.
