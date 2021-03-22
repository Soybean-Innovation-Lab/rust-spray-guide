(this.webpackJsonprust=this.webpackJsonprust||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(13),i=n(2),c=n(11),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))},l=n(9),d=n(16),u=n(4),h={growthStageOptions:["Early vegetative","Late vegetative (pod-filling)","Beginning maturity"],rustPresenceOptions:["No rust present in field","No rust present in field but spotted within 100km","<10% disease observed on lower canopy and nowhere else on the plant","<20% disease observed on the lower canopy and <10% disease in mid-canopy",">10% disease observed in mid-canopy and anywhere in the upper canopy"],location:void 0,variety:void 0,growthStageSelection:0,rustPresenceSelection:0},b="sprayGate/setRustPresenceSelection",j="sprayGate/setGrowthStageSelection",p="sprayGate/setLocation",f="sprayGate/setVariety";function O(e){return{type:b,value:e}}function m(e){return{type:j,value:e}}function y(e){return{type:p,value:e}}function v(e){return{type:f,value:e}}var g=function(e){return e.sprayGate.growthStageOptions},x=function(e){return e.sprayGate.growthStageSelection},w=function(e){return e.sprayGate.rustPresenceOptions},S=function(e){return e.sprayGate.rustPresenceSelection},N=function(e){return e.sprayGate.location},k=function(e){return e.sprayGate.variety},R=function(e,t,n){var s,r;if(n)switch(e){case h.growthStageOptions[0]:switch(t){case h.rustPresenceOptions[0]:s=!1,r="There is no current threat of a rust outbreak";break;case h.rustPresenceOptions[1]:s=!1,r="Rust spores are windborne and can travel quickly given conducive conditions. Increase scouting and prepare to spray if rust is identified in your fields";break;case h.rustPresenceOptions[2]:case h.rustPresenceOptions[3]:case h.rustPresenceOptions[4]:s=!1,r="Before plants reach R1, there is no major threat to yield. If conditions stay conducive and disease progresses consider spraying at late vegetative stage"}break;case h.growthStageOptions[1]:switch(t){case h.rustPresenceOptions[0]:s=!1,r="There is no current threat of a rust outbreak";break;case h.rustPresenceOptions[1]:s=!1,r="Rust spores are windborne and can travel quickly given conducive conditions. Increase scouting and prepare to spray if rust is identified in your fields";break;case h.rustPresenceOptions[2]:case h.rustPresenceOptions[3]:s=!0,r="Spraying a fungicide may suppress rust outbreak and significantly increase yields";break;case h.rustPresenceOptions[4]:s=!1,r="The infection is too severe and spraying is no longer economically viable"}break;case h.growthStageOptions[0]:s=!1,r="Spraying nearing or after pods are full will not be an economically viable option since it will not have an impact on yields"}else s=!1,r="There is no evidence applying fungicides to a resistant cultivar is an economically viable option.";return{shouldSpray:s,why:r}};var T=n(24),P="data/setData",C="data/setError",F={loading:!0,errorOccured:!1};var G=function(e){return e.data.error},L=function(e){return e.data.errorOccured},I=function(e){return e.data.loading},E=function(e){var t=[];for(var n in e.data.data)t=t.concat(Object.keys(e.data.data[n]));return t},_=function(e){if(!e.sprayGate.location)return[];var t=[];for(var n in e.data.data)e.sprayGate.location in e.data.data[n]&&(t=t.concat(Object.keys(e.data.data[n][e.sprayGate.location])));return t},Y=function(e,t){var n=e.split("/"),s=t.split("/"),r=n.length,a=s.length,i=n.reduce((function(e,t){return e+t}))/r;return n.reduce((function(e,t){return e+t}))/a-i},z=function(e,t){return function(n){if(!e||!t)return[void 0,void 0];var s,r=n.data.data,a=Object(T.a)(Object.keys(n.data.data).sort(Y));try{for(a.s();!(s=a.n()).done;){var i=s.value;if(r[i][e]&&r[i][e][t])return["Susceptible"===r[i][e][t],i]}}catch(c){a.e(c)}finally{a.f()}return[void 0,void 0]}};var D=n(0),$=function(e){var t=e.name,n=e.valSelector,r=e.optionsSelector,a=e.action,c=e.className,o=Object(i.b)(),l=Object(i.c)(n),d=Object(i.c)(r),u=void 0;return l&&d.includes(l)||!(d.length>0)||(u=d[0]),Object(s.useEffect)((function(){u&&o(a(u))}),[u]),Object(D.jsx)("select",{name:t,className:"form-select ".concat(c),onChange:function(e){return o(a(e.target.value))},value:l,children:d.map((function(e){return Object(D.jsxs)("option",{value:e,children:[" ",e," "]},e)}))})},A=function(){var e=Object(i.c)(S),t=Object(i.c)(x),n=Object(i.c)(N),s=Object(i.c)(k),r=Object(i.c)(z(n,s)),a=Object(l.a)(r,2),c=a[0],o=(a[1],R(t,e,c));return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"border border-3 shadow shadow-3 p-3 mx-auto my-5",style:{width:"max-content"},children:[Object(D.jsxs)("h2",{className:"text-center",children:["You should ",!o.shouldSpray&&"not"," spray"]}),Object(D.jsx)("p",{className:"text-center",children:o.why})]}),Object(D.jsx)("p",{children:"Please keep in mind that spraying as well as the number of times you spray is dependent on conducive conditions for the disease. These recommendations are given based on the assumption of continued conducive environments and disease progression."})]})},B=function(){var e=Object(i.c)(N),t=Object(i.c)(k),n=Object(i.c)(z(e,t)),s=Object(l.a)(n,2),r=s[0],a=s[1],c=Object(D.jsxs)("div",{className:"border border-3 ".concat(r?"border-danger":"border-success"," shadow shadow-4 p-3 mt-3 text-center"),children:[Object(D.jsxs)("p",{className:"fs-2 m-0",children:[" ",Object(D.jsx)("span",{className:"text-decoration-underline",children:t})," showed a \xa0",Object(D.jsx)("span",{className:"text-decoration-underline",children:r?"TAN":"RB"}),"\xa0 reaction during the\xa0",Object(D.jsx)("span",{className:"text-decoration-underline",children:a})," season at the \xa0",Object(D.jsx)("span",{className:"text-decoration-underline",children:e})," PAT location. "]}),Object(D.jsxs)("p",{className:"fs-2 m-0",children:["This indicated this variety is\xa0",Object(D.jsx)("span",{className:"text-decoration-underline",children:r?"susceptible":"resistant"})," to this location's rust population. "]})]});return void 0===r&&(c=Object(D.jsx)(D.Fragment,{children:" "})),Object(D.jsxs)("div",{className:"mb-3",children:[Object(D.jsxs)("div",{className:"border border-3 shadow shadow-4 p-3",children:[Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("label",{className:"col-md my-auto",htmlFor:"growthStage",children:" Growth Stage: "}),Object(D.jsx)($,{className:"col-md",name:"growthStage",valSelector:x,optionsSelector:g,action:m})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("label",{className:"col-md my-auto",htmlFor:"rustPresence",children:" Rust Pressure: "}),Object(D.jsx)($,{className:"col-md",name:"rustPresence",valSelector:S,optionsSelector:w,action:O})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("label",{className:"col-md my-auto",htmlFor:"location",children:" Nearest PAT Location: "}),Object(D.jsx)($,{className:"col-md",name:"location",valSelector:N,optionsSelector:E,action:y})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("label",{htmlFor:"variety",className:"col-md my-auto",children:" Soybean Variety: "}),Object(D.jsx)($,{className:"col-md",name:"variety",valSelector:k,optionsSelector:_,action:v})]})]}),c]})},M=function(e){var t=e.name,n=e.state,r=e.set,a=e.units,c=e.formatter,o=e.children,d=e.labelClassNames,u=e.inputClassNames,h=e.spanClassNames,b=Object(i.b)(),j=Object(s.useState)(n),p=Object(l.a)(j,2),f=p[0],O=p[1],m=Object(s.useState)(!1),y=Object(l.a)(m,2),v=y[0],g=y[1];return Object(s.useEffect)((function(){var e=Number.parseFloat(f);!isNaN(e)&&e&&e!==n&&b(r(e))}),[b,n,r,f]),c||(c=function(e){return e}),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("label",{className:d,htmlFor:t,children:[" ",o," "]}),Object(D.jsxs)("div",{style:{whiteSpace:"nowrap"},className:u,children:[Object(D.jsx)("input",{style:{width:"5rem"},name:t,value:v?f:c(f),onBlur:function(e){return g(!1)},onFocus:function(e){return g(!0)},onChange:function(e){return O(e.target.value)}}),Object(D.jsxs)("span",{className:h,children:[" ",a," "]})]})]})},U=n(25),V={costOfFungicide:24.7,costOfLabor:29.64,plotSize:5,priceOfGrain:400},X="roi/setCostOfFungicide",q="roi/setCostOfLabor",J="roi/setPlotSize",W="roi/setPriceOfGrain";function H(e){return{type:X,value:e}}function K(e){return{type:q,value:e}}function Q(e){return{type:W,value:e}}var Z=function(e){return e.roi.costOfFungicide},ee=function(e){return e.roi.costOfLabor},te=function(e){return e.roi.plotSize},ne=function(e){return e.roi.priceOfGrain},se=function(e){for(var t=ne(e),n=te(e),s=Z(e),r=ee(e),a=[],i=0,c=[{growthStage:"R1-R2",sprays:1,avgYield:.4845},{growthStage:"R1-R2",sprays:2,avgYield:.9785},{growthStage:"R1-R2",sprays:3,avgYield:1.508},{growthStage:"R3-R4",sprays:1,avgYield:.717},{growthStage:"R3-R4",sprays:2,avgYield:1.164},{growthStage:"R5-R6",sprays:1,avgYield:.7715}];i<c.length;i++){var o=c[i],l=o.avgYield*t,d=l-o.sprays*(r+s);a.push(Object(U.a)({incRev:l,incRevTotal:o.avgYield*t*n,revCosts:d,returnOnIn:d/(s*o.sprays)},o))}return a};var re=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:" What is the economic gain of spraying fungicide?"}),Object(D.jsxs)("p",{className:"fs-3",children:["Even when there is a yield increase potential by fungicide application, the cost of spraying and gross margin increases still need to be considered to determine if spraying is an economically viable option. Below please enter in the growth stage you plan to start spraying your plants, the cost of fungicide per application per hectare, plot size in hectares, and the price of grain. Please use ",Object(D.jsx)("a",{href:"https://www.xe.com/currencyconverter/",target:"_blank",children:"this currency converter "}),"to convert local currency to US Dollars ($) "]})]})},ae=function(){Object(i.b)();var e=Object(i.c)(Z),t=Object(i.c)(te),n=Object(i.c)(ne),s=Object(i.c)(ee),r=Object(i.c)(se);return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:" Return on Investment "}),Object(D.jsxs)("div",{className:"border border-3 shadow shadow-3 p-3 px-5 mx-auto",style:{width:"max-content"},children:[Object(D.jsx)("div",{className:"row my-1",children:Object(D.jsx)(M,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"costOfFungicide",state:e,set:H,units:"/MT",formatter:function(e){return"$".concat(e)},children:"Cost of Fungicide"})}),Object(D.jsx)("div",{className:"row my-1",children:Object(D.jsx)(M,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"plotSize",state:t,set:t,units:"ha",children:"Plot Size"})}),Object(D.jsx)("div",{className:"row my-1",children:Object(D.jsx)(M,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"priceOfGrain",state:n,set:Q,units:"/MT",formatter:function(e){return"$".concat(e)},children:"Price of Grain"})}),Object(D.jsx)("div",{className:"row my-1",children:Object(D.jsx)(M,{labelClassNames:"col-md-6 text-nowrap",inputClassNames:"col-md-6",name:"costOfLabor",state:s,set:K,units:"/spray/ha",formatter:function(e){return"$".concat(e)},children:"Cost of Labor"})})]}),Object(D.jsxs)("table",{className:"table border border-3 my-3 mx-auto",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"Growth Stage"}),Object(D.jsx)("th",{children:"Number of Sprays"}),Object(D.jsx)("th",{children:"Average Yield"}),Object(D.jsx)("th",{children:"Increase in Revenue/ha"}),Object(D.jsx)("th",{children:"Increase in Total Revenue"}),Object(D.jsx)("th",{children:"Revenue Costs"}),Object(D.jsx)("th",{children:"Return on inputs"})]})}),Object(D.jsx)("tbody",{children:r.map((function(e){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:e.growthStage}),Object(D.jsx)("td",{children:e.sprays}),Object(D.jsxs)("td",{children:["$",e.avgYield.toFixed(2)]}),Object(D.jsxs)("td",{children:["$",e.incRev.toFixed(2)]}),Object(D.jsxs)("td",{children:["$",e.incRevTotal.toFixed(2)]}),Object(D.jsxs)("td",{children:["$",e.revCosts.toFixed(2)]}),Object(D.jsxs)("td",{children:["$",e.returnOnIn.toFixed(2)]})]})}))})]}),Object(D.jsxs)("div",{className:"border border-3 shadow shadow-3 my-3 p-3",children:[Object(D.jsx)("h3",{children:" Definitions "}),Object(D.jsxs)("dl",{class:"row",children:[Object(D.jsx)("dt",{class:"col-sm-3",children:"Average yield increases"}),Object(D.jsx)("dd",{class:"col-sm-9",children:"based on timing and number of sprays are estimated based on select locations in Mueller, et al. 2009. Plant Disease 93(3):243-248. Yield increases from fungicide application are highly dependent on rust pressure. These averages are based on moderate rust pressure and will be lower or higher depending on conducive environment. "}),Object(D.jsx)("dt",{class:"col-sm-3",children:"Increase in revenue/ha"}),Object(D.jsx)("dd",{class:"col-sm-9",children:"is based off the estimated yield increase (MT/ha) multiplied by the price of grain ($/MT) "}),Object(D.jsx)("dt",{class:"col-sm-3",children:"Gross margins/ha"}),Object(D.jsx)("dd",{class:"col-sm-9",children:"are calculated by subtracting the cost of fungicide and labor per spray multiplied by the number of sprays from the increase in revenue/ha."}),Object(D.jsx)("dt",{class:"col-sm-3",children:"Return on inputs"}),Object(D.jsx)("dd",{class:"col-sm-9",children:"is the gross margin/ha divided by the cost of fungicide/ha multiplied by the number of sprays. "})]})]})]})},ie=function(e){var t=e.leftLink,n=e.leftText,s=e.rightLink,r=e.rightText,a=e.rightClassName;return Object(D.jsxs)("div",{className:"d-flex w-100 flex-direction-row justify-content-between mb-3",children:[Object(D.jsxs)(d.b,{className:"px-3 btn btn-lg btn-primary ".concat(t?"visible":"invisible"),to:t||"",children:[Object(D.jsx)("i",{class:"bi bi-arrow-left",style:{"font-size":"1.5rem"}})," ",n," "]}),Object(D.jsxs)(d.b,{className:"px-3 btn btn-lg btn-primary ".concat(s?"visible":"invisible"," ").concat(a),to:s||"",children:[r," ",Object(D.jsx)("i",{class:"bi bi-arrow-right",style:{"font-size":"1.5rem"}})]})]})},ce=function(){var e=Object(i.b)(),t=Object(i.c)(L),n=Object(i.c)(G),r=Object(i.c)(I),a=Object(i.c)(S),c=Object(i.c)(x),o=Object(i.c)(N),h=Object(i.c)(k),b=Object(i.c)(z(o,h)),j=Object(l.a)(b,2),p=j[0],f=(j[1],R(c,a,p)),O="".concat("/rust/dev","/data.json");return Object(s.useEffect)((function(){fetch(O).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:P,value:e}}(t))})).catch((function(t){console.error(t),e(function(e){return{type:C,value:e}}(t))}))}),[e,O]),r?Object(D.jsx)("div",{className:"spinner-border",role:"status",children:Object(D.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):t?Object(D.jsxs)("pre",{children:[" Error: ",JSON.stringify(n)," "]}):Object(D.jsx)(d.a,{children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)(u.c,{children:[Object(D.jsxs)(u.a,{path:"/roi",children:[Object(D.jsx)(ae,{}),Object(D.jsx)(ie,{leftText:"ROI Info",leftLink:"/roi-info"})]}),Object(D.jsxs)(u.a,{path:"/roi-info",children:[Object(D.jsx)(re,{}),Object(D.jsx)(ie,{rightLink:"/roi",rightText:"ROI",leftText:"Spray Results",leftLink:"/spray-results"})]}),Object(D.jsxs)(u.a,{path:"/spray-results",children:[Object(D.jsx)("h1",{children:" Should I Spray? \u2014 Results"}),Object(D.jsx)(A,{}),Object(D.jsx)(ie,{rightLink:"/roi-info",rightText:"ROI Info",rightClassName:f.shouldSpray?"":"disabled",leftText:"Spray Info",leftLink:"/spray-gate"})]}),Object(D.jsxs)(u.a,{path:"/spray-gate",children:[Object(D.jsx)("h1",{children:" Should I Spray? "}),Object(D.jsx)("p",{children:" Deciding to spray fungicides to control rust is dependent on several factors including age of the plant, susceptibility to rust, presence of rust in the field, and conducive environment. Below please enter the current growth stage of your crop, current rust pressure, and what variety you are using along with the nearest PAT location. The location and variety combination will allow us to determine if your variety is susceptible to your local rust population.  "}),Object(D.jsxs)("p",{children:[" Is your variety not listed? We may not have sufficient data to confirm resistance or susceptibility of a variety in your location. If you are interested in a variety not included on the list above, please contact us at ",Object(D.jsx)("a",{href:"mailto:soybeaninnovationlab@illinois.edu",children:"soybeaninnovationlab@illinois.edu"})]}),Object(D.jsx)(B,{}),Object(D.jsx)(ie,{rightLink:"/spray-results",rightText:"Spray Results",leftText:"Welcome",leftLink:"/"})]}),Object(D.jsxs)(u.a,{path:"/",children:[Object(D.jsx)("h1",{children:" Rust Spray Calculator"}),Object(D.jsxs)("p",{children:[Object(D.jsx)("a",{target:"_blank",href:"https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_e31432ab4564440d86637434fe1dd580.pdf",children:"Soybean rust"}),"\xa0 is a foliar disease that can have devastating impacts on soybean production causing up to 80% reductions in yield in conducive environments. The impact of this disease is highly reliant on conducive environments. Prolonged periods of relative humidity and warmer temperatures are ideal for soybean rust. Resistant varieties are recommended to control soybean rust, but when resistant varieties are not available applying fungicides may be an effective control method."]}),Object(D.jsx)("p",{children:"The Rust Spray Calculator was designed to aid in environmentally responsible and economically feasible decision making and gives you a concise decision on whether to spray fungicides to control rust outbreaks. First the calculator determines if you should consider spraying based on maturity of your crop, susceptibility, and rust presence and then determines the economic gain you will achieve by considering the cost of fungicide application and price of grain."}),Object(D.jsx)("h2",{children:"Fungicide Safety"}),Object(D.jsxs)("p",{children:["There are environmental and human health hazards when spraying fungicides. Please take our ",Object(D.jsx)("a",{href:"https://soybeaninnovationlab.getlearnworlds.com/course?courseid=ipm",target:"_blank",children:"SIL-U"})," course on pesticide safety before applying fungicides to your fields (a free account is required to access the course).  "]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("h2",{children:"Avoiding Fungicide Resistance"})," Misuse, including overuse, of fungicides can result in the pathogen that causes soybean rust developing resistance to fungicides. To avoid fungicide resistance, only spray when necessary, follow the label instruction for that fungicide, and use several modes of action. A mixture of strobilurins and triazoles is recommended for effective rust control. Please consult your extension agent on what products are registered in your area."]}),Object(D.jsx)(ie,{rightLink:"/spray-gate",rightText:"Spray Gate"})]})]})})})},oe=Object(c.b)({sprayGate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:e.rustPresenceSelection=t.value;break;case j:e.growthStageSelection=t.value;break;case p:e.location=t.value;break;case f:e.variety=t.value}return e},roi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:e.costOfLabor=t.value;break;case J:e.plotSize=t.value;break;case W:e.priceOfGrain=t.value;break;case X:e.costOfFungicide=t.value}return e},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:e.data=t.value,e.loading=!1;break;case C:e.errorOccured=!0,e.error=t.value,e.loading=!1}return e}}),le=(n(36),Object(c.c)(oe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(a.render)(Object(D.jsx)(i.a,{store:le,children:Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(ce,{})})}),document.getElementById("root")),o()}},[[37,1,2]]]);
//# sourceMappingURL=main.415ace29.chunk.js.map