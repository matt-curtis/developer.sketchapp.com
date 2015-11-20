---
title: Legacy Plugins and Implicit Menus
permalink: /introduction/legacy-plugins/
order: 400
---

## Legacy Script Support

In previous versions of Sketch (prior to 3.4), a Plugin was just a single text file containing some CocoaScript code.

These scripts were executed within the global scope, and had access to some variables:

- doc
- selection
- sketch

For the sake of compatibility, we still support these legacy Plugins, but we strongly encourage Plugin authors to move to the new format.

When Sketch encounters an old-style script, in effect it creates a new-style Plugin on-the-fly, containing a single script and a single command. It uses the file name of the Plugin as it’s identifier (and also for its menu item).

## Legacy Menu Support

Previously, the Plugins menu supported placing script files inside sub-folders as a way to group them into sub-menus.

This is still supported, but again, we encourage you to convert your Plugins to the new format.

When Sketch encounters old-style Plugin scripts, it uses their file names as the titles of their menu commands. If they are in sub-folders, it creates sub-menus using the folder names.

Some "fallback" behavior is also supported within new-style Plugins, if the *menu* key is missing from the manifest. In this case we try to build the menu items implicitly. We recommend that you use the *menu* key, but the following describes the implicit mechanism:

Commands in scripts with a `.cocoascript` file extension and an `onRun` command handler will be added to the Plugins menu automatically, using the file name of the script as the menu item title.

For a bundle like this:

```
Select Shapes.sketchpluginbundle
  Contents/
    Sketch/
      manifest.json
      Select Circles.cocoascript
      Select Rectangles.cocoascript
```

if the menu key was missing from the manifest, the resulting menu would look like this:

```
Plugins >
  Select Shapes >
    Select Circles
    Select Rectangles
  --
  Custom Plugin…
  Run Last Plugin
etc...
```
