(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84f65930"],{"64f1":function(t,e,s){},ab8c:function(t,e,s){"use strict";s.d(e,"e",(function(){return i})),s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"d",(function(){return c})),s.d(e,"c",(function(){return r}));var a=s("7f80");const i=t=>Object(a["b"])("/messageBoard/getByPage",t),n=t=>Object(a["e"])("/messageBoard/insert",t),o=t=>Object(a["e"])("/messageBoard/insertReply",t),c=t=>Object(a["e"])("/messageBoard/update",t),r=t=>Object(a["e"])("/messageBoard/delByIds",t)},f848:function(t,e,s){"use strict";s("64f1")},f881:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Card",[s("div",{attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"edit-head"},[s("a",{staticClass:"back-title",on:{click:t.close}},[s("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),s("div",{staticClass:"head-name"},[t._v("编辑")]),s("span"),s("a",{staticClass:"window-close",on:{click:t.close}},[s("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),s("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[s("FormItem",{attrs:{label:"留言内容",prop:"content"}},[s("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),s("Form-item",{staticClass:"br"},[s("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),s("Button",{on:{click:t.handleReset}},[t._v("重置")]),s("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},i=[],n=s("ab8c"),o={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{date:"",content:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(t=>{t&&Object(n["d"])(this.form).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())})})},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},c=o,r=(s("f848"),s("2877")),l=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports}}]);