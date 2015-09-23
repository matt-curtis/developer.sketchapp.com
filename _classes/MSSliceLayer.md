---
title: MSSliceLayer
inherits:
  - MSLayer
rels:
  - MSRect
  - MSSliceLayer
---

## Overview

Subclass of [MSLayer]({{site.baseurl}}/docs/MSLayer) representing a slice in the document. Although it may have a style attribute, this is never used.

MSSliceLayer has —like MSLayer— a `frame` property that is an [MSRect]({{site.baseurl}}/docs/MSRect) which determines its position in the canvas or inside its artboard.

To export a slice you can use something like the following code:

```objective-j
var doc = context.document
var slice = [[[doc currentPage] slices] firstObject]
[doc saveArtboardOrSlice:slice toFile:"~/desktop/test.png"]
```

(See the [Exporting]({{site.baseurl}}/examples/exporting) section for more advanced examples.)
