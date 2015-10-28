---
title: MSImageCollection
rels:
  - MSImageProxy
  - MSImageData
---


## Methods & Attributes

### (NSUInteger)uniqueImageCount:

Return the number of unique images in the collection. Images can be referenced more than once, so this value may not be the same as the total number of images in the document.

### (MSImageData)addNSImage:(NSImage)image convertColourspace:(BOOL)convertColorspace

Add an image to the collection. We calculate a SHA1 for it, and only actually add a new item to the collection if it's not already present. The returned proxy is immediately usable as it has its imageData resolved already.

### (NSDictionary)rawImageDataIndexedBySHAs:(NSSet)shas;

Return a dictionary of images with the given shas, for later use with addImagesIndexedBySHA. This dictionary can be safely encoded (eg into the pasteboard) without pulling in the image collection object itself or anything else that isn't strictly necessary.

### (void)addRawImageDataIndexedBySHA:(NSDictionary)images

Add images with known SHAs to the collection. Typically the dictionary passed in here will originally have been created by the `rawImageDataIndexedBySHAs` method.

### (MSImageData)imageWithSHA1:(NSData*)sha1

Return an image from the collection matching a given SHA1. This is used by [MSBitmapLayer](/docs/MSBitmapLayer/) to retrieve the actual image to draw.

### (void)purgeImagesNotMatchingSHAs:(NSSet)shas

Remove images that aren't in contained in a set of SHA1s.