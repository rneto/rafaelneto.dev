(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{513:function(a,t,e){"use strict";e.r(t);var s=e(6),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"using-webpack-4-to-transform-and-package-web-application-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-webpack-4-to-transform-and-package-web-application-resources"}},[a._v("#")]),a._v(" Using Webpack 4 to transform and package web application resources")]),a._v(" "),e("social-share",{staticClass:"social-share--header"}),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/blog/usar-webpack-4-transformar-empaquetar-recursos-aplicacion-web/"}},[a._v("Español")]),a._v(" | English")],1),a._v(" "),e("p",[e("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Webpack"),e("OutboundLink")],1),a._v(" is one of the most widely used JavaScript technologies for years to transform and package all kinds of web resources, such as JavaScript, HTML, CSS or images.")]),a._v(" "),e("p",[a._v("Its system is based on the chained execution of "),e("a",{attrs:{href:"https://webpack.js.org/concepts/loaders/",target:"_blank",rel:"noopener noreferrer"}},[a._v("loaders"),e("OutboundLink")],1),a._v(" and "),e("a",{attrs:{href:"https://webpack.js.org/concepts/plugins/",target:"_blank",rel:"noopener noreferrer"}},[a._v("plugins"),e("OutboundLink")],1),a._v(" that transform and package our files and their dependencies, resulting in new static resources (known as "),e("em",[a._v("bundles")]),a._v(") that we will use in our application.")]),a._v(" "),e("p",[a._v("With Webpack we can for example convert ES2015+ to ES5, TypeScript, CoffeeScript, Elm to JavaScript, import images, CSS, JSON or XML styles directly into our JavaScript file, transform our Markdown, Pug, Jade, Twig templates to HTML, convert SCSS, SASS, Stylus, LESS, PostCSS files to CSS and much more.")]),a._v(" "),e("p",[a._v("Starting for example from JavaScript files:")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// index.js")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("Hi ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),a._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("!")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// user.js")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("getName")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Rafael'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nexports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("getName "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" getName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("Webpack would take as input file our "),e("em",[a._v("index.js")]),a._v(", parse its dependencies ("),e("em",[a._v("user.js")]),a._v(") and generate a new single resource "),e("em",[a._v("main.js")]),a._v(" with all the necessary code.")]),a._v(" "),e("h2",{attrs:{id:"installing-webpack-globally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-webpack-globally"}},[a._v("#")]),a._v(" Installing Webpack globally")]),a._v(" "),e("p",[a._v("In order to install Webpack it is necessary to have previously installed "),e("a",{attrs:{href:"https://nodejs.org/es/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("Installing it globally allows us to access it from anywhere on the terminal.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" webpack webpack-cli -g\n")])])]),e("p",[a._v("This way we will have installed the package, as well as the necessary commands to be able to perform the Webpack operations.")]),a._v(" "),e("h2",{attrs:{id:"installing-webpack-locally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-webpack-locally"}},[a._v("#")]),a._v(" Installing Webpack locally")]),a._v(" "),e("p",[a._v("If we have not done it yet, we must start npm in the folder of our project to be able to save the dependencies that are installed.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init\n")])])]),e("p",[a._v("We will indicate what is necessary in the questions that the system will ask us or we will press "),e("em",[a._v("enter")]),a._v(" to leave the pre-determined values in the new "),e("em",[a._v("package.json")]),a._v(" file that will be created.")]),a._v(" "),e("p",[a._v("Then we can install Webpack as a dependency package for development (using the "),e("em",[a._v("--save-dev")]),a._v(" or "),e("em",[a._v("-D")]),a._v(" option), since it is a package that we will only use during the creation ("),e("em",[a._v("build")]),a._v(") of our application.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i --save-dev webpack webpack-cli\n")])])]),e("h2",{attrs:{id:"configuring-and-packaging-with-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-and-packaging-with-webpack"}},[a._v("#")]),a._v(" Configuring and packaging with Webpack")]),a._v(" "),e("p",[a._v("It is possible to use Webpack from the command line with all the options we need to be able to transform and package our resources, but in practice, it is best to generate a configuration file "),e("em",[a._v("webpack.config.js")]),a._v(" in the root directory of our project.")]),a._v(" "),e("p",[a._v("For our previous example of two JavaScript files "),e("em",[a._v("index.js")]),a._v(" and "),e("em",[a._v("user.js")]),a._v(", it would be enough to generate the following content in the configuration file.")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// webpack.config.js")]),a._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  entry"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./index.js'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("We would also take the opportunity to add a new script to the "),e("em",[a._v("package.json")]),a._v(" file to simplify Webpack execution.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".,\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"build"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack"')]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(",\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Now, when we run the "),e("code",[a._v("npm run build")]),a._v(" command in our directory, it will package our files by default in "),e("em",[a._v("./build/main.js")]),a._v(".")]),a._v(" "),e("p",[a._v("You can check all the code of the previous example in "),e("a",{attrs:{href:"https://github.com/rneto/webpack-4-basic-js-build-test",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("hr"),a._v(" "),e("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);t.default=n.exports}}]);