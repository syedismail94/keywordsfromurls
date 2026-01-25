---
title: "Home Decor"
layout: category
permalink: /category/home-decor/
---
<h2>Home Decor Articles</h2>

{% assign posts = site.categories['home-decor'] %}

{% if posts and posts.size > 0 %}
  <ul>
    {% for post in posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No posts found in this category.</p>
{% endif %}
