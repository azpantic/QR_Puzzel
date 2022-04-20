from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/MainPage.html')


def CreateGame(request):

    return HttpResponse("<h1>Game</h1>")
