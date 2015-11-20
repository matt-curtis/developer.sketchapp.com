---
layout: sidebar-page
title: Reference
permalink: /reference/
---

Work in progress

## List of classes
<table>
  <tbody>
  {% assign classes = site.reference | sort: 'title' %}
  {% for class in classes %}
    <tr>
      <td><a href="{{class.url}}">{{class.title}}</a></td>
      <td>{{class.summary}}</td>
    <tr>
  {% endfor %}
  </tbody>
</table>
