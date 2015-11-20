---
layout: sidebar-page
title: Reference
permalink: /reference/
---

Work in progress

## List of classes
<table>
  <tbody>
  {% for class in site.reference %}
    <tr>
      <td><a href="{{class.url}}">{{class.title}}</a></td>
      <td>{{class.summary}}</td>
    <tr>
  {% endfor %}
  </tbody>
</table>
