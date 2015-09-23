---
title: MSStylePartCollection
rels:
  - MSStyle
---

## Overview

Basically a wrapper around an array that holds style objects such as fill, border and more. See [MSStyle]({{site.baseurl}}/docs/MSStyle) for possible values.

## Methods & Attributes

### array

Returns the standard NSArray containing the objects. However, do not add objects to this array directly. Instead use the ones below (an added benefit of doing that is you can participate in the undo stack for free).

### addNewStylePart

Adds a new style object to the list, this one will have the default values that the user set and that make sense for the particular collection. For example, a first fill will always be a flat color but a second one will have a half transparent gradient.

### removeStylePart

### removeStylePartAtIndex

Remove either a specific style, or one at an index from the list.

### moveStylePartFromIndex:toIndex

Reorder styles in the list; moves an object from one index to another.
