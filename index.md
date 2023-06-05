---
layout: default
---

## Last Posts

<ul>
  {% for post in site.posts limit: 6 %}
    <li>
      <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  <h2>{{ site.baseurl }}</h2>
  <h2>{{ post.url | prepend: site.baseurl }}</h2>
  {% endfor %}
</ul>
