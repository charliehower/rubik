webpackJsonp([25],{242:function(t,n,r){var a=r(0)(r(315),r(316),null,null);t.exports=a.exports},315:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"paginations",data:function(){return{current:1,current1:1,current2:2,current3:3,current4:4}},methods:{cb1:function(t){this.current1=t},cb2:function(t){this.current2=t},cb3:function(t){this.current3=t},cb4:function(t){this.current4=t}}}},316:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("article",[r("h1",[t._v("分页 Pagination")]),t._v(" "),r("h2",[t._v("例子")]),t._v(" "),r("r-pagination",{attrs:{total:5,cur:t.current1,cb:t.cb1}}),t._v(" "),r("r-pagination",{attrs:{total:100,cur:t.current2,cb:t.cb2}}),t._v(" "),r("h3",[t._v("圆形 round")]),t._v(" "),r("r-pagination",{attrs:{total:5,cur:t.current3,cb:t.cb3,round:""}}),t._v(" "),r("r-pagination",{attrs:{total:100,cur:t.current4,cb:t.cb4,round:""}}),t._v(" "),r("h2",[t._v("API")]),t._v(" "),t._m(0),t._v(" "),r("Markup",{attrs:{lang:"html"}},[t._v('\n    <r-pagination :total="5" :cur="pageData"></r-pagination>\n    <r-pagination :total="100" :cur="pageData"></r-pagination>\n\n    <r-pagination :total="5" :cur="pageData2" round></r-pagination>\n    <r-pagination :total="100" :cur="pageData2" round></r-pagination>\n  ')])],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("table",{staticClass:"bordered responsive-table"},[r("thead",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("total")]),t._v(" "),r("td",[t._v("总页数")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("0")])]),t._v(" "),r("tr",[r("td",[t._v("cur")]),t._v(" "),r("td",[t._v("当前页")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("cb")]),t._v(" "),r("td",[t._v("点击页码后的回调函数, 回调函数参数为页码数")]),t._v(" "),r("td",[t._v("Function")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("round")]),t._v(" "),r("td",[t._v("是否展示为圆形")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("false")])])])])}]}}});