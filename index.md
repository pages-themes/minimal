---
layout: default
---

## Last Posts

<ul>
  {% for post in site.posts limit: 6 %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
