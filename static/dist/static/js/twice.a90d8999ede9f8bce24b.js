(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var i=n(109);var s=n.n(i);for(var o in i)if(o!=="default")(function(e){n.d(t,e,function(){return i[e]})})(o);t["default"]=s.a},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"QuestionRadio",props:{info:{type:Object,default:{question:null,option_A:null,option_B:null,option_C:null,option_D:null,explain:null,answer:null,types:"单选题"}},editable:{type:Boolean,default:false},readonly:{type:Boolean,default:false}},data:function e(){return{config:{message:null,theme:"error",offset:80},Question:JSON.parse(JSON.stringify(this.info)),explainOpen:false,rules:{question:[{required:true,message:"题目内容不能为空！",trigger:"blur"}],option:[{required:true,message:"选项内容不能为空！",trigger:"blur"}],answer:[{required:true,message:"答案不能为空！",trigger:"blur"}],explain:[{required:true,message:"答案解析不能为空！",trigger:"blur"}]}}},created:function e(){if(this.Question.explain){this.explainOpen=true}},methods:{handleSwitcherChange:function e(t){if(!t&&!this.readonly){this.Question.explain=null}},checkData:function e(){var t=this;this.$refs.Question.validate().then(function(e){if(t.editable){t.$emit("updateQuestion",t.Question)}else{t.$emit("createQuestion",t.Question)}},function(e){t.config.message=e.content;t.config.theme="error";t.$bkMessage(t.config)})},reset:function e(){this.Question.question=null;this.Question.option_A=null;this.Question.option_B=null;this.Question.option_C=null;this.Question.option_D=null;this.Question.option_E=null;this.Question.answer=null;this.Question.explain=null;this.explainOpen=false;this.$refs.Question.clearError()},nextOption:function e(t){if(t==="A"){this.$refs.optionA.focus()}else if(t==="B"){this.$refs.optionB.focus()}else if(t==="C"){this.$refs.optionC.focus()}else{this.$refs.optionD.focus()}}}};t.default=i},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var i=n(112);var s=n.n(i);for(var o in i)if(o!=="default")(function(e){n.d(t,e,function(){return i[e]})})(o);t["default"]=s.a},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"QuestionRadio",props:{info:{type:Object,default:{question:null,option_A:null,option_B:null,option_C:null,option_D:null,option_E:null,explain:null,answer:[],types:"多选题"}},editable:{type:Boolean,default:false},readonly:{type:Boolean,default:false}},data:function e(){return{config:{message:null,theme:"error",offset:80},explainOpen:false,Question:JSON.parse(JSON.stringify(this.info)),rules:{question:[{required:true,message:"题目内容不能为空！",trigger:"blur"}],option:[{required:true,message:"选项内容不能为空！",trigger:"blur"}],answer:[{required:true,message:"答案不能为空",trigger:"blur"}],explain:[{required:true,message:"答案解析不能为空！",trigger:"blur"}]}}},computed:{},created:function e(){if(this.editable){this.Question.answer=this.Question.answer.split("")}if(this.Question.explain){this.explainOpen=true}},methods:{handleSwitcherChange:function e(t){if(!t&&!this.readonly){this.Question.explain=null}},checkData:function e(){var t=this;this.Question.answer=this.Question.answer.join("");this.$refs.Question.validate().then(function(e){if(t.editable){t.$emit("updateQuestion",t.Question)}else{t.$emit("createQuestion",t.Question)}},function(e){t.config.message=e.content;t.config.theme="error";t.$bkMessage(t.config)})},reset:function e(){this.Question.question=null;this.Question.option_A=null;this.Question.option_B=null;this.Question.option_C=null;this.Question.option_D=null;this.Question.option_E=null;this.Question.answer=[];this.Question.explain=null;this.explainOpen=false;this.$refs.Question.clearError()}}};t.default=i},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var i=n(115);var s=n.n(i);for(var o in i)if(o!=="default")(function(e){n.d(t,e,function(){return i[e]})})(o);t["default"]=s.a},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"QuestionRadio",props:{info:{type:Object,default:{question:null,explain:null,answer:null,types:"判断题"}},editable:{type:Boolean,default:false},readonly:{type:Boolean,default:false}},data:function e(){return{config:{message:null,theme:"error",offset:80},explainOpen:false,Question:JSON.parse(JSON.stringify(this.info)),rules:{question:[{required:true,message:"题目内容不能为空！",trigger:"blur"}],option:[{required:true,message:"选项内容不能为空！",trigger:"blur"}],answer:[{required:true,message:"答案不能为空",trigger:"blur"}],explain:[{required:true,message:"答案解析不能为空！",trigger:"blur"}]}}},created:function e(){if(this.Question.explain){this.explainOpen=true}},methods:{choose:function e(t){this.Question.answer=t},handleSwitcherChange:function e(t){if(!t&&!this.readonly){this.Question.explain=null}},checkData:function e(){var t=this;this.$refs.Question.validate().then(function(e){if(t.editable){t.$emit("updateQuestion",t.Question)}else{t.$emit("createQuestion",t.Question)}},function(e){t.config.message=e.content;t.config.theme="error";t.$bkMessage(t.config)})},reset:function e(){this.Question.question=null;this.Question.option_A=null;this.Question.option_B=null;this.Question.option_C=null;this.Question.option_D=null;this.Question.option_E=null;this.Question.answer=null;this.Question.explain=null;this.explainOpen=false;this.$refs.Question.clearError()}}};t.default=i},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var i=n(118);var s=n.n(i);for(var o in i)if(o!=="default")(function(e){n.d(t,e,function(){return i[e]})})(o);t["default"]=s.a},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"QuestionShort",props:{info:{type:Object,default:{question:null,answer:null,explain:null,types:"简答题"}},editable:{type:Boolean,default:false},readonly:{type:Boolean,default:false}},data:function e(){return{config:{message:null,theme:"error",offset:80},explainOpen:false,Question:JSON.parse(JSON.stringify(this.info)),rules:{question:[{required:true,message:"题目内容不能为空！",trigger:"blur"}],option:[{required:true,message:"选项内容不能为空！",trigger:"blur"}],answer:[{required:true,message:"答案不能为空",trigger:"blur"}],explain:[{required:true,message:"答案解析不能为空！",trigger:"blur"}]}}},created:function e(){if(this.Question.explain){this.explainOpen=true}},methods:{handleSwitcherChange:function e(t){if(!t&&!this.readonly){this.Question.explain=null}},checkData:function e(){var t=this;this.$refs.Question.validate().then(function(e){if(t.editable){t.$emit("updateQuestion",t.Question)}else{t.$emit("createQuestion",t.Question)}},function(e){t.config.message=e.content;t.config.theme="error";t.$bkMessage(t.config)})},reset:function e(){this.Question.question=null;this.Question.option_A=null;this.Question.option_B=null;this.Question.option_C=null;this.Question.option_D=null;this.Question.option_E=null;this.answer=[];this.Question.explain=null;this.explainOpen=false;this.$refs.Question.clearError()}}};t.default=i},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var i=n(121);var s=n.n(i);for(var o in i)if(o!=="default")(function(e){n.d(t,e,function(){return i[e]})})(o);t["default"]=s.a},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"QuestionFill",props:{info:{type:Object,default:{question:null,explain:null,answer:[],types:"填空题"}},editable:{type:Boolean,default:false},readonly:{type:Boolean,default:false}},data:function e(){return{config:{message:null,theme:"error",offset:80},separator:" ",explainOpen:false,answer:[],Question:JSON.parse(JSON.stringify(this.info)),rules:{question:[{required:true,message:"题目内容不能为空！",trigger:"blur"}],answer:[{required:true,message:"答案不能为空",trigger:"blur"}],explain:[{required:true,message:"答案解析不能为空！",trigger:"blur"}]}}},computed:{},created:function e(){if(this.editable||this.readonly){this.exchange()}if(this.Question.explain){this.explainOpen=true}},methods:{exchange:function e(){var t=this.Question.answer.split(this.separator);var n=this.Question.question.split("");for(var i=0;i<n.length-6;i++){if(n.slice(i,i+7).join("")==="_______"){var s=t.shift();this.answer.push({text:s,start:i,length:s.length});i=i+6}}},checkData:function e(){var t=this;if(this.editable){this.Question.answer=[]}this.answer.forEach(function(e){t.Question.answer.push(e.text)});this.Question.answer=this.Question.answer.join(this.separator);this.$refs.Question.validate().then(function(e){if(t.editable){t.$emit("updateQuestion",t.Question)}else{t.$emit("createQuestion",t.Question)}t.Question.answer=t.Question.answer.split(t.separator)},function(e){t.config.message=e.content;t.config.theme="error";t.$bkMessage(t.config)})},reset:function e(){this.Question.question=null;this.Question.option_A=null;this.Question.option_B=null;this.Question.option_C=null;this.Question.option_D=null;this.Question.option_E=null;this.answer=[];this.Question.explain=null;this.explainOpen=false;this.$refs.Question.clearError()},handleMouseSelect:function e(){var t=window.getSelection().toString();var n=window.getSelection().anchorOffset;if(t&&t.indexOf("_")<0){this.answer.push({text:t,start:n,length:t.length});this.ascending_sort(this.answer,"start");this.answer.forEach(function(e){if(e.start>n){e.start=e.start+7-t.length}});var i=this.Question.question.split("");i.splice(n,t.length,"_______");this.Question.question=i.join("")}},handleClose:function e(t){var n=this.Question.question.split("");n.splice(t.start,7,t.text);this.answer.forEach(function(e){if(e.start>t.start){e.start=e.start+t.length-7;e.end=e.end+t.length-7}});this.Question.question=n.join("");this.answer.splice(this.answer.indexOf(t),1)},ascending_sort:function e(t,n){return t.sort(function(e,t){var i=e[n];var s=t[n];return i<s?-1:i>s?1:0})},handleSwitcherChange:function e(t){if(!t&&!this.readonly){this.Question.explain=null}},handleInputChange:function e(t,n){},handleInputFocus:function e(t,n){}}};t.default=i},122:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var i=n(178);var s=n(108);for(var o in s)if(o!=="default")(function(e){n.d(t,e,function(){return s[e]})})(o);var r=n(154);var a=n(2);var l=Object(a["a"])(s["default"],i["a"],i["b"],false,null,"6b4d1f1b",null);t["default"]=l.exports},137:function(e,t,n){"use strict";n.r(t);var i=n(179);var s=n(111);for(var o in s)if(o!=="default")(function(e){n.d(t,e,function(){return s[e]})})(o);var r=n(155);var a=n(2);var l=Object(a["a"])(s["default"],i["a"],i["b"],false,null,"599a38c5",null);t["default"]=l.exports},138:function(e,t,n){"use strict";n.r(t);var i=n(180);var s=n(114);for(var o in s)if(o!=="default")(function(e){n.d(t,e,function(){return s[e]})})(o);var r=n(156);var a=n(2);var l=Object(a["a"])(s["default"],i["a"],i["b"],false,null,"21a198c9",null);t["default"]=l.exports},139:function(e,t,n){"use strict";n.r(t);var i=n(181);var s=n(117);for(var o in s)if(o!=="default")(function(e){n.d(t,e,function(){return s[e]})})(o);var r=n(157);var a=n(2);var l=Object(a["a"])(s["default"],i["a"],i["b"],false,null,"67d0155d",null);t["default"]=l.exports},140:function(e,t,n){"use strict";n.r(t);var i=n(182);var s=n(120);for(var o in s)if(o!=="default")(function(e){n.d(t,e,function(){return s[e]})})(o);var r=n(158);var a=n(2);var l=Object(a["a"])(s["default"],i["a"],i["b"],false,null,"76fd816c",null);t["default"]=l.exports},154:function(e,t,n){"use strict";var i=n(110);var s=n.n(i);var o=s.a},155:function(e,t,n){"use strict";var i=n(113);var s=n.n(i);var o=s.a},156:function(e,t,n){"use strict";var i=n(116);var s=n.n(i);var o=s.a},157:function(e,t,n){"use strict";var i=n(119);var s=n.n(i);var o=s.a},158:function(e,t,n){"use strict";var i=n(122);var s=n.n(i);var o=s.a},178:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",[n("bk-form",{ref:"Question",attrs:{model:e.Question,"label-width":0}},[n("div",{staticClass:"question"},[n("p",[e._v("题目:")]),e._v(" "),n("bk-form-item",{attrs:{required:true,rules:e.rules.question,property:"question","error-display-type":"normal"}},[n("bk-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",readonly:e.readonly,autosize:{minRows:2,maxRows:2},placeholder:"请输入题目内容"},model:{value:e.Question.question,callback:function(t){e.$set(e.Question,"question",t)},expression:"Question.question"}})],1)],1),e._v(" "),n("div",{staticClass:"options"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.answer,property:"answer","error-display-type":"normal"}},[n("bk-radio-group",{model:{value:e.Question.answer,callback:function(t){e.$set(e.Question,"answer",t)},expression:"Question.answer"}},[n("div",{staticClass:"optionAC"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_A","icon-offset":50,"error-display-type":"tooltips"}},[n("bk-radio",{attrs:{name:"A",value:"A",disabled:e.readonly}},[n("bk-input",{ref:"optionA",staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项A内容",size:"large"},model:{value:e.Question.option_A,callback:function(t){e.$set(e.Question,"option_A",t)},expression:"Question.option_A"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("A")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"optionBD"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_B","icon-offset":50}},[n("bk-radio",{attrs:{name:"B",value:"B",disabled:e.readonly}},[n("bk-input",{ref:"optionB",staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项B内容",size:"large"},on:{enter:function(t){e.nextOption("C")}},model:{value:e.Question.option_B,callback:function(t){e.$set(e.Question,"option_B",t)},expression:"Question.option_B"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("B")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"optionAC"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_C","icon-offset":50}},[n("bk-radio",{attrs:{name:"C",value:"C",disabled:e.readonly}},[n("bk-input",{ref:"optionC",staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项C内容",size:"large"},on:{enter:function(t){e.nextOption("D")}},model:{value:e.Question.option_C,callback:function(t){e.$set(e.Question,"option_C",t)},expression:"Question.option_C"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("C")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"optionBD"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_D","icon-offset":50}},[n("bk-radio",{attrs:{name:"D",value:"D",disabled:e.readonly}},[n("bk-input",{ref:"optionD",staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项D内容",size:"large"},on:{enter:function(t){e.nextOption("A")}},model:{value:e.Question.option_D,callback:function(t){e.$set(e.Question,"option_D",t)},expression:"Question.option_D"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("D")])])],2)],1)],1)],1)])],1)],1),e._v(" "),n("div",{staticClass:"rightAnswer"},[n("p",[e._v("正确答案："+e._s(e.Question.answer))])]),e._v(" "),n("div",{staticClass:"analysis"},[n("bk-switcher",{attrs:{theme:"primary","show-text":true,"on-text":"解析","off-text":"解析"},on:{change:e.handleSwitcherChange},model:{value:e.explainOpen,callback:function(t){e.explainOpen=t},expression:"explainOpen"}}),e._v(" "),!e.readonly?n("bk-button",{staticClass:"reset",attrs:{theme:"primary"},on:{click:e.reset}},[e._v("重置")]):e._e(),e._v(" "),!e.readonly?n("bk-button",{staticClass:"upload",attrs:{theme:"primary"},on:{click:e.checkData}},[e._v("上传")]):e._e(),e._v(" "),e.explainOpen?n("bk-form-item",{attrs:{required:true,rules:e.rules.explain,property:"explain","error-display-type":"normal"}},[e.explainOpen?n("bk-input",{staticStyle:{width:"100%",display:"block","margin-top":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},placeholder:"请输入答案解析内容"},model:{value:e.Question.explain,callback:function(t){e.$set(e.Question,"explain",t)},expression:"Question.explain"}}):e._e()],1):e._e()],1),e._v(" "),n("div",{staticClass:"upload"})])],1)};var s=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return s})},179:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",{staticClass:"body"},[n("bk-form",{ref:"Question",attrs:{model:e.Question,"label-width":0}},[n("div",{staticClass:"question"},[n("p",[e._v("题目:")]),e._v(" "),n("bk-form-item",{attrs:{required:true,rules:e.rules.question,property:"question","error-display-type":"normal"}},[n("bk-input",{staticStyle:{width:"84%"},attrs:{type:"textarea",readonly:e.readonly,autosize:{minRows:2,maxRows:2},placeholder:"请输入题目内容"},model:{value:e.Question.question,callback:function(t){e.$set(e.Question,"question",t)},expression:"Question.question"}})],1)],1),e._v(" "),n("div",{staticClass:"options"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.answer,property:"answer","error-display-type":"tooltips"}},[n("bk-checkbox-group",{model:{value:e.Question.answer,callback:function(t){e.$set(e.Question,"answer",t)},expression:"Question.answer"}},[n("div",{staticClass:"option"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_A","icon-offset":50,"error-display-type":"tooltips"}},[n("bk-checkbox",{attrs:{name:"A",value:"A",disabled:e.readonly}},[n("bk-input",{staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项A内容",size:"large"},model:{value:e.Question.option_A,callback:function(t){e.$set(e.Question,"option_A",t)},expression:"Question.option_A"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("A")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"option"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_B","icon-offset":50,"error-display-type":"tooltips"}},[n("bk-checkbox",{attrs:{name:"B",value:"B",disabled:e.readonly}},[n("bk-input",{staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项B内容",size:"large"},model:{value:e.Question.option_B,callback:function(t){e.$set(e.Question,"option_B",t)},expression:"Question.option_B"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("B")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"option"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_C","icon-offset":50,"error-display-type":"tooltips"}},[n("bk-checkbox",{attrs:{name:"C",value:"C",disabled:e.readonly}},[n("bk-input",{staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项C内容",size:"large"},model:{value:e.Question.option_C,callback:function(t){e.$set(e.Question,"option_C",t)},expression:"Question.option_C"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("C")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"option"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_D","icon-offset":50,"error-display-type":"tooltips"}},[n("bk-checkbox",{attrs:{name:"D",value:"D",disabled:e.readonly}},[n("bk-input",{staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项D内容",size:"large"},model:{value:e.Question.option_D,callback:function(t){e.$set(e.Question,"option_D",t)},expression:"Question.option_D"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("D")])])],2)],1)],1)],1),e._v(" "),n("div",{staticClass:"option"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.option,property:"option_E","icon-offset":50,"error-display-type":"tooltips"}},[n("bk-checkbox",{attrs:{name:"E",value:"E",disabled:e.readonly}},[n("bk-input",{staticStyle:{width:"400px"},attrs:{readonly:e.readonly,placeholder:"请输入选项E内容",size:"large"},model:{value:e.Question.option_E,callback:function(t){e.$set(e.Question,"option_E",t)},expression:"Question.option_E"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"group-text"},[e._v("E")])])],2)],1)],1)],1)])],1)],1),e._v(" "),n("div",{staticClass:"rightAnswer"},[e._v("\n            正确答案：\n            "),e._l(e.Question.answer,function(t){return n("p",{key:t,staticStyle:{display:"inline-block","margin-right":"5px"}},[e._v(e._s(t))])})],2),e._v(" "),n("div",{staticClass:"analysis"},[n("bk-switcher",{attrs:{theme:"primary","show-text":true,"on-text":"解析","off-text":"解析"},on:{change:e.handleSwitcherChange},model:{value:e.explainOpen,callback:function(t){e.explainOpen=t},expression:"explainOpen"}}),e._v(" "),!e.readonly?n("bk-button",{staticClass:"reset",attrs:{theme:"primary"},on:{click:e.reset}},[e._v("重置")]):e._e(),e._v(" "),!e.readonly?n("bk-button",{staticClass:"upload",attrs:{theme:"primary"},on:{click:e.checkData}},[e._v("上传")]):e._e(),e._v(" "),e.explainOpen?n("bk-form-item",{attrs:{required:true,rules:e.rules.explain,property:"explain","error-display-type":"normal"}},[e.explainOpen?n("bk-input",{staticStyle:{width:"84%",display:"block","margin-top":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},readonly:e.readonly,placeholder:"请输入答案解析内容"},model:{value:e.Question.explain,callback:function(t){e.$set(e.Question,"explain",t)},expression:"Question.explain"}}):e._e()],1):e._e()],1)])],1)};var s=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return s})},180:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",[n("bk-form",{ref:"Question",attrs:{model:e.Question,"label-width":0}},[n("div",{staticClass:"question"},[n("p",[e._v("题目:")]),e._v(" "),n("bk-form-item",{attrs:{required:true,rules:e.rules.question,property:"question","error-display-type":"normal"}},[n("bk-input",{staticStyle:{width:"84%"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},readonly:e.readonly,placeholder:"请输入题目内容"},model:{value:e.Question.question,callback:function(t){e.$set(e.Question,"question",t)},expression:"Question.question"}})],1)],1),e._v(" "),!e.readonly?n("div",{staticClass:"options"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.answer,property:"answer","error-display-type":"normal"}},[n("bk-radio-group",{model:{value:e.Question.answer,callback:function(t){e.$set(e.Question,"answer",t)},expression:"Question.answer"}},[n("div",{staticClass:"option",on:{click:function(t){e.choose("true")}}},[n("bk-radio",{staticStyle:{"margin-top":"38px","margin-left":"10px"},attrs:{name:"T",value:"true"}},[e._v("\n                            T\n                        ")])],1),e._v(" "),n("div",{staticClass:"option",on:{click:function(t){e.choose("false")}}},[n("bk-radio",{staticStyle:{"margin-top":"38px","margin-left":"10px"},attrs:{name:"F",value:"false"}},[e._v("\n                            F\n                        ")])],1)])],1)],1):e._e(),e._v(" "),n("div",{staticClass:"rightAnswer"},[n("p",[e._v("正确答案："+e._s(e.Question.answer))])]),e._v(" "),n("div",{staticClass:"analysis"},[n("bk-switcher",{attrs:{theme:"primary","show-text":true,"on-text":"解析","off-text":"解析"},on:{change:e.handleSwitcherChange},model:{value:e.explainOpen,callback:function(t){e.explainOpen=t},expression:"explainOpen"}}),e._v(" "),!e.readonly?n("bk-button",{staticClass:"reset",attrs:{theme:"primary"},on:{click:e.reset}},[e._v("重置")]):e._e(),e._v(" "),!e.readonly?n("bk-button",{staticClass:"upload",attrs:{theme:"primary"},on:{click:e.checkData}},[e._v("上传")]):e._e(),e._v(" "),e.explainOpen?n("bk-form-item",{attrs:{required:true,rules:e.rules.explain,property:"explain","error-display-type":"normal"}},[e.explainOpen?n("bk-input",{staticStyle:{width:"84%",display:"block","margin-top":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},readonly:e.readonly,placeholder:"请输入答案解析内容"},model:{value:e.Question.explain,callback:function(t){e.$set(e.Question,"explain",t)},expression:"Question.explain"}}):e._e()],1):e._e()],1)])],1)};var s=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return s})},181:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",[n("bk-form",{ref:"Question",attrs:{model:e.Question,"label-width":0}},[n("div",{staticClass:"question"},[n("p",[e._v("题目:")]),e._v(" "),n("bk-form-item",{attrs:{required:true,rules:e.rules.question,property:"question","error-display-type":"normal"}},[n("bk-input",{staticStyle:{width:"84%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},readonly:e.readonly,placeholder:"请输入题目内容"},model:{value:e.Question.question,callback:function(t){e.$set(e.Question,"question",t)},expression:"Question.question"}})],1)],1),e._v(" "),n("div",{staticClass:"rightAnswer"},[n("p",[e._v("正确答案:")]),e._v(" "),n("bk-form-item",{attrs:{required:true,rules:e.rules.answer,property:"answer","error-display-type":"normal"}},[n("bk-input",{staticStyle:{width:"84%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},readonly:e.readonly,placeholder:"请输入正确答案内容"},model:{value:e.Question.answer,callback:function(t){e.$set(e.Question,"answer",t)},expression:"Question.answer"}})],1)],1),e._v(" "),n("div",{staticClass:"analysis"},[n("bk-switcher",{attrs:{theme:"primary","show-text":true,"on-text":"解析","off-text":"解析"},on:{change:e.handleSwitcherChange},model:{value:e.explainOpen,callback:function(t){e.explainOpen=t},expression:"explainOpen"}}),e._v(" "),!e.readonly?n("bk-button",{staticClass:"reset",attrs:{theme:"primary"},on:{click:e.reset}},[e._v("重置")]):e._e(),e._v(" "),!e.readonly?n("bk-button",{staticClass:"upload",attrs:{theme:"primary"},on:{click:e.checkData}},[e._v("上传")]):e._e(),e._v(" "),e.explainOpen?n("bk-form-item",{attrs:{required:true,rules:e.rules.explain,property:"explain","error-display-type":"normal"}},[e.explainOpen?n("bk-input",{staticStyle:{width:"84%",display:"block","margin-top":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},readonly:e.readonly,placeholder:"请输入答案解析内容"},model:{value:e.Question.explain,callback:function(t){e.$set(e.Question,"explain",t)},expression:"Question.explain"}}):e._e()],1):e._e()],1)])],1)};var s=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return s})},182:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",{staticClass:"question-fill"},[n("bk-form",{ref:"Question",attrs:{model:e.Question,"label-width":0}},[n("div",{staticClass:"question"},[n("p",[e._v("题目:")]),e._v(" "),n("div",{staticClass:"question1"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.question,property:"question","error-display-type":"normal"}},[n("bk-input",{staticStyle:{width:"84%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},readonly:e.readonly,placeholder:"请输入题目内容"},on:{focus:e.handleInputFocus,change:e.handleInputChange,mouseup:e.handleMouseSelect},model:{value:e.Question.question,callback:function(t){e.$set(e.Question,"question",t)},expression:"Question.question"}})],1)],1),e._v(" "),!e.readonly?n("p",[e._v("用鼠标选中下列文本的内容进行挖空:")]):e._e(),e._v(" "),n("bk-form-item",{attrs:{required:true,rules:e.rules.answer,property:"answer","error-display-type":"normal"}},[!e.readonly?n("div",{staticClass:"hollow"},[n("label",{staticStyle:{display:"block"},on:{mouseup:e.handleMouseSelect}},[e._v(e._s(e.Question.question))])]):e._e()])],1),e._v(" "),n("div",{staticClass:"rightAnswer"},[n("p",{staticStyle:{display:"inline-block"}},[e._v("正确答案:")]),e._v(" "),e._l(e.answer,function(t,i){return n("bk-tag",{key:t,staticStyle:{display:"inline-block"},attrs:{theme:"info",closable:!e.readonly,"disable-transitions":false},on:{close:function(n){e.handleClose(t)}}},[e._v("\n                "+e._s("填空"+(i+1)+":"+t.text)+"\n            ")])})],2),e._v(" "),n("div",{staticClass:"analysis"},[n("bk-switcher",{attrs:{theme:"primary","show-text":true,"on-text":"解析","off-text":"解析"},on:{change:e.handleSwitcherChange},model:{value:e.explainOpen,callback:function(t){e.explainOpen=t},expression:"explainOpen"}}),e._v(" "),!e.readonly?n("bk-button",{staticClass:"reset",attrs:{theme:"primary"},on:{click:e.reset}},[e._v("重置")]):e._e(),e._v(" "),!e.readonly?n("bk-button",{staticClass:"upload",attrs:{theme:"primary"},on:{click:e.checkData}},[e._v("上传")]):e._e(),e._v(" "),e.explainOpen?n("bk-form-item",{attrs:{required:true,rules:e.rules.explain,property:"explain","error-display-type":"normal"}},[e.explainOpen?n("bk-input",{staticStyle:{width:"84%",display:"block","margin-top":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},placeholder:"请输入答案解析内容"},model:{value:e.Question.explain,callback:function(t){e.$set(e.Question,"explain",t)},expression:"Question.explain"}}):e._e()],1):e._e()],1)])],1)};var s=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return s})}}]);