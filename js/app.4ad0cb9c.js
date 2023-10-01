(function(){var e={54:function(e,t,a){"use strict";var o=a(963),n=a(252),i=a(577);const s={class:"parent"};function r(e,t,a,o,r,l){const d=(0,n.up)("MyNavbar"),c=(0,n.up)("MyAbout"),g=(0,n.up)("MyResume"),u=(0,n.up)("MyProjects"),p=(0,n.up)("MyContact"),m=(0,n.up)("MyFooter");return(0,n.wg)(),(0,n.iD)("div",{id:"app",class:(0,i.C_)({"text-dark":!r.nightMode,"text-light":r.nightMode})},[(0,n.Wm)(d,{onScroll:l.scrollTo,onNightMode:l.switchMode,nightMode:r.nightMode},null,8,["onScroll","onNightMode","nightMode"]),(0,n._)("div",s,[(0,n.Wm)(c,{id:"About",nightMode:r.nightMode},null,8,["nightMode"]),(0,n.Wm)(g,{id:"Resume",nightMode:r.nightMode},null,8,["nightMode"]),(0,n.Wm)(u,{id:"Projects",nightMode:r.nightMode},null,8,["nightMode"]),(0,n.Wm)(p,{id:"Contact",nightMode:r.nightMode},null,8,["nightMode"]),(0,n.Wm)(m,{id:"Footer",nightMode:r.nightMode},null,8,["nightMode"])])],2)}var l=a(377);const d=e=>((0,n.dD)("data-v-1d8fe4f9"),e=e(),(0,n.Cn)(),e),c={class:"container","data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"},g={class:"row"},u={class:"col-lg-7 col-md-12 col-12 d-flex align-items-center"},p={class:"about-text"},m=d((()=>(0,n._)("h1",{class:"text-holder"},[(0,n._)("span",{class:"mr-2 welcome-text"},"Hello guys!")],-1))),h={class:"pb-4 col-md-10 mt-4",style:{"padding-left":"0"}},v=d((()=>(0,n._)("div",{class:"col-lg-5 col-md-12 col-12"},[(0,n._)("div",{class:"about-image svg pb-5"},[(0,n._)("img",{src:l,class:"img-fluid",style:{"border-radius":"50%"},alt:"svg image"})])],-1)));function b(e,t,a,o,s,r){const l=(0,n.up)("MySocialLinks");return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)([{"bg-white":!a.nightMode,"bg-dark":a.nightMode},"pt-5 p-st"])},[(0,n._)("div",c,[(0,n._)("div",g,[(0,n._)("div",u,[(0,n._)("div",p,[m,(0,n._)("p",null,(0,i.zw)(s.description),1),(0,n._)("div",h,[(0,n.Wm)(l)])])]),v])])],2)}let f={name:"Balázs Csuka",logo_name:"Balázs Csuka",flat_picture:a(377),config:{use_cookies:!0,navbar:{blur:!1}},description:"I am Balázs Csuka, a third-year student of Computer Engineering at the University of Debrecen. Besides my studies I work as a software developer at CTS Informatika Kft. My passion is programming, which I try to improve continuously.",education:[{name:"DSZC Beregszászi Pál",place:"Debrecen/Hungary",date:"Sep 2019 - May 2021",degree:"OKJ, Computer Software Engineering",skills:[]},{name:"University of Debrecen",place:"Hungary",date:"Sep 2021 - Present",degree:"Bachelors in Computer Science Engineering",description:"",skills:["C","Java","C#","Python","Matlab","Verilog","HTML5","CSS3","JavaScript","Sql"]}],experience:[{name:"CTS-Informatika Kft",place:"Hungary",date:"Jun, 2021 - Present",position:"Software Developer",description:"I currently work here as a software developer. My responsibilities include developing new projects in .NET web frameworks, maintaining and supporting previous software, assisting new colleagues. During my work I gained valuable experiences in areas such as constant communication with clients, managing multiple tasks running in parallel at the same time, and I gained insight into the day-to-day operations of a company.",skills:["C#","Blazor","WinForms","Postgres",".NET","Maui","ASP.NET Web API"]}],projects:[{title:"Flutter_League",description:"Flutter League is a companion app for League of Legends players that allows them to search for summoners, view their stats and match history, and check currently ongoing games.",tags:["Flutter","Dart","API"],media:a(35)},{title:"SignalR_BlazorChess",description:"SignalR_BlazorChess is a multiplayer chess application built using Blazor Server, MudBlazor for the UI components, and SignalR for enabling real-time multiplayer functionality. This application allows chess enthusiasts to play against each other in a virtual environment and enjoy the strategic and intellectual challenges that the game of chess offers",tags:["Blazor","C#","OOP"],media:a(685)},{title:"android-adb-picture-puller",description:'The "android-adb-picture-puller" is a Python script that allows users to easily pull pictures and videos from an Android device to their local machine using Android Debug Bridge (ADB). The script leverages the "ppadb" library to interact with ADB, making it compatible with various Android devices.',tags:["Python3","Adb","Android"],media:a(707)},{title:"my-portfolio",description:"It's my portfolio page made with vuejs",tags:["JavaScript","Vue","Bootstrap"],media:a(482)}]};var y=f;const _=["onClick"],M=["src"];function w(e,t,o,s,r,l){const d=(0,n.Q2)("tooltip");return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.socialLinks,(e=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("button",{key:e.name,class:(0,i.C_)("btn btn-outline-secondary mx-2 socialContainer "+e.name),style:{padding:"0"},onClick:t=>l.openInNewTab(e.url)},[(0,n._)("img",{class:"socialSvg",src:a(318)(`./${e.name}.svg`)},null,8,M)],10,_)),[[d,"socialLink",void 0,{bottom:!0}]]))),128)}var k={props:{nightMode:{type:Boolean}},methods:{openInNewTab(e){window.open(e,"_blank","noreferrer")}},name:"MySocialLinks",data(){return{socialLinks:[{name:"linkedin",color:"#0a66c2",url:"https://www.linkedin.com/in/balázs-csuka-450599213/"},{name:"github",color:"#242c34",url:"https://github.com/csuka1219"},{name:"codersrank",color:"#128C7E",url:"https://profile.codersrank.io/user/csuka1219"}]}}},C=a(744);const x=(0,C.Z)(k,[["render",w],["__scopeId","data-v-02bc6eaa"]]);var D=x,I={props:{nightMode:{type:Boolean}},methods:{openInNewTab(e){window.open(e,"_blank","noreferrer")}},name:"MyAbout",data(){return{description:y.description}},components:{MySocialLinks:D}};const S=(0,C.Z)(I,[["render",b],["__scopeId","data-v-1d8fe4f9"]]);var z=S;const B=e=>((0,n.dD)("data-v-308b4666"),e=e(),(0,n.Cn)(),e),j={class:"container"},T={class:"text-center","data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"},O=B((()=>(0,n._)("br",null,null,-1))),A={class:"text-center"},P={class:"mb-3","data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"},E=["onUpdate:modelValue"],L=B((()=>(0,n._)("span",{class:"bar"},null,-1))),F={class:"label"},N={class:"my-3","data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"},H={class:"wave-group",style:{"padding-bottom":"20px"}},W=B((()=>(0,n._)("span",{class:"bar"},null,-1))),K={class:"label"};function R(e,t,a,s,r,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["py-4 p-st pt-5",{"bg-light":!a.nightMode,"bg-dark2":a.nightMode,"text-light":a.nightMode}])},[(0,n._)("div",j,[(0,n._)("div",T,[(0,n._)("span",{class:(0,i.C_)(["title text-center",{pgray:!a.nightMode,"text-light":a.nightMode}])},"CONTACT",2)]),(0,n._)("hr",{width:"50%",class:(0,i.C_)({pgray:!a.nightMode,"bg-secondary":a.nightMode})},null,2),O,(0,n._)("div",A,[(0,n._)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.contactFormData,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"wave-group",key:e.label,style:{"padding-bottom":"20px"}},[(0,n.wy)((0,n._)("input",{required:"","onUpdate:modelValue":t=>e.value=t,type:"text",class:(0,i.C_)({input:!0,"text-light":a.nightMode})},null,10,E),[[o.nr,e.value]]),L,(0,n._)("label",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.label.length+1,(t=>((0,n.wg)(),(0,n.iD)("span",{class:"label-char",style:{"--index":"(i-1)"},key:t-1},(0,i.zw)(e.label.charAt(t-1)),1)))),128))])])))),128))]),(0,n._)("div",N,[(0,n._)("div",H,[(0,n.wy)((0,n._)("textarea",{required:"",name:"message","onUpdate:modelValue":t[0]||(t[0]=e=>r.message=e),class:(0,i.C_)({input:!0,"text-light":a.nightMode}),rows:"4"},null,2),[[o.nr,r.message]]),W,(0,n._)("label",K,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.messageString.length+1,(e=>((0,n.wg)(),(0,n.iD)("span",{class:"label-char",style:{"--index":"(i-1)"},key:e-1},(0,i.zw)(r.messageString.charAt(e-1)),1)))),128))])])]),(0,n._)("button",{onClick:t[1]||(t[1]=(0,o.iM)(((...e)=>l.sendEmail&&l.sendEmail(...e)),["prevent"])),class:"button"}," Button ")])])],2)}let U={emailjs:{serviceID:"service_hqhn01w",templateID:"template_iv697er",userID:"QmrtCxOnOe_ABrUdz"}};var Z=U,Y=a(101),J={name:"MyContact",props:{nightMode:{type:Boolean}},data(){return{message:"",contactFormData:[{label:"Name",value:""},{label:"Email",value:""},{label:"Subject",value:""}],messageString:"Message"}},methods:{sendEmail(){var e={from_name:this.contactFormData[0].value,user_email:this.contactFormData[1].value,subject:this.contactFormData[2].value,message:this.message};Object.values(e).every((e=>null===e||""===e))?console.log("Nope"):Y.ZP.send(Z.emailjs.serviceID,Z.emailjs.templateID,e,Z.emailjs.userID).then((()=>{this.contactFormData.forEach((e=>e.value="")),this.message=""}),(()=>{}))}}};const q=(0,C.Z)(J,[["render",R],["__scopeId","data-v-308b4666"]]);var V=q,$=a.p+"img/CopyRight.5139a32c.svg";const Q=e=>((0,n.dD)("data-v-0cd3b190"),e=e(),(0,n.Cn)(),e),G=Q((()=>(0,n._)("img",{class:"copyright-icon",src:$},null,-1)));function X(e,t,a,o,s,r){const l=(0,n.up)("MySocialLinks");return(0,n.wg)(),(0,n.iD)("footer",{class:(0,i.C_)([{"bg-white":!a.nightMode,"bg-dark":a.nightMode},"footer"])},[(0,n._)("div",null,[G,(0,n.Uk)(" "+(0,i.zw)((new Date).getFullYear())+" Balázs Csuka ",1)]),(0,n._)("div",null,[(0,n.Wm)(l,{style:{float:"right"}})])],2)}var ee={name:"MyFooter",props:{nightMode:{type:Boolean}},components:{MySocialLinks:D}};const te=(0,C.Z)(ee,[["render",X],["__scopeId","data-v-0cd3b190"]]);var ae=te;const oe=e=>((0,n.dD)("data-v-5135dcb4"),e=e(),(0,n.Cn)(),e),ne={class:"container"},ie=oe((()=>(0,n._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{style:{color:"gray","font-size":"23px"}},[(0,n._)("i",{class:"fas fa-bars"})])],-1))),se={class:"collapse navbar-collapse",id:"navbarSupportedContent"},re={class:"navbar-nav ml-auto"},le=["onClick"],de={class:"nav-item ml-2",style:{"text-align":"center"}};function ce(e,t,a,s,r,l){const d=(0,n.up)("MyLogo"),c=(0,n.Q2)("tooltip");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("nav",{class:(0,i.C_)(["navbar navbar-expand-lg navbar-light fixed-top p-st",{"bg-light":!a.nightMode,"navbar-blur":r.navbarConfig.blur,"bg-dark2":a.nightMode}])},[(0,n._)("div",ne,[(0,n._)("a",{class:"navbar-brand",href:"/",onClick:t[0]||(t[0]=(0,o.iM)((t=>e.$emit("scroll","home")),["prevent"]))},[(0,n.Wm)(d,{nightMode:a.nightMode},null,8,["nightMode"])]),ie,(0,n._)("div",se,[(0,n._)("ul",re,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.navLinks,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"nav-item mx-2",style:{"text-align":"center"},key:t},[(0,n._)("a",{class:(0,i.C_)(["nav-link",{"text-light":a.nightMode}]),href:"/{{navlink}}",onClick:(0,o.iM)((a=>e.$emit("scroll",t)),["prevent"])},(0,i.zw)(t),11,le)])))),128)),(0,n._)("li",de,[(0,n._)("a",{class:(0,i.C_)(["nav-link",{"text-light":a.nightMode}]),href:"#",onClick:t[1]||(t[1]=(0,o.iM)(((...e)=>l.switchMode&&l.switchMode(...e)),["prevent"]))},[(0,n.wy)((0,n._)("i",{class:(0,i.C_)({"fas fa-moon":a.nightMode,"far fa-moon":!a.nightMode})},null,2),[[c,a.nightMode?"Light Mode":"Night Mode",void 0,{bottom:!0}]])],2)])])])])],2)])}const ge={class:"logo-div"},ue={class:"logo-title-dot",style:{color:"#5264AE"}};function pe(e,t,a,o,s,r){return(0,n.wg)(),(0,n.iD)("div",ge,[(0,n._)("span",{class:(0,i.C_)(["logo-title-name",{pgray:!a.nightMode,"text-light":a.nightMode}])},(0,i.zw)(s.name),3),(0,n._)("span",ue,(0,i.zw)(s.dot),1)])}var me={name:"MyLogo",props:{nightMode:{type:Boolean}},data(){return{name:y.logo_name,dot:"."}}};const he=(0,C.Z)(me,[["render",pe],["__scopeId","data-v-5376c08b"]]);var ve=he,be={name:"NavBar",props:{nightMode:{type:Boolean}},data(){return{navbarConfig:y.config.navbar,navLinks:["About","Resume","Projects","Contact"]}},components:{MyLogo:ve},methods:{switchMode(){this.$emit("nightMode",!this.nightMode)}}};const fe=(0,C.Z)(be,[["render",ce],["__scopeId","data-v-5135dcb4"]]);var ye=fe;const _e={class:"container",style:{"padding-bottom":"30px"}},Me={class:"text-center","data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"},we={class:"row data-card"},ke={class:"data-card-media col-xl-3 col-bg-3 col-md-3 col-sm-5"},Ce={class:"about-image svg image-container"},xe=["src"],De={class:"data-card-content col-xl-9 col-bg-9 col-md-9 col-sm-7"},Ie={class:"data-card-header"},Se={class:"data-card-title"},ze=["href"],Be={class:"data-card-description mt-2"},je={class:"data-card-tags"};function Te(e,t,a,o,s,r){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)([{"bg-white":!a.nightMode,"bg-dark":a.nightMode},"pt-5 p-st"])},[(0,n._)("div",_e,[(0,n._)("div",Me,[(0,n._)("span",{class:(0,i.C_)(["title text-center",{pgray:!a.nightMode,"text-light":a.nightMode}])},"PROJECTS",2),(0,n._)("hr",{width:"50%",class:(0,i.C_)({pgray:!a.nightMode,"bg-secondary":a.nightMode})},null,2)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.projects,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"project-cards mt-4",key:e.title},[t>0?((0,n.wg)(),(0,n.iD)("hr",{key:0,class:(0,i.C_)({pgray:!a.nightMode,"bg-secondary":a.nightMode})},null,2)):(0,n.kq)("",!0),(0,n._)("div",we,[(0,n._)("div",ke,[(0,n._)("div",Ce,[(0,n._)("img",{src:e.media,style:{"border-radius":"9px"},class:"img-fluid rounded",alt:"svg image"},null,8,xe)])]),(0,n._)("div",De,[(0,n._)("div",Ie,[(0,n._)("div",Se,[(0,n._)("span",null,[(0,n._)("a",{style:{color:"inherit"},href:"https://github.com/csuka1219/"+e.title,target:"_blank"},(0,i.zw)(e.title),9,ze)])])]),(0,n._)("div",Be,[(0,n._)("p",null,(0,i.zw)(e.description),1)]),(0,n._)("div",je,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.tags,(e=>((0,n.wg)(),(0,n.iD)("span",{class:(0,i.C_)(["badge p-2 mb-2 mt-2",{"bg-dark2":a.nightMode}]),key:e,style:{"margin-right":"8px"}},(0,i.zw)(e),3)))),128))])])])])))),128))])],2)}var Oe={props:{nightMode:{type:Boolean}},components:{},name:"MyProjects",data(){return{projects:y.projects}}};const Ae=(0,C.Z)(Oe,[["render",Te],["__scopeId","data-v-4c65a4ee"]]);var Pe=Ae;const Ee={class:"container"},Le={class:"text-center","data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"},Fe={class:"row"},Ne={class:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},He={class:"col-xl-6 col-bg-6 col-md-6 col-sm-12"};function We(e,t,a,o,s,r){const l=(0,n.up)("Timeline");return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["py-4 p-st pt-5",{"bg-light":!a.nightMode,"bg-dark2":a.nightMode,"text-light":a.nightMode}])},[(0,n._)("div",Ee,[(0,n._)("div",Le,[(0,n._)("span",{class:(0,i.C_)(["title text-center",{pgray:!a.nightMode,"text-light":a.nightMode}])},"RESUME",2)]),(0,n._)("hr",{width:"50%",class:(0,i.C_)({pgray:!a.nightMode,"bg-secondary":a.nightMode})},null,2),(0,n._)("div",Fe,[(0,n._)("div",Ne,[(0,n.Wm)(l,{data:s.education,nightMode:a.nightMode},null,8,["data","nightMode"])]),(0,n._)("div",He,[(0,n.Wm)(l,{data:s.experience,nightMode:a.nightMode},null,8,["data","nightMode"])])])])],2)}const Ke=e=>((0,n.dD)("data-v-357cfdb2"),e=e(),(0,n.Cn)(),e),Re={class:"mx-3 mt-3 mb-5"},Ue={class:"row"},Ze={class:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},Ye={class:"title1","data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"},Je={class:"m-0 pb-2"},qe={class:"px-2 title2"},Ve={class:"px-2 title3"},$e={class:"px-2 date"},Qe={class:"px-2 pb-2 pt-2",style:{"text-align":"justify"}},Ge=Ke((()=>(0,n._)("p",{class:"m-2"},null,-1)));function Xe(e,t,a,o,s,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",Re,[(0,n._)("div",Ue,[(0,n._)("div",Ze,[(0,n._)("p",Ye,(0,i.zw)(a.data.title.toUpperCase()),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.data.data,(e=>((0,n.wg)(),(0,n.iD)("ul",{class:"timeline m-0 pt-1",key:e.name,"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"},[(0,n._)("li",Je,[(0,n._)("div",null,[(0,n._)("div",qe,(0,i.zw)(e.name)+", "+(0,i.zw)(e.place),1),(0,n._)("div",Ve,(0,i.zw)(e.degree||e.position)+" "+(0,i.zw)(e.gpa?"("+e.gpa+")":""),1),(0,n._)("div",$e,(0,i.zw)(e.date),1),(0,n._)("div",Qe,(0,i.zw)(e.description),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.skills,(e=>((0,n.wg)(),(0,n.iD)("span",{class:(0,i.C_)(["mx-2 badge p-2 mb-2",{"bg-dark2":a.nightMode}]),key:e},(0,i.zw)(e),3)))),128)),Ge])])])))),128))])])])])}var et={name:"MyTimeline",props:{data:{type:Object},nightMode:{type:Boolean}}};const tt=(0,C.Z)(et,[["render",Xe],["__scopeId","data-v-357cfdb2"]]);var at=tt,ot={name:"MyResume",components:{Timeline:at},props:{nightMode:{type:Boolean}},data(){return{education:{title:"education",data:y.education},experience:{title:"experiences",data:y.experience}}}};const nt=(0,C.Z)(ot,[["render",We],["__scopeId","data-v-15f4f901"]]);var it=nt,st={name:"App",components:{MyNavbar:ye,MyAbout:z,MyResume:it,MyProjects:Pe,MyContact:V,MyFooter:ae},data(){return{nightMode:!0}},methods:{switchMode(e){this.nightMode=e},scrollTo(e){if("home"==e){var t=document.getElementById("About").offsetTop;window.scrollTo({top:t-35,behavior:"smooth"})}else console.log(e),t=document.getElementById(e).offsetTop,window.scrollTo({top:t-35,behavior:"smooth"})}}};const rt=(0,C.Z)(st,[["render",r]]);var lt=rt;(0,o.ri)(lt).mount("#app")},318:function(e,t,a){var o={"./codersrank.svg":357,"./facebook.svg":757,"./github.svg":925,"./linkedin.svg":211};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=318},357:function(e,t,a){"use strict";e.exports=a.p+"img/codersrank.70369da8.svg"},757:function(e,t,a){"use strict";e.exports=a.p+"img/facebook.753a6efa.svg"},925:function(e,t,a){"use strict";e.exports=a.p+"img/github.0e8a3018.svg"},211:function(e,t,a){"use strict";e.exports=a.p+"img/linkedin.2663cd3f.svg"},35:function(e,t,a){"use strict";e.exports=a.p+"img/FlutterLeagueImg.37a42520.png"},482:function(e,t,a){"use strict";e.exports=a.p+"img/MyPortfolioImg.63f8453c.png"},707:function(e,t,a){"use strict";e.exports=a.p+"img/PythonAndroidImg.a2eb4f19.png"},685:function(e,t,a){"use strict";e.exports=a.p+"img/SignalRBlazorChessImg.269837b1.png"},377:function(e,t,a){"use strict";e.exports=a.p+"img/portrait.dab51cde.png"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],i=e[c][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,n,i]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/my-portfolio/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,s=o[0],r=o[1],l=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var c=l(a)}for(t&&t(o);d<s.length;d++)i=s[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},o=self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(54)}));o=a.O(o)})();
//# sourceMappingURL=app.4ad0cb9c.js.map