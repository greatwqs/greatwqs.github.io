---
layout: page
title: 归档
permalink: /archive/
date: 2011-11-01
---
<div class="archives">
  {% for post in site.posts  %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

    {% if forloop.first %}
    <h3 class="archive_year" id="{{ this_year }}-ref">{{this_year}}</h3>
    <ul>
    {% endif %}

    <li>
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>

    {% if forloop.last %}
    </ul>
    {% else %}
    {% if this_year != next_year %}
    </ul>
    <h3 class="archive_year" id="{{ next_year }}-ref">{{next_year}}</h3>
    <ul>
    {% endif %}
    {% endif %}
  {% endfor %}
</div>