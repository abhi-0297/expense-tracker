(this["webpackJsonpexpensetracker-react"]=this["webpackJsonpexpensetracker-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),o=a.n(c),l=(a(33),a(65)),s=a(66),u=a(10),i=a.n(u),m=a(14),p=a(9),d=a(27),E=a(7),f=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(E.a)(Object(E.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(E.a)(Object(E.a)({},e),{},{transactions:[].concat(Object(d.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:t.payload});default:return e}},b=a(15),h=a.n(b),O={transactions:[],error:null,loading:!0},v=Object(n.createContext)(O),y=function(e){var t=e.children,a=Object(n.useReducer)(f,O),c=Object(p.a)(a,2),o=c[0],l=c[1];function s(){return(s=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/transactions");case 3:t=e.sent,l({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/transactions/".concat(t));case 3:l({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/transactions",t,a);case 4:n=e.sent,l({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(v.Provider,{value:{transactions:o.transactions,error:o.error,loading:o.loading,getTransactions:function(){return s.apply(this,arguments)},deleteTransaction:function(e){return u.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)}}},t)},N=function(){var e=function(){var e=Object(n.useContext)(v).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"Rs ",e))};return r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-9"},r.a.createElement("h2",null,"Expense Tracker")),r.a.createElement("p",{className:"col-3 ml-0"},r.a.createElement(e,null)))},T=a(56),j=a(57),g=a(58),C=a(59),x=a(60),A=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),s=l[0],u=l[1],i=Object(n.useState)(""),m=Object(p.a)(i,2),d=m[0],E=m[1],f=Object(n.useState)(""),b=Object(p.a)(f,2),h=b[0],O=b[1],y=Object(n.useContext)(v).addTransaction;return r.a.createElement(T.a,{style:{margin:10},onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),title:a,amount:+s,note:d,date:h};y(t),c(""),u(0),E(""),O("")}},r.a.createElement(j.a,{className:"row"},r.a.createElement(g.a,{sm:4},r.a.createElement(C.a,{type:"text",name:"title",id:"title",placeholder:"Title",value:a,onChange:function(e){return c(e.target.value)}}))),r.a.createElement(j.a,{className:"row"},r.a.createElement(g.a,{sm:4},r.a.createElement(C.a,{type:"number",name:"amount",id:"expenseAmount",placeholder:"Amount",value:s,onChange:function(e){return u(e.target.value)}}))),r.a.createElement(j.a,{className:"row"},r.a.createElement(g.a,{sm:4},r.a.createElement(C.a,{type:"text",name:"note",id:"note",placeholder:"Note",value:d,onChange:function(e){return E(e.target.value)}}))),r.a.createElement(j.a,null,r.a.createElement(g.a,{sm:4},r.a.createElement("input",{type:"date",name:"date",id:"date",placeholder:"Date",value:h,onChange:function(e){return O(e.target.value)}}))),r.a.createElement(x.a,{type:"submit",color:"primary"},"ADD EXPENSE"))},R=a(61),w=a(62),S=a(63),k=a(64),_=function(e){var t=e.transaction,a=Object(n.useContext)(v).deleteTransaction;return r.a.createElement("div",{className:"row"},r.a.createElement(R.a,{style:{backgroundColor:"floralwhite",color:"#2e0678"},className:"col-11"},r.a.createElement(w.a,null,r.a.createElement(S.a,null,r.a.createElement("h6",null,t.date),r.a.createElement("h3",null,t.title)),r.a.createElement(k.a,{className:"row"},r.a.createElement("p",{className:"col-8"}," ",t.note),r.a.createElement("p",{className:"col-4",style:{fontSize:"35px"}}," ","Rs ",t.amount)))),r.a.createElement("button",{onClick:function(){return a(t._id)},className:"delete-btn col-1",style:{color:"red",fontSize:"50px",backgroundColor:"#2e0678"}},"x"))},I=function(){var e=Object(n.useContext)(v),t=e.transactions,a=e.getTransactions;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(_,{key:e.id,transaction:e})}))))};var D=function(){return r.a.createElement(y,null,r.a.createElement(l.a,{fluid:!0,style:{backgroundColor:"#2e0678",color:"floralwhite"}},r.a.createElement(s.a,{style:{backgroundColor:"#2e0678"}},r.a.createElement(N,null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-5",style:{backgroundColor:"#2e0678",marginBottom:"5"}},r.a.createElement(I,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6572401b.chunk.js.map