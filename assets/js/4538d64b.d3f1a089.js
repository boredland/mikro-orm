"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95938],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=d(n),m=a,c=y["".concat(s,".").concat(m)]||y[m]||u[m]||r;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},13775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return y}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Working with Entity Manager",sidebar_label:"Entity Manager"},s=void 0,d={unversionedId:"entity-manager",id:"version-3.6/entity-manager",title:"Working with Entity Manager",description:"Persist and Flush",source:"@site/versioned_docs/version-3.6/entity-manager.md",sourceDirName:".",slug:"/entity-manager",permalink:"/docs/3.6/entity-manager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/entity-manager.md",tags:[],version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1639115449,formattedLastUpdatedAt:"12/10/2021",frontMatter:{title:"Working with Entity Manager",sidebar_label:"Entity Manager"},sidebar:"version-3.6/docs",previous:{title:"Modeling Entity Relationships",permalink:"/docs/3.6/relationships"},next:{title:"Entity Repository",permalink:"/docs/3.6/repositories"}},p=[{value:"Persist and Flush",id:"persist-and-flush",children:[],level:2},{value:"Persisting and Cascading",id:"persisting-and-cascading",children:[{value:"Auto-flushing",id:"auto-flushing",children:[],level:3}],level:2},{value:"Fetching Entities with EntityManager",id:"fetching-entities-with-entitymanager",children:[{value:"Conditions Object (<code>FilterQuery&lt;T&gt;</code>)",id:"conditions-object-filterqueryt",children:[{value:"Mitigating <code>Type instantiation is excessively deep and possibly infinite.ts(2589)</code> error",id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error",children:[],level:4}],level:3},{value:"Searching by referenced entity fields",id:"searching-by-referenced-entity-fields",children:[],level:3},{value:"Fetching Partial Entities",id:"fetching-partial-entities",children:[],level:3},{value:"Fetching Paginated Results",id:"fetching-paginated-results",children:[],level:3},{value:"Handling Not Found Entities",id:"handling-not-found-entities",children:[],level:3}],level:2},{value:"Type of Fetched Entities",id:"type-of-fetched-entities",children:[],level:2},{value:"Entity Repositories",id:"entity-repositories",children:[],level:2},{value:"EntityManager API",id:"entitymanager-api",children:[{value:"<code>getRepository&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;): EntityRepository&lt;T&gt;</code>",id:"getrepositoryt-extends-anyentityentityname-string--entityclasst-entityrepositoryt",children:[],level:4},{value:"<code>find&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where: FilterQuery&lt;T&gt;, options?: FindOptions): Promise&lt;T[]&gt;</code>",id:"findt-extends-anyentityentityname-string--entityclasst-where-filterqueryt-options-findoptions-promiset",children:[],level:4},{value:"<code>find&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where: FilterQuery&lt;T&gt;, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise&lt;T[]&gt;</code>",id:"findt-extends-anyentityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset",children:[],level:4},{value:"<code>findAndCount&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where: FilterQuery&lt;T&gt;, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise&lt;[T[], number]&gt;</code>",id:"findandcountt-extends-anyentityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset-number",children:[],level:4},{value:"<code>findOne&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where: FilterQuery&lt;T&gt; | IPrimaryKey, populate?: string[]): Promise&lt;T | null&gt;</code>",id:"findonet-extends-anyentityentityname-string--entityclasst-where-filterqueryt--iprimarykey-populate-string-promiset--null",children:[],level:4},{value:"<code>findOneOrFail&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where: FilterQuery&lt;T&gt; | IPrimaryKey, populate?: string[]): Promise&lt;T&gt;</code>",id:"findoneorfailt-extends-anyentityentityname-string--entityclasst-where-filterqueryt--iprimarykey-populate-string-promiset",children:[],level:4},{value:"<code>merge&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, data: EntityData&lt;T&gt;): T</code>",id:"merget-extends-anyentityentityname-string--entityclasst-data-entitydatat-t",children:[],level:4},{value:"<code>map&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, data: EntityData&lt;T&gt;): T</code>",id:"mapt-extends-anyentityentityname-string--entityclasst-data-entitydatat-t",children:[],level:4},{value:"<code>getReference&lt;T extends AnyEntity&gt;(entityName: string | EntityClass&lt;T&gt;, id: string): T</code>",id:"getreferencet-extends-anyentityentityname-string--entityclasst-id-string-t",children:[],level:4},{value:"<code>count(entityName: string | EntityClass&lt;T&gt;, where?: FilterQuery&lt;T&gt;): Promise&lt;number&gt;</code>",id:"countentityname-string--entityclasst-where-filterqueryt-promisenumber",children:[],level:4},{value:"<code>persist(entity: AnyEntity | AnyEntity[], flush?: boolean): void | Promise&lt;void&gt;</code>",id:"persistentity-anyentity--anyentity-flush-boolean-void--promisevoid",children:[],level:4},{value:"<code>persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise&lt;void&gt;</code>",id:"persistandflushentity-anyentity--anyentity-promisevoid",children:[],level:4},{value:"<code>persistLater(entity: AnyEntity | AnyEntity[]): void</code>",id:"persistlaterentity-anyentity--anyentity-void",children:[],level:4},{value:"<code>flush(): Promise&lt;void&gt;</code>",id:"flush-promisevoid",children:[],level:4},{value:"<code>remove(entityName: string | EntityClass&lt;T&gt;, where: AnyEntity | FilterQuery&lt;T&gt; | IPrimaryKey, flush?: boolean): Promise&lt;number&gt;</code>",id:"removeentityname-string--entityclasst-where-anyentity--filterqueryt--iprimarykey-flush-boolean-promisenumber",children:[],level:4},{value:"<code>removeEntity(entity: AnyEntity, flush?: boolean): Promise&lt;number&gt;</code>",id:"removeentityentity-anyentity-flush-boolean-promisenumber",children:[],level:4},{value:"<code>removeAndFlush(entity: AnyEntity): Promise&lt;void&gt;</code>",id:"removeandflushentity-anyentity-promisevoid",children:[],level:4},{value:"<code>removeLater(entity: AnyEntity): void</code>",id:"removelaterentity-anyentity-void",children:[],level:4},{value:"<code>clear(): void</code>",id:"clear-void",children:[],level:4},{value:"<code>canPopulate(entityName: string | EntityClass&lt;T&gt;, property: string): boolean</code>",id:"canpopulateentityname-string--entityclasst-property-string-boolean",children:[],level:4}],level:2}],u={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"persist-and-flush"},"Persist and Flush"),(0,r.kt)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM:\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"em.persist(entity, flush?: boolean)")," is used to mark new entities for future persisting.\nIt will make the entity managed by given ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," and once ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," will be called, it\nwill be written to the database. Second boolean parameter can be used to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),"\nimmediately. Its default value is configurable via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," option."),(0,r.kt)("p",null,"To understand ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if\nit\u2019s fetched from the database (via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity)\nor registered as new through ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and\nperform according database queries. As an entity loaded from database becomes managed\nautomatically, you do not have to call persist on those, and flush is enough to update\nthem."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nbook.title = 'How to persist things...';\n\n// no need to persist `book` as its already managed by the EM\nawait orm.em.flush();\n")),(0,r.kt)("h2",{id:"persisting-and-cascading"},"Persisting and Cascading"),(0,r.kt)("p",null,"To save entity state to database, you need to persist it. Persist determines\nwhether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\norm.em.persistLater(book1);\norm.em.persistLater(book2);\norm.em.persistLater(book3); \nawait orm.em.flush(); // flush everything to database at once\n")),(0,r.kt)("h3",{id:"auto-flushing"},"Auto-flushing"),(0,r.kt)("p",null,"Since MikroORM v3, default value for ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". That means you need to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," yourself to persist changes into database. You can still change this via ORM's\noptions to ease the transition but generally it is not recommended as it can cause unwanted\nsmall transactions being created around each ",(0,r.kt)("inlineCode",{parentName:"p"},"persist"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"orm.em.persist(new Entity()); // no auto-flushing by default\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),(0,r.kt)("h2",{id:"fetching-entities-with-entitymanager"},"Fetching Entities with EntityManager"),(0,r.kt)("p",null,"To fetch entities from database you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"find()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne()")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),": "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, '...id...');\nconst books = await orm.em.find(Book, {});\n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),(0,r.kt)("p",null,"To populate entity relations, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"populate")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const books = await orm.em.find(Book, { foo: 1 }, ['author.friends']);\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.populate()")," helper to populate relations (or to ensure they\nare fully populated) on already loaded entities. This is also handy when loading\nentities via ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authors = await orm.em.createQueryBuilder(Author).select('*').getResult();\nawait em.populate(authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")),(0,r.kt)("h3",{id:"conditions-object-filterqueryt"},"Conditions Object (",(0,r.kt)("inlineCode",{parentName:"h3"},"FilterQuery<T>"),")"),(0,r.kt)("p",null,"Querying entities via conditions object (",(0,r.kt)("inlineCode",{parentName:"p"},"where")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find(Entity, where: FilterQuery<T>)"),")\nsupports many different ways:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// search by entity properties\nconst users = await orm.em.find(User, { firstName: 'John' });\n\n// for searching by reference you can use primary key directly\nconst id = 1;\nconst users = await orm.em.find(User, { organization: id });\n\n// or pass unpopulated reference (including `Reference` wrapper)\nconst ref = await orm.em.getReference(Organization, id);\nconst users = await orm.em.find(User, { organization: ref });\n\n// fully populated entities as also supported\nconst ent = await orm.em.findOne(Organization, id);\nconst users = await orm.em.find(User, { organization: ent });\n\n// complex queries with operators\nconst users = await orm.em.find(User, { $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\n// you can also search for array of primary keys directly\nconst users = await orm.em.find(User, [1, 2, 3, 4, 5]);\n\n// and in findOne all of this works, plus you can search by single primary key\nconst user1 = await orm.em.findOne(User, 1);\n")),(0,r.kt)("p",null,"As you can see in the fifth example, one can also use operators like ",(0,r.kt)("inlineCode",{parentName:"p"},"$and"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$or"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$gte"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"$gt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$lte"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$lt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$in"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$nin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$eq"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$ne"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$like"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$re"),". More about that can be found in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/query-conditions"},"Query Conditions")," section. "),(0,r.kt)("h4",{id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error"},"Mitigating ",(0,r.kt)("inlineCode",{parentName:"h4"},"Type instantiation is excessively deep and possibly infinite.ts(2589)")," error"),(0,r.kt)("p",null,"Sometimes you might be facing TypeScript errors caused by too complex query for it to\nproperly infer all types. Usually it can be solved by providing the type argument\nexplicitly."),(0,r.kt)("p",null,"You can also opt in to use repository instead, as there the type inference should not be\nproblematic. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As a last resort, you can always type cast the query to ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const books = await orm.em.find<Book>(Book, { ... your complex query ... });\n// or\nconst books = await orm.em.getRepository(Book).find({ ... your complex query ... });\n// or\nconst books = await orm.em.find<any>(Book, { ... your complex query ... }) as Book[];\n")),(0,r.kt)("p",null,"Another problem you might be facing is ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError: Maximum call stack size exceeded")," error\nthrown during TypeScript compilation (usually from file ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/typescript/lib/typescript.js"),").\nThe solution to this is the same, just provide the type argument explicitly."),(0,r.kt)("h3",{id:"searching-by-referenced-entity-fields"},"Searching by referenced entity fields"),(0,r.kt)("p",null,"You can also search by referenced entity properties. Simply pass nested where condition like\nthis and all requested relationships will be automatically joined. Currently it will only join\nthem so you can search and sort by those. To populate entities, do not forget to pass the populate\nparameter as well. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// find author of a book that has tag specified by name\nconst author = await orm.em.findOne(Author, { books: { tags: { name: 'Tag name' } } });\nconsole.log(author.books.isInitialized()); // false, as it only works for query and sort\n\nconst author = await orm.em.findOne(Author, { books: { tags: { name: 'Tag name' } } }, ['books.tags']);\nconsole.log(author.books.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags[0].isInitialized()); // true, because it was populated\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is fully available only for SQL drivers. In MongoDB always you need to\nquery from the owning side - so in the example above, first load book tag by name,\nthen associated book, then the author. Another option is to denormalize the schema.  ")),(0,r.kt)("h3",{id:"fetching-partial-entities"},"Fetching Partial Entities"),(0,r.kt)("p",null,"When fetching single entity, you can choose to select only parts of an entity via ",(0,r.kt)("inlineCode",{parentName:"p"},"options.fields"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, '...', { fields: ['name', 'born'] });\nconsole.log(author.id); // PK is always selected\nconsole.log(author.name); // Jon Snow\nconsole.log(author.email); // undefined\n")),(0,r.kt)("h3",{id:"fetching-paginated-results"},"Fetching Paginated Results"),(0,r.kt)("p",null,"If you are going to paginate your results, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findAndCount()")," that will return\ntotal count of entities before applying limit and offset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const [authors, count] = await orm.em.findAndCount(Author, { ... }, { limit: 10, offset: 50 });\nconsole.log(authors.length); // based on limit parameter, e.g. 10\nconsole.log(count); // total count, e.g. 1327\n")),(0,r.kt)("h3",{id:"handling-not-found-entities"},"Handling Not Found Entities"),(0,r.kt)("p",null,"When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOne()")," and no entity is found based on your criteria, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will be\nreturned. If you rather have an ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," instance thrown, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOneOrFail()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, { name: 'does-not-exist' });\nconsole.log(author === null); // true\n\ntry {\n  const author = await orm.em.findOneOrFail(Author, { name: 'does-not-exist' });\n  // author will be always found here\n} catch (e) {\n  console.error('Not found', e);\n}\n")),(0,r.kt)("p",null,"You can customize the error either globally via ",(0,r.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",(0,r.kt)("inlineCode",{parentName:"p"},"failHandler")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  const author = await orm.em.findOneOrFail(Author, { name: 'does-not-exist' }, {\n    failHandler: (entityName: string, where: Record<string, any> | IPrimaryKey) => new Error(`Failed: ${entityName} in ${util.inspect(where)}`)\n  });\n} catch (e) {\n  console.error(e); // your custom error\n}\n")),(0,r.kt)("h2",{id:"type-of-fetched-entities"},"Type of Fetched Entities"),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOne()")," methods have generic return types.\nAll of following examples are equal and will let typescript correctly infer the entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author1 = await orm.em.findOne<Author>(Author.name, '...id...');\nconst author2 = await orm.em.findOne<Author>('Author', '...id...');\nconst author3 = await orm.em.findOne(Author, '...id...');\n")),(0,r.kt)("p",null,"As the last one is the least verbose, it should be preferred. "),(0,r.kt)("h2",{id:"entity-repositories"},"Entity Repositories"),(0,r.kt)("p",null,"Although you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," directly, much more convenient way is to use\n",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/repositories/"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),". You can register\nyour repositories in dependency injection container like ",(0,r.kt)("a",{parentName:"p",href:"http://inversify.io/"},"InversifyJS"),"\nso you do not need to get them from ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," each time."),(0,r.kt)("p",null,"For more examples, take a look at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),(0,r.kt)("h2",{id:"entitymanager-api"},"EntityManager API"),(0,r.kt)("h4",{id:"getrepositoryt-extends-anyentityentityname-string--entityclasst-entityrepositoryt"},(0,r.kt)("inlineCode",{parentName:"h4"},"getRepository<T extends AnyEntity>(entityName: string | EntityClass<T>): EntityRepository<T>")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," for given entity, respects ",(0,r.kt)("inlineCode",{parentName:"p"},"customRepository")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"@Entity"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"entityRepository")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init()"),"."),(0,r.kt)("h4",{id:"findt-extends-anyentityentityname-string--entityclasst-where-filterqueryt-options-findoptions-promiset"},(0,r.kt)("inlineCode",{parentName:"h4"},"find<T extends AnyEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),(0,r.kt)("p",null,"Returns array of entities found for given condition. You can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n  schema?: string;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"findt-extends-anyentityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,r.kt)("inlineCode",{parentName:"h4"},"find<T extends AnyEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,r.kt)("p",null,"Same as previous ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"findandcountt-extends-anyentityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset-number"},(0,r.kt)("inlineCode",{parentName:"h4"},"findAndCount<T extends AnyEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<[T[], number]>")),(0,r.kt)("p",null,"Combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," methods. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"findonet-extends-anyentityentityname-string--entityclasst-where-filterqueryt--iprimarykey-populate-string-promiset--null"},(0,r.kt)("inlineCode",{parentName:"h4"},"findOne<T extends AnyEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T> | IPrimaryKey, populate?: string[]): Promise<T | null>")),(0,r.kt)("p",null,"Finds an entity by given ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"findoneorfailt-extends-anyentityentityname-string--entityclasst-where-filterqueryt--iprimarykey-populate-string-promiset"},(0,r.kt)("inlineCode",{parentName:"h4"},"findOneOrFail<T extends AnyEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T> | IPrimaryKey, populate?: string[]): Promise<T>")),(0,r.kt)("p",null,"Just like ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne"),", but throws when entity not found, so it always resolves to given entity.\nYou can customize the error either globally via ",(0,r.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",(0,r.kt)("inlineCode",{parentName:"p"},"failHandler")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"merget-extends-anyentityentityname-string--entityclasst-data-entitydatat-t"},(0,r.kt)("inlineCode",{parentName:"h4"},"merge<T extends AnyEntity>(entityName: string | EntityClass<T>, data: EntityData<T>): T")),(0,r.kt)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"mapt-extends-anyentityentityname-string--entityclasst-data-entitydatat-t"},(0,r.kt)("inlineCode",{parentName:"h4"},"map<T extends AnyEntity>(entityName: string | EntityClass<T>, data: EntityData<T>): T")),(0,r.kt)("p",null,"Maps raw DB result to entity, adding it to current Identity Map. Equivalent to\n",(0,r.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"em.merge()"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"getreferencet-extends-anyentityentityname-string--entityclasst-id-string-t"},(0,r.kt)("inlineCode",{parentName:"h4"},"getReference<T extends AnyEntity>(entityName: string | EntityClass<T>, id: string): T")),(0,r.kt)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"countentityname-string--entityclasst-where-filterqueryt-promisenumber"},(0,r.kt)("inlineCode",{parentName:"h4"},"count(entityName: string | EntityClass<T>, where?: FilterQuery<T>): Promise<number>")),(0,r.kt)("p",null,"Gets count of entities matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"persistentity-anyentity--anyentity-flush-boolean-void--promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | AnyEntity[], flush?: boolean): void | Promise<void>")),(0,r.kt)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," parameter and via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"persistandflushentity-anyentity--anyentity-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void>")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},(0,r.kt)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),(0,r.kt)("p",null,"Shortcut for just ",(0,r.kt)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"flush-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),(0,r.kt)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removeentityname-string--entityclasst-where-anyentity--filterqueryt--iprimarykey-flush-boolean-promisenumber"},(0,r.kt)("inlineCode",{parentName:"h4"},"remove(entityName: string | EntityClass<T>, where: AnyEntity | FilterQuery<T> | IPrimaryKey, flush?: boolean): Promise<number>")),(0,r.kt)("p",null,"When provided entity instance as ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," value, then it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,r.kt)("p",null,"This method fires ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removeentityentity-anyentity-flush-boolean-promisenumber"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeEntity(entity: AnyEntity, flush?: boolean): Promise<number>")),(0,r.kt)("p",null,"Removes an entity instance. A removed entity will be removed from the database at or before\ntransaction commit or as a result of the flush operation. You can control immediate flushing\nvia ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," parameter and via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," configuration option."),(0,r.kt)("p",null,"This method fires ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removeandflushentity-anyentity-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity): Promise<void>")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEntity")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removelaterentity-anyentity-void"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"clear-void"},(0,r.kt)("inlineCode",{parentName:"h4"},"clear(): void")),(0,r.kt)("p",null,"Clears the EntityManager. All entities that are currently managed by this EntityManager\nbecome detached."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"canpopulateentityname-string--entityclasst-property-string-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"canPopulate(entityName: string | EntityClass<T>, property: string): boolean")),(0,r.kt)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),(0,r.kt)("hr",null))}y.isMDXComponent=!0}}]);