---
title: AppController
date: 2015-10-13
author: Ale Muñoz
rels:
  - MSPluginBundle
  - MSPluginCommand
---



`AppController` contains a number of useful methods to control Sketch. The fastest way to get to them in your scripts is by calling `NSApp.delegate()`, which will return an AppController instance:

```javascript
var app = NSApp.delegate()
log(app.templateLibraryPath())
```

## Methods & Attributes

### openPreferencesWindowWithPreferencePaneIdentifier:(NSString)identifier

Opens the Preferences panel at the given `identifier` tab. As of Sketch 3.4, identifier can be either: "general", "canvas", "layers" or "plugins".

```javascript
var app = NSApp.delegate()
app.openPreferencesWindowWithPreferencePaneIdentifier("plugins")
```

### refreshCurrentDocument:

Refreshes the current document. This will redraw everything on the canvas, including any overlays (i.e: measures, guides, layouts, etc…)

### templateLibraryPath:

Returns the path to the Templates used in the File › New From Template… menu.

### openTemplateAtPath:(NSURL)templateURL

Opens a Sketch file as a new, untitled document. This is used internally to open the Templates from the File › New From Template menu, but you can use it to make a new document from any file.

### pluginContext

Returns an NSDictionary of the currently running plugin's context (see [Script Context](/introduction/plugin-scripts/#script-context) for more info).

### runPluginCommand:(MSPluginCommand)command

Runs the specified command from the Plugins menu.

### runPluginCommandWithIdentifier:(NSString)identifier fromBundleAtURL:(NSURL)url

Runs the specified command `identifier` from the plugin bundle at `url`. See [MSPluginBundle](/docs/MSPluginBundle/) for more information.

Example (copy [this plugin](/downloads/plugins/hi.sketchplugin.zip) to your Desktop):

```javascript
var path = [NSString stringWithString:"~/Desktop/Hi.sketchplugin"];
var url = [NSURL fileURLWithPath:[path stringByExpandingTildeInPath]];

var result = [[NSApp delegate] runPluginCommandWithIdentifier:"hi" fromBundleAtURL:url];
log(result); // "Hi, how are you?"
```

### runPluginAtURL:(NSURL)url

Runs a legacy-format plugin located at `url`.

### runPluginScript:(NSString)script name:(NSString)name

Runs the specified `script` as a plugin. This is useful if you want to execute dynamically generated code (for example, if you want to integrate Sketch with some third party tool, see [Third Party Integrations](/examples/third-party-integrations/) for more information):

```javascript
var app = NSApp.delegate()
var methodToExecute = "log"
app.runPluginScript_name( methodToExecute + "('Hello, World')", "Log Demo")
```
