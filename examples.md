---
title: Code Examples
permalink: /code-examples/
---

## Learn by reading

Sometimes the best way of learning how to do something is reading about it. So here are some examples of basic techniques you'll probably want to use on your own plugins:

<ul>
{% for example in site.code-examples %}
  <li><a href="{{example.url}}">{{example.title}}</a> {{example.summary}}</li>
{% endfor %}
</ul>
