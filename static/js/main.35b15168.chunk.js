(this["webpackJsonpcovid-19tracker"]=this["webpackJsonpcovid-19tracker"]||[]).push([[0],{207:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(72),c=a.n(o),s=(a(91),a(5)),i=a.n(s),u=a(9),l=a(11),d=a(7),p=a(13),h=a(12),m=a(37),v=a.n(m),f="https://covid19.mathdro.id/api",y=function(){var t=Object(u.a)(i.a.mark((function t(e){var a,n,r,o,c,s,u,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f,e&&(a="".concat(f,"/countries/").concat(e)),t.prev=2,t.next=5,v.a.get(a);case 5:return n=t.sent,r=n.data,o=r.confirmed,c=r.deaths,s=r.recovered,u=r.lastUpdate,l={confirmed:o,deaths:c,recovered:s,lastUpdate:u},console.log(l),t.abrupt("return",l);case 16:t.prev=16,t.t0=t.catch(2),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(i.a.mark((function t(){var e,a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(f,"/countries"),t.next=3,v.a.get(e);case 3:return a=t.sent,n=a.data.countries,t.abrupt("return",n.map((function(t){return t.name})));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(u.a)(i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(f,"/daily"),t.next=3,v.a.get(e);case 3:return a=t.sent,console.log(a),t.abrupt("return",a.data.map((function(t){return{confirmed:t.confirmed.total,deaths:t.deaths.total,date:t.reportDate}})));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=a(224),O=a(225),w=a(229),j=a(226),E=a(73),k=a.n(E),x=a(21),_=a.n(x),D=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.data;return console.log(this.props.data.confirmed),console.log(Object.keys(t)),r.a.createElement("div",null,r.a.createElement(C.a,{className:_.a.titleDisplayer,variant:"h3"},"COVID-19 TRACKER"),r.a.createElement("br",null),r.a.createElement(O.a,{container:!0,spacing:4,justify:"center"},Object.keys(t).map((function(e,a){return r.a.createElement(O.a,{key:a,item:!0,component:w.a,className:"confirmed"===e?_.a.active:"deaths"===e?_.a.deaths:"recovered"===e?_.a.recovered:_.a.dontShow},r.a.createElement(j.a,null,r.a.createElement(C.a,{variant:"h6"},"confirmed"===e?"Confirmed":"deaths"===e?"Deaths":"Recovered"," : \xa0",r.a.createElement(k.a,{start:0,end:t["".concat(e)].value,duration:2.5,separator:","})),r.a.createElement(C.a,{variant:"subtitle1"},"Last update :  \xa0",new Date(t.lastUpdate).toDateString()),r.a.createElement(C.a,{variant:"subtitle2"},"confirmed"===e?"Total No of Confirmed Cases":"deaths"===e?"Total No Of Deaths":"Total No Of Recovered")))}))))}}]),a}(n.Component),N=a(228),S=a(227),T=a(78),R=a.n(T),B=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).state={countries:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:e=t.sent,console.log(e),this.setState({countries:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return r.a.createElement(N.a,{className:R.a.countryDropdown},r.a.createElement(C.a,{variant:"h6",component:"h2"},"Select a Country:"),r.a.createElement(S.a,{onChange:function(e){return t.props.changeCountry(e.target.value)}},r.a.createElement("option",{value:""},"Global"),this.state.countries.map((function(t,e){return r.a.createElement("option",{key:e,value:t},t)}))))}}]),a}(n.Component),K=a(79),L=a(81),P=a.n(L),U=a(36),A=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){console.log(this.props.data);this.props.data;return r.a.createElement(U.a,{width:"500px",height:"300px",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Cases","Numbers"],["Confirmed",this.props.data.confirmed.value],["Deaths",this.props.data.deaths.value],["Recovered",this.props.data.recovered.value]],options:{title:"Corona status",is3D:!0},rootProps:{"data-testid":"2"}})}}]),a}(n.Component),M=(n.Component,a(83)),z=a.n(M),I=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).state={data:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,g();case 3:t.t1=t.sent,t.t2={data:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state.data);var t=[];t.push(["date","Confirmed","Deaths"]),this.state.data.map((function(e){var a=[];a.push(e.date),a.push(e.confirmed),a.push(e.deaths),t.push(a)}));var e=r.a.createElement(U.a,{width:"500px",height:"300px",chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:t,options:{hAxis:{title:"Date"},vAxis:{title:"Corona Cases"},series:{1:{curveType:"function"}}},rootProps:{"data-testid":"2"}});return r.a.createElement("div",{className:z.a.chartDimension},this.props.country?r.a.createElement(A,{data:this.props.data}):e)}}]),a}(n.Component),J=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).handleCountryChange=function(){var e=Object(u.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(a);case 2:n=e.sent,console.log(n),t.setState({data:n,country:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={data:{},country:""},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,console.log(e),this.setState({data:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state.data);var t=this.state.data.confirmed?r.a.createElement(D,{data:this.state.data}):null;return r.a.createElement("div",null,t,r.a.createElement("br",null),r.a.createElement(B,{changeCountry:this.handleCountryChange})," ",r.a.createElement("br",null),r.a.createElement(I,{data:this.state.data,country:this.state.country}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},21:function(t,e,a){t.exports={active:"cards_active__3NyKv",deaths:"cards_deaths__248gK",recovered:"cards_recovered__1H3TB",dontShow:"cards_dontShow__2-_bU",titleDisplayer:"cards_titleDisplayer__2zkc8"}},78:function(t,e,a){t.exports={countryDropdown:"Countries_countryDropdown__vYkg2"}},81:function(t,e,a){t.exports={chartDimension:"charts_chartDimension__2ezCB"}},83:function(t,e,a){t.exports={chartDimension:"googleCharts_chartDimension__1KP05"}},86:function(t,e,a){t.exports=a(207)},91:function(t,e,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.35b15168.chunk.js.map