(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),l=c(2),i=c(3),o=c.n(i),r=c(1),d=(c(12),c(13),c(0)),j=function(e){var t=e.todos,c=e.showTodo,s=e.showModal,a=Object(r.useState)(0),n=Object(l.a)(a,2),i=n[0],o=n[1];return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:s&&e.id===i?"has-background-info-light":"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:"".concat(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){!function(e){c(e),o(e.id)}(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far ".concat(s&&e.id===i?"fa-eye-slash":"fa-eye")})})})})]},e.id)}))})]})},b=function(e){var t=e.filterTodos,c=Object(r.useState)(""),s=Object(l.a)(c,2),a=s[0],n=s[1],i=Object(r.useState)("all"),o=Object(l.a)(i,2),j=o[0],b=o[1],h=function(e,c){"search"===c&&(n(e),t(j,e)),"select"===c&&(b(e),t(e,a))};return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",name:"select",onChange:function(e){h(e.target.value,e.target.name)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",name:"search",value:a,onChange:function(e){h(e.target.value,e.target.name)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n(""),t("all","")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){return h("/users/".concat(e))},m=(c(15),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.todo,c=e.closeModal,s=t.id,a=t.title,i=t.completed,j=t.userId,b=Object(r.useState)(),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(r.useEffect)((function(){!function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(j);case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),O?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c()}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[i?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(O.email),children:O.name})]})]})]}):Object(d.jsx)(m,{})]})},x=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(l.a)(a,2),u=i[0],x=i[1],f=Object(r.useState)(c[0]),p=Object(l.a)(f,2),N=p[0],v=p[1],y=Object(r.useState)(c),g=Object(l.a)(y,2),w=g[0],k=g[1];!function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/todos");case 2:t=e.sent,s(t),k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(b,{filterTodos:function(e,t){var s=c;switch(e){case"active":s=s.filter((function(e){return!e.completed}));break;case"completed":s=s.filter((function(e){return e.completed}))}s=s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})),k(s)}})}),Object(d.jsxs)("div",{className:"block",children:[0===c.length&&Object(d.jsx)(m,{}),Object(d.jsx)(j,{todos:w,showTodo:function(e){v(e),x(!0)},showModal:u})]})]})})}),u&&Object(d.jsx)(O,{todo:N,closeModal:function(){x(!1)}})]})};a.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8ba79780.chunk.js.map