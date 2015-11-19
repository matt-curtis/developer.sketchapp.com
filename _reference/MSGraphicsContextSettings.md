---
title: MSGraphicsContextSettings
rels:
  - MSDocument
---



This class holds Opacity and Blending for its associated layer or style. Each layer fill also has a ContextSettings such that we can vary opacity between fills.

## Methods & Attributes

### opacity

A float between 0 and 1

### blendMode

The blending mode for the layer or fill. See the list below for possible values

    0:  Normal;
    1:  Darken;
    2:  Multiply;
    3:  Color Burn;
    4:  Lighten;
    5:  Screen;
    6:  Color Dodge;
    7:  Overlay;
    8:  Soft Light;
    9:  Hard Light;
    10: Difference;
    11: Exclusion;
    12: Hue;
    13: Saturation;
    14: Color;
    15: Luminosity;
    16: Source In;
    17: Source Out;
    18: Source Atop;
    19: Destination Over;
    20: Destination In;
    21: Destination Out;
    22: Destination Atop;
