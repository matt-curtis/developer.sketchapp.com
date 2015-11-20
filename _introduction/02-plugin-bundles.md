---
title: Plugin Bundles
permalink: /introduction/plugin-bundles/
---

A Plugin is a collection of one or more **scripts**. Each script defines one or more **commands** which extend Sketch in some way.

On disk, a Plugin is represented as a folder with the `.sketchplugin` file extension, containing a number of files and sub-folders.

Strictly speaking, a Plugin is actually an [OS X package](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/DocumentPackages/DocumentPackages.html#//apple_ref/doc/uid/10000123i-CH106-SW1), arranged as an [OS X bundle](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/AboutBundles/AboutBundles.html#//apple_ref/doc/uid/10000123i-CH100-SW1).

A package is any directory that the Finder presents to the user as if it were a single file (you can use the **Reveal Package Contents** command in the Finder to look inside).

A bundle is a directory with a standardized hierarchical structure that holds executable code and the resources used by that code.

In the case of Sketch Plugins, we don’t currently allow native compiled code, but we do use the standard bundle layout (resources, for example, live in the Resources/ folder in the bundle), with the plugin-specific files located in an additional Sketch/ directory.

## Terminology

Before we get any further, let’s define a bit of terminology.

- *Plugin Bundle*: the folder on disk containing the files that make up the *Plugin*
- *Plugin*: a collection of *scripts*, *commands* and other resources grouped together as a discrete unit
- *Action*: something the user does (selecting a menu, or changing the document) which triggers a Plugin *command*
- *Command*: a Plugin can define more than one action; typically each one is associated with a different menu command, and causes a different *handler* to be executed in a *script* within the *Plugin*
- *Script*: a CocoaScript file containing one or more *handlers* which implement the behaviour of the *Plugin*.
- *Handler*: a CocoaScript function which executes some code to implement a command.

## Plugin Bundle Folder Structure

Bundles contain a `manifest.json` file, one or more `.cocoascript` files (containing scripts written in CocoaScript or JavaScript) which implement commands shown in the Plugins menu, and any number of shared library scripts and resource files.

Here’s an example:

```
mrwalker.sketchpluginbundle
  Contents/
    Sketch/
      manifest.json
      shared.js
      Select Circles.cocoascript
      Select Rectangles.cocoascript
    Resources/
      Screenshot.png
      Icon.png
```

The most critical file in all of this is the manifest.json file, which tells Sketch where everything else lives.

## Manifest

The manifest is a JSON file containing metadata about the Plugin, its commands and resources.

It describes such things as the full name, a description, and the name of the author. It lists the names of any commands defined by the Plugin, and tells Sketch what to call the corresponding menu items and which menus to put them in.

Here’s an example:

<a id="manifest-json-example"></a>

```json
{
  "name": "Select Shapes",
  "description": "Plugins to select and deselect shapes",
  "author": "Joe Bloggs",
  "homepage": "http://github.com/example/sketchplugins",
  "version": 1.0,
  "identifier": "com.example.sketch.shape-plugins",
  "updateURL": "https://github.com/downloads/example/sketchplugins/sketchplugins.json",
  "compatibleVersion": 3,
  "bundleVersion": 1,
  "commands": [
    {
      "name": "All",
      "identifier": "all",
      "shortcut": "ctrl shift a",
      "script": "shared.js",
      "handler": "selectAll"
    },
    {
      "name": "Circles",
      "identifier": "circles",
      "script": "Select Circles.js"
    },
    {
      "name": "Rectangles",
      "identifier": "rectangles",
      "script": "Select Rectangles.js"
    }
  ],
  "menu": {
    "items": [
      "all",
      "circles",
      "rectangles"
    ]
  }
}
```

This Plugin is called “Select Shapes”. It defines three commands “All”, “Circles”, and “Rectangles”, which will be placed in a “Select Shapes” menu.

Unpacking this file a bit further, here are the supported keys and what they are for:

#### Name

The name for this Plugin. This is used by default as the name of the sub-menu in which the Plugin’s menu commands will appear.

#### Description

A string describing what this Plugin’s command (or commands) do.

#### Author

A string specifying the author of the Plugin.

#### Email

An optional string specifying how to contact the Plugin author by email.

#### Homepage

An optional string specifying an online resource for the user to find out more information or provide feedback for the Plugin.

#### Version

A string specifying the [semantic version][Semantic Versioning] for the Plugin, for example `1.0`, `1.1.1`.

#### Identifier

A string specifying a unique identifier for the Plugin.

Reverse-domain syntax is strongly encouraged, for example `com.example.sketch.shape-plugins`.

Sketch uses this string internally to track the Plugin, store settings for it, etc.

#### Compatible Version

A string specifying the [version][Semantic Versioning] of Sketch in which the author has tested the Plugin, for example `3`, `3.1`, `3.2.2`.

#### Bundle Version

The version for the layout of the bundle an metadata. If excluded it is assumed the value is 1.

This is just a future-proofing mechanism for us. If, in the future, we see a plugin with a bundleVersion > 1, we'd know that we could treat the other values in the metadata differently.

For now it's fine to omit it.

#### disableCocoaScriptPreprocessor

This is an advanced setting, and it defaults to `false`. When set to `true`, it will disable CocoaScript's own preprocessor. This way, you'll be able to use build systems like browserify or ES6 module syntax to develop your plugins.

Setting this option to `true` does the following:

- disables `@import` support, you'll have to take care of your imports manually
- disables bracket syntax (i.e: `[obj msg:]`), you'll have to use dot-syntax only

#### Commands

An array of commands that the Plugin defines.

Each item within the array is a dictionary specifying the name, shortcut and other properties of the command. See [Plugin Commands](#plugin-commands) for more details.

#### Menu

A dictionary describing the menu layout for the commands in this Plugin.

See [Plugins Menu](#plugins-menu) for more details on the contents of this dictionary, and how the menu for each Plugin is built.

## Plugin Commands

A Plugin defines one or more commands for the user to execute.

The commands array in the manifest describes these. Each entry in the array is a dictionary, with the following properties:

#### Name

The display name for the command. This value is used in the Plugins menu.

#### Identifier

A string specifying a unique identifier for the command within the Plugin bundle. This is used to consistently map commands to actions, irrespective of command name changes.

#### Shortcut

An optional string specifying a default keyboard shortcut for this command, for example: `ctrl t`, `cmd t`, `ctrl shift t`.

#### Script

The relative path within the Plugin bundle’s `Sketch` folder for the script that implements this command.

#### Handler

The name of the function with the script to call this command. The function must take a single `context` parameter, which is a dictionary with keys for things like the current document and selection. If unspecified the command is expected to be `onRun`:

```javascript
var onRun = function (context) {
  var doc = context.document;
  var selection = context.selection;
  …
}
```

## Plugins Menu

When it loads a Plugin, Sketch creates a menu for it, and populates that menu using information from the “menu” dictionary in the manifest file.

This dictionary can contain the following keys.

#### Title

A string specifying the title to use for the submenu.

#### Items

This is an array which lists the items to include in the menu.

It can contain items of two types:

- a string giving the the identifier of a command
- a dictionary describing a sub-menu (containing "title" and "items")


#### isRoot

By default, the menu items listed in this dictionary will appear in a menu with the name specified by the *title* key.

If the the isRoot key is specified, with a value of true, the items will instead be inserted at the root level of the Plugins menu, rather than in a subfolder.  In this case, the *title* key will be ignored.

*This key is ignored in sub-menus.*

### Menu Example

Here’s an example. It defines three commands in a menu called “My Plugin Menu”. The first two items of the menu correspond to two of the Plugin’s commands, but the third item is a submenu called “My Plugin Submenu”. This submenu has a single item in it (the third of the Plugin’s commands):

```json
{
  "menu": {
    "title": "My Plugin Menu",
    "items": [
      "command1-identifier",
      "command2-identifier",
      {
         "title": "My Plugin Submenu",
         "items": [
           "command3-identifier"
         ]
       }
    ]
  }
}
```

## Handlers

Plugin commands are implemented by handlers.

These are simply JavaScript functions which live in a `.cocoascript` file in the Plugin bundle, and which take a single parameter containing some context.

Here’s a simple example:

```javascript
var doMyCommand = function(context) {
  context.document.currentPage().deselectAllLayers();
}
```

In the manifest file, you specify a dictionary describing each command that the Plugin defines.

In this dictionary, *script* and *handler* keys tell Sketch which script file to look in, and which handler to run.

You are free to put each command implementation into its own script file, or to put them all in a single file.

You must specify the *script* key for each command.

If you put each command in its own script file, you can omit the *handler* key. In this case, Sketch will default to calling the `onRun` handler.

If you put multiple command handlers into the same script file, you need to use the *handler* key for each one, since they can’t all use the `onRun` handler!.


[Semantic Versioning]: http://semver.org
