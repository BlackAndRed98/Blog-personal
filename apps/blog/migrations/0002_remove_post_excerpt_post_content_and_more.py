# Generated by Django 4.2.4 on 2023-09-01 20:44

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="post",
            name="excerpt",
        ),
        migrations.AddField(
            model_name="post",
            name="content",
            field=ckeditor.fields.RichTextField(default=""),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="post",
            name="description",
            field=models.CharField(max_length=255),
        ),
    ]
