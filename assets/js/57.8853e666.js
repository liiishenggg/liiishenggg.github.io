(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{318:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义id生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义id生成器","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义ID生成器")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("自3.3.0开始,默认使用雪花算法。")])]),t._v(" "),a("h2",{attrs:{id:"spring-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring-Boot")]),t._v(" "),a("h3",{attrs:{id:"方式一：声明为bean供spring扫描注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一：声明为bean供spring扫描注入","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式一：声明为Bean供Spring扫描注入")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomIdGenerator")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("IdentifierGenerator")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("nextId")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object entity"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//实现自定义ID生成...")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"方式二：使用配置类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二：使用配置类","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式二：使用配置类")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" IdentifierGenerator "),a("span",{attrs:{class:"token function"}},[t._v("idGenerator")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomIdGenerator")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"方式三：通过mybatispluspropertiescustomizer自定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三：通过mybatispluspropertiescustomizer自定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式三：通过MybatisPlusPropertiesCustomizer自定义")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" MybatisPlusPropertiesCustomizer "),a("span",{attrs:{class:"token function"}},[t._v("plusPropertiesCustomizer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" plusProperties "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" plusProperties"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getGlobalConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setIdentifierGenerator")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomIdGenerator")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);e.options.__file="id-generator.md";s.default=e.exports}}]);