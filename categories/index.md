---
title: 分类
layout: page
comments: false
---

<div id='tag_cloud'>
	<ul class="tag_box">
		{% for cat in site.categories %}
			<li class="tag_box_li"><a href="#{{ cat[0] }}" title="查看分类 {{ cat[0] }} 的所有文章" rel="{{ cat[1].size }}">{{ cat[0] }} <span class="tag_box_num">({{ cat[1].size }})</span></a></li>
		{% endfor %}
	</ul>
</div>

<div class="tag_list">
{% for cat in site.categories %}
	<h3 class="tag_list_title" id="{{ cat[0] }}">{{ cat[0] }}</h3>
	<ul>
		{% for post in cat[1] %}
		  <li class="tag_list_item">
			<time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
			<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
		  </li>
		{% endfor %}
	</ul>
{% endfor %}
</div>