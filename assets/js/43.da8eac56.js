(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{504:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"serve-static-html-files-locally-with-node-js-and-http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serve-static-html-files-locally-with-node-js-and-http-server"}},[e._v("#")]),e._v(" Serve static HTML files locally with Node.js and http-server")]),e._v(" "),a("social-share",{staticClass:"social-share--header"}),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/blog/servir-archivos-html-estaticos-localmente-nodejs-http-server/"}},[e._v("Español")]),e._v(" | English")],1),e._v(" "),a("p",[e._v("Often we need to serve static HTML files locally, without having to install and configure an HTTP server for such simple content.")]),e._v(" "),a("p",[e._v("Some quick alternatives could be to directly open the HTML file in our favorite web browser, make use of the "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Server for Chrome"),a("OutboundLink")],1),e._v(" extension from Google Chrome or use the "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Server"),a("OutboundLink")],1),e._v(" extension from Visual Studio Code, however, if we want to take steps towards "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(" and take advantage of its potential, one of the easiest ways to locally serve the content of a directory is using the "),a("strong",[a("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("http-server"),a("OutboundLink")],1)]),e._v(" package which offers us a simple, powerful and zero effort HTTP "),a("strong",[e._v("server with zero initial configuration")]),e._v(".")]),e._v(" "),a("p",[e._v("The first thing you need to do is install the package. You can do this globally if you want to serve the contents of any directory.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" http-server -g\n")])])]),a("p",[e._v("Or install it as its own dependency inside the project/directory to use it exclusively in it.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" http-server\n")])])]),a("p",[e._v("Once installed, we locate ourselves in the directory where we have our static content and we start the http server.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("http-server\n")])])]),a("p",[e._v("From this moment on, we will be able to access the content of our directory through port 8080 by default through some of the IPs offered.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Starting up http-server, serving ./\nAvailable on:\n  http://192.168.56.1:8080\n  http://10.8.0.10:8080\n  http://192.168.1.39:8080\n  http://127.0.0.1:8080\nHit CTRL-C to stop the server\n")])])]),a("h2",{attrs:{id:"open-browser-automatically-after-http-server-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-browser-automatically-after-http-server-startup"}},[e._v("#")]),e._v(" Open browser automatically after http-server startup")]),e._v(" "),a("p",[e._v("Whether we add the http-server package as a dependency within our project/directory or if we add it globally, it is possible to make our default browser automatically open with our "),a("em",[e._v("index.html")]),e._v(" page once the server is started.")]),e._v(" "),a("p",[e._v("To do this we must make use of the "),a("em",[e._v("package.json")]),e._v(" that we must have in our directory.")]),e._v(" "),a("blockquote",[a("p",[e._v("A simple way to create a "),a("em",[e._v("package.json")]),e._v(" file is to execute the command ```npm init```` in the directory where we want to create it and answer the questions of the questionnaire (we can simply press "),a("em",[e._v("intro")]),e._v(" to leave them all with the default answer).")])]),e._v(" "),a("p",[e._v("We must add a new script to the "),a("em",[e._v("package.json")]),e._v(" file (in the following example "),a("em",[e._v("start")]),e._v(") to start the server and in turn open the browser with the default page "),a("em",[e._v("index.html")]),e._v(" (http-server defaults to that file for any directory request).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http-server -o"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Now, when we run the ```npm start`` command in our directory, the server will start and in turn our default web browser will open with the "),a("em",[e._v("index.html")]),e._v(" page of our directory.")]),e._v(" "),a("hr"),e._v(" "),a("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);t.default=r.exports}}]);