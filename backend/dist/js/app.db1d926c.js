(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0072":function(e,t,r){"use strict";r("a23c")},"01b2":function(e,t,r){"use strict";r("8dc2")},"034f":function(e,t,r){"use strict";r("85ec")},"0c31":function(e,t,r){"use strict";r("15da")},"0e07":function(e,t,r){"use strict";r("86b7")},1114:function(e,t,r){"use strict";r("1690")},"15da":function(e,t,r){},1690:function(e,t,r){},"16df":function(e,t,r){},"24ef":function(e,t,r){},2523:function(e,t,r){"use strict";r("979a")},2706:function(e,t,r){},"28d8":function(e,t,r){"use strict";r("bff0")},3348:function(e,t,r){},"3fa0":function(e,t,r){"use strict";r("8341")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Footer")],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"modals"},[r("SignInModal",{model:{value:e.signInModalOpen,callback:function(t){e.signInModalOpen=t},expression:"signInModalOpen"}}),r("RegisterModal",{model:{value:e.registerModalOpen,callback:function(t){e.registerModalOpen=t},expression:"registerModalOpen"}})],1),r("div",{staticClass:"header-component"},[r("div",{staticClass:"overlay"},[r("h1",{staticClass:"title",on:{click:e.backToHomePage}},[e._v("Superhero Forum")]),r("div",{staticClass:"menu-options"},[r("h3",{on:{click:e.goToProfile}},[e._v(e._s(e.currentUser.username))]),r("div",{staticClass:"sign-in",attrs:{id:"sign-in-options"}},[r("h3",{on:{click:e.showSignInModal}},[e._v("Login /")]),r("h3",{on:{click:e.showRegisterModal}},[e._v("Register")])]),r("div",{attrs:{id:"logout-option"}},[r("h3",{on:{click:e.signOutUser}},[e._v("Logout")])])])])]),r("div",{staticClass:"line"})])},i=[],u=(r("d3b7"),r("96cf"),r("1da1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"modal"},[r("div",{staticClass:"form"},[r("h2",{staticClass:"title"},[e._v("Sign In")]),r("form",[e._m(0),r("input",{attrs:{type:"submit",value:"Login"},on:{click:e.login}}),r("button",{on:{click:function(t){return t.preventDefault(),e.close(t)}}},[e._v("Close")]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.failed,expression:"failed"}],staticClass:"warning"},[e._v("Wrong email or password!")])])])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-fields"},[r("input",{attrs:{required:"",type:"email",id:"email",name:"email",placeholder:"email"}}),r("br"),r("input",{attrs:{required:"",type:"password",id:"password",name:"password",placeholder:"password"}}),r("br")])}],d={name:"SignIn-Modal",props:{value:{required:!0}},data:function(){return{failed:!1}},methods:{close:function(){this.$emit("input",!this.value)},login:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.next=3,fetch("/rest/v1/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.getElementById("email").value,password:document.getElementById("password").value})});case 3:return n=r.sent,r.next=6,n.json();case 6:n=r.sent,n?(console.log("Successfully logged in with:\n",n),t.clearFields(),t.$store.commit("setCurrentUser",n),t.$emit("input",!t.value)):t.failed=!0;case 8:case"end":return r.stop()}}),r)})))()},clearFields:function(){document.getElementById("email").value=""}}},f=d,h=(r("3fa0"),r("2877")),m=Object(h["a"])(f,c,l,!1,null,"3c86264a",null),p=m.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"modal"},[r("div",{staticClass:"form"},[e._m(0),r("div",[r("form",[e._m(1),r("p",{directives:[{name:"show",rawName:"v-show",value:e.failed,expression:"failed"}]},[e._v("Registration failed!")])])]),r("div",{staticClass:"buttons"},[r("input",{attrs:{type:"submit",value:"Register"},on:{click:e.register}}),r("button",{on:{click:function(t){return t.preventDefault(),e.close(t)}}},[e._v("Close")])])])])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("h2",[e._v("Register")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-fields"},[r("input",{attrs:{required:"",type:"email",id:"reg-email",name:"reg-email",placeholder:"email"}}),r("br"),r("input",{attrs:{required:"",type:"text",id:"reg-username",name:"reg-username",placeholder:"username"}}),r("br"),r("input",{attrs:{required:"",type:"password",id:"reg-password",name:"reg-password",minlength:"8",placeholder:"password"}}),r("br")])}],b={name:"Register-Modal",props:{value:{required:!0}},data:function(){return{failed:!1}},methods:{close:function(){this.$emit("input",!this.value)},register:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.next=3,fetch("/rest/v1/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:document.getElementById("reg-email").value,password:document.getElementById("reg-password").value,username:document.getElementById("reg-username").value,userRole:"member",isActive:1})});case 3:return n=r.sent,r.next=6,n.json();case 6:n=r.sent,n?(console.log("Registration success!",n),t.$store.dispatch("fetchCurrentUser"),t.$emit("input",!t.value)):(console.log("Failed registration!"),t.failed=!0);case 8:case"end":return r.stop()}}),r)})))()}}},w=b,_=(r("28d8"),Object(h["a"])(w,v,g,!1,null,"100c88d9",null)),C=_.exports,x={components:{SignInModal:p,RegisterModal:C},data:function(){return{signInModalOpen:!1,registerModalOpen:!1}},computed:{currentUser:function(){return this.$store.getters.currentUser||""}},methods:{backToHomePage:function(){"/"!==this.$route.path&&this.$router.push("/")},hideElements:function(e){var t=document.getElementById("sign-in-options"),r=document.getElementById("logout-option");e?(t.style.display="none",r.style.display="block"):(t.style.display="block",r.style.display="none")},showSignInModal:function(){this.signInModalOpen=!this.signInModalOpen},showRegisterModal:function(){this.registerModalOpen=!this.registerModalOpen},goToProfile:function(){this.$router.push({name:"ProfilePage",params:{user:this.currentUser}})},signOutUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("LOGOUT"),t.next=3,fetch("/rest/v1/logout",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e.currentUser})});case 3:return r=t.sent,t.next=6,r.json();case 6:r=t.sent,r?(console.log("DELETE Worked!\n",r),e.hideElements(!1),e.$store.commit("setCurrentUser",null)):console.log("DELETE failed!");case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.hideElements(!1)},watch:{currentUser:function(){null===this.$store.getters.currentUser?this.hideElements(!1):this.hideElements(!0)}}},O=x,y=(r("9ff3"),Object(h["a"])(O,a,i,!1,null,"6bf4d42e",null)),T=y.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("h4",[e._v("@Batman")])])}],R={data:function(){return{some:1}}},k=R,P=(r("2523"),Object(h["a"])(k,j,E,!1,null,"26a38ea0",null)),$=P.exports,I={name:"app",components:{Header:T,Footer:$},created:function(){this.$store.dispatch("fetchCurrentUser")}},S=I,M=(r("034f"),Object(h["a"])(S,s,o,!1,null,null,null)),U=M.exports,N=r("8c4f"),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-page"},[r("subforum-list")],1)},L=[],A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"subforum-list"},[r("h1",[e._v("Forums")]),r("br"),e._l(e.subforums,(function(e){return r("SubforumListItem",{key:e.id,attrs:{subforum:e}})}))],2)},B=[],q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"subforum-container",on:{click:e.goToSubforum}},[e._m(0),r("div",{staticClass:"title-container"},[r("h3",{staticClass:"subforum-name"},[e._v(e._s(e.subforum.title))]),r("p",[e._v(e._s(e.subforum.description))])])])},J=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon-img"},[r("span",{staticClass:"material-icons",staticStyle:{"font-size":"5em"}},[e._v("chat")])])}],F={props:["subforum"],methods:{goToSubforum:function(){console.log("GO TO SUBFORUM"),this.$router.push({name:"SubforumPage",params:{subforum:this.subforum}})}}},H=F,W=(r("820f"),Object(h["a"])(H,q,J,!1,null,"079066b7",null)),G=W.exports,z={components:{SubforumListItem:G},data:function(){return{subforums:[]}},methods:{fetchSubforums:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/subforums");case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r),e.subforums=r;case 8:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchSubforums()}},Y=z,K=(r("ab51"),Object(h["a"])(Y,A,B,!1,null,"22332798",null)),Q=K.exports,V={components:{SubforumList:Q}},X=V,Z=(r("f31d"),Object(h["a"])(X,D,L,!1,null,"a6bf6d56",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"subforum-page"},[r("div",{staticClass:"top"},[r("h1",{staticClass:"title"},[e._v(e._s(this.$route.params.subforum.title))]),r("div",{staticClass:"create",on:{click:e.createNewThread}},[e._m(0)])]),r("ThreadList",{staticClass:"thread-list",attrs:{subforum:this.$route.params.subforum}})],1)},re=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"material-icons",staticStyle:{"font-size":"2em"}},[e._v("add_circle "),r("span",{staticClass:"tooltiptext"},[e._v("New Thread")])])}],ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"thread-list"},e._l(e.threads,(function(e){return r("ThreadListItem",{key:e.id,attrs:{thread:e}})})),1)},se=[],oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"thread-container",on:{click:e.goToThreadPage}},[r("div",{staticClass:"thread-title"},[r("h1",[e._v(e._s(e.thread.title))])]),r("div",{staticClass:"thread-info"},[r("h4",[e._v("by: "),r("span",{staticClass:"author",on:{click:e.goToProfile}},[e._v(e._s(e.author.username))])]),r("h4",[e._v("published at: "),r("span",{staticClass:"published"},[e._v(e._s(e.publishedDate))])])])])},ae=[],ie={props:["thread"],data:function(){return{author:Object}},computed:{publishedDate:function(){return new Date(this.thread.published_time).toLocaleString()}},methods:{goToThreadPage:function(){this.$router.push({name:"ThreadPage",params:{thread:this.thread}})},goToProfile:function(){this.$router.push({name:"ProfilePage",params:{user:this.author}})},fetchAuthor:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/users/".concat(e.thread.userId));case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r),e.author=r;case 8:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchAuthor()}},ue=ie,ce=(r("d1bb"),Object(h["a"])(ue,oe,ae,!1,null,"5222f9b6",null)),le=ce.exports,de={props:["subforum"],components:{ThreadListItem:le},data:function(){return{threads:[]}},methods:{fetchAllThreads:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("subforum",e.subforum),t.next=3,fetch("/rest/v1/threads/".concat(e.subforum.id));case 3:return r=t.sent,t.next=6,r.json();case 6:r=t.sent,console.log(r),e.threads=r;case 9:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchAllThreads()}},fe=de,he=(r("d5f8"),Object(h["a"])(fe,ne,se,!1,null,"4f231da5",null)),me=he.exports,pe={components:{ThreadList:me},methods:{createNewThread:function(){this.$router.push({name:"threadCreation",params:{subforum:this.$route.params.subforum}})}}},ve=pe,ge=(r("0072"),Object(h["a"])(ve,te,re,!1,null,"9de201d8",null)),be=ge.exports,we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"thread-page"},[r("NewPostModal",{attrs:{threadId:this.thread.id},on:{myEvent:e.fetchPosts},model:{value:e.newpostModalOpen,callback:function(t){e.newpostModalOpen=t},expression:"newpostModalOpen"}}),r("h1",{staticClass:"title"},[e._v(e._s(e.thread.title))]),e.showCloseThread?r("div",{staticClass:"block"},[r("h3",{on:{click:e.closeThread}},[e._v("Close Thread")])]):e._e(),e.isClosed?r("div",{staticClass:"closed"},[r("h3",[e._v("Thread is Closed!")])]):e._e(),r("PostList",{staticClass:"list",attrs:{posts:this.posts,thread:this.thread}}),e.isClosed?e._e():r("div",[r("h2",{staticClass:"new-post",on:{click:e.newPost}},[e._v("+ Add new post")])])],1)},_e=[],Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"post-list"},e._l(e.posts,(function(e){return r("PostListItem",{key:e.id,attrs:{post:e}})})),1)},xe=[],Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"post-container",class:{warning:e.isWarning}},[r("div",{staticClass:"message"},[r("h2",[e._v(e._s(e.post.message))])]),r("div",{staticClass:"info"},[e.isAuthorized?r("div",{staticClass:"remove",on:{click:e.remove}},[r("h3",[e._v("remove")])]):e._e(),r("h3",[e._v("sent: "+e._s(e.publishedDate))]),r("h3",{staticClass:"author",on:{click:e.goToProfile}},[e._v("posted by: "),r("span",{staticClass:"posted-by"},[e._v(e._s(e.author.username))])])])])},ye=[],Te={props:["post"],data:function(){return{author:Object}},computed:{isWarning:function(){return 1===this.post.warning},isAuthorized:function(){var e=this.$store.getters.currentUser;return!!e&&("admin"===e.userRole||"moderator"===e.userRole)},publishedDate:function(){return new Date(this.post.published_time).toLocaleString()}},methods:{fetchAuthor:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/users/".concat(e.post.userId));case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r),e.author=r;case 8:case"end":return t.stop()}}),t)})))()},remove:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/posts/".concat(e.post.id),{method:"delete"});case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r);case 7:case"end":return t.stop()}}),t)})))()},goToProfile:function(){this.$router.push({name:"ProfilePage",params:{user:this.author}})}},created:function(){this.fetchAuthor()}},je=Te,Ee=(r("0e07"),Object(h["a"])(je,Oe,ye,!1,null,"acd32956",null)),Re=Ee.exports,ke={components:{PostListItem:Re},props:["posts"]},Pe=ke,$e=(r("0c31"),Object(h["a"])(Pe,Ce,xe,!1,null,"fb341186",null)),Ie=$e.exports,Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"modal"},[r("div",{staticClass:"form"},[r("h2",{staticClass:"title"},[e._v("New Post")]),r("form",[e._m(0),e.displayWarningCheckbox?r("div",[r("label",{attrs:{for:"warning"}},[e._v("Warning message")]),r("br"),r("input",{attrs:{type:"checkbox",id:"warning",name:"warning"}})]):e._e(),r("input",{attrs:{type:"submit",value:"Post"},on:{click:e.submit}}),r("button",{on:{click:function(t){return t.preventDefault(),e.close(t)}}},[e._v("Close")])])])])},Me=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-fields"},[r("input",{attrs:{required:"",type:"text",id:"message",name:"message",placeholder:"Enter message"}}),r("br")])}],Ue=(r("a9e3"),{name:"newpost-Modal",props:{value:{required:!0},threadId:{type:Number}},computed:{displayWarningCheckbox:function(){var e=this.$store.getters.currentUser;return!!e&&("admin"===e.userRole||"moderator"===e.userRole)}},methods:{close:function(){this.$emit("myEvent","input",!this.value)},submit:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),n={message:document.getElementById("message").value,userId:t.$store.getters.currentUser.id,threadId:t.threadId,published_time:Date.now()},s=t.$store.getters.currentUser.userRole,"admin"===s||"moderator"===s&&!0===document.getElementById("warning").checked?n.warning=1:n.warning=0,r.next=6,fetch("/rest/v1/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:return o=r.sent,r.next=9,o.json();case 9:o=r.sent,console.log(o),t.close();case 12:case"end":return r.stop()}}),r)})))()}}}),Ne=Ue,De=(r("01b2"),Object(h["a"])(Ne,Se,Me,!1,null,"ce94904a",null)),Le=De.exports,Ae={components:{PostList:Ie,NewPostModal:Le},props:["thread"],data:function(){return{posts:[],isClosed:!1,newpostModalOpen:!1}},computed:{showCloseThread:function(){var e=this.$store.getters.currentUser;return!!e&&(("moderator"===e.userRole||"admin"===e.userRole)&&!1===this.isClosed)}},methods:{fetchPosts:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/posts/".concat(e.thread.id));case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,e.posts=r,e.newpostModalOpen=!1;case 8:case"end":return t.stop()}}),t)})))()},closeThread:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/threads/".concat(e.thread.id),{method:"PUT"});case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r),e.isClosed=!0;case 8:case"end":return t.stop()}}),t)})))()},newPost:function(){this.isClosed||(this.newpostModalOpen=!this.newpostModalOpen)}},created:function(){this.fetchPosts(),this.isClosed=0===this.thread.active},mounted:function(){this.fetchPosts()}},Be=Ae,qe=(r("1114"),Object(h["a"])(Be,we,_e,!1,null,"be1cb212",null)),Je=qe.exports,Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"thread-creation"},[r("h1",{staticClass:"title"},[e._v("Create new thread")]),r("form",{staticClass:"form"},[r("label",{attrs:{for:"title"}},[e._v("Enter title")]),r("br"),r("input",{attrs:{required:"",id:"title",type:"text"}}),r("br"),r("label",{attrs:{for:"message"}},[e._v("Message")]),r("br"),r("input",{staticClass:"message",attrs:{required:"",id:"message",type:"text"}}),r("button",{on:{click:e.goBack}},[e._v("Cancel")]),r("button",{on:{click:e.createThread}},[e._v("Confirm")])])])},He=[],We={props:["subforum"],methods:{createThread:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.preventDefault(),n={title:document.getElementById("title").value,userId:t.$store.getters.currentUser.id,published_time:Date.now(),subforumId:t.$route.params.subforum.id,active:"active"},console.log("POSTING THREAD",n),null!==n.userId&&void 0!==n.userId){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,fetch("/rest/v1/threads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return s=r.sent,r.next=10,s.json();case 10:s=r.sent,console.log("RESPONSE: ",s.lastInsertRowid),console.log("SOMETAS,",s.lastInsertRowid),t.postInitialPost(n,s),n.id=s.lastInsertRowid,t.$router.push({name:"ThreadPage",params:{thread:n}});case 16:case"end":return r.stop()}}),r)})))()},postInitialPost:function(e,t){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={message:document.getElementById("message").value,userId:r.$store.getters.currentUser.id,threadId:t.lastInsertRowid,published_time:Date.now(),warning:0},console.log("POST:",n),e.next=4,fetch("/rest/v1/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return s=e.sent,e.next=7,s.json();case 7:s=e.sent,console.log(s);case 9:case"end":return e.stop()}}),e)})))()},goBack:function(){this.$router.push({name:"SubforumPage",params:{subforum:this.subforum}})}}},Ge=We,ze=(r("a3d4"),Object(h["a"])(Ge,Fe,He,!1,null,"bdeba8fe",null)),Ye=ze.exports,Ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"license"},[e._m(0),r("div",{staticClass:"info"},[r("h2",{staticClass:"title"},[e._v(e._s(e.user.username))]),r("h3",[e._v("email: "+e._s(e.user.email))]),r("h3",[e._v("role: "+e._s(e.user.userRole))])])]),e.isAdmin?r("div",[r("div",{staticClass:"delete"},[r("h3",{on:{click:e.deleteUser}},[e._v("DELETE USER")])])]):e._e(),e.isAdmin?r("div",{staticClass:"mode"},[e.profileUserIsModerator?e._e():r("h3",{on:{click:e.makeModerator}},[e._v("Make Moderator")]),e.profileUserIsModerator?r("h3",{on:{click:e.removeModerator}},[e._v("Remove Moderator")]):e._e()]):e._e()])},Qe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image"},[r("img",{attrs:{src:"https://image.flaticon.com/icons/png/512/21/21294.png"}})])}],Ve={props:["user"],computed:{isAdmin:function(){return null!==this.$store.getters.currentUser&&"admin"===this.$store.getters.currentUser.userRole},profileUserIsModerator:function(){return null!==this.$store.getters.currentUser&&"moderator"===this.user.userRole}},methods:{deleteUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.deleteAllUserPosts(),e.deleteAllUserThreads(),"admin"===e.$store.getters.currentUser.userRole){t.next=4;break}return t.abrupt("return");case 4:return console.log("DELETING USER"),t.next=7,fetch("/rest/v1/users/".concat(e.user.id),{method:"DELETE"});case 7:return r=t.sent,t.next=10,r.json();case 10:r=t.sent,console.log(r),e.goToHomePage();case 13:case"end":return t.stop()}}),t)})))()},deleteAllUserPosts:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/threads/".concat(e.used.id),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})))()},deleteAllUserThreads:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/posts/".concat(e.used.id),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})))()},logoutUser:function(){},goToHomePage:function(){this.$router.push("/")},makeModerator:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/users/".concat(e.user.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userRole:"moderator"})});case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r);case 7:case"end":return t.stop()}}),t)})))()},removeModerator:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/rest/v1/users/".concat(e.user.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userRole:"member"})});case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,console.log(r);case 7:case"end":return t.stop()}}),t)})))()}}},Xe=Ve,Ze=(r("bde7"),Object(h["a"])(Xe,Ke,Qe,!1,null,"6f259c8c",null)),et=Ze.exports;n["a"].use(N["a"]);var tt=[{path:"/",name:"HomePage",component:ee},{path:"/forum/:subforum",name:"SubforumPage",component:be,props:!0},{path:"/thread/:threadId",name:"ThreadPage",component:Je,props:!0},{path:"/threadCreation/:subforum",name:"threadCreation",component:Ye,props:!0},{path:"/profile/:userId",name:"ProfilePage",component:et,props:!0}],rt=new N["a"]({routes:tt,mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}}}),nt=rt,st=r("2f62");n["a"].use(st["a"]);var ot=new st["a"].Store({state:{currentUser:null},getters:{currentUser:function(e){return e.currentUser}},mutations:{setCurrentUser:function(e,t){e.currentUser=t}},actions:{fetchCurrentUser:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,fetch("/rest/v1/whoami");case 3:return n=t.sent,t.next=6,n.json();case 6:n=t.sent,r("setCurrentUser",n),console.log("Fetched current user: ",n);case 9:case"end":return t.stop()}}),t)})))()},postNewPost:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("TRYING TO POST: ",e),t.next=3,fetch("/rest/v1/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return r=t.sent,t.next=6,r.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))()}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:ot,router:nt,render:function(e){return e(U)}}).$mount("#app")},"777e":function(e,t,r){},"820f":function(e,t,r){"use strict";r("777e")},8341:function(e,t,r){},"85ec":function(e,t,r){},"86b7":function(e,t,r){},"8dc2":function(e,t,r){},"979a":function(e,t,r){},"9ff3":function(e,t,r){"use strict";r("ebfb")},a23c:function(e,t,r){},a3d4:function(e,t,r){"use strict";r("24ef")},ab51:function(e,t,r){"use strict";r("16df")},bde7:function(e,t,r){"use strict";r("dfe2")},bff0:function(e,t,r){},d1bb:function(e,t,r){"use strict";r("3348")},d5f8:function(e,t,r){"use strict";r("2706")},dfe2:function(e,t,r){},e30a:function(e,t,r){},ebfb:function(e,t,r){},f31d:function(e,t,r){"use strict";r("e30a")}});
//# sourceMappingURL=app.db1d926c.js.map