---
layout: sidebar-page
title: Reference
permalink: /reference/
---

Helvetica chicharrones austin, meggings locavore vice waistcoat salvia williamsburg beard artisan tofu shabby chic small batch kombucha. Cray distillery wayfarers umami keffiyeh cliche, biodiesel wolf shoreditch sustainable lo-fi +1 marfa pug.

Plaid bitters chia cred, helvetica butcher meditation single-origin coffee letterpress jean shorts. Franzen church-key flannel blue bottle trust fund thundercats, semiotics brunch hella dreamcatcher.

## List of classes
<table>
  <tbody>
  {% for class in site.reference %}
    <tr>
      <td><a href="{{class.url}}">{{class.title}}</a></td>
      <td>{{reference.summary}}</td>
    <tr>
  {% endfor %}
  </tbody>
</table>
