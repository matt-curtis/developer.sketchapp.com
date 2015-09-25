---
title: MSGradient
rels:
  - MSStyleFill
  - MSGradientStop
---

## Overview

Represents a gradient for either a border or fill.

## Methods & Attributes

### gradientType

Either Linear (0) or Radial (1).

### from, to

Point are point structures in the coordinate system of the layer. For example: from (0,0) to (1,1) makes the gradient from top left to bottom right.

### stops

An array of [MSGradientStop](/docs/MSGradientStop) objects representing color and position (0..1) on the line between the from and to points.

### addStopAtLength:

Adds a new stop on the line from 0..1

### removeStopAtIndex:

Removes a stop at the specified index

### setColor:atIndex

Set the color of gradient stop at the given index
