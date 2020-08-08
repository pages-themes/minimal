---
layout: default
title: "Projects"
date: 2020-04-24 20:03:11
categories: [Projects]
---

<ul>
  {% for post in site.categories.Projects %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a> </h1>
    <span>{{ post.date | date_to_string }}</span>
     <span style="font-size: 1.3em"> {{ post.excerpt }}</span>
   
  {% endfor %}
</ul>
---
