---
title: "Blog"
layout: category
permalink: /category/blog/
---

<h2>Blog</h2>

{% assign posts = site.categories['blog'] %}

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
