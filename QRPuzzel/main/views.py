from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/MainPage.html')


def CreateGame(request):
    return render(request, 'main/HostPage.html')

def Game(request):
    return render(request, 'main/GamePage.html')