/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "687420d2619daea61ce4b2b1b1ce6375"
  },
  {
    "url": "assets/css/0.styles.41ad20a0.css",
    "revision": "823baab37d2f8b9d5ed2faf62dba7d6f"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be924813.js",
    "revision": "b92083555e1a51c1f0ebe0b211ec5e63"
  },
  {
    "url": "assets/js/11.1683dbae.js",
    "revision": "d49cf518d7386007175f56e4055b1484"
  },
  {
    "url": "assets/js/12.566921b6.js",
    "revision": "1bf2b044ae8478bf29def744cc2e8a1e"
  },
  {
    "url": "assets/js/13.5a1dcf68.js",
    "revision": "eadc612fb07cddf4d7637c3ab9342a01"
  },
  {
    "url": "assets/js/14.d6db3c4f.js",
    "revision": "54dc2a4543f5fbd239ffe9598a0cb50d"
  },
  {
    "url": "assets/js/15.181cf3b0.js",
    "revision": "10f57422b3f25708477d3a95ecd0839a"
  },
  {
    "url": "assets/js/16.77268508.js",
    "revision": "247a683388cd9644a126d2f3026c3364"
  },
  {
    "url": "assets/js/17.50949cc0.js",
    "revision": "ec91f35526bde429b4cc4ef884ee702c"
  },
  {
    "url": "assets/js/18.2403314d.js",
    "revision": "31d84950ba46e92b6b1e2a03a6ce5197"
  },
  {
    "url": "assets/js/19.b14c9364.js",
    "revision": "3367bedc095d2db4a144b995615bc096"
  },
  {
    "url": "assets/js/20.bcf9e907.js",
    "revision": "25d4d7404dd2e32692f38eda68807ef2"
  },
  {
    "url": "assets/js/21.b31b2831.js",
    "revision": "5f9224534b69a3feedb7b29f737c0e1f"
  },
  {
    "url": "assets/js/22.f9d20568.js",
    "revision": "27545941e573caf220f596e0b7f7ef58"
  },
  {
    "url": "assets/js/23.a6ba531e.js",
    "revision": "c30a8895df73dab5e66bc63614f037fc"
  },
  {
    "url": "assets/js/24.3160f51e.js",
    "revision": "34390b2cec0db800a53aa25ebaa8d24d"
  },
  {
    "url": "assets/js/25.5c0cf607.js",
    "revision": "d38d26b52df877af3b9ddbf951557042"
  },
  {
    "url": "assets/js/26.7ebde4cc.js",
    "revision": "d8c0a3dd154ef644b277781a6949f501"
  },
  {
    "url": "assets/js/27.710f7238.js",
    "revision": "0cb92a6f7230e8f5719b65402b29b837"
  },
  {
    "url": "assets/js/28.74585c4e.js",
    "revision": "348add97751d75380e0007fc61b30a68"
  },
  {
    "url": "assets/js/29.95af0de5.js",
    "revision": "487970cf76efcd28e140504c142e7c7c"
  },
  {
    "url": "assets/js/3.1f216e9b.js",
    "revision": "085943e663707ce1ec6356bf6968c1ee"
  },
  {
    "url": "assets/js/30.52fcaad0.js",
    "revision": "4e463faab3f97a7fed41467e7e11d482"
  },
  {
    "url": "assets/js/31.894ce9c3.js",
    "revision": "dc7b2c5fe9c34a9d4074244400889b8b"
  },
  {
    "url": "assets/js/32.b7edcddc.js",
    "revision": "935e9aa04f58564912d12a4dcc30b5c5"
  },
  {
    "url": "assets/js/33.5bce1566.js",
    "revision": "7dffdad2a14279cef0e2e2cf1dd90986"
  },
  {
    "url": "assets/js/34.89a4dd38.js",
    "revision": "984059cb6830af2c76e684559102b7f8"
  },
  {
    "url": "assets/js/35.0132fdd9.js",
    "revision": "865d94710e9e876ab7bc8bd2a89e3da4"
  },
  {
    "url": "assets/js/36.28e2082a.js",
    "revision": "dd26abe6671db0aa93c0dde09777818c"
  },
  {
    "url": "assets/js/37.e88b1e54.js",
    "revision": "1e41f22fd3eaf108d2e601e0aa0c6c43"
  },
  {
    "url": "assets/js/38.59c442f6.js",
    "revision": "4208c6b88d9652f11a352679709e6a50"
  },
  {
    "url": "assets/js/39.57699b3c.js",
    "revision": "ba048baf75b646a17eadc32faa8c31b7"
  },
  {
    "url": "assets/js/4.4e83a853.js",
    "revision": "918eaf54ef555023ec018d4329bc36ef"
  },
  {
    "url": "assets/js/40.527e17be.js",
    "revision": "811f865f3164aba171228c1558296cde"
  },
  {
    "url": "assets/js/41.a00e1e85.js",
    "revision": "178119a3304a09f153d611ce7049dad5"
  },
  {
    "url": "assets/js/42.0f6b045b.js",
    "revision": "458fa04ea02e8399be3d5f289a264a93"
  },
  {
    "url": "assets/js/43.e8123424.js",
    "revision": "869373fa6295f61fc2bfd506d2fb0172"
  },
  {
    "url": "assets/js/44.0c206634.js",
    "revision": "a227d2f38bb527debeadf2c6988b7e2c"
  },
  {
    "url": "assets/js/45.96090600.js",
    "revision": "8712daa7d6169be9357148c85c299cb9"
  },
  {
    "url": "assets/js/46.7b5d278f.js",
    "revision": "885a4c511299bc0dfeb9fa4c65c7e10a"
  },
  {
    "url": "assets/js/47.056c1dca.js",
    "revision": "b679693bd9e2c2d1607bf4dc21658d2b"
  },
  {
    "url": "assets/js/48.08d8370b.js",
    "revision": "4be1ba8b4d9c431748a68a173b591a33"
  },
  {
    "url": "assets/js/49.6693f4be.js",
    "revision": "3969f3c1dee5be4ae8a73666099a8ca2"
  },
  {
    "url": "assets/js/5.7d297c69.js",
    "revision": "af23acbbb5d6b8c0e8bacffa2a5b4915"
  },
  {
    "url": "assets/js/6.a40163dd.js",
    "revision": "1da7119a2892b5a8e9fc043696119b66"
  },
  {
    "url": "assets/js/7.18f9c65c.js",
    "revision": "185f0babc9125db20d2125c0a1df1e26"
  },
  {
    "url": "assets/js/8.c0a8eb3e.js",
    "revision": "18fb7cb5170ce69b2ca214b4d593c386"
  },
  {
    "url": "assets/js/9.add7630f.js",
    "revision": "8955d3746cad21d5232b5a25bb4516eb"
  },
  {
    "url": "assets/js/app.93e023b2.js",
    "revision": "0548d19fa979f2826dd56e5097dc059a"
  },
  {
    "url": "assets/js/vuejs-paginate.7557bdc0.js",
    "revision": "64446b5ef6897645ac9d8167bee67213"
  },
  {
    "url": "blog/15-mejores-extensiones-visual-studio-code-desarrollo-web/index.html",
    "revision": "eeb26756bd0a50e097f4dddde21de52d"
  },
  {
    "url": "blog/5-mejores-extensiones-gratuitas-visual-studio/index.html",
    "revision": "7aac3374249c98394cb39311594c0f54"
  },
  {
    "url": "blog/arquitectura-buenas-practicas-angular/index.html",
    "revision": "0b21e68314722233cbd0ba97ba251fae"
  },
  {
    "url": "blog/cambiar-informacion-autor-git/index.html",
    "revision": "62b8d617a6708d118b5228993f4176cf"
  },
  {
    "url": "blog/cinco-formas-centrar-texto-div-css/index.html",
    "revision": "64bb93fa0be08db5ddc806dd461be803"
  },
  {
    "url": "blog/compartir-sesion-aplicaciones-asp-net/index.html",
    "revision": "4ef5684e1755c97b4832e316781b17d3"
  },
  {
    "url": "blog/configurar-generar-angular-multiples-entornos-personalizados/index.html",
    "revision": "911f975e89937400f6c17a3faf5a289a"
  },
  {
    "url": "blog/configurar-usuario-git/index.html",
    "revision": "fe8fb008dfcfa5aa6640175855b1e279"
  },
  {
    "url": "blog/configurar-variables-entorno-package-json-windows/index.html",
    "revision": "963dae78068bdd97df9f607d523663ab"
  },
  {
    "url": "blog/crear-blog-estatico-vuepress/index.html",
    "revision": "c66e6d6b38cd4befa7b0fb20efb505bd"
  },
  {
    "url": "blog/crear-tema-angular-material/index.html",
    "revision": "d886b19da25e1cc8ef5706ec4ae710c8"
  },
  {
    "url": "blog/decoradores-typescript/index.html",
    "revision": "dec8a1fbdf71d205ec9657af99081d28"
  },
  {
    "url": "blog/desplegar-angular-internet-information-services/index.html",
    "revision": "0ff809bfe9f8a3bb846eea388f492f16"
  },
  {
    "url": "blog/despliegues-angular-carga-diferida-modulos-ventajas-pwa/index.html",
    "revision": "67b212bbb1a8383648b3017e2575724c"
  },
  {
    "url": "blog/gestionar-estado-angular-rxjs-behaviorsubject-servicios-datos-observables/index.html",
    "revision": "c1b1dd8b824a1d221e6128501b9907c3"
  },
  {
    "url": "blog/index.html",
    "revision": "bfcea177b36bc8180bf00bd38e9ab2b2"
  },
  {
    "url": "blog/instalar-angular-material/index.html",
    "revision": "381f4defeb5780679e9341597e22c06c"
  },
  {
    "url": "blog/instalar-multiples-versiones-nodejs-windows/index.html",
    "revision": "54b731f864ec1526bf604afd35e74cfd"
  },
  {
    "url": "blog/integrar-tailwind-css-angular-material/index.html",
    "revision": "b166608a08344bc667e2d159bd2f6d41"
  },
  {
    "url": "blog/introduccion-angular-elements-web-components/index.html",
    "revision": "b2a63dc4df10e79655f44937b9ac5f39"
  },
  {
    "url": "blog/optimizar-angular-analisis-paquetes-npm-webpack/index.html",
    "revision": "bc8efc0f18e2c43817821720e9805c04"
  },
  {
    "url": "blog/optimizar-bucles-javascript/index.html",
    "revision": "f0073a601fd926bebfcc9aadfb40157a"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "81de0d9873ec74225f16f28ca21894ce"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "dbf68a5d507f7f1c8d7cf8ccb5ef480b"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "9a7d0fa9ba22985be83f006c88ce5c23"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "442b610b8c83da8835d3071cf2eeefa2"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "a585dfc05b0fcccab94782298f3c75b4"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "2999254b1430243613830bb7ca602794"
  },
  {
    "url": "blog/podicoteo-ordenacion-propiedades-css/index.html",
    "revision": "d61302aa286171e8f1bf6d52b0d8fe87"
  },
  {
    "url": "blog/por-que-usar-angular-material-design/index.html",
    "revision": "f8b08a787e476d0df2bef7bc534d27ca"
  },
  {
    "url": "blog/propiedad-css-box-sizing/index.html",
    "revision": "9729fac2059eca90c887a73d506cdc89"
  },
  {
    "url": "blog/publicar-net-core-web-deploy-visual-studio-entornos-implementacion/index.html",
    "revision": "0630bae3b7beeac00fefcae18eaeeb94"
  },
  {
    "url": "blog/quicksort-bridge-typescript/index.html",
    "revision": "c484d6d86639bcdbcc7aaaa64d172902"
  },
  {
    "url": "blog/servir-archivos-html-estaticos-localmente-nodejs-http-server/index.html",
    "revision": "f26b722f7b8dcc90db293e892a3c0522"
  },
  {
    "url": "blog/tailwind-css/index.html",
    "revision": "76483f2f987c6810323b27577caf97ee"
  },
  {
    "url": "blog/usar-github-actions-automatizar-generacion-despliegue-blog-estatico-vuepress-github-pages/index.html",
    "revision": "06378cf703d1e03acf8dff33505f2017"
  },
  {
    "url": "blog/usar-tareas-comandos-npm-visual-studio/index.html",
    "revision": "b0d0ebeb23b5abb206756e7e53cbedcd"
  },
  {
    "url": "blog/usar-webpack-4-transformar-empaquetar-recursos-aplicacion-web/index.html",
    "revision": "1999b3b61686cfc22fef2ba087714927"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "3f4accfa47a547bf6a092cbb1015e2f6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "ec4189fbaaed7f0857324843755ba4cf"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "16a7aed8939080cb642c649f801b3a82"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "94b6196bbc2d0acd3b450a9220c1b67e"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "c9e8574116193d6b6c1476315afe6a60"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "d6b7761afb1b362746a73e1266539860"
  },
  {
    "url": "images/logo.png",
    "revision": "d6b7761afb1b362746a73e1266539860"
  },
  {
    "url": "images/vs2019-task-runner-explorer-bindings.png",
    "revision": "22cc7c2d63ddcb340980731e18d7ebbe"
  },
  {
    "url": "images/vs2019-task-runner-explorer.png",
    "revision": "d212351bb59aebdf04688ea355b53a09"
  },
  {
    "url": "index.html",
    "revision": "2c1bfb6f6e3642db037b84147833dfe3"
  },
  {
    "url": "tag/Algoritmo/index.html",
    "revision": "6d64dc1b355ab14d1511c1c3658b6d6f"
  },
  {
    "url": "tag/Angular/index.html",
    "revision": "7f60b24adf802647e474447f4125514f"
  },
  {
    "url": "tag/Angular/page/2/index.html",
    "revision": "2c8f57cb2cc76497dac8983044ea1eba"
  },
  {
    "url": "tag/Angular/page/3/index.html",
    "revision": "f2cf272a1b82d4e08bbf0f7b21701a2c"
  },
  {
    "url": "tag/AngularElements/index.html",
    "revision": "dbe78dc2eaa816b8dea3b70908ed5bf1"
  },
  {
    "url": "tag/AngularMaterial/index.html",
    "revision": "5c26eb379875cda6091d5441adfd2d65"
  },
  {
    "url": "tag/ASPNET/index.html",
    "revision": "ef16272a84f710ee7790067fb36b6165"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "145c6ccb2f889e6d0af352537438db05"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "3928a7f994d0e136a543d5844ff91943"
  },
  {
    "url": "tag/ES2015/index.html",
    "revision": "4205f6572a42a68b299f1dca06aeb086"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "edaef196262cd60dd496d6a30db7d787"
  },
  {
    "url": "tag/GitHubActions/index.html",
    "revision": "7a138d3c91dbaf0fd0d7312bd9926a48"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "cf5b89eec32f6c954de9ee2e29ceb231"
  },
  {
    "url": "tag/HTTPServer/index.html",
    "revision": "2da260a3367cef67b6623a2539296732"
  },
  {
    "url": "tag/IIS/index.html",
    "revision": "f0fdd65962a9771b3b7fcb6ab0f7bca8"
  },
  {
    "url": "tag/index.html",
    "revision": "b4de5cbb8e2a6d4a8aea399748b167ff"
  },
  {
    "url": "tag/InternetInformationServices/index.html",
    "revision": "24deebd03a702838e315fe8bb687eb11"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "16eef1d23c4f391f6527856791cd0973"
  },
  {
    "url": "tag/MaterialDesign/index.html",
    "revision": "35956b6038aeb1f3b85827e587b811bd"
  },
  {
    "url": "tag/NETCore/index.html",
    "revision": "f464bcedad83a8da8f376a2704ba91a3"
  },
  {
    "url": "tag/Nodejs/index.html",
    "revision": "45846239e5a597b7a51d4495e5181527"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "46ebd644c0f39b81059ed76e40a5a0b0"
  },
  {
    "url": "tag/npm/page/2/index.html",
    "revision": "c1af0f11ae67425308c5c580df660359"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "4b0f4af6d636e2f33b0d78102cff1b77"
  },
  {
    "url": "tag/PatronDeDiseño/index.html",
    "revision": "7e56466ff3687bcfddf381ac7e76df59"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "91a2987fe2abd74b6af1c19e85b58b91"
  },
  {
    "url": "tag/RxJs/index.html",
    "revision": "ce8dbd40d1c7a77c4663683360aaa49c"
  },
  {
    "url": "tag/Sass/index.html",
    "revision": "8e9fac20faa82b8a8dfd43746f51988b"
  },
  {
    "url": "tag/SQLServer/index.html",
    "revision": "fc9f6ecc102b4e55d14a13c15807b028"
  },
  {
    "url": "tag/TailwindCSS/index.html",
    "revision": "175c48cbce6e6a857b95b6dcf5c743e8"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "bccd2a565bee17ee5d4b2d3a4d2a347f"
  },
  {
    "url": "tag/VisualStudio/index.html",
    "revision": "8f17d0b3e4b87dd210ee798b02e2fd75"
  },
  {
    "url": "tag/VisualStudioCode/index.html",
    "revision": "c0c39369ffa1c46671a7beb09e9f7c4f"
  },
  {
    "url": "tag/Vuejs/index.html",
    "revision": "3317539b01aa119f78f2c0b901f5ecd1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d1df6f75f0c7e0ee522c98b9ece07619"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "d7b82f33b6d951705e590dff8d11b9d0"
  },
  {
    "url": "tag/WebDeploy/index.html",
    "revision": "ac0f1c24d6e7dba355b6dedeaf9f07c4"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "fd0ec49adc6a00b9a8b8e9a012596cd4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
