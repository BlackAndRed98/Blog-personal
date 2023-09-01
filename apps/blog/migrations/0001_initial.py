# Generated by Django 4.2.4 on 2023-09-01 19:47

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("category", "0003_alter_viewcount_ip_address"),
    ]

    operations = [
        migrations.CreateModel(
            name="Post",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("slug", models.SlugField(max_length=255, unique=True)),
                ("thumbnail", models.ImageField(upload_to="blog_thumbnail_directory")),
                ("excerpt", models.CharField(max_length=255)),
                ("description", ckeditor.fields.RichTextField()),
                ("time_read", models.IntegerField()),
                ("published", models.DateTimeField(default=django.utils.timezone.now)),
                ("views", models.IntegerField(blank=True, default=0)),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to="category.category",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="ViewCount",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("ip_address", models.CharField(max_length=255)),
                (
                    "post",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="blogpost_view_count",
                        to="blog.post",
                    ),
                ),
            ],
        ),
    ]
