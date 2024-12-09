from django.db import models

class Post(models.Model):
    """Публикация"""
    text = models.CharField(max_length=400)
    likeCount = models.IntegerField(default=0)
    date = models.DateTimeField('publish date', auto_now_add=True)

    def __str__(self):
        return self.text
