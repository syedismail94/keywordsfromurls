---
layout: single
classes: wide
author_profile: false
title: Welcome to Happy Home & Living
permalink: /
---

## Latest Posts

<div class="posts-grid">
{% for post in site.posts limit:7 %}
  <div class="post-card">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <small>{{ post.categories | first }}</small>
    <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
    <a href="{{ post.url | relative_url }}">Read More →</a>
  </div>
{% endfor %}
</div>
