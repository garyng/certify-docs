(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(116)),l={id:"http-challenge-server",title:"Http Challenge Server"},c={unversionedId:"http-challenge-server",id:"http-challenge-server",isDocsHomePage:!1,title:"Http Challenge Server",description:"Http Challenge Server",source:"@site/docs/http-challenge-server.md",slug:"/http-challenge-server",permalink:"/docs/http-challenge-server",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/http-challenge-server.md",version:"current"},i=[{value:"Configuration",id:"configuration",children:[]}],p={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"http-challenge-server"},"Http Challenge Server"),Object(o.b)("p",null,"The app features an optional internal Http Challenge Server implemented as an http.sys aware http listener, sitting in front of IIS in the http.sys http request pipeline."),Object(o.b)("p",null,"This service runs during http validation to answer http challenges only, all other request types are handled by IIS (or the port 80 webserver) as normal. After validation checks have completed the challenge server process will automatically stop."),Object(o.b)("p",null,"In the event that a non-http.sys enabled web server is installed and using port 80, the http challenge server will not operate and conventional http validation will be served via the normal server on port 80 (IIS, Apache, nginx etc.)."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"To run the challenge server on an alternative port e.g. 81:"),Object(o.b)("p",null,"create/update ",Object(o.b)("inlineCode",{parentName:"p"},"c:\\programdata\\certify\\serviceconfig.json")," (",Object(o.b)("inlineCode",{parentName:"p"},"serviceconfig.debug.json")," if running in debug mode):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "httpChallengeServerPort":81\n}\n')))}s.isMDXComponent=!0}}]);