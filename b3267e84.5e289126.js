(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(116)),i={id:"scripting",title:"DNS Scripting"},c={unversionedId:"dns/providers/scripting",id:"dns/providers/scripting",isDocsHomePage:!1,title:"DNS Scripting",description:"To provide your own script to update DNS you need to create (or source) a Windows (CMD) batch file which expects the following sequence of arguments and update a corresponding TXT record in your DNS zone:",source:"@site/docs/dns/providers/scripting.md",slug:"/dns/providers/scripting",permalink:"/docs/dns/providers/scripting",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/dns/providers/scripting.md",version:"current"},l=[{value:"Calling a Python or node script",id:"calling-a-python-or-node-script",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To provide your own script to update DNS you need to create (or source) a Windows (CMD) batch file which expects the following sequence of arguments and update a corresponding TXT record in your DNS zone:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Target Domain (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"example.com"),")"),Object(o.b)("li",{parentName:"ul"},"Record Name (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"_acme-challenge.example.com"),")"),Object(o.b)("li",{parentName:"ul"},"Record Value (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"ABCBD123456789"),")"),Object(o.b)("li",{parentName:"ul"},"Zone Id (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"OptionalZoneId"),", this is often useful to match the specific zone to update)")),Object(o.b)("p",null,"e.g. given a script at ",Object(o.b)("em",{parentName:"p"},"C:\\customscripts\\UpdateDNS.bat"),", this will be executed as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"C:\\customscripts\\UpdateDNS.bat example.com _acme-challenge.example.com ABCBD123456789 OptionalZoneId\n")),Object(o.b)("p",null,"Important Notes: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your script will run as the background service user (local system), not as your account."),Object(o.b)("li",{parentName:"ul"},"You should assume the working directory of the process will not be the same as the script. "),Object(o.b)("li",{parentName:"ul"},"When an 'apex domain' like ",Object(o.b)("inlineCode",{parentName:"li"},"example.com")," is included in the certificate request for a wildcard (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"*.example.com"),") both TXT records will have the same name but different values, so updates need to add to the TXT record values. For this reason it's also a good idea to provide a (well tested!) delete script to clean up the TXT record once the request has completed, otherwise your TXT record values will grow with every validation attempt.")),Object(o.b)("h2",{id:"calling-a-python-or-node-script"},"Calling a Python or node script"),Object(o.b)("p",null,"To use a Python script (or similarly Node etc) start with a .bat file which can then forward all the arguments as required to your script using ",Object(o.b)("inlineCode",{parentName:"p"},"%*")," (or you could pass specific arguments if you needed). Note also the fully qualified path to the python exe (or node) as your script will run as local system (using the apps background service) and the path environment variable settings may be different:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bat"},"REM This script would be called with the parameters <target domain> <record name> <record value> <zone id (optionally)>\n\nREM this example then calls a custom python script forwarding all the arguments\n\nc:\\python27\\python.exe create_dns_txt_example.py %*\n")),Object(o.b)("p",null,"In the following Python example the args are available in the ",Object(o.b)("inlineCode",{parentName:"p"},"sys.argv")," list. This example passes that list to a function called ",Object(o.b)("inlineCode",{parentName:"p"},"main")," and logs some example stuff (",Object(o.b)("inlineCode",{parentName:"p"},"create_dns_txt_example.py")," logging to ",Object(o.b)("inlineCode",{parentName:"p"},"dns_create_test.log"),")."),Object(o.b)("p",null,"Your real script would use your DNS providers API or a library such as Apache libcloud."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'# Example\n\nimport sys\nimport os\nimport getopt\nimport logging\n\n# TODO: added module for DNS updates (libcloud etc)\n\n\ndef main(argv):\n\n    # init logging etc\n    logging.basicConfig(filename=\'dns_create_test.log\',\n                        filemode=\'a\', level=logging.INFO)\n\n    logging.info("Example Python DNS helper.")\n\n   # TODO: setup your DNS provider (apache libcloud etc)\n\n   # TODO: add/append the txt record\n\n    logging.info("args: " + " ".join(sys.argv))\n\n    logging.info(\n        "If this script did anything it would create a TXT record called " + sys.argv[2]\n        + " with the value " + sys.argv[3]\n        + " you could optionally use the domain ("+sys.argv[1]+") "\n        + " or zoneId ("+sys.argv[4]+") in your python script")\n\n\n#########################################\nif __name__ == "__main__":\n    main(sys.argv)\n\n')),Object(o.b)("p",null,"When the script runs that app will call the .bat file like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ExampleDNSCreatePython.bat mydomain.com _acme-challenge.mydomain.com ABCD1234 myoptionalZoneId\n")),Object(o.b)("p",null,"Which in turn (based on the above example .bat) will call the python script as :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"python create_dns_txt_basic.py.bat mydomain.com _acme-challenge.mydomain.com ABCD1234 myoptionalZoneId\n")))}s.isMDXComponent=!0}}]);