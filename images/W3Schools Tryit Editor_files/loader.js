!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var o=t(1);o.init();var r=o.get();try{!function(){var e={scripts:[{name:"qchoice",loadModule:function(){t(4)}},{name:"adconsent",skipLoadOnExists:!0,loadModule:function(){t(5)},onLoad:{emitEvent:"adnginLoaderReady",scripts:[{name:"pbjs",obj:{que:[]},queue:"que",path:"?v="+escape(r.version)},{name:"apstag",obj:{init:function(){this._Q.push(["i",arguments])},fetchBids:function(){this._Q.push(["f",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}},{name:"gpt",obj:{cmd:[]},queue:"cmd"},{name:"adsbygoogle",obj:[]},{name:"adngin",obj:{queue:[],metrics:{timing:{}}},queue:"queue",path:"/"+escape(r.site)+"/"+escape(r.version)+"/adngin.js"},{name:"scripts",argus:{obj:{cmd:[]},queue:"cmd"}}]}}]},n=window.performance,o=n&&n.now?function(){return Math.floor(n.now())}:function(){return-1};function i(e,t){var r=function(e){if(n&&n.getEntriesByType)for(var t=0;t<n.getEntriesByType("resource").length;t++){var o=n.getEntriesByType("resource")[t];if(e(o.name))return o}return{startTime:-1,responseEnd:-1}}(t);d[e]=d[e]||{},d[e].requested=[Math.floor(r.startTime)],d[e].loaded=[Math.floor(r.responseEnd)],d[e].ready=[o()]}function a(e,n,t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.onload=function(){i(e,(function(e){return-1!==e.indexOf(n.toLowerCase())})),r.resources[e].loaded=!0,t&&t()},d[e]=d[e]||{},d[e].queued=[o()],r.resources=r.resources||{},r.resources[e]={scriptElement:a,loaded:!1},a.src=n,document.head.appendChild(a)}function s(e,n,t){e.scripts.forEach((function(e){var o=r.settings[e.name]||{};!Array.isArray(o)&&o.load&&n(o.objName,e),e.onLoad&&e.onLoad.scripts&&t(e.onLoad)}))}function c(e,n){var t=n.obj;if(t)if(window[e]){var o=window[e];for(var r in t)o[r]=o[r]||t[r]}else window[e]=t}function u(e,n){n.queue&&window[e][n.queue].push((function(){d[n.name]=d[n.name]||{},d[n.name].apiReady=[o()]}))}(window.adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1,window.snigelPubConf=window.snigelPubConf||{},function e(n){s(n,c,e)}(e);var l=window[r.settings.adngin.objName],d=l.metrics.timing;i("loader",(function(e){return/.*snigel.*loader.js$/i.test(e)})),function e(n){s(n,u,e)}(e),function e(n){if(!n)return!1;n.emitEvent&&(window.dispatchEvent(new CustomEvent(n.emitEvent)),l[n.emitEvent]=!0,d.loader[n.emitEvent]=[o()]),n.scripts&&n.scripts.forEach((function(n){var t=r.settings[n.name]||{};if(Array.isArray(t))t.forEach((function(e){if(!e.freq||Math.floor(100*Math.random())<e.freq){var t=e.name,o=n[t]||{};c(t,o),u(t,o),a(e.name||e.url,e.url)}}));else{t.load&&n.loadModule&&n.loadModule();var o=!!window[t.objName];t.load&&t.url&&(!o||o&&!n.skipLoadOnExists)?function(e,n){var t=r.settings[e.name].queryParameters,o=r.settings[e.name].url+(e.path||"")+(t?"?"+t:"");a(e.name,o,n)}(n,(function(){e(n.onLoad)})):e(n.onLoad)}}))}(e)}()}catch(e){if(!0===r.passThroughException)throw e;console.error(e)}},function(e,n,t){function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw r}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var i=t(2),a=t(3);function s(e,n,t){var o=function(){var o=e.getElementById("sn-session-override-warnings");o||((o=e.createElement("div")).id="sn-session-override-warnings",o.setAttribute("style","background: darkred; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000000; padding: 0.25em; color: white; font-family: monospace; font-size: small;"),o.innerHTML="(!) Session overrides:",o.addEventListener("mouseover",(function(){this.style.opacity="0.20"})),o.addEventListener("mouseout",(function(){this.style.opacity="1"})),e.body.appendChild(o)),o.innerHTML+=" ("+n+":"+t+")"},r=e.readyState;if("interactive"===r||"complete"===r)o();else{e.addEventListener("DOMContentLoaded",(function n(){e.removeEventListener("DOMContentLoaded",n,!1),o()}),!1)}}n.init=function(){try{for(var e in window._snigelConfig=window._snigelConfig||{},a)"exp"!=e&&(window._snigelConfig[e]=a[e]);var n=window.localStorage;if(a.exp){var t,r,c=o((n.getItem("_sn_exp")||"").split(";"),2);t=c[0],r=c[1],t!=a.cfgVer&&(t=a.cfgVer,r=i.undefined),a.exp.some((function(e){if(r==e.id||r==i.undefined&&Math.random()<e.freq){var n="exp="+(r=e.id),t=e.settings.adngin.queryParameters;return e.settings.adngin.queryParameters=t?t+"&"+n:n,window._snigelConfig.settings=e.settings,!0}return!1}))||(r=0),n.setItem("_sn_exp",t+";"+r)}else n.removeItem("_sn_exp");var u=JSON.parse(window.sessionStorage.getItem("snSessionOverrides"));if(null!==u)for(var l in u){var d=u[l];a.settings[l].url=d.url,a.settings[l].overrideBranch=d.branch,console.warn("Override detected. Loading '"+l+"' branch '"+d.branch+"'."),s(document,l,d.branch)}}catch(e){}},n.get=function(){return window._snigelConfig||{}}},function(e,n){n.undefined=void 0},function(e){e.exports=JSON.parse('{"site":"w3schools.com","version":"5781-1671658016450","cfgVer":"6656","settings":{"adconsent":{"load":true,"objName":"adconsent","url":"//cdn.snigelweb.com/adconsent/adconsent.js"},"pbjs":{"load":true,"objName":"pbjs","url":"//cdn.snigelweb.com/prebid/7.17.0/prebid.js"},"gpt":{"load":true,"objName":"googletag","url":"//securepubads.g.doubleclick.net/tag/js/gpt.js"},"adngin":{"load":true,"objName":"adngin","url":"//adengine.snigelweb.com"},"apstag":{"load":true,"objName":"apstag","url":"//c.amazon-adsystem.com/aax2/apstag.js"},"scripts":[{"url":"//cdn.snigelweb.com/argus/argus.js","freq":100,"name":"argus"},{"url":"//boot.pbstck.com/v1/tag/6b8021b6-6874-4ef7-a983-9bb3141ccb5c","freq":5,"name":"pubstack"}]}}')},function(e,n){},function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}!function(e,n,t,o,i,a){var s=e._snigelConfig;if(s)try{t=s.settings.adconsent.objName}catch(e){}var c=void 0,u="__"+t;try{a=localStorage}catch(e){}var l,d=e.performance,f=d&&d.now?function(){return Math.floor(d.now())}:function(){return 0};function p(e){if(window.argus){var n=1===e.length&&e[0]instanceof Error?{stack:e[0].stack}:{log:e,stack:(new Error).stack};window.argus.cmd.push((function(){window.argus.queueError("adconsent",n)}))}}!function(){if("function"===r(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:c};var o=n.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{var g=function(n,t,o,r){e.console[n]&&L.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(o,n.toUpperCase()+":",r))},v=function(e,n){return{region:e,loaded:!1,applies:c,version:n,status:"stub"}},m=function(n){return function(t,o,r){e[n](t,c,r,o)}},b=function(e,n,t){return!n||n===e.version||(C(t,null,!1),x("Wrong framework version detected: "+n),!1)},y=function(e,n,t){var o=M.applies?c:M.applies,r={tcString:c,tcfPolicyVersion:2,cmpId:229,cmpVersion:71,gdprApplies:o,eventStatus:!1===o?"tcloaded":c,cmpStatus:M.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:j.publisherCC,purposeOneTreatment:!1};x("Sending TCData structure:",r,t),C(t,r,!0)},h=function(e,n,t,o,r){e.queue.push({command:n,version:t,parameter:o,callback:r})},w=function(t,o,i){if(i){var a=t+"Locator";!function t(){if(!e.frames[a]){var o=n.body;if(o){var r=n.createElement("iframe");r.style.display="none",r.name=a,o.appendChild(r)}else setTimeout(t,5)}}();var s=function(n){var o=n.data,r="string"==typeof o;try{var i=(r?JSON.parse(o):o)[t+"Call"];i&&e[t](i.command,i.version,(function(e,o){try{if(n&&n.source&&n.source.postMessage){var a={};a[t+"Return"]={returnValue:e,success:o===c||o,callId:i.callId},n.source.postMessage(r?JSON.stringify(a):a,"*")}}catch(e){}}),i.parameter)}catch(e){}}}"function"!==r(e[t])&&(e[t]=function(n,r,i,a){var s=e[t];if(s.queue){for(var c in o)if(n===c){var u=!0;(0,o[c])(s,n,r,i,a);break}u||h(s,n,r,a,i)}else s(n,r,i,a)},e[t].queue=[],i&&(e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s)))},C=function(e,n,t){e&&"function"==typeof e&&setTimeout((function(){e(n,t)}),0)},E=function(n,t,o,r,a){if(A.region===c)if(O[a]){for(var s in T){var u=T[s];u.applies=u.region==a,u.applies?G=s:(u.loaded=!0,u.status="loaded")}A.region=a,q("Configured consent region "+O[a]),function(){if(1!==A.region&&S.processListeners(y),2!==A.region){var n=e[i],t=n.queue;if(t){n.queue=[];for(var o=0;o<t.length;o++){var r=t[o];n(r.command,r.version,r.callback,r.parameter)}}}}()}else k("Incorrect consent region "+a)},_=m(u);_.gdpr=m("__tcfapi");var S=_.gdpr;S.listenerId=1,S.tcfListeners=[],S.addEventListener=function(e,n,t){if(b(M,e,n)){x("Adding event listener "+S.listenerId,n);var o={id:S.listenerId++,callback:n||function(){}};S.tcfListeners.push(o),t(null,o.id,o.callback)}},S.removeEventListener=function(e,n,t,o,r){if(b(M,t,o)){x("Removing event listener "+r);for(var i=0;i<S.tcfListeners.length;i++)if(S.tcfListeners[i].id==r)return S.tcfListeners.splice(i,1),void C(o,!0);I("Couldn't find listener id "+r+"."),C(o,!1)}},S.getTCData=function(e,n,t,o){b(M,t,o)&&y(0,0,o)},S.processListeners=function(e){for(var n=S.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},_.ccpa=m(i),_.version=71,_.cmpId=229,_.cfg={apiBaseUrl:"https://cdn.snigelweb.com/adconsent/71",publisherCC:"US"};var j=_.cfg;_.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){p(arguments),g("error",1,arguments,"#ff0000")},warn:function(){g("warn",2,arguments,"#ffe600")},info:function(){g("info",3,arguments,"#3b88a3")},debug:function(){g("debug",4,arguments,"#808080")}};var L=_.log,x=L.debug,q=L.info,I=L.warn,k=L.error;_.consent={regions:{0:"NONE",1:"GDPR",2:"CCPA"},region:c,api:{__tcfapi:v(1,2),__uspapi:v(2,1)}};var A=_.consent,O=A.regions,T=A.api,M=T.__tcfapi,N=T[i];_.analytics={enabled:!1,callback:c,send:function(e){P.sendEvent(O[A.region],e,f())},sendEvent:function(n,t,o){q("Sending analytics event action"+(P.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+o),P.enabled&&(P.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):I("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:o||0,nonInteraction:!0})}};var P=_.analytics,D=P.send;_.event={fired:{},dispatchCustomEvent:function(e,t,o){o&&B[e]||(B[e]=!0,x("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};D(t[n]),1==A.region&&0!=e&&D("Publisher"+t[e]),V.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,gdprApplies:M.applies,uspApplies:N.applies}}})}};var V=_.event,B=V.fired,R=(l=e.location.search)?l.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),o=t[0],r=t.length>1?t[1]:c;return/\[\]$/.test(o)?(e[o=o.replace("[]","")]=e[o]||[],e[o].push(r)):e[o]=r||"",e}),{}):{},U=("true"==R.sn_debug?"debug":null)||("true"==R.adconsent_debug?"debug":null)||R.adconsent_log;if(L.level=L.levels[U]||L.level,e[t])return void k("Stub is tried to load again!");if(e.__tcfapi||e[i])return void I("A cmp is already registered in the system. AdConsent is stopping.");e[t]=_;var G=c,J=!1;w("__tcfapi",{ping:function(e,n,t,o){var r={gdprApplies:M.applies,cmpLoaded:M.loaded,cmpStatus:M.status,displayStatus:"disabled",apiVersion:"2.0",cmpVersion:71,cmpId:229,gvlVersion:c,tcfPolicyVersion:2};C(o,r,!0)},getTCData:S.getTCData,addEventListener:function(e,n,t,o,r){S.addEventListener(t,o,y)},removeEventListener:S.removeEventListener},!0),w(i,{getUSPData:function(e,n,t,o,r){!1===N.applies?b(N,t,o)&&C(o,{version:1,uspString:"1---"},!0):h(e,n,t,r,o)}},!0),w(u,{start:function t(o,r,i,s,u){if(A.region!==c){if(!J)if(J=!0,0==A.region)V.dispatchCustomEventConsent(3,3);else if(G){var l=n.createElement("script");l.type="text/javascript",l.async=!0,l.charset="utf-8",l.src=_.cfg.apiBaseUrl+"/adconsent"+G+".js",n.head.appendChild(l)}}else!function(n){var t=null;if(a){var o=a.getItem("snconsent_geo");if(o){var r=a.getItem("snconsent_geo_exp");if(r)try{parseInt(r)>=(new Date).getTime()&&(t=JSON.parse(e.atob(o)))}catch(e){}}}if(t)n(t);else{var i=new XMLHttpRequest;i.open("GET","https://pro.ip-api.com/json/?fields=57354&key=33arzTfj1gigDqW"),i.timeout=5e3,i.onload=function(){var t=i.responseText.toLowerCase();a&&(a.setItem("snconsent_geo",e.btoa(t)),a.setItem("snconsent_geo_exp",(new Date).getTime()+36e5)),n(JSON.parse(t))},i.onerror=i.ontimeout=function(){n(null)},i.send()}}((function(e){var n=e?e.countrycode:null;"us"===n&&"california"===e.regionname?E(0,0,0,0,2):-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb".indexOf(n)?E(0,0,0,0,1):(n||(D("ErrorGeotargeting"),k("Geotargeting failed")),E(0,0,0,0,0)),t()}))},setPublisherCC:function(e,n,t,o,r){"string"!=typeof r||2!=r.length?C(o,{message:"Invalid publisher country code detected. Ignoring call."},!1):(j.publisherCC=r.toUpperCase(),C(o,null,!0))},setConsentRegion:E,enableGoogleAnalytics:function(e,n,t,o,r){P.enabled=r===c||!!r,P.callback=o}})}catch(e){if(p(e),s&&s.passThroughException)throw e;console.error(e)}}(window,document,"adconsent",0,"__uspapi")}]);