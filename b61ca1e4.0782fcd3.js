(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(r),m=n,b=l["".concat(i,".").concat(m)]||l[m]||p[m]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(116)),i={id:"acme-dns",title:"acme-dns"},c={unversionedId:"dns/providers/acme-dns",id:"dns/providers/acme-dns",isDocsHomePage:!1,title:"acme-dns",description:"Getting Started with acme-dns",source:"@site/docs/dns/providers/acme-dns.md",slug:"/dns/providers/acme-dns",permalink:"/docs/dns/providers/acme-dns",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/dns/providers/acme-dns.md",version:"current"},s=[{value:"About acme-dns",id:"about-acme-dns",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],u={toc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"getting-started-with-acme-dns"},"Getting Started with acme-dns"),Object(a.b)("p",null,"acme-dns is a method for domain validation via DNS CNAME redirection to a trusted acme-dns server which in turn handles automated TXT record queries required for the ACME certificate validation process."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"With acme-dns, you create a special CNAME record, instead of a TXT record. This CNAME record points to the acme-dns server and handles ACME challenge responses for your domain.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select acme-dns as the DNS update method."),Object(a.b)("li",{parentName:"ul"},"Point to a trusted acme-dns server"),Object(a.b)("li",{parentName:"ul"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Test")," or ",Object(a.b)("inlineCode",{parentName:"li"},"Request Certificate")," to perform a one-time registration with the acme-dns server (per domain)."),Object(a.b)("li",{parentName:"ul"},"You will be prompted to create a CNAME pointing to the acme-dns server. If you miss this prompt check back in the log file for your managed certificate (see the Status tab)."),Object(a.b)("li",{parentName:"ul"},"Once you have created your CNAME record, delete any existing _acme-challenge TXT record in the same zone to avoid confusion."),Object(a.b)("li",{parentName:"ul"},"Resume the request using ",Object(a.b)("inlineCode",{parentName:"li"},"Request Certificate"),", the acme-dns server will automatically provide the required TXT record responses on your behalf."),Object(a.b)("li",{parentName:"ul"},"Automatic renewals will then perform this process again without manual intervention.")),Object(a.b)("h2",{id:"about-acme-dns"},"About acme-dns"),Object(a.b)("p",null,"You can read more about acme-dns and you can optionally host your own acme-dns server by following the configuration instructions from:\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/joohoi/acme-dns"},"https://github.com/joohoi/acme-dns")),Object(a.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("p",null,"If you have configured your own server, test your acme-dns server is responding to DNS queries ok:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"dig auth.example.org\n")),Object(a.b)("p",null,"If the error in the app is ",Object(a.b)("inlineCode",{parentName:"p"},"NXDOMAIN for _acme-challenge...")," , the Certificate Authority has been unable to find or follow the CNAME you have configured in your DNS."))}d.isMDXComponent=!0}}]);