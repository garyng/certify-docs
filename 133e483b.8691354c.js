(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),y=n,b=l["".concat(o,".").concat(y)]||l[y]||f[y]||s;return r?a.a.createElement(b,i(i({ref:t},u),{},{components:r})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),s=(r(0),r(116)),o={id:"buypass",title:"BuyPass Go SSL"},i={unversionedId:"buypass",id:"buypass",isDocsHomePage:!1,title:"BuyPass Go SSL",description:"`Failed to build certificate as PFX. Check system date/time is correct and that the issuing CA is a trusted root CA on this machine. :Can not find issuer 'C=NO,O=Buypass AS-983163327,CN=Buypass Class 2 Root CA' for certificate 'C=NO,O=Buypass AS-983163327,CN=Buypass Class 2 CA 5'.`",source:"@site/docs/buypass.md",slug:"/buypass",permalink:"/docs/buypass",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/buypass.md",version:"current"},c=[],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Failed to build certificate as PFX. Check system date/time is correct and that the issuing CA is a trusted root CA on this machine. :Can not find issuer 'C=NO,O=Buypass AS-983163327,CN=Buypass Class 2 Root CA' for certificate 'C=NO,O=Buypass AS-983163327,CN=Buypass Class 2 CA 5'.")),Object(s.b)("p",null,"Install the root certificate for buypass from: "),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.buypass.com/security/buypass-root-certificates"},"https://www.buypass.com/security/buypass-root-certificates")),Object(s.b)("p",null,"CA's generally have a root certificate (trusted by your operating system Root Certificate Authorities certificate store) and an Intermediate 'issuing' certificate which in turn is used to issue your domain's certificate.\nInstall Issuing (Buypass Class 2 CA 5) .cer to Local Machine> Intermediate Certification Authorities"))}p.isMDXComponent=!0}}]);