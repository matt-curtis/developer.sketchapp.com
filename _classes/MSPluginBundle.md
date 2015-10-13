---
title: MSPluginBundle
rels:
  - MSPluginCommand
  - AppController
---

## Overview

Represents a bundle of MSPluginCommands. This can be used to access metadata about the currently executing command's bundle.

## Methods & Attributes

### url

A URL specifying the location of the plugin bundle

### commands

A dictionary of plugin commands, indexed by their command identifiers

### name

A string specifying the name for the plugin, suitable for displaying to the user

### identifier

A string specifying a unique identifier for the plugin. Reverse-domain syntax is strongly encouraged, for example: `com.example.sketch.shape-plugins`

### pluginDescription

A string describing what this plugin (or collection of plugins) does, suitable for displaying to the user

### author

A string specifying the author of the plugin

### authorEmail

An optional string specifying how to contact the plugin author by email

### urlForResourceNamed:

Returns a file URL for the named resource within the plugin bundle's Resources folder, or nil if no resource exists
