---
title: MSStyleFill
summary: Represents a fill on a layer. Can be either a color or gradient fill.
rels:
  - MSStyle
  - MSStyleBorder
  - MSGradient
---

Represents a fill on a layer. Can be either a color or gradient fill.

## Methods & Attributes

### fillType

A color fill (0), gradient (1) or pattern (4). Other values make no sense and can lead to unpredictable behaviour

### gradient

An [MSGradient](/docs/MSGradient/) object that will only be used if the `fillType` is set to a gradient.

### image

An NSImage object that will be used if the `fillType` is set to pattern.

### noiseIntensity

A float representing the intensity of the noise from 0..1

### isEnabled

Whether the style object is enabled or not.
