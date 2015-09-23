---
layout: page
title: Plugins
permalink: /plugins/
---

## Plugin Directory

<ul>
  {% for plugin in site.data.plugins %}
  <li><a href="https://github.com/{{plugin.owner}}/{{plugin.name}}">{{plugin.owner}}/{{plugin.name}}</a> {{plugin.description}}</li>
  {% endfor %}
</ul>
