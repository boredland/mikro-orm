"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72246],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99941:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},p=void 0,l={unversionedId:"usage-with-js",id:"version-4.4/usage-with-js",isDocsHomePage:!1,title:"Usage with JavaScript",description:"Since MikroORM 3.2, we can use EntitySchema helper to define own entities without",source:"@site/versioned_docs/version-4.4/usage-with-js.md",sourceDirName:".",slug:"/usage-with-js",permalink:"/docs/4.4/usage-with-js",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/usage-with-js.md",tags:[],version:"4.4",lastUpdatedBy:"Daniel",lastUpdatedAt:1638214027,formattedLastUpdatedAt:"11/29/2021",frontMatter:{title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},sidebar:"version-4.4/docs",previous:{title:"Usage with NestJS",permalink:"/docs/4.4/usage-with-nestjs"},next:{title:"Usage with Babel",permalink:"/docs/4.4/usage-with-babel"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since MikroORM 3.2, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"EntitySchema")," helper to define own entities without\ndecorators, which works also for Vanilla JavaScript."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Read more about ",(0,a.kt)("inlineCode",{parentName:"p"},"EntitySchema")," in ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.4/entity-schema"},"this section"),".")),(0,a.kt)("p",null,"Here is an example of such entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./entities/Author.js"',title:'"./entities/Author.js"'},"const { Collection, EntitySchema } = require('@mikro-orm/core');\nconst { Book } = require('./Book');\nconst { BaseEntity } = require('./BaseEntity');\n\n/**\n * @property {number} id\n * @property {Date} createdAt\n * @property {Date} updatedAt\n * @property {string} name\n * @property {string} email\n * @property {number} age\n * @property {boolean} termsAccepted\n * @property {string[]} identities\n * @property {Date} born\n * @property {Collection<Book>} books\n * @property {Book} favouriteBook\n * @property {number} version\n * @property {string} versionAsString\n */\nclass Author extends BaseEntity {\n\n  /**\n   * @param {string} name\n   * @param {string} email\n   */\n  constructor(name, email) {\n    super();\n    this.name = name;\n    this.email = email;\n    this.books = new Collection(this);\n    this.createdAt = new Date();\n    this.updatedAt = new Date();\n    this.termsAccepted = false;\n  }\n\n}\n\nexport const schema = new EntitySchema({\n  class: Author,\n  properties: {\n    name: { type: 'string' },\n    email: { type: 'string', unique: true },\n    age: { type: 'number', nullable: true },\n    termsAccepted: { type: 'boolean', default: 0, onCreate: () => false },\n    identities: { type: 'string[]', nullable: true },\n    born: { type: DateType, nullable: true, length: 3 },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    favouriteBook: { reference: 'm:1', type: 'Book' },\n    version: { type: 'number', persist: false },\n  },\n});\n\nmodule.exports.Author = Author;\nmodule.exports.entity = Author;\nmodule.exports.schema = schema;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Do not forget to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," schema parameters as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," exports.")),(0,a.kt)("p",null,"Reference parameter can be one of (where ",(0,a.kt)("inlineCode",{parentName:"p"},"SCALAR")," is the default one):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum ReferenceType {\n  SCALAR = 'scalar',\n  ONE_TO_ONE = '1:1',\n  MANY_TO_ONE = 'm:1',\n  ONE_TO_MANY = '1:m',\n  MANY_TO_MANY = 'm:n',\n  EMBEDDED = 'embedded',\n}\n")),(0,a.kt)("p",null,"You can register your entities as usual."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag, BaseEntity],\n  dbName: 'my-db-name',\n  type: 'mysql',\n});\n")),(0,a.kt)("p",null,"For more examples of plain JavaScript entity definitions take a look\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/express-js-example-app"},"Express JavaScript example"),"."))}m.isMDXComponent=!0}}]);