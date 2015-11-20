---
title: MSStyle
summary: Represents all style attributes on a layer. Whatever kind of layer you have, each has a valid style object.
rels:
  - MSStylePartCollection
  - MSStyleBorder
  - MSStyleFill
  - MSStyleShadow
  - MSStyleInnerShadow
  - MSGraphicsContextSettings
---

Represents all style attributes on a layer. Whatever kind of layer you have, each has a valid style object.

Some layers will ignore unsupported attributes though (such as a text layer only supports one border even if style objects has more than one).

## Methods & Attributes

### borders, fills, shadows, shadows, innerShadows

Each returns an [MSStylePartCollection](/docs/MSStylePartCollection/) that contains an array of each represented object. See [MSStyleBorder](/docs/MSStyleBorder/), [MSStyleFill](/docs/MSStyleFill/), [MSStyleShadow](/docs/MSStyleShadow/) and [MSStyleInnerShadow](/docs/MSStyleInnerShadow/) for details.

### contextSettings

Contains and [MSGraphicsContextSettings](/docs/MSGraphicsContextSettings/) object that holds the opacity and blending mode of its layer
