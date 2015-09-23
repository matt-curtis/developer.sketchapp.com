---
layout: class
title:  "MSPluginCommand"
rels:
  - MSPluginBundle
---

## Overview

Represents a single command within a plugin bundle. This can be used to access metadata about the currently executing command, and to store arbitrary metadata on layers for later use.

## Methods & Attributes

### name

A string specifying the name for the command, suitable for displaying to the user. This is also the menu item title for the command

### identifier

A string specifying a unique identifier for the command within the plugin bundle. Changing the name of the plugin shouldn't change this identifier. This is used to consistently map commands to keyboard shortcuts, irrespective of name changes.

### valueForKey:onLayer:

Returns the arbitrary metadata stored on a layer for specified key, or nil if no such metadata exists

### setValue:forKey:onLayer:

Stores the given value for the specified layer under the given key. Values passed to this method must be composed of arrays, dictionaries, numbers and strings.

These values are stored in the document, and are persistent between application launches and across machines.

### valueForKey:onLayer:forPluginIdentifier:

Returns the arbitrary metadata stored on a layer for specified key, or nil if no such metadata exists. This is similar to `valueForKey:onLayer:`, but can be used to share metadata between plugins.

### setValue:forKey:onLayer:forPluginIdentifier:

Stores the given value for the specified layer under the given key. Values passed to this method must be composed of arrays, dictionaries, numbers and strings.

These values are stored in the document, and are persistent between application launches and across machines.

This is similar to `setValue:forKey:onLayer:`, but can be used to share metadata between plugins.
