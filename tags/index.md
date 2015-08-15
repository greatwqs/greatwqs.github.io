---
title: 标签
layout: page
comments: false
---

<div id='tag_cloud'>
	<ul class="tag_box">
		{% for tag in site.tags %}
			<li class="tag_box_li"><a href="#{{ tag[0] }}" title="查看标签 {{ tag[0] }} 的所有文章" rel="{{ tag[1].size }}">{{ tag[0] }} <span class="tag_box_num">({{ tag[1].size }})</span></a></li>
		{% endfor %}
	</ul>
</div>

<div class="tag_list">
{% for tag in site.tags %}
	<h3 class="tag_list_title" id="{{ tag[0] }}">{{ tag[0] }}</h3>
	<ul>
		{% for post in tag[1] %}
		  <li class="tag_list_item">
			<time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
			<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
		  </li>
		{% endfor %}
	</ul>
{% endfor %}
</div>