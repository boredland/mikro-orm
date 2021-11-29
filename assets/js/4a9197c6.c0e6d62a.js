"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45295],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},22379:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),i=["components"],l={title:"Propagation"},s=void 0,c={unversionedId:"propagation",id:"propagation",isDocsHomePage:!1,title:"Propagation",description:"By default MikroORM will propagate all changes made to one side of bi-directional relations",source:"@site/docs/propagation.md",sourceDirName:".",slug:"/propagation",permalink:"/docs/next/propagation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/propagation.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1638214027,formattedLastUpdatedAt:"11/29/2021",frontMatter:{title:"Propagation"},sidebar:"docs",previous:{title:"Smart Query Conditions",permalink:"/docs/next/query-conditions"},next:{title:"Loading Strategies",permalink:"/docs/next/loading-strategies"}},p=[{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[],level:2}],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default MikroORM will propagate all changes made to one side of bi-directional relations\nto the other side, keeping them in sync. This works for all relations, including M:1 and 1:1.\nAs part of the discovery process, all M:1 and 1:1 properties are re-defined as getter/setter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...);\nconst book = new Book(...);\nbook.author = author;\nconsole.log(author.books.contains(book)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can disable this behaviour via ",(0,a.kt)("inlineCode",{parentName:"p"},"propagateToOneOwner")," option.")),(0,a.kt)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),(0,a.kt)("p",null,"When you use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),(0,a.kt)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),(0,a.kt)("p",null,"Same applies for ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.remove()"),"."))}d.isMDXComponent=!0}}]);