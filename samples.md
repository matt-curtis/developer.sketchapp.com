---
title: Code Examples
permalink: /samples/
---

<ul>
  {% for example in site.examples %}
  <li><a href="{{site.baseurl}}/{{example.url}}">{{example.title}}</a></li>
  {% endfor %}
</ul>
