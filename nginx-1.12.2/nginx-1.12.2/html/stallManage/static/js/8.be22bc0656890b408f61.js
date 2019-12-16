webpackJsonp([8],{"T+/8":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o("Dd8w"),i=o.n(t),s={name:"userlogin",data:function(){return{loginForm:{phone:"",password:""},checked:!1,code:{src:"",value:"",len:4,type:"text"},loginRules:{phone:[{required:!0,validator:this.noEmpty,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,validator:this.noEmpty,message:"请输入验证码",trigger:"blur"}]},passwordType:"password"}},created:function(){var n=this.getCookie("userMsg");if(this.handleLogin=this._debounce(this.handleLogin),n){var e=n.split("&");this.$set(this.loginForm,"phone",e[0]),this.$set(this.loginForm,"password",e[1]),this.$set(this,"checked",!!e[2])}},mounted:function(){},computed:{},props:[],methods:{showPassword:function(){""===this.passwordType?this.passwordType="password":this.passwordType=""},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(e){var o={password:window.md5(n.loginForm.password+n.Const.JointStr)},t=i()({},n.loginForm,{userType:1},o);n.$store.dispatch("Login",t).then(function(e){if(e.success){n.$store.commit("SET_ROUTERS",[]);var o=e.data;n.checked?n.setCookie("userMsg",n.loginForm.phone+"&"+n.loginForm.password+"&"+n.checked,1e8):n.removeCookie("userMsg"),n.$message.success("登陆成功"),n.setCookie("userId",o.id),n.setCookie("userType",o.userType),n.setCookie("stallId",o.stallId),n.setCookie("phone",o.phone),n.setCookie("bossName",o.userName),n.setCookie("GQSJ",o.currentStallExpire);var t=n.getCookie("exitUrl");n.$bus.$emit("loginSuccess"),t?location.href=t:n.$router.push({path:"/welcome"})}else n.$message.error(e.msg)})}})}}},r={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"status-icon":"",rules:n.loginRules,model:n.loginForm,"label-width":"0"}},[o("el-form-item",{attrs:{prop:"phone"}},[o("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入用户名"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.phone,callback:function(e){n.$set(n.loginForm,"phone",e)},expression:"loginForm.phone"}},[o("i",{staticClass:"icon-yonghu",attrs:{slot:"prefix"},slot:"prefix"})])],1),n._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{size:"small",type:n.passwordType,"auto-complete":"off",placeholder:"请输入密码"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}},[o("i",{staticClass:"el-icon-view el-input__icon",attrs:{slot:"suffix"},on:{click:n.showPassword},slot:"suffix"}),n._v(" "),o("i",{staticClass:"icon-mima",attrs:{slot:"prefix"},slot:"prefix"})])],1),n._v(" "),o("el-checkbox",{model:{value:n.checked,callback:function(e){n.checked=e},expression:"checked"}},[n._v("记住账号")]),n._v(" "),o("el-form-item",[o("el-button",{staticClass:"login-submit",attrs:{type:"primary",size:"small"},on:{click:n.handleLogin}},[n._v("登录")])],1)],1)},staticRenderFns:[]};var l=o("VU/8")(s,r,!1,function(n){o("gyH9")},null,null).exports,a=function(n,e,o){4!==e.length?o(new Error("请输入4位数的验证码")):o()},c={name:"codelogin",data:function(){return{msgText:"发送验证码",msgTime:60,msgKey:!1,loginForm:{phone:"",code:""},loginRules:{phone:[{required:!0,trigger:"blur",validator:this.noEmpty,message:"手机号不能为空"},{required:!0,trigger:"blur",validator:this.mobileReg,message:"手机号格式不正确"}],code:[{required:!0,trigger:"blur",validator:a}]}}},methods:{handleSend:function(){var n=this;if(!this.msgKey&&this._testPhone(this.loginForm.phone)){this.$postJson(this._basePath.ajaxLoginSendCode,{phone:this.loginForm.phone,templateCode:"SMS_160856438"}).then(function(e){e.success&&n.$message.success("发送验证码成功")}),this.msgText="${time}秒后重发".replace("${time}",this.msgTime),this.msgKey=!0;var e=setInterval(function(){n.msgTime--,n.msgText="${time}秒后重发".replace("${time}",n.msgTime),0===n.msgTime&&(n.msgTime=60,n.msgText="发送验证码",n.msgKey=!1,clearInterval(e))},1e3)}},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){e&&n.$store.dispatch("LoginWithCode",n.loginForm).then(function(e){if(e.success){var o=e.data;n.$message.success("登陆成功"),n.setCookie("userId",o.id),n.setCookie("userType",o.userType),n.setCookie("stallId",o.stallId),n.setCookie("phone",o.phone),n.setCookie("bossName",o.userName),n.setCookie("GQSJ",o.currentStallExpire);var t=n.getCookie("exitUrl");n.$bus.$emit("loginSuccess"),t?location.href=t:n.$router.push({path:"/welcome"})}})})}}},p={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{id:"code_login","status-icon":"",rules:n.loginRules,model:n.loginForm,"label-width":"0"}},[o("el-form-item",{attrs:{prop:"phone"}},[o("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入手机号码"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.phone,callback:function(e){n.$set(n.loginForm,"phone",e)},expression:"loginForm.phone"}},[o("i",{staticClass:"icon-shouji",attrs:{slot:"prefix"},slot:"prefix"})])],1),n._v(" "),o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{class:[{display:n.msgKey}],attrs:{size:"small","auto-complete":"off",placeholder:"请输入验证码"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.code,callback:function(e){n.$set(n.loginForm,"code",e)},expression:"loginForm.code"}},[o("i",{staticClass:"icon-yanzhengma yanzhengma",attrs:{slot:"prefix"},slot:"prefix"}),n._v(" "),o("template",{slot:"append"},[o("span",{staticClass:"msg-text",on:{click:n.handleSend}},[n._v(n._s(n.msgText))])])],2)],1),n._v(" "),o("el-form-item",[o("el-button",{staticClass:"login-submit",attrs:{size:"small",type:"primary"},nativeOn:{click:function(e){e.preventDefault(),n.handleLogin(e)}}},[n._v("登录")])],1)],1)},staticRenderFns:[]};var d=o("VU/8")(c,p,!1,function(n){o("zYeo")},null,null).exports,u=o("NYxO"),m={name:"login",components:{userLogin:l,codeLogin:d},data:function(){return{activeName:"user"}},created:function(){},mounted:function(){},computed:i()({},Object(u.b)(["website"])),props:[],methods:{}},g={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"login-container pull-height",nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}}},[o("div",{staticClass:"login-info text-white animated fadeInLeft"},[o("ul",{staticClass:"login-info-list"},n._l(n.website.info.list,function(e){return o("li",{key:e,staticClass:"login-info-item"},[o("i",{staticClass:"el-icon-check"}),n._v(" "+n._s(e)+"\n      ")])}))]),n._v(" "),o("div",{staticClass:"login-border  animated fadeInRight"},[o("div",{staticClass:"login-main"},[o("h4",{staticClass:"login-title"},[n._v("登录"+n._s(n.website.title)+"\n      ")]),n._v(" "),o("el-tabs",{model:{value:n.activeName,callback:function(e){n.activeName=e},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"用户密码",name:"user"}},[o("userLogin")],1),n._v(" "),o("el-tab-pane",{attrs:{label:"短信验证码",name:"code"}},[o("codeLogin")],1)],1)],1)])])},staticRenderFns:[]};var f=o("VU/8")(m,g,!1,function(n){o("dIMG")},null,null);e.default=f.exports},bD10:function(n,e,o){n.exports=o.p+"static/img/login.3d99123.png"},dIMG:function(n,e,o){var t=o("mgNi");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("rjj0")("00eb35a0",t,!0)},gyH9:function(n,e,o){var t=o("uKm5");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("rjj0")("5597fbde",t,!0)},mgNi:function(n,e,o){(n.exports=o("FZ+f")(!1)).push([n.i,'\n.login-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background: rgba(0, 0, 0, 0.2);\n  position: relative;\n  min-height: 500px;\n  height: 100%;\n}\n.login-container .router_class {\n  position: absolute;\n  bottom: 0;\n  left: 10px;\n  color: #fff;\n  line-height: 30px;\n  height: 30px;\n}\n.login-container::before {\n  z-index: -999;\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url('+o("bD10")+");\n  background-size: cover;\n}\n.login-info {\n  padding-left: 60px;\n}\n.login-info-title {\n  line-height: 90px;\n}\n.login-info-item {\n  font-size: 14px;\n}\n.login-border {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 30px 50px 25px 50px;\n  background-color: #fff;\n  border-radius: 6px;\n  -webkit-box-shadow: 1px 1px 2px #eee;\n          box-shadow: 1px 1px 2px #eee;\n}\n.login-main {\n  border-radius: 3px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n}\n.login-main > h3 {\n  margin-bottom: 20px;\n}\n.login-main > p {\n  color: #76838f;\n}\n.login-title {\n  margin: 0 0 20px;\n  text-align: center;\n  color: #409eff;\n  letter-spacing: 3px;\n}\n.login-submit {\n  margin-top: 20px;\n  width: 100%;\n  border-radius: 28px;\n}\n.login-form {\n  margin: 10px 0;\n}\n.login-form .el-form-item__content {\n    width: 270px;\n}\n.login-form .el-form-item {\n    margin-bottom: 12px;\n}\n.login-form .el-input input {\n    text-indent: 5px;\n    border-color: #dcdcdc;\n    border-radius: 3px;\n}\n.login-form .el-input .el-input__prefix i {\n    padding: 0 5px;\n    font-size: 16px !important;\n}\n.login-code {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 0 0 0 10px;\n}\n.login-code-img {\n  margin-top: 2px;\n  width: 100px;\n  height: 32px;\n  background-color: #fdfdfd;\n  border: 1px solid #f0f0f0;\n  color: #333;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 5px;\n  line-height: 32px;\n  text-indent: 5px;\n  text-align: center;\n}\n",""])},qCaM:function(n,e,o){(n.exports=o("FZ+f")(!1)).push([n.i,"\n.yanzhengma{\r\n  display:block;\r\n  margin-top: 8px;\n}\n#code_login .el-input-group__append{\r\n  background: #E6A23C\n}\n.msg-text {\r\n  display: block;\r\n  width: 60px;\r\n  font-size: 12px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  color:#fff\n}\n#code_login .display .el-input-group__append{\r\n  background: #f5f7fa\n}\n.display .msg-text{\r\n  color: #ccc;\n}\r\n",""])},uKm5:function(n,e,o){(n.exports=o("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},zYeo:function(n,e,o){var t=o("qCaM");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);o("rjj0")("e68f2f62",t,!0)}});