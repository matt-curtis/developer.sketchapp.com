---
title: Plugin Basics
summary: Basic concepts for plugin users.
permalink: /introduction/
order: 100
---

## What is a Plugin?

A Plugin is a collection of one or more **scripts**. Each script defines one or more **commands** which extend Sketch in some way.

On disk, a Plugin is simply represented as a folder with the `.sketchplugin` file extension, containing a number of files and sub-folders, arranged in a [standard layout](/introduction/plugin-bundles/).

One special file in this folder - `manifest.json` - describes the Plugin. Sketch uses this to find the names of the commands that the Plugin implements, and to create menu commands which allow you to execute them.

Other files in the Plugin folder include the actual scripts which implement the commands, and optional resources (such as images) that the commands make use of to do whatever they do.

Plugin scripts are written using [CocoaScript](https://github.com/ccgus/CocoaScript), which is a variation of JavaScript. We’ll talk more about CocoaScript in the [Plugin Scripts](/introduction/plugin-scripts/) section.

## Where are Plugins located?

When Sketch starts up, it scans a folder on your disk looking for Plugins.

Exactly where this folder actually lives depends on whether you bought Sketch from the App Store, or from our website:

- If you bought via the App Store, the location will be

```
~/Library/Containers/com.bohemiancoding.sketch3/Data/Library/Application Support/sketch/Plugins
```

- If you bought from our website, it will be

```
~/Library/Application Support/com.bohemiancoding.sketch3/Plugins
```

*(~ here is shorthand for your home folder, e.g. `/Users/joe`)*

You can access this Plugins folder easily by creating a Plugin with this code:

```
[[NSWorkspace sharedWorkspace] openURL:[MSPluginManager pluginsURL]]
```

### Installing Plugins

If you double-click a .sketchplugin file, Sketch will copy it into the Plugins folder for you. Any commands that it implements should immediately show up in the **Plugins** menu.

Alternatively, you can install plugins by simply moving them into the Plugins folder yourself.

*Note: Sketch also supports using aliases and links to individual Plugins, or to the Plugins folder itself. For versions of Sketch bought from our website, this allows you to place them elsewhere if necessary (when using the version of Sketch bought through the App store, sandboxing imposes some restrictions).*


### Removing Plugins

To remove a Plugin, just select the **Plugins › Manage Plugins…** menu option, select the Plugin you want to remove from the list, and either right click the plugin or click the gear icon and select *Uninstall "Plugin Name"*:

![](/images/developer/plugin-uninstall.png)

Any commands that the Plugin provided will be removed from the **Plugins** menu immediately.

Alternatively, you can just uncheck any Plugin on the list to disable it without uninstalling it.

## Getting Started

By now, probably you’re wondering how to get started writing your own.

Often the best place to start is with some existing examples. With this in mind, we’ve included [Some Example Plugins](/resources/#sample-plugins) along with this documentation.

These aren’t intended to actually be massively useful additions to Sketch, but they illustrate how to get a Plugin working, and can be copied to form the basis of something new.

The [Resources](/resources/) page also lists a number of good places to find other Plugins.

When you feel ready to dive in and make something of your own, more information can be found in [Plugin Scripts](/introduction/plugin-scripts/).
