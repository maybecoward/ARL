(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4261fffc"],{50915:function(e,t,r){"use strict";var a=r("52ca");r.n(a).a},"52ca":function(e,t,r){},"9ed6":function(e,t,r){"use strict";r.r(t),r("498a");var a=r("7ded"),s={name:"login",data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||Object(a.b)({username:r.username.trim(),password:r.password.trim()}).then((function(e){200===e.code?(t.$message.success("登录成功"),localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),t.$router.push({path:"/"})):t.$message.error("用户名或密码错误")})).catch((function(e){t.$message.error("用户名或密码错误")}))}))},clearPJSDom:function(){pJSDom&&0<pJSDom.length&&(pJSDom[0].pJS.fn.vendors.destroypJS(),pJSDom=[])}},watch:{$route:function(){this.clearPJSDom()}},beforeDestroy:function(){this.clearPJSDom()}};r("50915"),r=r("2877"),s=Object(r.a)(s,(function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",{staticClass:"login"},[t("vue-particles",{attrs:{color:"#e91e63",linesColor:"#e91e63"}}),t("div",{staticClass:"login-wrap"},[t("icon",{staticClass:"logo",attrs:{name:"logo"}}),t("a-form",{staticClass:"form-wrap",attrs:{"label-col":{span:5},"wrapper-col":{span:16},form:e.form}},[t("a-form-item",{attrs:{label:"用户名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入用户名"}]}],expression:"[\n            'username',\n            { rules: [{ required: true, message: '请输入用户名' }] },\n          ]"}],attrs:{placeholder:"请输入用户名"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit(t)}}})],1),t("a-form-item",{attrs:{label:"密码"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}]}],expression:"[\n            'password',\n            { rules: [{ required: true, message: '请输入密码' }] },\n          ]"}],attrs:{type:"password",placeholder:"请输入密码"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit(t)}}})],1),t("a-form-item",[t("a-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(" 登 录 ")])],1)],1),t("p",{staticClass:"copy-right"},[e._v("Powered by TCC(Tophant Competence Center) ARL 2.3")]),t("p",[e._v("本系统为开源项目"),t("a",{attrs:{href:"https://github.com/TophantTechnology/ARL",target:"_target"}},[t("icon",{staticClass:"icon",attrs:{name:"github"}})],1)])],1)],1)}),[],!1,null,"4d8ba968",null);t.default=s.exports}}]);