(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-188415db"],{"0cbe":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Card",[i("div",{attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"edit-head"},[i("a",{staticClass:"back-title",on:{click:e.close}},[i("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),i("div",{staticClass:"head-name"},[e._v("编辑")]),i("span"),i("a",{staticClass:"window-close",on:{click:e.close}},[i("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),i("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[i("FormItem",{attrs:{label:"新闻标题",prop:"newTitle"}},[i("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.newTitle,callback:function(t){e.$set(e.form,"newTitle",t)},expression:"form.newTitle"}})],1),i("FormItem",{attrs:{label:"新闻时效",prop:"periodTime"}},[i("DatePicker",{ref:"myDatePicker",staticStyle:{width:"570px"},attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",value:e.form.periodTime},on:{"on-change":e.changeServiceDate}})],1),i("FormItem",{attrs:{label:"是否公开",prop:"isPublic"}},[i("Select",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.isPublic,callback:function(t){e.$set(e.form,"isPublic",t)},expression:"form.isPublic"}},[i("Option",{attrs:{value:"yes"}},[e._v("是")]),i("Option",{attrs:{value:"no"}},[e._v("否")])],1)],1),i("FormItem",{attrs:{label:"图片",prop:"photo"}},[i("upload-pic-input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.photo,callback:function(t){e.$set(e.form,"photo",t)},expression:"form.photo"}})],1),i("Form-item",{staticClass:"br"},[i("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),i("Button",{on:{click:e.handleReset}},[e._v("重置")]),i("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1),i("Divider",{attrs:{dashed:""}}),i("FormItem",{attrs:{label:"新闻描述",prop:"newDescribe"}},[i("VueUeditorWrap",{attrs:{config:e.editorConfig,"editor-id":"editor-demo-01"},model:{value:e.form.newDescribe,callback:function(t){e.$set(e.form,"newDescribe",t)},expression:"form.newDescribe"}})],1)],1)],1)],1)},s=[],a=i("6625"),o=i.n(a),l=i("cb98"),n=i("3a27"),c={name:"edit",components:{VueUeditorWrap:o.a,uploadPicInput:n["default"]},props:{data:Object},data(){return{currentPublishOrganizationId:"-1",submitLoading:!1,form:{newTitle:"",newDescribe:"",periodTime:"",isPublic:"",photo:"",relateServiceId:"",relateServiceName:""},formValidate:{newTitle:[{required:!0,message:"不能为空",trigger:"blur"},{type:"string",max:100,message:"不能超过100个字符",trigger:"blur"}],newDescribe:[{required:!0,message:"不能为空",trigger:"blur"},{type:"string",max:200,message:"不能超过200个字符",trigger:"blur"}],periodTime:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init(){this.handleReset(),this.form=this.data},getServiceIdsFormSon(e){if(this.form.relateServiceId=e,this.relateServiceDrawer=!1,""==e)return this.form.relateServiceName="",void(this.form.relateServiceId="");var t={ids:e};Object(l["e"])(t).then(e=>{this.submitLoading=!1;var t="";if(e.success){for(var i=0;i<e.result.length;i++)""!=t&&(t+="\n"),t=t+(i+1)+"."+e.result[i].serviceName;this.form.relateServiceName=t}})},changeServiceDate(e){this.form.periodTime=e[0]+" - "+e[1]},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(e=>{e&&Object(l["c"])(this.form).then(e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())})})},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},created(){this.editorConfig={UEDITOR_HOME_URL:"/UEditor/",autoHeightEnabled:!1,initialFrameHeight:400,initialFrameWidth:"100%",serverUrl:"https://zwz99.top:16888/ueditor/jsp/controller.jsp"}},mounted(){this.init()}},d=c,m=(i("88b4"),i("2877")),u=Object(m["a"])(d,r,s,!1,null,null,null);t["default"]=u.exports},"88b4":function(e,t,i){"use strict";i("ca12")},ca12:function(e,t,i){},cb98:function(e,t,i){"use strict";i.d(t,"e",(function(){return s})),i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return o})),i.d(t,"c",(function(){return l})),i.d(t,"b",(function(){return n})),i.d(t,"g",(function(){return c})),i.d(t,"f",(function(){return d}));var r=i("7f80");const s=e=>Object(r["b"])("/dynamic_new/get_service_by_ids",e),a=e=>Object(r["b"])("/hospitalNews/getByPage",e),o=e=>Object(r["e"])("/hospitalNews/insertOrUpdate",e),l=e=>Object(r["e"])("/hospitalNews/insertOrUpdate",e),n=e=>Object(r["e"])("/hospitalNews/delByIds",e),c=e=>Object(r["e"])("/hospitalNews/set_top_by_id",e),d=e=>Object(r["e"])("/hospitalNews/set_public_by_id",e)}}]);