"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57118],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,f=m["".concat(c,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87908:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null,hide_title:!0},c="Interface: ForeignKey",p={unversionedId:"api/interfaces/knex.foreignkey",id:"version-4.5/api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"knex.ForeignKey",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.foreignkey.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/api/interfaces/knex.foreignkey",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Daniel",lastUpdatedAt:1638214027,formattedLastUpdatedAt:"11/29/2021",frontMatter:{id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Column",permalink:"/docs/api/interfaces/knex.column"},next:{title:"ICriteriaNode",permalink:"/docs/api/interfaces/knex.icriterianode"}},s=[{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[],level:3},{value:"constraintName",id:"constraintname",children:[],level:3},{value:"deleteRule",id:"deleterule",children:[],level:3},{value:"referencedColumnName",id:"referencedcolumnname",children:[],level:3},{value:"referencedTableName",id:"referencedtablename",children:[],level:3},{value:"updateRule",id:"updaterule",children:[],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-foreignkey"},"Interface: ForeignKey"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".ForeignKey"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"columnname"},"columnName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"columnName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"constraintname"},"constraintName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"constraintName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deleterule"},"deleteRule"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"deleteRule"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencedcolumnname"},"referencedColumnName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"referencedColumnName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L48"},"packages/knex/src/typings.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencedtablename"},"referencedTableName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"referencedTableName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updaterule"},"updateRule"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"updateRule"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L49"},"packages/knex/src/typings.ts:49")))}m.isMDXComponent=!0}}]);