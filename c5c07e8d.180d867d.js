(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(116)),i={id:"backgroundservice",title:"Background Service"},s={unversionedId:"backgroundservice",id:"backgroundservice",isDocsHomePage:!1,title:"Background Service",description:'In order to perform certificate requests and automatic renewals we install a background service called "Certify.Service" (Certify SSL Manager Service). This service is installed to run as Local System and requires that the Local System account has the necessary privileges to administer IIS (if required) and the computers certificate store, as well as writing to the C:\\ProgramData\\Certify folder for configuration information.',source:"@site/docs/backgroundservice.md",slug:"/backgroundservice",permalink:"/docs/backgroundservice",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/backgroundservice.md",version:"current",sidebar:"docs",previous:{title:"CSV Bulk Import via Command Line",permalink:"/docs/csv-import"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},c=[{value:"Port 9696 is the default service port",id:"port-9696-is-the-default-service-port",children:[]},{value:"Custom configuration and Troubleshooting &quot;..service not started&quot; error",id:"custom-configuration-and-troubleshooting-service-not-started-error",children:[]},{value:"Other Considerations for &#39;Service Not Started..&#39;",id:"other-considerations-for-service-not-started",children:[{value:"Enable http listener IP address",id:"enable-http-listener-ip-address",children:[]}]}],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'In order to perform certificate requests and automatic renewals we install a background service called "Certify.Service" (Certify SSL Manager Service). This service is installed to run as Local System and requires that the Local System account has the necessary privileges to administer IIS (if required) and the computers certificate store, as well as writing to the C:\\ProgramData\\Certify folder for configuration information.'),Object(a.b)("p",null,"To check the log for this service, review ",Object(a.b)("inlineCode",{parentName:"p"},"C:\\ProgramData\\Certify\\logs\\service.exceptions.log"),"."),Object(a.b)("h2",{id:"port-9696-is-the-default-service-port"},"Port 9696 is the default service port"),Object(a.b)("p",null,"By default the background service runs a local http API server on port 9696 for the UI to talk to (bound to localhost and requiring windows authentication). ",Object(a.b)("em",{parentName:"p"},"Do not open this port to external traffic on your firewall.")),Object(a.b)("h2",{id:"custom-configuration-and-troubleshooting-service-not-started-error"},'Custom configuration and Troubleshooting "..service not started" error'),Object(a.b)("p",null,"The certify background service operates a local API for the app on port ",Object(a.b)("inlineCode",{parentName:"p"},"9696")," by default. If this port is in use by another application/service (or for some other reason it cannot create a binding to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:9696"),", or a security product is preventing ",Object(a.b)("strong",{parentName:"p"},"local")," port access) then you will see the message 'Service not started'."),Object(a.b)("p",null,"The app should try to negotiate a different service port if it detects that the port is already in use, however you can manually specify the settings if required by editing/adding the file ",Object(a.b)("inlineCode",{parentName:"p"},"c:\\programdata\\certify\\serviceconfig.json")," with content as per the following (adjusted as required) then restarting both the service and UI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n "host":"localhost",\n "port":9696\n}\n')),Object(a.b)("p",null,"For example an alternative configuration might be:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n "host":"127.0.0.1",\n "port":9695\n}\n')),Object(a.b)("p",null,"You may also need to update corresponding configuration in the ",Object(a.b)("inlineCode",{parentName:"p"},"servers.json")," file (which the UI refers to in order to locate the service)."),Object(a.b)("p",null,"To test that the reconfigured service is communicating OK, you can try opening the following URL in your browser:\n",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:9695/api/system/appversion")," where 'localhost' is your configured service ",Object(a.b)("inlineCode",{parentName:"p"},"host")," value and ",Object(a.b)("inlineCode",{parentName:"p"},"9695")," is an example configured port."),Object(a.b)("p",null,"You can also try the same using PowerShell:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ps"},"Invoke-RestMethod -Uri http://localhost:9696/api/system/appversion -UseDefaultCredentials\n")),Object(a.b)("h2",{id:"other-considerations-for-service-not-started"},"Other Considerations for 'Service Not Started..'"),Object(a.b)("p",null,"To operate properly the background service needs to be able to register an http listener for it's API server via http.sys, for that to work the IP address the service tries to use must be enabled as an http listen address and  in some versions of windows the Http kernel service may not be enabled and you will need to enable it. "),Object(a.b)("h3",{id:"enable-http-listener-ip-address"},"Enable http listener IP address"),Object(a.b)("p",null,"As per ",Object(a.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/http/add-iplisten"},"https://docs.microsoft.com/en-us/windows/win32/http/add-iplisten")," enable any IP address to listen for http: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},"netsh http add iplisten ipaddress=0.0.0.0\n")),Object(a.b)("p",null,"Or to target a specific IP address such as 127.0.0.1 (localhost):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},"netsh http add iplisten ipaddress=127.0.0.1\n")),Object(a.b)("p",null,"By default the windows http service is typically enabled but if you receive the error 'Operation is not supported on this platform' in ",Object(a.b)("inlineCode",{parentName:"p"},"service.exceptions.log")," then try checking the status of the windows http service. To do so, run the following from an elevated command prompt (using Run As Administrator):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},"sc query http\n")),Object(a.b)("p",null,"This should produce output like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},"SERVICE_NAME: http\n        TYPE               : 1  KERNEL_DRIVER\n        STATE              : 4  RUNNING\n                                (STOPPABLE, NOT_PAUSABLE, IGNORES_SHUTDOWN)\n        WIN32_EXIT_CODE    : 0  (0x0)\n        SERVICE_EXIT_CODE  : 0  (0x0)\n        CHECKPOINT         : 0x0\n        WAIT_HINT          : 0x0\n\n")),Object(a.b)("p",null,"If the state is not ",Object(a.b)("inlineCode",{parentName:"p"},"RUNNING")," use the following command the enable the service on demand:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},"sc config http start= demand\n")),Object(a.b)("p",null,"Then start the http service"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},"net start http\n")),Object(a.b)("p",null," If the service remains at ",Object(a.b)("inlineCode",{parentName:"p"},"STOPPING")," or similar then a system reboot may be required."),Object(a.b)("p",null," Once completed, restart the Certify SSL Manager background service from local services, then open the Certify The Web UI again to see if it can connect."),Object(a.b)("p",null," In other cases, you may have permission restrictions on port bindings to localhost, so you may have to modify these ",Object(a.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/http/add-urlacl"},"https://docs.microsoft.com/en-us/windows/desktop/http/add-urlacl")," or change the service config as above."))}p.isMDXComponent=!0},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(h,s(s({ref:t},l),{},{components:r})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);