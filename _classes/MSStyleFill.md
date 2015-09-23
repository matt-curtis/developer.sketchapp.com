---
title: MSStyleFill
rels:
  - MSStyle
  - MSStyleBorder
  - MSGradient
---

## Overview

Represents a fill on a layer. Can be either a color or gradient fill.

## Methods & Attributes

### fillType

A color fill (0), gradient (1) or pattern (4). Other values make no sense and can lead to unpredictable behaviour

### gradient

An [MSGradient]({{site.baseurl}}/docs/MSGradient) object that will only be used if the `fillType` is set to a gradient.

### image

An NSImage object that will be used if the `fillType` is set to pattern.

### noiseIntensity

Sketch 2.0: A float representing the intensity of the noise from 0..1

{# TODO: check if this still works on Sketch 3.0 #}

### isEnabled

Whether the style object is enabled or not.
