(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/loader.951c2859.gif"},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),s=t.n(r),i=(t(17),t(2)),l=t(3),o=t(6),m=t(4),u=t(5),h=t(1),d=t(9),v=t.n(d),p=(t(18),function(e){return c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{className:"loader-icon",alt:"Loader icon",src:v.a}))}),E=(t(19),function(e){var a=e.image;return c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("img",{className:"img-responsive",src:a.urls.regular}))}),f=function(e){return c.a.createElement("div",{className:"row"},e.list.map(function(e){return c.a.createElement(E,{image:e,key:e.id})}))},g=(t(20),function(e){var a=e.queryData;return c.a.createElement("li",{className:"text-center"},a)}),y=function(e){return c.a.createElement("ul",null,e.list.map(function(e,a){return c.a.createElement(g,{queryData:e,key:a})}))},N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={query:"",images:[],query_data:[],isFetching:!1},t.trackQueryValueChange=t.trackQueryValueChange.bind(Object(h.a)(t)),t.searchClick=t.searchClick.bind(Object(h.a)(t)),t.saveClick=t.saveClick.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"fetchFunc",value:function(){var e=this;this.setState({isFetching:!0}),fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(this.state.query,"&client_id=").concat("91a8803cad63e68b7905d1f5537952f6909ba40b106d21af0160d01b247b4883")).then(function(e){return e.json()}).then(function(a){console.log(a),e.setState({images:a.results,isFetching:!1})})}},{key:"searchClick",value:function(e){e.preventDefault(),this.fetchFunc()}},{key:"saveClick",value:function(){var e=this.state.query_data;e.push(this.state.query),this.setState({query_data:e})}},{key:"trackQueryValueChange",value:function(e){this.setState({query:e.target.value})}},{key:"render",value:function(){var e=this.state,a=e.query,t=e.query_data,n=e.images,r=e.isFetching;return c.a.createElement("div",{className:"searchForm"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"block1"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("input",{className:"searchForm__searchInput",type:"text",placeholder:"Search Input",value:a,onChange:this.trackQueryValueChange})),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("input",{className:"searchForm__searchBtn",type:"submit",value:"Search",onClick:this.searchClick}),c.a.createElement("input",{className:"searchForm__saveBtn",type:"submit",value:"Save",onClick:this.saveClick})))),c.a.createElement("div",{className:"block1"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("div",{className:"searchForm__imageGrid"},!r&&0===n.length&&""===a.trim()&&c.a.createElement("p",{className:"text-center"},"Please enter images name into the input"),!r&&0===n.length&&""!==a.trim()&&c.a.createElement("p",{className:"text-center"},"Empty Image Grid"),r&&""!==a.trim()&&c.a.createElement(p,null),!r&&c.a.createElement(f,{list:n}))),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("div",{className:"searchForm__savedQueries"},c.a.createElement(y,{list:t})))))))}}]),a}(n.Component),b=t(10),k=t.n(b),C=(t(21),t(22),t(23),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"}),c.a.createElement("h1",{className:"App-title"},"Welcome to React"))),c.a.createElement("div",{className:"bootstrap-wrapper"},c.a.createElement(N,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.758ac423.chunk.js.map