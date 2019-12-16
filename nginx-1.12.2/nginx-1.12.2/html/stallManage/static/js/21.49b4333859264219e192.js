webpackJsonp([21],{"8N7O":function(e,t,n){var a=n("xuBs");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("16824904",a,!0)},ph27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),o=n.n(a),d=(n("p19P"),n("Z/wl"),{data:function(){return{secShow:!1,dialogStatus:"",fullscreenLoading:!1,textMap:{update:"编辑店员",create:"新增店员"},users:[],sels:[],total:0,pageNum:1,pageSize:10,editFormRules:{name:[{required:!0,validator:this.noEmpty,message:"请输入用户名",trigger:"blur"}]},editForm:{name:"",phone:"",status:"on"}}},created:function(){this.getUsers()},components:{OrderDetail:n("1Jne").a},methods:{handleCurrentChange:function(e){this.pageNum=e,this.getUsers()},getUsers:function(){var e=this,t={pageNum:this.pageNum,pageSize:this.pageSize};this.$postJson(this._basePath.ajaxClerkByPage,t).then(function(t){t.success&&(e.total=t.data.count,e.users=t.data.datas)})},handleEdit:function(e,t){this.dialogStatus="update",this.secShow=!0,this.editForm=o()({},t)},handleAdd:function(){this.dialogStatus="create",this.secShow=!0,this.editForm={name:"",phone:"",status:"on"}},setCustomerStatus:function(e,t){var n=this;if("off"===t){var a=this;this.$confirm("确定禁用该店员吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.$postJson(n._basePath.ajaxClerkEnable,{userId:e.id,status:"off"}).then(function(e){e.success&&(n.$message.success("禁用成功！"),a.getUsers())})})}else"on"===t&&this.$postJson(this._basePath.ajaxClerkEnable,{userId:e.id,status:"on"}).then(function(e){e.success&&(n.$message.success("启用成功！"),n.getUsers())})},createData:function(){var e=this;this.fullscreenLoading=!0,this.$refs.editForm.validate(function(t){if(t){var n=o()({},e.editForm);e.$post(e._basePath.ajaxClerkSave,n).then(function(t){e.fullscreenLoading=!1,t.success&&(e.$message({message:"提交成功",type:"success"}),e.$refs.editForm.resetFields(),e.secShow=!1,e.getUsers())})}})},selsChange:function(e){this.sels=e},batchRemove:function(e,t){var n=this,a=t?[t.id]:this.sels.map(function(e){return e.id});this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){var e={idList:a.toString()};n.$postJson(n._basePath.ajaxClerkDel,e).then(function(e){e.success&&(n.$message({message:"删除成功",type:"success"}),n.getUsers())})}).catch(function(){})}}}),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-container",attrs:{id:"shop_staff"}},[n("div",[n("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[n("el-form",{attrs:{inline:!0}},[n("div",{staticClass:"process_btns"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增店员")])],1)])],1),e._v(" "),n("record-count",{attrs:{total:e.total}}),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"店员姓名"}}),e._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"手机号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.phone||"—")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),"on"===t.row.status?n("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(n){e.setCustomerStatus(t.row,"off")}}},[e._v("禁用")]):e._e(),e._v(" "),"off"===t.row.status?n("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(n){e.setCustomerStatus(t.row,"on")}}},[e._v("启用")]):e._e()]}}])})],1),e._v(" "),n("div",{staticClass:"page_toolbar"},[n("el-pagination",{attrs:{layout:"prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页",background:"","page-size":e.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.secShow,width:"600px"},on:{"update:visible":function(t){e.secShow=t}}},[n("el-form",{ref:"editForm",staticStyle:{width:"60%",margin:"auto"},attrs:{model:e.editForm,"label-width":"60px",rules:e.editFormRules}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[n("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.editForm.phone,callback:function(t){e.$set(e.editForm,"phone",t)},expression:"editForm.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"on","inactive-value":"off"},model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.secShow=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.createData}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")(d,s,!1,function(e){n("8N7O")},"data-v-203c6de7",null);t.default=i.exports},xuBs:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.fn10[data-v-203c6de7] {\n  font-size: 10px;\n}\n.fn12[data-v-203c6de7] {\n  font-size: 12px;\n}\n.fn14[data-v-203c6de7] {\n  font-size: 14px;\n}\n.fn16[data-v-203c6de7] {\n  font-size: 16px;\n}\n.fn18[data-v-203c6de7] {\n  font-size: 18px;\n}\n.fn20[data-v-203c6de7] {\n  font-size: 20px;\n}\n.fn22[data-v-203c6de7] {\n  font-size: 22px;\n}\n.fn24[data-v-203c6de7] {\n  font-size: 24px;\n}\n.fn26[data-v-203c6de7] {\n  font-size: 26px;\n}\n.fn28[data-v-203c6de7] {\n  font-size: 28px;\n}\n.fn30[data-v-203c6de7] {\n  font-size: 30px;\n}\n.fn32[data-v-203c6de7] {\n  font-size: 32px;\n}\n.cursor[data-v-203c6de7] {\n  cursor: pointer;\n}\n.fl[data-v-203c6de7] {\n  float: left;\n}\n.fr[data-v-203c6de7] {\n  float: right;\n}\n.title_public[data-v-203c6de7] {\n  padding: 12px 0 18px 0;\n  font-size: 18px;\n  color: #0c0c0d;\n  border-bottom: solid 1px #e3e5e6;\n}\n.text_color[data-v-203c6de7] {\n  color: #409eff;\n}\n.light_color[data-v-203c6de7] {\n  color: #e3e4e6;\n}\n.err_color[data-v-203c6de7] {\n  color: #f56c6c;\n}\n.suc_color[data-v-203c6de7] {\n  color: #09bb07;\n}\n.center[data-v-203c6de7] {\n  text-align: center;\n}\n.set_middle[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.set_start[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.set_between[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.set_around[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.set_column[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.page_toolbar[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.table_records[data-v-203c6de7] {\n  background-color: #bae7ff;\n  height: 50px;\n  float: left;\n  line-height: 50px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  width: 100%;\n  padding-left: 15px;\n}\n.table_records[data-v-203c6de7]:before {\n  display: table;\n  content: '';\n}\n.table_records i[data-v-203c6de7] {\n  color: #409eff;\n}\n.el-pagination .btn-prev[data-v-203c6de7],\n.el-pagination .btn-next[data-v-203c6de7] {\n  padding: 0 12px !important;\n}\n.secondary_form[data-v-203c6de7] {\n  width: 500px;\n}\n.secondary_form .el-cascader[data-v-203c6de7] {\n  width: 100%;\n}\n.boxshadow[data-v-203c6de7] {\n  -webkit-box-shadow: 0 0 5px 1px #ddd;\n          box-shadow: 0 0 5px 1px #ddd;\n}\n.drawer_form[data-v-203c6de7] {\n  width: 500px;\n}\n.block[data-v-203c6de7] {\n  display: block;\n}\n.indent[data-v-203c6de7] {\n  text-indent: 30px;\n}\n.dotted_line[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 20px;\n  border-top: 1px dashed #ddd;\n}\n.dotted_line .other_item[data-v-203c6de7] {\n  font-weight: bold;\n}\n.bold[data-v-203c6de7] {\n  font-weight: bold;\n}\n.process_btns[data-v-203c6de7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 20px;\n}\n.border_[data-v-203c6de7] {\n  border: 1px solid #ddd;\n}\n.line_through[data-v-203c6de7] {\n  text-decoration: line-through;\n}\n#app .el-badge__content[data-v-203c6de7] {\n  border: none;\n}\n.toolbar .el-form--inline .el-form-item__label[data-v-203c6de7] {\n  padding-right: 8px;\n}\n.el-badge__content.is-fixed[data-v-203c6de7] {\n  z-index: 99;\n}\nhtml[data-v-203c6de7],\nbody[data-v-203c6de7],\ndiv[data-v-203c6de7],\nspan[data-v-203c6de7],\niframe[data-v-203c6de7],\nh1[data-v-203c6de7],\nh2[data-v-203c6de7],\nh3[data-v-203c6de7],\nh4[data-v-203c6de7],\nh5[data-v-203c6de7],\nh6[data-v-203c6de7],\np[data-v-203c6de7],\npre[data-v-203c6de7],\na[data-v-203c6de7],\nem[data-v-203c6de7],\nimg[data-v-203c6de7],\ni[data-v-203c6de7],\nol[data-v-203c6de7],\nul[data-v-203c6de7],\nfieldset[data-v-203c6de7],\nform[data-v-203c6de7],\nlabel[data-v-203c6de7],\ntable[data-v-203c6de7],\ntbody[data-v-203c6de7],\ntfoot[data-v-203c6de7],\nthead[data-v-203c6de7],\ntr[data-v-203c6de7],\nth[data-v-203c6de7],\ntd[data-v-203c6de7],\ncanvas[data-v-203c6de7],\nfooter[data-v-203c6de7],\nheader[data-v-203c6de7],\nsection[data-v-203c6de7],\naudio[data-v-203c6de7],\nvideo[data-v-203c6de7] {\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  margin: 0;\n  padding: 0;\n}\nli[data-v-203c6de7] {\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  margin: 0;\n}\narticle[data-v-203c6de7],\naside[data-v-203c6de7],\ndetails[data-v-203c6de7],\nfigcaption[data-v-203c6de7],\nfigure[data-v-203c6de7],\nfooter[data-v-203c6de7],\nheader[data-v-203c6de7],\nhgroup[data-v-203c6de7],\nmenu[data-v-203c6de7],\nnav[data-v-203c6de7],\nsection[data-v-203c6de7] {\n  display: block;\n}\nol[data-v-203c6de7],\nul[data-v-203c6de7] {\n  list-style: none;\n}\ninput[data-v-203c6de7],\nbutton[data-v-203c6de7],\nselect[data-v-203c6de7],\ntextarea[data-v-203c6de7] {\n  outline: none;\n  -webkit-appearance: none;\n}\nblockquote[data-v-203c6de7],\nq[data-v-203c6de7] {\n  quotes: none;\n}\nblockquote[data-v-203c6de7]:before,\nblockquote[data-v-203c6de7]:after,\nq[data-v-203c6de7]:before,\nq[data-v-203c6de7]:after {\n  content: '';\n  content: none;\n}\ntable[data-v-203c6de7] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody[data-v-203c6de7],\nhtml[data-v-203c6de7] {\n  font-family: 'Microsoft Yahei', 'Source Sans Pro', 'sans-serif';\n  line-height: 1;\n  height: 100%;\n  font-size: 14px;\n}\ni[data-v-203c6de7] {\n  font-style: normal;\n}\n.err_color[data-v-203c6de7] {\n  color: #f56c6c;\n}\n.success_color[data-v-203c6de7] {\n  color: #67c23a;\n}\n.warn_color[data-v-203c6de7] {\n  color: #e6a23c;\n}\n.light_color[data-v-203c6de7] {\n  color: #909399;\n}\n.info_color[data-v-203c6de7] {\n  color: #909399;\n}\n@font-face {\n  font-family: \"iconfont\";\n  src: url("+n("41FU")+") ;\n  src: url("+n("41FU")+"#iefix) format('embedded-opentype'), url("+n("AmmJ")+") format('woff'), url("+n("gjvD")+") format('truetype'), url("+n("xCPn")+"#iconfont) format('svg') ;\n}\n.icon[data-v-203c6de7] {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#shop_staff .toolbar_process[data-v-203c6de7] {\n  margin-top: 20px;\n}\n#shop_staff .order_detail[data-v-203c6de7] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  height: 200px;\n  overflow-y: auto;\n}\n#shop_staff .order_detail li[data-v-203c6de7] {\n  height: 24px;\n  line-height: 24px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#shop_staff .order_detail li span[data-v-203c6de7] {\n  width: 150px;\n  color: #409eff;\n  cursor: pointer;\n}\n",""])}});