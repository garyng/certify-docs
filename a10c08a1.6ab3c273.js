(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(h,o(o({ref:t},s),{},{components:r})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(116)),c={id:"azuredns",title:"Using Azure DNS"},o={unversionedId:"dns/providers/azuredns",id:"dns/providers/azuredns",isDocsHomePage:!1,title:"Using Azure DNS",description:"Azure DNS documentation originally written by: Tony Johncock @Tony1044",source:"@site/docs/dns/providers/azuredns.md",slug:"/dns/providers/azuredns",permalink:"/docs/dns/providers/azuredns",editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/dns/providers/azuredns.md",version:"current"},l=[{value:"Create an Azure AD Service Principle",id:"create-an-azure-ad-service-principle",children:[]},{value:"Step 1 \u2013 Install and configure Azure PowerShell",id:"step-1--install-and-configure-azure-powershell",children:[]},{value:"Step 2 \u2013 Connect to Azure PS and create the Azure Service Principal and Enterprise Application",id:"step-2--connect-to-azure-ps-and-create-the-azure-service-principal-and-enterprise-application",children:[]},{value:"3 - Grant the Application rights to update DNS",id:"3---grant-the-application-rights-to-update-dns",children:[]},{value:"4 - Create Service Principal Secret",id:"4---create-service-principal-secret",children:[]},{value:"5 \u2013 Retrieve Tenant ID and Subscription ID",id:"5--retrieve-tenant-id-and-subscription-id",children:[]},{value:"6 \u2013 Configure Credentials in Certify SSL Manager",id:"6--configure-credentials-in-certify-ssl-manager",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Azure DNS documentation originally written by: Tony Johncock @Tony1044")),Object(i.b)("p",null,"*Note: If you have not yet selected a DNS API provider to host your domain with be aware that Azure DNS is currently amongst the most complex to configure for API access. You should also note that ",Object(i.b)("strong",{parentName:"p"},"Azure Client Secrets can expire, causing your renewals to fail until you replace the key.*")),Object(i.b)("h1",{id:"to-configure-using-azure-portal"},"To Configure using Azure Portal"),Object(i.b)("h2",{id:"create-an-azure-ad-service-principle"},"Create an Azure AD Service Principle"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Azure Active Directory, create a user who will then be assigned permissions to update your DNS zone, this can be an App registration. "),Object(i.b)("li",{parentName:"ul"},"You will also need to add a Client Secret for use by this user (User > Certificates and Secrets)."),Object(i.b)("li",{parentName:"ul"},"In your DNS Zone, use the Access Control (IAM) option to Add a Role Assignment (DNS Zone Contributor). ")),Object(i.b)("h1",{id:"to-configure-using-powershell"},"To Configure using Powershell"),Object(i.b)("h2",{id:"step-1--install-and-configure-azure-powershell"},"Step 1 \u2013 Install and configure Azure PowerShell"),Object(i.b)("p",null,"Follow the instructions here: ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/azure/get-started-azureps"},"https://docs.microsoft.com/en-us/powershell/azure/get-started-azureps")),Object(i.b)("h2",{id:"step-2--connect-to-azure-ps-and-create-the-azure-service-principal-and-enterprise-application"},"Step 2 \u2013 Connect to Azure PS and create the Azure Service Principal and Enterprise Application"),Object(i.b)("p",null,"From PowerShell:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},"# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\n# Import-Module Az.Accounts\nPS C:\\Users\\Tony> Connect-AzAccount\n")),Object(i.b)("p",null,"This will launch a web dialog to log into your Azure tenant. Ensure you connect with an account with the relevant administrative credentials in the portal."),Object(i.b)("p",null,"Pop your password and MFA requirements in as required when prompted."),Object(i.b)("p",null,"Once connected, create the Application and Service Principal\nRun the following script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},'$azurePassword = ConvertTo-SecureString "your secure password" -AsPlainText -Force\n\n# Import-Module Az.Resources\n$credentials = New-Object Microsoft.Azure.Commands.ActiveDirectory.PSADPasswordCredential -Property @{ StartDate=Get-Date; EndDate=Get-Date -Year 2024; Password=$azurePassword}\n$MyServicePrincipal = New-AzADServicePrincipal -DisplayName "LetsEncrypt" -PasswordCredential $credentials\n')),Object(i.b)("p",null,"Once this has successfully run, you need to retrieve the ApplicationID:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},"Get-AzADApplication | Select-Object displayname, objectid, applicationid\n")),Object(i.b)("p",null,"It returns something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"DisplayName    ObjectId                             ApplicationId                       \n-----------    --------                             -------------                       \nLetsEncrypt    7f64adcf-xxxx-yyyy-zzzz-aabbccddeeff aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee\n")),Object(i.b)("p",null,"Make a note of the ApplicationID"),Object(i.b)("p",null,"This will have created a service principal and an underlying Azure application."),Object(i.b)("h2",{id:"3---grant-the-application-rights-to-update-dns"},"3 - Grant the Application rights to update DNS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login to portal.azure.com from a web browser"),Object(i.b)("li",{parentName:"ul"},"Click on your DNS Zone"),Object(i.b)("li",{parentName:"ul"},"Click on Access Control (IAM)"),Object(i.b)("li",{parentName:"ul"},"Click on (+) Add"),Object(i.b)("li",{parentName:"ul"},"Select:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Role: DNS Zone Contributor"),Object(i.b)("li",{parentName:"ul"},"Assign access to: Azure AD user, group or application"),Object(i.b)("li",{parentName:"ul"},"Select: Type in LetsEncrypt"),Object(i.b)("li",{parentName:"ul"},"Click Save")))),Object(i.b)("h2",{id:"4---create-service-principal-secret"},"4 - Create Service Principal Secret"),Object(i.b)("p",null,"From the Azure portal, click Azure Active Directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click App Registrations"),Object(i.b)("li",{parentName:"ul"},"Click LetsEncrypt"),Object(i.b)("li",{parentName:"ul"},"Click Certificates & secrets"),Object(i.b)("li",{parentName:"ul"},"Click Client secrets"),Object(i.b)("li",{parentName:"ul"},"Click New client secret"),Object(i.b)("li",{parentName:"ul"},"Type a key description, choose when it will expire (or never \u2013 your choice) and click save.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"IMPORTANT: The secret is only shown at this point. Copy it as once it\u2019s hidden there is NO way to retrieve it")),Object(i.b)("h2",{id:"5--retrieve-tenant-id-and-subscription-id"},"5 \u2013 Retrieve Tenant ID and Subscription ID"),Object(i.b)("p",null,"There are any number of ways to get the tenant ID, but since we\u2019re already in PowerShell:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},"Get-AzSubscription\n\nName                     Id                                   TenantId                             State  \n----                     --                                   --------                             -----  \nSubscription Name        xxxxxxxx-yyyy-zzzz-aaaa-bbbbbbbbbbbb zzzzzzzz-wwww-yyyy-aaaa-bbbbbbbbbbbb Enabled\n")),Object(i.b)("h2",{id:"6--configure-credentials-in-certify-ssl-manager"},"6 \u2013 Configure Credentials in Certify SSL Manager"),Object(i.b)("p",null,"You now have all the information you require to configure Azure settings in the app. "),Object(i.b)("p",null,"You can add this is a new Stored Credential under Settings or while you are editing a Managed Certificate, under Authorization > DNS. "),Object(i.b)("p",null,'When using the credential as part of DNS validation in the app you will be prompted for the "Zone Id", for Azure DNS this is the DNS zone name, usually in the form of "yourdomain.com"'))}u.isMDXComponent=!0}}]);