(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{535:function(e,a,s){"use strict";s.r(a);var n=s(6),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"instalar-multiples-versiones-de-node-js-en-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-multiples-versiones-de-node-js-en-windows"}},[e._v("#")]),e._v(" Instalar múltiples versiones de Node.js en Windows")]),e._v(" "),s("social-share",{staticClass:"social-share--header"}),e._v(" "),s("p",[e._v("Español | "),s("RouterLink",{attrs:{to:"/en/blog/installing-multiple-nodejs-versions-windows/"}},[e._v("English")])],1),e._v(" "),s("p",[e._v("Una vez nos hemos sumergido en los frameworks y entornos de trabajo front end modernos, vamos a empezar a encontrarnos con que cada uno de nuestros proyectos puede haber sido creado con una versión diferente de Node.js, lo que implica que debamos empezar a tener en cuenta la versión mínima y máxima soportada de cada paquete "),s("em",[e._v("npm")]),e._v(" en cada versión de Node.js. Es el caso por ejemplo del paquete "),s("a",{attrs:{href:"https://github.com/sass/node-sass",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-sass"),s("OutboundLink")],1),e._v(", cuyas versiones mínimas y máximas compatibles con Node.js son:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Node.js")]),e._v(" "),s("th",[e._v("Versión node-sass soportada")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Node 15")]),e._v(" "),s("td",[e._v("5.0+")])]),e._v(" "),s("tr",[s("td",[e._v("Node 14")]),e._v(" "),s("td",[e._v("4.14+")])]),e._v(" "),s("tr",[s("td",[e._v("Node 13")]),e._v(" "),s("td",[e._v("4.13+, <5.0")])]),e._v(" "),s("tr",[s("td",[e._v("Node 12")]),e._v(" "),s("td",[e._v("4.12+")])]),e._v(" "),s("tr",[s("td",[e._v("Node 11")]),e._v(" "),s("td",[e._v("4.10+, <5.0")])]),e._v(" "),s("tr",[s("td",[e._v("Node 10")]),e._v(" "),s("td",[e._v("4.9+")])]),e._v(" "),s("tr",[s("td",[e._v("Node 8")]),e._v(" "),s("td",[e._v("4.5.3+, <5.0")])]),e._v(" "),s("tr",[s("td",[e._v("Node <8")]),e._v(" "),s("td",[e._v("<5.0")])])])]),e._v(" "),s("p",[e._v("Poniéndonos en este contexto, podría darse el caso por ejemplo de que no hayamos podido migrar un "),s("em",[e._v("viejo")]),e._v(" proyecto Angular de la versión 7.0.0 a la más actual. En ese caso, si queremos seguir trabajando en él sin realizar la migración, nos encontraremos en nuestro fichero "),s("em",[e._v("package.json")]),e._v(" la dependencia "),s("code",[e._v('"@angular-devkit/build-angular": "~0.7.0"')]),e._v(", que a su vez depende de "),s("code",[e._v('"node-sass": "^4.9.3"')]),e._v(". Esto implica que en lugar de trabajar con la versión más actual de Node.js, deberíamos hacerlo (según la tabla anterior) con la versión "),s("em",[e._v("10.x")]),e._v(" de Node.js, ya que en caso contrario tendríamos problemas con el uso de librerías dependientes como "),s("em",[e._v("node-sass")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"node-version-manager-nvm-al-rescate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-version-manager-nvm-al-rescate"}},[e._v("#")]),e._v(" Node Version Manager (nvm) al rescate")]),e._v(" "),s("p",[e._v("Ahora que ya no hay marcha atrás, toca descubrir herramientas como "),s("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm windows"),s("OutboundLink")],1),e._v(" que nos permitirá administratar en nuestro equipo Windows múltiples instalaciones de Node.js. Si eres usuario de Mac o Linux, debes usar el proyecto "),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),s("OutboundLink")],1),e._v(", muy similar pero exclusivo para dichos entornos.")]),e._v(" "),s("h3",{attrs:{id:"instalacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacion"}},[e._v("#")]),e._v(" Instalación")]),e._v(" "),s("p",[e._v("En primer lugar, "),s("strong",[e._v("es muy importante para evitar futuros conflictos entre versiones")]),e._v(", que desinstalemos de nuestro ordenador cualquier versión previa de Node.js, así como toda referencia a dicha instalación mediante la eliminación de los directorios de instalación "),s("em",[e._v("C:\\Program Files\\nodejs")]),e._v(" y de instalación npm "),s("em",[e._v("C:\\Users<user>\\AppData\\Roaming\\npm")]),e._v(". Acuérdate antes de hacer un backup de la configuración "),s("em",[e._v("C:\\Users<user>\\AppData\\Roaming\\npm\\etc\\npmrc")]),e._v(" o copiarla a la configuración de usuario "),s("em",[e._v("C:\\Users<user>.npmrc")]),e._v(".")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/coreybutler/nvm/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Descárgate el último instalador"),s("OutboundLink")],1),e._v(" ("),s("em",[e._v("nvm-setup.zip")]),e._v(") y completa la instalación.")]),e._v(" "),s("h3",{attrs:{id:"uso"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uso"}},[e._v("#")]),e._v(" Uso")]),e._v(" "),s("p",[e._v("Escribiendo simplemente el comando "),s("code",[e._v("nvm")]),e._v(" en nuestro terminal, tendremos una lista de todas las opciones disponibles.")]),e._v(" "),s("h4",{attrs:{id:"instalacion-de-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacion-de-node-js"}},[e._v("#")]),e._v(" Instalación de Node.js")]),e._v(" "),s("p",[e._v("Basta con que usemos el comando "),s("code",[e._v("nvm install [version]")]),e._v(" para que instalemos la versión de Node.js que queramos tener disponible. Debemos tener derechos administrativos de Windows para ejecutar este comando.")]),e._v(" "),s("h4",{attrs:{id:"cambio-de-version-node-js-a-usar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cambio-de-version-node-js-a-usar"}},[e._v("#")]),e._v(" Cambio de version Node.js a usar")]),e._v(" "),s("p",[e._v("Usando el comando "),s("code",[e._v("nvm use [version]")]),e._v(" indicaremos qué versión de Node.js queremos usar. Debemos tener derechos administrativos de Windows para ejecutar este comando.")]),e._v(" "),s("p",[e._v("Una vez establecida la versión en uso, ya podemos trabajar con ella con los comandos habituales, "),s("code",[e._v("npm i")]),e._v(" por ejemplo.")]),e._v(" "),s("p",[e._v("Debemos tener en cuenta que a partir de este momento, debemos instalar cada utilidad global que necesitemos en cada una de las version de Node.js que vayamos a mantener. Es el caso por ejemplo de "),s("em",[e._v("Yarn")]),e._v(" o "),s("em",[e._v("Angular CLI")]),e._v(", cuyas versiones deberemos instalar por cada instancia de Node.js.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("nvm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.23")]),e._v(".1\nnvm use "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.23")]),e._v(".1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @angular/cli\n\nnvm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12.20")]),e._v(".1\nnvm use "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12.20")]),e._v(".1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @angular/cli\n\nnvm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15.6")]),e._v(".7\nnvm use "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15.6")]),e._v(".7\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @angular/cli\n")])])]),s("h4",{attrs:{id:"consultar-las-instalaciones-existentes-de-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consultar-las-instalaciones-existentes-de-node-js"}},[e._v("#")]),e._v(" Consultar las instalaciones existentes de Node.js")]),e._v(" "),s("p",[e._v("Con el comando "),s("code",[e._v("nvm install list")]),e._v(" nos mostrará la lista de versiones Node.js instaladas, así como la versión actualmente activa.")]),e._v(" "),s("hr"),e._v(" "),s("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);a.default=t.exports}}]);