(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{100:function(e,t,a){"use strict";a.r(t);var s=a(101);var i=a.n(s);for(var o in s)if(o!=="default")(function(e){a.d(t,e,function(){return s[e]})})(o);t["default"]=i.a},101:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=a(17);var i={data:function e(){return{type:false,course:[],teacherList:[],studentList:[],course_id:[],List:[{course_id:"4",course_name:"course.course_name",course_introduction:"course.course_introduction",teacher:"3190911031(None)",create_people:"course.create_people",manage_student:["3190931021(黄渭涵)"]}],formData:{course_name:"",teacher_id:"",teacher:"",manage_student_ids:[],manage_student:[],course_introduction:""},formData2:{id:"",course_name:"",teacher_id:"",teacher:"",manage_student_id:[],manage_student:[],course_introduction:""},formData3:"",visible:{addcourse:{isshow:false,headerPosition:"center"},deletcourse:{isshow:false,headerPosition:"center"},altercourse:{isshow:false,headerPosition:"center"},introduction:{isshow:false,headerPosition:"center"},deleteall:{isshow:false,headerPosition:"center"}},pagingConfigTwo:{current:1,limit:10,count:30,location:"left",align:"right",showLimit:true,limitList:[5,10,20,30]}}},created:function e(){this.getList()},methods:{getList:function e(){var t=this;this.$http.get("/course/find_courses/").then(function(e){if(e.result){t.course=e.data;t.pagingConfigTwo.count=t.course.length;var a=t.pagingConfigTwo.current*t.pagingConfigTwo.limit;var i=a-t.pagingConfigTwo.limit;t.List=t.course.slice(i,a);s.bus.$emit("updateCourseList")}else{t.$bkMessage({message:"页面加载出错，请刷新重试！",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.$http.get("/course/search_member_info/?member_identify=TEACHER").then(function(e){if(e.result){t.teacherList=e.data}else{t.$bkMessage({message:"页面加载出错，请刷新重试！",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.$http.get("/course/search_member_info/?member_identify=STUDENT").then(function(e){if(e.result){t.studentList=e.data}else{t.$bkMessage({message:"页面加载出错，请刷新重试！",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},beforeAdd:function e(){this.studentList=this.studentList.concat(this.teacherList);this.visible.addcourse.isshow=true},addCourse:function e(){var t=this;if(this.formData.course_name===""||this.formData.teacher_id===""){this.$bkMessage({message:"请补全内容",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2});this.visible.addcourse.isshow=true}else{var a=this;a.teacherList.forEach(function(e){if(e.member_id===a.formData.teacher_id){a.formData.teacher=e.member_display_name}});var s=a.studentList.filter(function(e){var t=a.formData.manage_student_ids.length;for(var s=0;s<t;s++){if(e.member_id===a.formData.manage_student_ids[s]){return e}}});s.forEach(function(e){t.formData.manage_student.push(e.member_display_name)});this.$http.post("/course/manage_course/",this.formData).then(function(e){if(e.result){t.$bkMessage({message:"创建成功",delay:1e3,theme:"success",offsetY:60,ellipsisLine:2});t.$store.commit("updateCourseId",0);t.getList();t.List=t.course.slice(0,t.pagingConfigTwo.limit);t.formData.course_name="";t.formData.teacher_id="";t.formData.teacher="";t.formData.manage_student=[];t.formData.manage_student_ids=[];t.formData.course_introduction=""}else{t.$bkMessage({message:"创建失败，请重试",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})}},handleSelect:function e(t){var a=this;this.course_id=[];t.forEach(function(e){a.course_id.push(e.course_id)})},removeBefor:function e(t){this.course_id=[];this.formData3=t;this.course_id.push(t.course_id);this.visible.deletcourse.isshow=true},removeCourse:function e(t){var a=this;this.$http.delete("/course/manage_course/",{params:{course_id:JSON.stringify(t)}}).then(function(e){if(e.result){a.$bkMessage({message:e.message,delay:1e3,theme:"success",offsetY:60,ellipsisLine:2});a.$store.commit("updateCourseId",0);a.getList()}else{a.$bkMessage({message:e.message,delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.formData3=""},alterBefore:function e(t){this.formData2.manage_student=[];this.studentList=this.studentList.concat(this.teacherList);this.formData2.id=t.course_id;this.formData2.course_name=t.course_name;this.formData2.course_introduction=t.course_introduction;this.formData2.manage_student=t.manage_student;this.formData2.teacher=t.teacher;this.formData2.manage_student_id.length=0;this.visible.altercourse.isshow=true},alterCourse:function e(){var t=this;var a=this;a.teacherList.forEach(function(e){if(e.member_display_name===a.formData2.teacher){a.formData2.teacher_id=e.member_id}});a.formData2.manage_student.forEach(function(e){var t=a.studentList.length;for(var s=0;s<t;s++){if(a.studentList[s].member_display_name===e){a.formData2.manage_student_id.push(a.studentList[s].member_id)}}});this.$http.put("/course/manage_course/",this.formData2).then(function(e){if(e.result){t.getList();t.$bkMessage({message:e.message,delay:1e3,theme:"success",offsetY:60,ellipsisLine:2})}else{t.$bkMessage({message:e.message,delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},showDetail:function e(t){this.formData3=t;this.visible.introduction.isshow=true},pageChange:function e(){var t=this.pagingConfigTwo.current*this.pagingConfigTwo.limit;var a=t-this.pagingConfigTwo.limit;this.List=this.course.slice(a,t)},limitChange:function e(){this.List=this.course.slice(0,this.pagingConfigTwo.limit)}}};t.default=i},102:function(e,t,a){},161:function(e,t,a){"use strict";var s=a(102);var i=a.n(s);var o=i.a},184:function(e,t,a){"use strict";var s=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper-head"},[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",outline:true},on:{click:e.beforeAdd}},[e._v("创建课程")]),e._v(" "),a("bk-button",{attrs:{theme:"primary",outline:true},on:{click:function(t){e.visible.deleteall.isshow=true}}},[e._v("批量删除")])],1),e._v(" "),false?undefined:e._e(),e._v(" "),a("div",{staticClass:"wrapper-body"},[a("bk-table",{staticStyle:{"margin-top":"10px"},attrs:{size:"small",data:e.List,pagination:e.pagination},on:{"selection-change":e.handleSelect,"row-mouse-enter":e.handleRowMouseEnter,"row-mouse-leave":e.handleRowMouseLeave,"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange}},[a("bk-table-column",{attrs:{type:"selection",width:"60",align:"center","header-align":"center"}}),e._v(" "),a("bk-table-column",{attrs:{label:"课程id",prop:"course_id",align:"center","header-align":"center"}}),e._v(" "),a("bk-table-column",{attrs:{label:"课程名称",prop:"course_name",align:"center","header-align":"center"}}),e._v(" "),a("bk-table-column",{attrs:{label:"任课老师",prop:"teacher",align:"center","header-align":"center"}}),e._v(" "),a("bk-table-column",{attrs:{label:"课程管理员",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.manage_student.length!==0?a("bk-popover",{attrs:{placement:"top"}},[a("span",[e._v(e._s(t.row.manage_student.toString().slice(0,12)+(t.row.manage_student.toString().length>12?"...":"")))]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},e._l(t.row.manage_student,function(t,s){return a("div",{key:s,staticClass:"bk-text pt10 pb5 pl10 pr10"},[e._v(e._s(t))])}),0)]):e._e(),e._v(" "),t.row.manage_student.length===0?a("div",[e._v("---")]):e._e()]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:"创建人",prop:"create_people",align:"center","header-align":"center"}}),e._v(" "),a("bk-table-column",{attrs:{label:"课程简介","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){e.showDetail(t.row)}}},[e._v(e._s(t.row.course_introduction))])]}}])}),e._v(" "),a("bk-table-column",{attrs:{label:"操作",width:"150",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){e.alterBefore(t.row)}}},[e._v("修改")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){e.removeBefor(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticStyle:{"padding-top":"10px"}},[a("bk-pagination",{attrs:{size:"small",current:e.pagingConfigTwo.current,limit:e.pagingConfigTwo.limit,count:e.pagingConfigTwo.count,location:e.pagingConfigTwo.location,align:e.pagingConfigTwo.align,"show-limit":e.pagingConfigTwo.showLimit,"limit-list":e.pagingConfigTwo.limitList},on:{"update:current":function(t){e.$set(e.pagingConfigTwo,"current",t)},"update:limit":function(t){e.$set(e.pagingConfigTwo,"limit",t)},change:e.pageChange,"limit-change":e.limitChange}})],1)],1),e._v(" "),a("div",{attrs:{id:"dialoge"}},[a("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false,"header-position":e.visible.addcourse.headerPosition,title:"创建课程"},on:{confirm:e.addCourse},model:{value:e.visible.addcourse.isshow,callback:function(t){e.$set(e.visible.addcourse,"isshow",t)},expression:"visible.addcourse.isshow"}},[a("bk-form",{ref:"validateForm",attrs:{model:e.formData,rules:e.rules}},[a("bk-form-item",{attrs:{label:"课程名称",required:true,property:"course_name","error-display-type":"normal"}},[a("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入课程名称"},model:{value:e.formData.course_name,callback:function(t){e.$set(e.formData,"course_name",t)},expression:"formData.course_name"}})],1),e._v(" "),a("bk-form-item",{attrs:{label:"任课老师",required:true,property:"teacher","error-display-type":"normal"}},[a("bk-select",{staticStyle:{width:"250px"},attrs:{disabled:false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},model:{value:e.formData.teacher_id,callback:function(t){e.$set(e.formData,"teacher_id",t)},expression:"formData.teacher_id"}},e._l(e.teacherList,function(e){return a("bk-option",{key:e.member_id,attrs:{id:e.member_id,name:e.member_display_name}})}),1)],1),e._v(" "),a("bk-form-item",{attrs:{label:"课程管理员"}},[a("bk-select",{staticStyle:{width:"250px"},attrs:{disabled:false,multiple:"","display-tag":"","auto-height":false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},model:{value:e.formData.manage_student_ids,callback:function(t){e.$set(e.formData,"manage_student_ids",t)},expression:"formData.manage_student_ids"}},e._l(e.studentList,function(e){return a("bk-option",{key:e.member_id,attrs:{id:e.member_id,name:e.member_display_name}})}),1)],1),e._v(" "),a("bk-form-item",{attrs:{label:"课程简介"}},[a("bk-input",{staticStyle:{width:"250px"},attrs:{type:"textarea",placeholder:"在这里输入课程简介"},model:{value:e.formData.course_introduction,callback:function(t){e.$set(e.formData,"course_introduction",t)},expression:"formData.course_introduction"}})],1)],1)],1),e._v(" "),a("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false,"header-position":e.visible.addcourse.headerPosition,title:"删除除课程"},on:{confirm:function(t){e.removeCourse(e.course_id)}},model:{value:e.visible.deletcourse.isshow,callback:function(t){e.$set(e.visible.deletcourse,"isshow",t)},expression:"visible.deletcourse.isshow"}},[a("div",{staticClass:"dialog-body"},[a("p",[e._v("确定要删除"+e._s(e.formData3.course_name)+"这门课程吗")])])]),e._v(" "),a("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false,"header-position":e.visible.deleteall.headerPosition},on:{confirm:function(t){e.removeCourse(e.course_id)}},model:{value:e.visible.deleteall.isshow,callback:function(t){e.$set(e.visible.deleteall,"isshow",t)},expression:"visible.deleteall.isshow"}},[a("div",{staticClass:"dialog-body"},[a("p",[e._v("确定要删除"+e._s(e.course_id.length)+"项内容吗？")])])]),e._v(" "),a("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false,"header-position":e.visible.addcourse.headerPosition,title:"课程简介"},model:{value:e.visible.introduction.isshow,callback:function(t){e.$set(e.visible.introduction,"isshow",t)},expression:"visible.introduction.isshow"}},[a("div",{staticClass:"dialog-body"},[e._v("\n                "+e._s(e.formData3.course_introduction)+"\n            ")])]),e._v(" "),a("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false,"header-position":e.visible.addcourse.headerPosition},on:{confirm:e.alterCourse},model:{value:e.visible.altercourse.isshow,callback:function(t){e.$set(e.visible.altercourse,"isshow",t)},expression:"visible.altercourse.isshow"}},[a("bk-form",{ref:"validateForm",attrs:{model:e.formData2,rules:e.rules}},[a("bk-form-item",{attrs:{label:"课程名称",required:true,property:"course_name","error-display-type":"normal"}},[a("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入课程名称"},model:{value:e.formData2.course_name,callback:function(t){e.$set(e.formData2,"course_name",t)},expression:"formData2.course_name"}})],1),e._v(" "),a("bk-form-item",{attrs:{label:"任课老师",required:true,property:"teacher","error-display-type":"normal"}},[a("bk-select",{staticStyle:{width:"250px"},attrs:{disabled:false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},model:{value:e.formData2.teacher,callback:function(t){e.$set(e.formData2,"teacher",t)},expression:"formData2.teacher"}},e._l(e.teacherList,function(e){return a("bk-option",{key:e.member_id,attrs:{id:e.member_display_name,name:e.member_display_name}})}),1)],1),e._v(" "),a("bk-form-item",{attrs:{label:"学生管理员"}},[a("bk-select",{staticStyle:{width:"250px"},attrs:{disabled:false,multiple:"","display-tag":"","auto-height":false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},model:{value:e.formData2.manage_student,callback:function(t){e.$set(e.formData2,"manage_student",t)},expression:"formData2.manage_student"}},e._l(e.studentList,function(e){return a("bk-option",{key:e.member_id,attrs:{id:e.member_display_name,name:e.member_display_name}})}),1)],1),e._v(" "),a("bk-form-item",{attrs:{label:"课程简介"}},[a("bk-input",{staticStyle:{width:"250px"},attrs:{type:"textarea",placeholder:"在这里输入课程简介"},model:{value:e.formData2.course_introduction,callback:function(t){e.$set(e.formData2,"course_introduction",t)},expression:"formData2.course_introduction"}})],1)],1)],1)],1)])};var i=[];a.d(t,"a",function(){return s});a.d(t,"b",function(){return i})},78:function(e,t,a){"use strict";a.r(t);var s=a(184);var i=a(100);for(var o in i)if(o!=="default")(function(e){a.d(t,e,function(){return i[e]})})(o);var r=a(161);var n=a(2);var l=Object(n["a"])(i["default"],s["a"],s["b"],false,null,"4d6ca61f",null);t["default"]=l.exports}}]);