(this.webpackJsonprust=this.webpackJsonprust||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(14),i=s(3),c=s(10),o=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))},l=s(16),d=s(4),u={growthStageOptions:["Early vegetative","Late vegetative (pod-filling) R1-R6","Beginning maturity"],rustPresenceOptions:["No rust present in field","No rust present in field but spotted within 100km","<10% disease observed on lower canopy and nowhere else on the plant","<20% disease observed on the lower canopy and <10% disease in mid-canopy",">10% disease observed in mid-canopy and anywhere in the upper canopy"],country:void 0,state:void 0,variety:void 0,growthStageSelection:0,rustPresenceSelection:0},h="sprayGate/setRustPresenceSelection",b="sprayGate/setGrowthStageSelection",j="sprayGate/setCountry",p="sprayGate/setState",f="sprayGate/setVariety";function m(e){return{type:h,value:e}}function g(e){return{type:b,value:e}}var O=function(e){return e.sprayGate.growthStageOptions},v=function(e){return e.sprayGate.growthStageSelection},y=function(e){return e.sprayGate.rustPresenceOptions},x=function(e){return e.sprayGate.rustPresenceSelection},w=function(e){return e.sprayGate.country},S=function(e){return e.sprayGate.state},N=function(e){return e.sprayGate.variety},_=function(e,t,s){var n,a;if("Susceptible"===s)switch(e){case u.growthStageOptions[0]:switch(t){case u.rustPresenceOptions[0]:n=!1,a="There is no current threat of a rust outbreak";break;case u.rustPresenceOptions[1]:n=!1,a="Rust spores are windborne and can travel quickly given conducive conditions. Increase scouting and prepare to spray if rust is identified in your fields";break;case u.rustPresenceOptions[2]:case u.rustPresenceOptions[3]:case u.rustPresenceOptions[4]:n=!1,a="Before plants reach R1, there is no major threat to yield. If conditions stay conducive and disease progresses consider spraying at late vegetative stage"}break;case u.growthStageOptions[1]:switch(t){case u.rustPresenceOptions[0]:n=!1,a="There is no current threat of a rust outbreak";break;case u.rustPresenceOptions[1]:n=!1,a="Rust spores are windborne and can travel quickly given conducive conditions. Increase scouting and prepare to spray if rust is identified in your fields";break;case u.rustPresenceOptions[2]:case u.rustPresenceOptions[3]:n=!0,a="Spraying a fungicide may suppress rust outbreak and significantly increase yields";break;case u.rustPresenceOptions[4]:n=!1,a="The infection is too severe and spraying is no longer economically viable"}break;case u.growthStageOptions[0]:n=!1,a="Spraying nearing or after pods are full will not be an economically viable option since it will not have an impact on yields"}else"Unknown"===s?(n=!1,a="There is no data about this variety/location"):(n=!1,a="There is no evidence applying fungicides to a resistant cultivar is an economically viable option.");return{shouldSpray:n,why:a}};var k=s(0),R=function(e){var t=e.name,s=e.valSelector,a=e.optionsSelector,r=e.action,c=e.className,o=Object(i.b)(),l=Object(i.c)(s),d=Object(i.c)(a),u=void 0;return l&&d.includes(l)||!(d.length>0)||(u=d[0]),Object(n.useEffect)((function(){u&&o(r(u))}),[u]),Object(k.jsx)("select",{name:t,className:"form-select ".concat(c),onChange:function(e){return o(r(e.target.value))},value:l,children:d.map((function(e){return Object(k.jsxs)("option",{value:e,children:[" ",e," "]},e)}))})},T=function(){var e=Object(i.c)(x),t=Object(i.c)(v),s=_(t,e,"Susceptible");return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"border border-3 shadow shadow-3 p-3 mx-auto my-5",style:{width:"max-content"},children:[Object(k.jsxs)("h2",{className:"text-center",children:["You should ",!s.shouldSpray&&"not"," spray"]}),Object(k.jsx)("p",{className:"text-center",children:s.why})]}),Object(k.jsx)("p",{children:"Please keep in mind that spraying, as well as the number of times you spray, is dependent on conducive conditions for the disease. These recommendations are given based on the assumption of continued conducive environments and disease progression."})]})},L=function(){return Object(k.jsx)("div",{className:"mb-3",children:Object(k.jsxs)("div",{className:"border border-3 shadow shadow-4 p-3",children:[Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("label",{className:"col-md my-auto",htmlFor:"growthStage",children:" Growth Stage: "}),Object(k.jsx)(R,{className:"col-md",name:"growthStage",valSelector:v,optionsSelector:O,action:g})]}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("label",{className:"col-md my-auto",htmlFor:"rustPresence",children:" Rust Pressure: "}),Object(k.jsx)(R,{className:"col-md",name:"rustPresence",valSelector:x,optionsSelector:y,action:m})]})]})})},P=s(23),C=function(e){var t=e.name,s=e.state,a=e.set,r=e.units,c=e.formatter,o=e.children,l=e.labelClassNames,d=e.inputClassNames,u=e.spanClassNames,h=Object(i.b)(),b=Object(n.useState)(s),j=Object(P.a)(b,2),p=j[0],f=j[1],m=Object(n.useState)(!1),g=Object(P.a)(m,2),O=g[0],v=g[1];return Object(n.useEffect)((function(){var e=Number.parseFloat(p);!isNaN(e)&&e&&e!==s&&h(a(e))}),[h,s,a,p]),c||(c=function(e){return e}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("label",{className:l,htmlFor:t,children:[" ",o," "]}),Object(k.jsxs)("div",{style:{whiteSpace:"nowrap"},className:d,children:[Object(k.jsx)("input",{style:{width:"5rem"},name:t,value:O?p:c(p),onBlur:function(e){return v(!1)},onFocus:function(e){return v(!0)},onChange:function(e){return f(e.target.value)}}),Object(k.jsxs)("span",{className:u,children:[" ",r," "]})]})]})},I=s(27),F={costOfFungicide:24.7,costOfLabor:29.64,plotSize:5,priceOfGrain:400},G="roi/setCostOfFungicide",E="roi/setCostOfLabor",q="roi/setPlotSize",Y="roi/setPriceOfGrain";function z(e){return{type:G,value:e}}function D(e){return{type:E,value:e}}function $(e){return{type:Y,value:e}}var M=function(e){return e.roi.costOfFungicide},V=function(e){return e.roi.costOfLabor},B=function(e){return e.roi.plotSize},U=function(e){return e.roi.priceOfGrain},A=function(e){for(var t=U(e),s=B(e),n=M(e),a=V(e),r=[],i=0,c=[{growthStage:"R1-R2",sprays:1,avgYield:.4845},{growthStage:"R1-R2",sprays:2,avgYield:.9785},{growthStage:"R1-R2",sprays:3,avgYield:1.508},{growthStage:"R3-R4",sprays:1,avgYield:.717},{growthStage:"R3-R4",sprays:2,avgYield:1.164},{growthStage:"R5-R6",sprays:1,avgYield:.7715}];i<c.length;i++){var o=c[i],l=o.avgYield*t,d=l-o.sprays*(a+n);r.push(Object(I.a)({incRev:l,incRevTotal:o.avgYield*t*s,revCosts:d,returnOnIn:d/(n*o.sprays)},o))}return r};var X=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(k.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(k.jsx)("h1",{children:" What is the economic gain of spraying fungicide?"}),Object(k.jsxs)("p",{className:"fs-3",children:["Even when there is a yield increase potential by fungicide application, the cost of spraying and gross margin increases still need to be considered to determine if spraying is an economically viable option. Below please enter in the growth stage you plan to start spraying your plants, the cost of fungicide per application per hectare, plot size in hectares, and the price of grain. Please use ",Object(k.jsx)("a",{href:"https://www.xe.com/currencyconverter/",target:"_blank",children:"this currency converter "}),"to convert local currency to US Dollars ($) "]})]})},J=function(){Object(i.b)();var e=Object(i.c)(M),t=Object(i.c)(B),s=Object(i.c)(U),n=Object(i.c)(V),a=Object(i.c)(A);return Object(k.jsxs)("div",{children:[Object(k.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(k.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(k.jsx)("h1",{children:" Return on Investment "}),Object(k.jsxs)("div",{className:"border border-3 shadow shadow-3 p-3 px-5 mx-auto",style:{width:"max-content"},children:[Object(k.jsx)("div",{className:"row my-1",children:Object(k.jsx)(C,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"costOfFungicide",state:e,set:z,units:"/MT",formatter:function(e){return"$".concat(e)},children:"Cost of Fungicide"})}),Object(k.jsx)("div",{className:"row my-1",children:Object(k.jsx)(C,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"plotSize",state:t,set:t,units:"ha",children:"Plot Size"})}),Object(k.jsx)("div",{className:"row my-1",children:Object(k.jsx)(C,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"priceOfGrain",state:s,set:$,units:"/MT",formatter:function(e){return"$".concat(e)},children:"Price of Grain"})}),Object(k.jsx)("div",{className:"row my-1",children:Object(k.jsx)(C,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"costOfLabor",state:n,set:D,units:"/spray/ha",formatter:function(e){return"$".concat(e)},children:"Cost of Labor"})})]}),Object(k.jsxs)("table",{className:"table border border-3 my-3 mx-auto",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Growth Stage"}),Object(k.jsx)("th",{children:"Number of Sprays"}),Object(k.jsx)("th",{children:"Average Yield (MT/ha)"}),Object(k.jsx)("th",{children:"Increase in Revenue/ha"}),Object(k.jsx)("th",{children:"Increase in Total Revenue"}),Object(k.jsx)("th",{children:"Revenue Costs"}),Object(k.jsx)("th",{children:"Return on inputs"})]})}),Object(k.jsx)("tbody",{children:a.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.growthStage}),Object(k.jsx)("td",{children:e.sprays}),Object(k.jsx)("td",{children:e.avgYield.toFixed(2)}),Object(k.jsxs)("td",{children:["$",e.incRev.toFixed(2)]}),Object(k.jsxs)("td",{children:["$",e.incRevTotal.toFixed(2)]}),Object(k.jsxs)("td",{children:["$",e.revCosts.toFixed(2)]}),Object(k.jsxs)("td",{children:["$",e.returnOnIn.toFixed(2)]})]})}))})]}),Object(k.jsxs)("div",{className:"border border-3 shadow shadow-3 my-3 p-3",children:[Object(k.jsx)("h3",{children:" Definitions "}),Object(k.jsxs)("dl",{className:"row",children:[Object(k.jsx)("dt",{className:"col-sm-3",children:"Average yield increases"}),Object(k.jsx)("dd",{className:"col-sm-9",children:"based on timing and number of sprays are estimated based on select locations in Mueller, et al. 2009. Plant Disease 93(3):243-248. Yield increases from fungicide application are highly dependent on rust pressure. These averages are based on moderate rust pressure and will be lower or higher depending on conducive environment. "}),Object(k.jsx)("dt",{className:"col-sm-3",children:"Increase in revenue/ha"}),Object(k.jsx)("dd",{className:"col-sm-9",children:"based off the estimated yield increase (MT/ha) multiplied by the price of grain ($/MT) "}),Object(k.jsx)("dt",{className:"col-sm-3",children:"Gross margins/ha"}),Object(k.jsx)("dd",{className:"col-sm-9",children:"calculated by subtracting the cost of fungicide and labor per spray multiplied by the number of sprays from the increase in revenue/ha."}),Object(k.jsx)("dt",{className:"col-sm-3",children:"Return on inputs"}),Object(k.jsx)("dd",{className:"col-sm-9",children:"the gross margin/ha divided by the cost of fungicide/ha multiplied by the number of sprays. "})]})]})]})},W=(s(26),s(22),"data/setData"),H="data/setError",K={loading:!0,errorOccured:!1};var Q=function(e){return e.data.error},Z=function(e){return e.data.errorOccured},ee=function(e){return e.data.loading};var te=function(e){var t=e.leftLink,s=e.leftText,n=e.rightLink,a=e.rightText,r=e.rightClassName;return Object(k.jsxs)("div",{className:"d-flex w-100 flex-direction-row justify-content-between mb-3",children:[Object(k.jsxs)(l.b,{className:"px-3 btn btn-lg btn-primary ".concat(t?"visible":"invisible"),to:t||"",children:[Object(k.jsx)("i",{className:"bi bi-arrow-left",style:{fontSize:"1.5rem"}})," ",s," "]}),Object(k.jsxs)(l.b,{className:"px-3 btn btn-lg btn-primary ".concat(n?"visible":"invisible"," ").concat(r),to:n||"",children:[a," ",Object(k.jsx)("i",{className:"bi bi-arrow-right",style:{fontSize:"1.5rem"}})]})]})},se=function(){var e=Object(i.b)(),t=Object(i.c)(Z),s=Object(i.c)(Q),a=Object(i.c)(ee),r=Object(i.c)(x),c=Object(i.c)(v),o=(Object(i.c)(w),Object(i.c)(S),Object(i.c)(N),_(c,r,"Susceptible")),u="".concat("/rust-spray-guide/dev","/data.json");return Object(n.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:W,value:e}}(t))})).catch((function(t){console.error(t),e(function(e){return{type:H,value:e}}(t))}))}),[e,u]),a?Object(k.jsx)("div",{className:"spinner-border",role:"status",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):t?Object(k.jsxs)("pre",{children:[" Error: ",JSON.stringify(s)," "]}):Object(k.jsx)(l.a,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)(d.c,{children:[Object(k.jsxs)(d.a,{path:"/roi",children:[Object(k.jsx)(J,{}),Object(k.jsx)(te,{leftText:"ROI Info",leftLink:"/roi-info"})]}),Object(k.jsxs)(d.a,{path:"/roi-info",children:[Object(k.jsx)(X,{}),Object(k.jsx)(te,{rightLink:"/roi",rightText:"ROI",leftText:"Spray Results",leftLink:"/spray-results"})]}),Object(k.jsxs)(d.a,{path:"/spray-results",children:[Object(k.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(k.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(k.jsx)("h1",{children:" Should I Spray? \u2014 Results"}),Object(k.jsx)(T,{}),Object(k.jsx)(te,{rightLink:"/roi-info",rightText:"ROI Info",rightClassName:o.shouldSpray?"":"disabled",leftText:"Spray Info",leftLink:"/spray-gate"})]}),Object(k.jsxs)(d.a,{path:"/spray-gate",children:[Object(k.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(k.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(k.jsx)("h1",{children:" Should I Spray? "}),Object(k.jsx)("p",{children:" Deciding to spray fungicides to control rust is dependent on several factors including age of the plant, susceptibility to rust, presence of rust in the field, and conducive environment. Below please enter the current growth stage of your crop and current rust pressure. This information will allow us to determine whether you need to spray or not."}),Object(k.jsxs)("p",{children:[" If you have any question, please contact us at ",Object(k.jsx)("a",{href:"mailto:soybeaninnovationlab@illinois.edu",children:"soybeaninnovationlab@illinois.edu"})]}),Object(k.jsx)(L,{}),Object(k.jsx)(te,{rightLink:"/spray-results",rightText:"Spray Results",leftText:"Welcome",leftLink:"/"})]}),Object(k.jsxs)(d.a,{path:"/",children:[Object(k.jsx)("a",{href:"https://www.soybeaninnovationlab.illinois.edu/",children:Object(k.jsx)("img",{src:"https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp",width:"150",height:"140"})}),Object(k.jsx)("h1",{children:" Rust Spray Calculator"}),Object(k.jsxs)("p",{children:[Object(k.jsx)("a",{target:"_blank",href:"https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_e31432ab4564440d86637434fe1dd580.pdf",children:"Soybean rust"}),"\xa0 is a foliar disease that can have devastating impacts on soybean production causing up to 80% reductions in yield in conducive environments. The impact of this disease is highly reliant on conducive environments. Prolonged periods of relative humidity and warmer temperatures are ideal for soybean rust. Resistant varieties are recommended to control soybean rust, but when resistant varieties are not available applying fungicides may be an effective control method."]}),Object(k.jsx)("p",{children:"The Rust Spray Calculator was designed to aid in environmentally responsible and economically feasible decision making and gives you a concise decision on whether to spray fungicides to control rust outbreaks. First the calculator determines if you should consider spraying based on maturity of your crop, susceptibility, and rust presence and then determines the economic gain you will achieve by considering the cost of fungicide application and price of grain."}),Object(k.jsx)("h2",{children:"Fungicide Safety"}),Object(k.jsxs)("p",{children:["There are environmental and human health hazards when spraying fungicides. Please take our ",Object(k.jsx)("a",{href:"https://soybeaninnovationlab.getlearnworlds.com/course?courseid=ipm",target:"_blank",children:"SIL-U"})," course on pesticide safety before applying fungicides to your fields (a free account is required to access the course).  "]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("h2",{children:"Avoiding Fungicide Resistance"})," Misuse, including overuse, of fungicides can result in the pathogen that causes soybean rust developing resistance to fungicides. To avoid fungicide resistance, only spray when necessary, follow the label instruction for that fungicide, and use several modes of action. A mixture of strobilurins and triazoles is recommended for effective rust control. Please consult your extension agent on what products are registered in your area."]}),Object(k.jsx)(te,{rightLink:"/spray-gate",rightText:"Spray Gate"})]})]})})})},ne=Object(c.b)({sprayGate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:e.rustPresenceSelection=t.value;break;case b:e.growthStageSelection=t.value;break;case j:e.country!==t.value&&(e.state=void 0),e.country=t.value;break;case p:e.state!==t.value&&(e.variety=void 0),e.state=t.value;break;case f:e.variety=t.value}return e},roi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:e.costOfLabor=t.value;break;case q:e.plotSize=t.value;break;case Y:e.priceOfGrain=t.value;break;case G:e.costOfFungicide=t.value}return e},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:e.data=t.value,e.loading=!1;break;case H:e.errorOccured=!0,e.error=t.value,e.loading=!1}return e}}),ae=(s(38),Object(c.c)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(r.render)(Object(k.jsx)(i.a,{store:ae,children:Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(se,{})})}),document.getElementById("root")),o()}},[[39,1,2]]]);
//# sourceMappingURL=main.2600d925.chunk.js.map