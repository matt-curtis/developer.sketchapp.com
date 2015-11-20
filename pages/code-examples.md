---
layout: sidebar-page
title: Code Examples
permalink: /code-examples/
---

## Learn by reading

Sometimes the best way of learning how to do something is reading about it. So here are some examples of basic techniques you'll probably want to use on your own plugins:

## Contents
<table>
  <tbody>
  {% assign examples = site.code-examples | sort: 'order' %}
  {% for example in examples %}
    <tr>
      <td><a href="{{example.url}}">{{example.title}}</a></td>
      <td>{{example.summary}}</td>
    <tr>
  {% endfor %}
  </tbody>
</table>
