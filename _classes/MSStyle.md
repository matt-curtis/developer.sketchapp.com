---
title: MSStyle
rels:
  - MSStylePartCollection
  - MSStyleBorder
  - MSStyleFill
  - MSStyleShadow
  - MSStyleInnerShadow
  - MSGraphicsContextSettings
---

## Overview

Represents all style attributes on a layer. Whatever kind of layer you have, each has a valid style object.

Some layers will ignore unsupported attributes though (such as a text layer only supports one border even if style objects has more than one).

## Methods & Attributes

### borders, fills, shadows, shadows, innerShadows

Each returns an [MSStylePartCollection]({{site.baseurl}}/docs/MSStylePartCollection) that contains an array of each represented object. See [MSStyleBorder]({{site.baseurl}}/docs/MSStyleBorder), [MSStyleFill]({{site.baseurl}}/docs/MSStyleFill), [MSStyleShadow]({{site.baseurl}}/docs/MSStyleShadow) and [MSStyleInnerShadow]({{site.baseurl}}/docs/MSStyleInnerShadow) for details.

### contextSettings

Contains and [MSGraphicsContextSettings]({{site.baseurl}}/docs/MSGraphicsContextSettings) object that holds the opacity and blending mode of its layer
