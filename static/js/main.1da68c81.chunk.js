(this["webpackJsonpcss-grid-validator"]=this["webpackJsonpcss-grid-validator"]||[]).push([[0],{17:function(e,r,t){},18:function(e,r,t){"use strict";t.r(r);var n=t(0),i=t(1),a=t.n(i),c=t(7),s=t.n(c),o=t(2),l=(t(17),function(e){var r=e.propertyValue,t=e.namedAreas,a={gridTemplateAreas:r},c=Object(i.useState)(0),s=Object(o.a)(c,2),l=s[0],u=s[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"View preview of named areas"}),Object(n.jsxs)("div",{children:["Rendered using CSS grid.",Object(n.jsx)("button",{onClick:function(){return u(l+1)},children:"Add grid child"}),l>0?Object(n.jsx)("button",{onClick:function(){return u(l-1)},children:"Remove grid child"}):""]}),Object(n.jsxs)("div",{className:"grid-preview",style:a,children:[Array.from(t).map((function(e){return Object(n.jsx)("div",{style:{gridArea:"".concat(e)},children:e},e)})),Array.from(Array(l).keys()).map((function(e){return Object(n.jsx)("div",{children:"."},e)}))]})]})}),u=t(4),d=t.n(u),h=function(e){var r=e.rows,t=e.isRectangular,i=e.columnsPerRow,a=e.nonContigousAreas;return Object(n.jsxs)("ul",{className:"grid-properties",children:[Object(n.jsxs)("li",{className:0===r?"invalid":"",children:["has ",r," rows"]}),Object(n.jsxs)("li",{className:t?"":"invalid",children:["is ",!t&&"not"," rectangular"]}),Object(n.jsxs)("li",{className:t?"":"invalid",children:["has ",t?i[0]:i.join(", ")," ","columns per row"]}),Object(n.jsx)("li",{className:d()(a)?"":"invalid",children:d()(a)?"All areas are contiguous and rectangular":Object(n.jsxs)(n.Fragment,{children:["The following areas are not contiguous or rectangular:",Array.from(a).map((function(e){return Object(n.jsx)("code",{children:e},e)}))]})})]})},j=function(e){var r=e.gridTemplate;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"View tabular rendering of grid"}),Object(n.jsx)("table",{className:"grid-table",children:Object(n.jsx)("tbody",{children:r.map((function(e,r){return Object(n.jsx)("tr",{children:e.map((function(e,r){return Object(n.jsx)("td",{children:e},r)}))},r)}))})})]})},m=t(8),b=t(9),f=t(10),g=t.n(f),O=t(11),p=t.n(O),v=function(){function e(r){Object(m.a)(this,e),this.gridTemplate=void 0;var t=Array.from(r.matchAll(/["']([^"']*)["']/g)).map((function(e){return e[1]}));this.gridTemplate=t.map((function(e){return p()(e.trim().split(" "))}))}return Object(b.a)(e,[{key:"rows",value:function(){return this.gridTemplate.length}},{key:"columnsPerRow",value:function(){return this.gridTemplate.map((function(e){return e.length}))}},{key:"isRectangular",value:function(){return this.columnsPerRow().every((function(e,r,t){return e===t[0]}))}},{key:"columns",value:function(){if(!this.isRectangular())throw new Error("rows have different number of columns");return this.columnsPerRow()[0]}},{key:"namedAreas",value:function(){var e=new Set(this.gridTemplate.flat());return e.delete("."),e}},{key:"toPropertyValue",value:function(){return this.gridTemplate.map((function(e){return'"'.concat(e.join(" "),'"')})).join(" ")}},{key:"isContiguous",value:function(e){for(var r=this.gridTemplate.map((function(r){for(var t=[],n=r.indexOf(e);-1!==n;)t.push(n),n=r.indexOf(e,n+1);return t})),t=0;t<r.length;t++)for(var n=t+1;n<r.length;n++)if(0!==r[t].length&&0!==r[n].length&&!g()(r[t],r[n]))return!1;return!0}},{key:"findNotContiguous",value:function(){var e=this;return new Set(Array.from(this.namedAreas()).filter((function(r){return!e.isContiguous(r)})))}}]),e}(),x={Correct:'"a a ."\n"a a ."\n". b c";',"Not Rectangular":"'header header header header header header'\n'menu main main main right right'\n'menu footer footer footer footer';","Not Contiguous":'"header header header header"\n"main main . sidebar"\n"footer footer footer header";'},w=function(){var e=Object(i.useState)(x.Correct),r=Object(o.a)(e,2),t=r[0],a=r[1],c=new v(t);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"CSS Grid Template Validator & Preview"}),Object(n.jsxs)("div",{children:["Paste your ",Object(n.jsx)("code",{children:"grid-template-areas"})," property value and see a preview and diagnosis what is wrong."]})]}),Object(n.jsxs)("main",{children:[Object(n.jsx)("textarea",{onChange:function(e){var r=e.target.value;a(r)},value:t}),Object(n.jsxs)("div",{children:["Examples:",Object.entries(x).map((function(e){var r=Object(o.a)(e,2),t=r[0],i=r[1];return Object(n.jsx)("button",{onClick:function(){return a(i)},children:t},"name")}))]}),Object(n.jsx)(h,{rows:c.rows(),columnsPerRow:c.columnsPerRow(),isRectangular:c.isRectangular(),nonContigousAreas:c.findNotContiguous()}),Object(n.jsx)(l,{namedAreas:c.namedAreas(),propertyValue:c.toPropertyValue()}),Object(n.jsx)(j,{gridTemplate:c.gridTemplate})]}),Object(n.jsx)("footer",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("a",{href:"https://github.com/evrom/grid-validator",children:Object(n.jsx)("li",{children:"Github"})}),Object(n.jsx)("a",{href:"https://evrom.github.io/",children:Object(n.jsx)("li",{children:"About me"})})]})})]})};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1da68c81.chunk.js.map