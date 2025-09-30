from django.contrib import admin
from .models import Student, Course, Assignment, Grade

admin.site.register(Student)
admin.site.register(Course)
admin.site.register(Assignment)
admin.site.register(Grade)
