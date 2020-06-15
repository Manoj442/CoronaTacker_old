(this["webpackJsonpcovid-19tracker"]=this["webpackJsonpcovid-19tracker"]||[]).push([[0],{10:function(e,a,t){e.exports={active:"cards_active__3NyKv",deaths:"cards_deaths__248gK",recovered:"cards_recovered__1H3TB",confirmed:"cards_confirmed__1ZKax",dontShow:"cards_dontShow__2-_bU",titleDisplayer:"cards_titleDisplayer__2zkc8",caseText:"cards_caseText__8qk5Y",cardDisplay:"cards_cardDisplay__ig7La",individualContent:"cards_individualContent__B5Q37",noShadow:"cards_noShadow__2BU7h",imageDisplayer:"cards_imageDisplayer__2wuOs"}},17:function(e,a,t){e.exports={lineChartDimension:"googleCharts_lineChartDimension__3yOBq",pieChartDimension:"googleCharts_pieChartDimension__32CX5",apexLineChartDimension:"googleCharts_apexLineChartDimension__2d1JA"}},42:function(e,a,t){e.exports=t.p+"static/media/india.ef1e27ae.jpg"},46:function(e,a,t){e.exports={countryDropdown:"States_countryDropdown__2Dqsw"}},51:function(e,a,t){e.exports=t(82)},56:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(39),i=t.n(o),s=(t(56),t(19)),c=t.n(s),l=t(18),d=t(25),h=t(11),p=t(7),u=t(13),m=t(12),g=t(29),D=t.n(g),v=function(){var e=Object(d.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.all([D.a.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"),D.a.get("https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1")]);case 3:return a=e.sent,console.log(a[0].data),console.log(a[1].data),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),f=t(99),b=t(101),y=t(102),C=t(41),E=t.n(C),_=t(10),O=t.n(_),w=t(42),j=t.n(w),k=function(e){var a=e.data,t=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:O.a.titleDisplayer,variant:"h3"},r.a.createElement("img",{alt:"India",className:O.a.imageDisplayer,src:j.a})," COVID-19 DASHBOARD"),r.a.createElement("br",null),r.a.createElement(f.a,{align:"center"},new Date(e.lastUpdate).toDateString()," ",new Date(e.lastUpdate).toLocaleTimeString()),r.a.createElement("div",{className:O.a.cardDisplay},r.a.createElement(b.a,{className:O.a.noShadow},Object.keys(a).map((function(e,t){return r.a.createElement(y.a,{key:t,className:O.a.individualContent},r.a.createElement(f.a,{variant:"h5",align:"center"},r.a.createElement(E.a,{className:"Active"===e?O.a.active:"Confirmed"===e?O.a.confirmed:"Deaths"===e?O.a.deaths:O.a.recovered,start:0,end:a["".concat(e)],duration:3,separator:","})),r.a.createElement(f.a,{variant:"overline",align:"center",className:O.a.caseText},e))})))));return r.a.createElement("div",null,t)},x=t(106),N=t(103),S=t(46),A=t.n(S),R=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).state={regions:[]},n}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.props.data.regionData;return r.a.createElement(x.a,{className:A.a.countryDropdown},r.a.createElement(f.a,{variant:"subtitle1"},"Select a Region:"),r.a.createElement(N.a,{onChange:function(a){return e.props.changeRegion(a.target.value)}},r.a.createElement("option",{value:"National"},"National"),a.map((function(e,a){return r.a.createElement("option",{key:a,value:e.region},e.region)}))))}}]),t}(n.Component),U=t(47),F=t(83),L=t(17),P=t.n(L),B=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){console.log(this.props.regionData);var e=this.props.regionData;return r.a.createElement("div",{className:P.a.pieChartDimension},r.a.createElement(F.a,{elevation:5},r.a.createElement(U.a,{width:"500px",height:"300px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Cases","Numbers"],["Active",e[0].totalInfected],["Deaths",e[0].deceased],["Recovered",e[0].recovered]],options:{title:"Current status in ".concat(this.props.region),is3D:!0},rootProps:{"data-testid":"2"}})))}}]),t}(n.Component),T=t(27),I=t.n(T),H=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;Object(h.a)(this,t),n=a.call(this,e),console.log(e.chartData);var r=e.chartData.map((function(e){return e.activeCases})),o=e.chartData.map((function(e){return e.recovered})),i=e.chartData.map((function(e){return e.totalCases})),s=e.chartData.map((function(e){return e.deaths})),c=e.chartData.map((function(e){return e.lastUpdatedAtApify}));return n.state={series:[{name:"Active",data:r},{name:"Recovered",data:o},{name:"Confirmed",data:i},{name:"Deaths",data:s}],options:{chart:{height:"50%",width:"50%",type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},theme:{palette:"palette1"},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Daily Count"},xaxis:{type:"datetime",categories:c},responsive:[{breakpoint:1e3,options:{plotOptions:{bar:{horizontal:!1}},legend:{position:"bottom"}}}],tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},n}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.apexLineChartDimension},r.a.createElement(F.a,{elevation:5},r.a.createElement(I.a,{options:this.state.options,series:this.state.series,type:"line"})))}}]),t}(n.Component),J=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;Object(h.a)(this,t),n=a.call(this,e),console.log(e.data.regionData);var r=n.props.chartData,o=n.props.data.regionData.map((function(e){return e.region})),i="Deaths"===n.props.title?["#FF4500"]:"Recovered"===n.props.title?["lawngreen"]:"Active"===n.props.title?["#FFD700"]:"Confirmed"===n.props.title?["cornflowerblue"]:[];console.log(r);return n.state={series:[{name:"",data:r}],options:{chart:{type:"bar",height:1e3,stacked:!0,dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2}},legend:{show:!0,showForNullSeries:!0,showForZeroSeries:!0,inverseOrder:!0},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},title:{text:"".concat(n.props.title," count across the states")},xaxis:{categories:o},fill:{colors:i}}},n}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.apexLineChartDimension},r.a.createElement(F.a,{elevation:5},r.a.createElement(I.a,{options:this.state.options,series:this.state.series,type:"bar",height:800})))}}]),t}(n.Component),M=t(104),q=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(h.a)(this,t),(e=a.call(this)).cardData={},e.nationalData={},e.lastUpdate="",e.setCardData=function(a,t){e.cardData="National"===t?{Active:a.activeCases,Deaths:a.deaths,Recovered:a.recovered,Confirmed:a.totalCases}:{Active:a[0].totalInfected,Deaths:a[0].deceased,Recovered:a[0].recovered,Confirmed:a[0].totalCases}},e.handleRegionChange=function(a){if("National"===a)e.setCardData(e.nationalData,a),e.setState({regionData:{},cardData:e.cardData});else{var t=e.state.data.regionData.filter((function(e){return e.region===a}));e.setCardData(t,a),e.setState({regionData:t,region:a,cardData:e.cardData})}},e.state={data:{},region:"",regionData:{},historicData:[],loading:!0,cardData:{},lastUpdate:""},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:a=e.sent,console.log(a),this.nationalData=a[0].data,this.lastUpdate=a[0].data.lastUpdatedAtApify,console.log(this.nationalData),this.setCardData(this.nationalData,"National"),t=[],a[1].data.length&&(t=Object(l.a)(a[1].data).slice().sort(),console.log(t)),this.setState({data:a[0].data,historicData:t,loading:!1,cardData:this.cardData,lastUpdate:this.lastUpdate});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state.data.activeCases?r.a.createElement(k,{lastUpdate:this.state.lastUpdate,data:this.state.cardData}):null,t=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.deceased})):[],n=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.recovered})):[],o=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.totalInfected})):[],i=this.state.data.hasOwnProperty("regionData")?this.state.data.regionData.map((function(e){return e.totalCases})):[],s=this.state.data.hasOwnProperty("regionData")?{Deaths:t,Recovered:n,Active:o,Confirmed:i}:{};return console.log(Object.keys(s)),r.a.createElement("div",null,this.state.loading?r.a.createElement("div",{style:{margin:"3%"}},r.a.createElement("br",null),"Loading Please wait...",r.a.createElement("br",null),r.a.createElement(M.a,{color:"secondary"})):null,a,this.state.data.hasOwnProperty("regionData")?r.a.createElement(R,{data:this.state.data,changeRegion:this.handleRegionChange}):null,r.a.createElement("br",null),r.a.createElement("br",null),Object.keys(this.state.regionData).length?r.a.createElement(B,{regionData:this.state.regionData,region:this.state.region}):null,r.a.createElement("br",null),this.state.historicData.length&&!Object.keys(this.state.regionData).length?r.a.createElement(H,{chartData:this.state.historicData}):null,r.a.createElement("br",null),this.state.data.hasOwnProperty("regionData")&&!Object.keys(this.state.regionData).length?Object.keys(s).map((function(a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{key:t,title:a,chartData:s["".concat(a)],data:e.state.data}),r.a.createElement("br",null),r.a.createElement("br",null))})):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.08982e2f.chunk.js.map