---
title: "Blog"
layout: category
permalink: /category/blog/
---

<h2>Latest Blog Posts</h2>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
