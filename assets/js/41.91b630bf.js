(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{503:function(a,t,e){"use strict";e.r(t);var s=e(6),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"optimizing-angular-by-analyzing-npm-packages-with-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-angular-by-analyzing-npm-packages-with-webpack"}},[a._v("#")]),a._v(" Optimizing Angular by analyzing npm packages with webpack")]),a._v(" "),e("social-share",{staticClass:"social-share--header"}),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/blog/optimizar-angular-analisis-paquetes-npm-webpack/"}},[a._v("Español")]),a._v(" | English")],1),a._v(" "),e("p",[a._v("Beyond the optimization of an Angular application through for example the "),e("RouterLink",{attrs:{to:"/en/blog/architecture-best-practices-angular/#lazy-loading"}},[a._v("deferred loading of modules")]),a._v(" or by using a change detection strategy based on "),e("em",[a._v("OnPush")]),a._v(", we must also take into account the fact that the third-party packages that we include, will also affect the loading time of the application, either by their own size or even by their initialization time. That is why optimizing Angular by analyzing npm packages should also be one of our goals before putting the application into production.")],1),a._v(" "),e("p",[a._v("At the speed at which our work environment moves, we are sure that we can think of packages that we have stopped using (in my case for example I have replaced "),e("em",[a._v("ng-zorro")]),a._v(" by "),e("RouterLink",{attrs:{to:"/en/blog/integrate-tailwind-css-angular-material/"}},[a._v("Tailwind CSS with Angular Material")]),a._v(") and that may in some cases have remained as an imported dependency in the code without us realizing it. There are also packages that covered needs that the language already supports (such as using "),e("em",[a._v("lodash")]),a._v(" instead of "),e("RouterLink",{attrs:{to:"/en/blog/optimizing-javaScript-loops/"}},[a._v("high-level JavaScript methods like map,_filter,_reduce,_some, every o_forEach")]),a._v("), but whose dependency was not removed during the refactoring iterations. And let's not forget those third-party package dependencies that serve to cover simple functionalities that we could implement ourselves with little effort if we knew how much such a package increases the size of our application.")],1),a._v(" "),e("h2",{attrs:{id:"how-to-analyze-the-packages-of-our-angular-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-analyze-the-packages-of-our-angular-application"}},[a._v("#")]),a._v(" How to analyze the packages of our Angular application?")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/blog/using-webpack-4-transform-package-web-application-resources/"}},[a._v("Webpack")]),a._v(" has a feature that consists in generating a visual map of the webpack package composition and since this is the default tool for Angular CLI module packaging, why not take advantage of it?")],1),a._v(" "),e("h3",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p",[a._v("First of all, we will add the necessary package to our development dependencies:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev webpack-bundle-analyzer\n")])])]),e("h3",{attrs:{id:"configuracion-de-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-scripts"}},[a._v("#")]),a._v(" Configuración de scripts")]),a._v(" "),e("p",[a._v("Next we will modify the "),e("em",[a._v("package.json")]),a._v(" file of our application to simplify the process of generating the package analysis:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"stats"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ng build --stats-json & webpack-bundle-analyzer dist/my-app/stats.json"')]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),e("p",[e("em",[a._v("package.json")])]),a._v(" "),e("h3",{attrs:{id:"package-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package-analysis"}},[a._v("#")]),a._v(" Package analysis")]),a._v(" "),e("p",[a._v("From this point on, we have automated the analysis and visualization of our package map by means of the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run-script stats\n")])])]),e("p",[a._v("And this will be the result that we will see in our browser:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif",alt:"Interactive map of packages with webpack"}}),a._v(" "),e("em",[a._v("Interactive map of packages with webpack")]),a._v(".")]),a._v(" "),e("p",[a._v("With this information we can now know what is inside the packages, which modules occupy more space and which modules should not be there, so go ahead with the optimization.")]),a._v(" "),e("hr"),a._v(" "),e("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);t.default=n.exports}}]);