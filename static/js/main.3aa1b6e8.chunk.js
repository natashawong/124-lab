(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(6),i=n.n(o),l=(n(11),n(2)),d=n(3),s=n(4),u="SHOW_ALL",r="HIDE_COMPLETED",j="ADD",b="EDIT",m="BASE",O=n(0);var h=function(t){var e=t.filterType===r?t.data.filter((function(t){return!t.completed})):t.data,n=Object(c.useState)({}),a=Object(l.a)(n,2),o=(a[0],a[1]),i=Object(c.useState)({}),u=Object(l.a)(i,2),j=(u[0],u[1]);function b(e){return function(n){o((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(d.a)({},n.target.name,n.target.value))})),t.editData(n.target.value,e)}}return Object(O.jsx)("div",{children:e.map((function(n,c){return Object(O.jsxs)("div",{className:"input",children:[Object(O.jsx)("input",{type:"checkbox",id:c,name:c,disabled:"EDIT"===t.mode,checked:n.completed,onChange:(a=c,function(e){var n=e.target.checked;j((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(d.a)({},e.target.name,e.target.checked))})),t.setData(n,a)})}),"EDIT"===t.mode||"ADD"===t.mode&&c===e.length-1?Object(O.jsx)("input",{id:c,name:c,value:n.todo,onChange:b(c)}):Object(O.jsx)("input",{id:c,name:c,value:n.todo,readOnly:!0})]},c);var a}))})};n(13);var p=function(){var t=Object(c.useState)([{id:1,todo:"Call mom",completed:!1},{id:2,todo:"Eat lunch",completed:!1}]),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(u),i=Object(l.a)(o,2),d=i[0],s=i[1],p=Object(c.useState)(m),f=Object(l.a)(p,2),v=f[0],x=f[1],g=Object(c.useState)(!1),C=Object(l.a)(g,2),D=C[0],k=C[1],N=Object(c.useState)(3),S=Object(l.a)(N,2),E=S[0],T=S[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"buttons",children:v===j||v===b?Object(O.jsx)("button",{className:"button doneButton",onClick:function(){var t=n;n.length>1&&""===n[n.length-1].todo&&t.pop(),a(t),x(m)},children:"Done"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"button editButton",onClick:function(){n.map((function(t,e){t.completed&&k(!0)})),x(b)},children:"Edit"}),Object(O.jsx)("button",{className:"button plusButton",onClick:function(){var t=n;t.push({id:E,todo:"",completed:!1}),T(E+1),a(t),x(j)},children:"+"})]})}),Object(O.jsx)("div",{className:"body-container",children:Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h1",{className:"underline",children:"To-do list"})})}),Object(O.jsx)(h,{data:n,filterType:d,setData:function(t,e){var c=n;c[e].completed=t,a(c)},editData:function(t,e){var c=n;c[e].todo=t,a(c)},mode:v}),Object(O.jsx)("div",{className:"footer",children:v===b&&Object(O.jsxs)(O.Fragment,{children:[d===r&&D?Object(O.jsx)("button",{className:"button showCompleted",onClick:function(){return s(u)},children:"Show All"}):Object(O.jsx)("button",{className:"button showCompleted",onClick:function(){return s(r)},children:"Hide Completed"}),Object(O.jsx)("button",{className:"button deleteCompleted",onClick:function(){var t=n.filter((function(t){return!t.completed}));t.map((function(t,e){t.completed=!1})),a(t),console.log(t)},children:"Delete Completed"})]})})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.3aa1b6e8.chunk.js.map