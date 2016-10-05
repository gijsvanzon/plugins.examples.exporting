// Exporter, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.exporter)
//
// This is an example plugin, which illustrates how to export layers.

//
// ## Layout
//
// The first thing to do when making a plugin is to setup the folder structure, which should
// look something like this:
//
// ```
//    MyPlugin.sketchplugin/
//      Contents/
//        Sketch/
//          manifest.json
//          script.js
// ```
//
// ## Manifest
//
// The plugin needs a `manifest.json` file. This tells Sketch which menu items your plugin supplies,
// as well as giving some general information about the plugin such as its name, author, and so on.
//
// A single plugin can supply multiple menu items, and each one can execute different code,
// or they can all share code. In our case though, we just have one command.
//
//  ```json
// {
//     "name" : "Hello World!",
//     "identifier" : "com.sketchapp.examples.helloworld",
//     "version" : "1.0",
//     "description" : "Pretty much the smallest example Sketch Plugin you could have.",
//     "authorEmail" : "sam@sketchapp.com",
//     "author" : "Sam Deane",
//     "commands" : [
//     {
//       "script" : "hello-world.js",
//       "handler" : "onRun",
//       "shortcut" : "",
//       "name" : "Hello World!",
//       "identifier" : "helloworld"
//     }
//   ]
// }
// ```

// ## Code
// ### Defining The Run Handler
//
// In the manifest, we told Sketch that every time the "Hello World!" menu is selected,
// we want to execute  a javascript handler called `onRun`.
//
// So now we need to put some code into the `hello-world.js` file to implement that command.

function onExportLayers(context) {

    // Fetch the root Sketch object
    var sketch = context.api()

    var options = {}

    // Iterate over each layer in the selection, exporting it
    sketch.selectedDocument.selectedLayers.iterate(function(layer) {
      layer.export(options)
    })
};

// And that's it. Job done.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developer@sketchapp.com>!
