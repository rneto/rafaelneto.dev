(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{531:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gestionar-el-estado-de-una-aplicacion-angular-usando-rxjs-behaviorsubject-para-servicios-de-datos-observables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gestionar-el-estado-de-una-aplicacion-angular-usando-rxjs-behaviorsubject-para-servicios-de-datos-observables"}},[s._v("#")]),s._v(" Gestionar el estado de una aplicación Angular usando RxJs BehaviorSubject para servicios de datos observables")]),s._v(" "),a("social-share",{staticClass:"social-share--header"}),s._v(" "),a("p",[s._v("Español | "),a("RouterLink",{attrs:{to:"/en/blog/manage-state-angular-rxjs-behaviorsubject-observables-data-services/"}},[s._v("English")])],1),s._v(" "),a("p",[s._v("Existen múltiples opciones a la hora de gestionar el estado de una aplicación Angular mediante el uso de una librería de gestión de estado ("),a("a",{attrs:{href:"https://ngrx.io/guide/store",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ngrx Store"),a("OutboundLink")],1),s._v(" -recomendada- o "),a("a",{attrs:{href:"https://github.com/angular-redux/platform",target:"_blank",rel:"noopener noreferrer"}},[s._v("Angular Redux"),a("OutboundLink")],1),s._v(" -obsoleta- por ejemplo), sin embargo, también existe otra solución de almacenamiento centralizada, sencilla y poco costosas (por su tamaño e implementación) que es completamente válida para determinados proyectos. En esta ocasión estoy hablando de disponer de un servicio de datos inyectable y observable, basado en "),a("a",{attrs:{href:"https://rxjs.dev/",target:"_blank",rel:"noopener noreferrer"}},[s._v("RxJs"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://rxjs.dev/api/index/class/BehaviorSubject",target:"_blank",rel:"noopener noreferrer"}},[s._v("BehaviorSubject"),a("OutboundLink")],1),s._v(", el cual actuará como gestor centralizado del estado de nuestra aplicación. Lo consideramos inyectable porque lo podríamos suministrar en cualquier parte de nuestro código donde se necesiten los datos, y lo consideramos observable porque los datos están fácilmente disponibles y se actualizan periódicamente.")]),s._v(" "),a("blockquote",[a("p",[s._v("Un "),a("strong",[s._v("servicio de datos")]),s._v(" es un servicio de Angular que se puede usar para proporcionar datos múltiples de manera consistente a diferentes partes de la aplicación.")])]),s._v(" "),a("p",[a("em",[s._v("BehaviorSubject")]),s._v(" es un tipo especial de "),a("em",[a("a",{attrs:{href:"https://angular.io/guide/observables",target:"_blank",rel:"noopener noreferrer"}},[s._v("observable"),a("OutboundLink")],1)]),s._v(" que permite la transmisión múltiple de valores a muchos observadores simultáneos y donde siempre se almacena y permanece disponible el valor actual. Es por ello que cada vez que un nuevo consumidor se suscribe al dato, siempre recibirá el valor actual (esta es la principal diferencia respecto al "),a("em",[s._v("observable")]),s._v(" estándar).")]),s._v(" "),a("h2",{attrs:{id:"implementacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementacion"}},[s._v("#")]),s._v(" Implementación")]),s._v(" "),a("p",[s._v("Este ejemplo representa una servicio donde centralizaremos la información del usuario actual en nuestra aplicación.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Injectable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@angular/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BehaviorSubject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Observable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./user.model'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Injectable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  providedIn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" currentUserSubject"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BehaviorSubject"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BehaviorSubject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" readonly currentUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Observable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentUserSubject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("asObservable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCurrentUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("currentUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentUserSubject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("currentUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("em",[s._v("user.service.ts")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("em",[s._v("user.model.ts")])]),s._v(" "),a("p",[s._v("En el servicio hemos creado una propiedad privada "),a("code",[s._v("currentUserSubject")]),s._v(" que protege la emisión de nuevos valores de nuestro estado ("),a("code",[s._v("currentUserSubject.next()")]),s._v("), los cuales se pueden emitir de manera exclusiva a través del método de acción "),a("code",[s._v("setCurrentUser")]),s._v(" de nuestro servicio. Dicho método también podría ser usado para asegurar la consistencia de los datos que almacenemos o para interactuar con sistemas externos (podríamos validar los datos recibidos o inclusive llamar a un API).")]),s._v(" "),a("p",[s._v("Y finalmente nos encontramos con la variable pública de sólo lectura y "),a("em",[s._v("observable")]),s._v(" "),a("code",[s._v("currentUser")]),s._v(", que es la única vía desde la que los datos pueden ser consultados.")]),s._v(" "),a("p",[s._v("A continuación ya podríamos suscribirnos al servicio para visualizar los datos, sin olvidarnos de desuscribirnos del observable cuando se destruya el componente "),a("em",[s._v("ngOnDestroy()")]),s._v(".")]),s._v(" "),a("blockquote",[a("p",[s._v("Los observables son una herramienta poderosa para manejar datos asíncronos, sin embargo también pueden ser una fuente de problemas de memoria si no los gestionamos correctamente. Es por ello la importancia de "),a("RouterLink",{attrs:{to:"/blog/desuscribir-observable-behaviorsubject-angular/"}},[s._v("Desuscribir de un observable RxJs BehaviorSubject en Angular")]),s._v(".")],1)]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OnDestroy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OnInit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@angular/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Subscription "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" UserService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./user.service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\n    <h1 *ngIf="username">Hello {{ username }}!</h1>\n  ')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloComponent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OnInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OnDestroy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" userServiceSubscription"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" userService"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UserService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ngOnInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userServiceSubscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("currentUser")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" currentUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ngOnDestroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userServiceSubscription"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsubscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("em",[s._v("hello.component.ts")])]),s._v(" "),a("p",[s._v("O también podríamos actualizar los datos cuando fuera necesario:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@angular/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" UserService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./user.service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my-app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\n    <input #username type="text" placeholder="What is your name?">\n    <button (click)="saveUserName(username.value)">Save</button>\n\n    <hello></hello>\n  ')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppComponent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" userService"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UserService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("saveUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCurrentUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("em",[s._v("app.component.ts")])]),s._v(" "),a("p",[s._v("Puedes ver en acción y en StackBlitz un proyecto Angular que he creado con este "),a("a",{attrs:{href:"https://stackblitz.com/edit/angular-testing-service-data-with-rxjs-behaviorsubject",target:"_blank",rel:"noopener noreferrer"}},[s._v("ejemplo de servicio de datos con RxJs BehaviorSubject"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"idea-uso-de-un-servicios-de-datos-para-las-entradas-y-salidas-de-los-componentes-angular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea-uso-de-un-servicios-de-datos-para-las-entradas-y-salidas-de-los-componentes-angular"}},[s._v("#")]),s._v(" IDEA: Uso de un servicios de datos para las entradas y salidas de los componentes Angular")]),s._v(" "),a("p",[s._v("La forma estándar de gestionar la interacción entre los componentes de Angular propone el uso de parámetros "),a("em",[s._v("@Input")]),s._v(" para la entrada de datos y la emisión de eventos de salida con el atributo "),a("em",[s._v("@Output")]),s._v(", sin embargo, es posible que se produzca un paso excesivo de datos entre componentes anidados o que inclusive se complique la estrategia de centralización del estado de la aplicación por el flujo de eventos. Cuando esto se produzca, podemos llegar a replantearnos la estrategia de entradas y salidas de nuestros componentes y como alternativa posible, hacer uso de un servicio de datos observable para simplicar y desacoplar la comunicación entre nuestros componentes de una manera sencilla y eficaz.")]),s._v(" "),a("hr"),s._v(" "),a("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);t.default=n.exports}}]);