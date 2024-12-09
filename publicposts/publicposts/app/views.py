from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Post
from .serializers import *

# метод получения списка всех постов
@api_view(['GET', 'POST'])
def posts(request):
    if request.method == 'GET': # если get-запрос
        posts = Post.objects.all() # получаем все объекты из модели Post
        serializer = PostSerializer(posts, many=True) # отправляем их в PostSerializer
        return(Response({'data': serializer.data})) # упаковываем объекты и возвращаем с помощью Response
    elif request.method == 'POST':
        post = Post()
        post.text = request.data['text']
        post.save()
        return Response(status=status.HTTP_200_OK)


# метод для того, чтобы поставить лайк
@api_view(['GET'])
def like_post(request, post_id):
    if request.method == 'GET':
        try:
            post = Post.objects.get(id=post_id)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        setattr(post, 'likeCount', post.likeCount+1) # получаем объект Post с необходимым id, прибавляем 1 лайк
        post.save() # сохраняем объект
        return Response(post.likeCount, status.HTTP_200_OK) # возвращаем количество лайков