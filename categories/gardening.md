---
title: "Gardening"
layout: category
permalink: /category/gardening/
---
{% assign posts = site.categories['gardening'] %}

{% if posts and posts.size > 0 %}
  <ul>
    {% for post in posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No posts found.</p>
{% endif %}
