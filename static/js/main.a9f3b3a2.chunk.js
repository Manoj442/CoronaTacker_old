(this["webpackJsonpcovid-19tracker"]=this["webpackJsonpcovid-19tracker"]||[]).push([[0],{13:function(e,a,t){e.exports={active:"cards_active__3NyKv",deaths:"cards_deaths__248gK",recovered:"cards_recovered__1H3TB",confirmed:"cards_confirmed__1ZKax",dontShow:"cards_dontShow__2-_bU",titleDisplayer:"cards_titleDisplayer__2zkc8",caseText:"cards_caseText__8qk5Y",cardDisplay:"cards_cardDisplay__ig7La",individualContent:"cards_individualContent__B5Q37",noShadow:"cards_noShadow__2BU7h",imageDisplayer:"cards_imageDisplayer__2wuOs"}},15:function(e,a,t){e.exports={lineChartDimension:"googleCharts_lineChartDimension__3yOBq",pieChartDimension:"googleCharts_pieChartDimension__32CX5",apexLineChartDimension:"googleCharts_apexLineChartDimension__2d1JA",tableContainer:"googleCharts_tableContainer__-dAV2",table:"googleCharts_table__o0p5o",circularChart:"googleCharts_circularChart__2NuFp"}},32:function(e,a,t){e.exports={tableAndDropDown:"App_tableAndDropDown__2TBa5"}},49:function(e,a,t){e.exports={countryDropdown:"States_countryDropdown__2Dqsw"}},52:function(e,a,t){e.exports=t.p+"static/media/india.ef1e27ae.jpg"},55:function(e,a,t){e.exports=t(86)},60:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(43),i=t.n(o),s=(t(60),t(22)),c=t.n(s),l=t(21),d=t(28),u=t(10),h=t(7),p=t(12),m=t(11),g=t(32),D=t.n(g),v=t(31),f=t.n(v),b=function(){var e=Object(d.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.all([f.a.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"),f.a.get("https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1")]);case 3:return a=e.sent,console.log(a[0].data),console.log(a[1].data),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=t(110),_=t(112),C=t(113),E=t(45),w=t.n(E),O=t(13),j=t.n(O),k=function(e){var a=e.data,t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.cardDisplay},r.a.createElement(y.a,{className:j.a.noShadow},Object.keys(a).map((function(e,t){return r.a.createElement(_.a,{key:t,className:j.a.individualContent},r.a.createElement(C.a,{variant:"h5",align:"center"},r.a.createElement(w.a,{className:"Active"===e?j.a.active:"Confirmed"===e?j.a.confirmed:"Deaths"===e?j.a.deaths:j.a.recovered,start:0,end:a["".concat(e)],duration:3,separator:","})),r.a.createElement(C.a,{variant:"overline",align:"center",className:j.a.caseText},e))})))));return r.a.createElement(r.a.Fragment,null,t)},x=t(123),N=t(121),A=t(49),S=t.n(A),U=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={regions:[]},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this,a=this.props.data.regionData;return r.a.createElement(x.a,{className:S.a.countryDropdown},r.a.createElement(C.a,{variant:"subtitle1"},"Select a Region:"),r.a.createElement(N.a,{onChange:function(a){return e.props.changeRegion(a.target.value)}},r.a.createElement("option",{value:"National"},"National"),a.map((function(e,a){return r.a.createElement("option",{key:a,value:e.region},e.region)}))))}}]),t}(n.Component),R=t(50),B=t(87),P=t(15),T=t.n(P),L=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.regionData;return r.a.createElement("div",{className:T.a.pieChartDimension},r.a.createElement(B.a,{elevation:5},r.a.createElement(R.a,{width:"500px",height:"300px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Cases","Numbers"],["Active",e[0].totalInfected],["Deaths",e[0].deceased],["Recovered",e[0].recovered]],options:{title:"Current status in ".concat(this.props.region),is3D:!0},rootProps:{"data-testid":"2"}})))}}]),t}(n.Component),F=t(19),I=t.n(F),H=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){var n;Object(u.a)(this,t),n=a.call(this,e);var r=e.chartData.map((function(e){return e.activeCases})),o=e.chartData.map((function(e){return e.recovered})),i=e.chartData.map((function(e){return e.totalCases})),s=e.chartData.map((function(e){return e.deaths})),c=e.chartData.map((function(e){return e.lastUpdatedAtApify}));return n.state={series:[{name:"Active",data:r},{name:"Recovered",data:o},{name:"Confirmed",data:i},{name:"Deaths",data:s}],options:{chart:{height:"50%",width:"50%",type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},theme:{palette:"palette1"},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Daily Count"},xaxis:{type:"datetime",categories:c},responsive:[{breakpoint:1e3,options:{plotOptions:{bar:{horizontal:!1}},legend:{position:"bottom"}}}],tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},n}return Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:T.a.apexLineChartDimension},r.a.createElement(B.a,{elevation:5},r.a.createElement(I.a,{options:this.state.options,series:this.state.series,type:"line"})))}}]),t}(n.Component),z=(n.Component,t(124)),J=t(4),M=t(116),W=t(118),q=t(120),K=t(114),V=t(117),X=t(119),Q=t(115),G=Object(J.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(K.a),Y=Object(J.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Q.a),Z=Object(M.a)({table:{minWidth:700}});function $(e){var a=Z(),t=e.data.regionData;return console.log(t.regionData),r.a.createElement(V.a,{className:T.a.tableContainer,component:B.a},r.a.createElement(W.a,{stickyheader:!0,className:a.table,"aria-label":"customized table"},r.a.createElement(X.a,null,r.a.createElement(Q.a,null,["State","Active","Deaths","Recovered","Confirmed"].map((function(e,a){return r.a.createElement(G,{align:"center",style:{width:"15%"},key:a},e)})))),r.a.createElement(q.a,null,t.map((function(e,a){return r.a.createElement(Y,{key:a},r.a.createElement(G,{component:"th",scope:"row"},e.region),r.a.createElement(G,{align:"center"},e.totalInfected),r.a.createElement(G,{align:"center"},e.deceased),r.a.createElement(G,{align:"center"},e.recovered),r.a.createElement(G,{align:"center"},e.totalCases))})))))}var ee=t(52),ae=t.n(ee),te=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props,a=new Date(e.lastUpdate).toDateString()+" "+new Date(e.lastUpdate).toLocaleTimeString();return r.a.createElement(n.Fragment,null,r.a.createElement(C.a,{className:j.a.titleDisplayer,variant:"h3"},r.a.createElement("img",{alt:"India",className:j.a.imageDisplayer,src:ae.a})," COVID-19 DASHBOARD"),r.a.createElement("br",null),r.a.createElement(C.a,{align:"center"},e.lastUpdate?a:null))}}]),t}(n.Component),ne=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).cardData={},e.nationalData={},e.lastUpdate="",e.setCardData=function(a,t){e.cardData="National"===t?{Active:a.activeCases,Deaths:a.deaths,Recovered:a.recovered,Confirmed:a.totalCases}:{Active:a[0].totalInfected,Deaths:a[0].deceased,Recovered:a[0].recovered,Confirmed:a[0].totalCases}},e.handleRegionChange=function(a){if("National"===a)e.setCardData(e.nationalData,a),e.setState({regionData:{},cardData:e.cardData});else{var t=e.state.data.regionData.filter((function(e){return e.region===a}));e.setCardData(t,a),e.setState({regionData:t,region:a,cardData:e.cardData})}},e.state={data:{},region:"",regionData:{},historicData:[],loading:!0,cardData:{},lastUpdate:""},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:a=e.sent,this.nationalData=a[0].data,this.lastUpdate=a[0].data.lastUpdatedAtApify,this.setCardData(this.nationalData,"National"),t=[],a[1].data.length&&(t=Object(l.a)(a[1].data).slice().sort()),this.setState({data:a[0].data,historicData:t,loading:!1,cardData:this.cardData,lastUpdate:this.lastUpdate});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data.activeCases?r.a.createElement("div",{style:{display:"contents"}},r.a.createElement(k,{lastUpdate:this.state.lastUpdate,data:this.state.cardData})):null,a=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.deceased})):[],t=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.recovered})):[],n=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.totalInfected})):[],o=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.totalCases})):[];this.state.data.hasOwnProperty("regionData");return console.log(D.a),r.a.createElement("div",null,r.a.createElement(te,{lastUpdate:this.state.lastUpdate}),this.state.loading?r.a.createElement("div",{style:{margin:"3%"}},r.a.createElement("br",null),"Loading Please wait...",r.a.createElement("br",null),r.a.createElement(z.a,{color:"secondary"})):null,e,this.state.data.hasOwnProperty("regionData")?r.a.createElement(U,{data:this.state.data,changeRegion:this.handleRegionChange}):null,this.state.data.hasOwnProperty("regionData")?r.a.createElement("div",{className:D.a.tableAndDropDown},r.a.createElement($,{data:this.state.data}),Object.keys(this.state.regionData).length?r.a.createElement(L,{regionData:this.state.regionData,region:this.state.region}):null,this.state.historicData.length&&!Object.keys(this.state.regionData).length?r.a.createElement(H,{chartData:this.state.historicData}):null):null,r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a9f3b3a2.chunk.js.map