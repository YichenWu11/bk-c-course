(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{109:function(t,e,r){"use strict";r.r(e);var i=r(110);var s=r.n(i);for(var a in i)if(a!=="default")(function(t){r.d(e,t,function(){return i[t]})})(a);e["default"]=s.a},110:function(t,e,r){"use strict";var i=r(0);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var s=i(r(15));var a=i(r(16));var n=i(r(29));function u(t,e){var r=typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=o(t))||e&&t&&typeof t.length==="number"){if(r)t=r;var i=0;var s=function t(){};return{s:s,n:function e(){if(i>=t.length)return{done:true};return{done:false,value:t[i++]}},e:function t(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=true,n=false,u;return{s:function e(){r=r.call(t)},n:function t(){var e=r.next();a=e.done;return e},e:function t(e){n=true;u=e},f:function t(){try{if(!a&&r.return!=null)r.return()}finally{if(n)throw u}}}}function o(t,e){if(!t)return;if(typeof t==="string")return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor)r=t.constructor.name;if(r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}function l(t,e){if(e==null||e>t.length)e=t.length;for(var r=0,i=new Array(e);r<e;r++){i[r]=t[r]}return i}var c={name:"answer_question_index",data:function t(){return{statusFilters:[{text:"进行中",value:"UNDERWAY"},{text:"已提交",value:"REALSUBMITTED"},{text:"已批改",value:"REALMARKED"},{text:"已结束",value:"FINISHED"},{text:"未开始",value:"NOTSTART"}],chapterStatusFilters:[],exerciseList:[],currentExerciseList:[],middleExerciseList:[],pagination:{current:1,count:0,limit:10},startAnswer:{primary:{visible:false,headerPosition:"left",paperId:0}}}},watch:{"$store.state.currentCourseId":function t(){this.getExerciseList()}},mounted:function t(){this.getExerciseList()},methods:{changeList:function t(e){var r=this;this.middleExerciseList=[];for(var i in e){if(e[i].length!==0){var s=u(e[i]),a;try{var o=function t(){var e;var i=a.value;var s=[];if(typeof i==="string"){s=r.exerciseList.filter(function(t){return t.student_status===i})}if(typeof i==="number"){s=r.exerciseList.filter(function(t){return t.chapter_id===i})}(e=r.middleExerciseList).push.apply(e,(0,n.default)(s))};for(s.s();!(a=s.n()).done;){o()}}catch(t){s.e(t)}finally{s.f()}}else{this.middleExerciseList=this.exerciseList}}this.pagination.current=1;this.pagination.count=this.middleExerciseList.length;this.updateCurrentExerciseList()},toAnswer:function t(e,r){this.startAnswer.primary.visible=false;this.$router.push({name:"answer_question_detail",query:{id:e,isAccomplish:r}})},toAnalyze:function t(e,r){this.$router.push({name:"answer_question_detail",query:{id:e,isAccomplish:r}})},handlePageLimitChange:function t(){this.pagination.limit=arguments[0];this.pagination.current=1;this.updateCurrentExerciseList()},handlePageChange:function t(e){this.pagination.current=e;this.updateCurrentExerciseList()},updateCurrentExerciseList:function t(){this.currentExerciseList=[];var e=this.pagination.limit*this.pagination.current;if(e>this.pagination.count){e=this.pagination.count}for(var r=(this.pagination.current-1)*this.pagination.limit;r<e;r++){this.middleExerciseList[r].start_time=this.dayjs(this.middleExerciseList[r].start_time).format("YYYY-MM-DD HH:mm:ss");this.middleExerciseList[r].end_time=this.dayjs(this.middleExerciseList[r].end_time).format("YYYY-MM-DD HH:mm:ss");this.currentExerciseList.push(this.middleExerciseList[r])}},getExerciseList:function t(){var e=this;return(0,a.default)(s.default.mark(function t(){return s.default.wrap(function t(r){while(1){switch(r.prev=r.next){case 0:e.exerciseList=[];e.middleExerciseList=[];e.$http.get("/course/paper/",{params:{course_id:e.$store.state.currentCourseId}}).then(function(t){var r,i,s,a,o;var l=t.data;var c=[];var d=[];var p=[];var f=[];var m=[];var h=u(l),v;try{for(h.s();!(v=h.n()).done;){var _=v.value;if((new Date).getTime()<Date.parse(_.start_time)){_.student_status="NOTSTART";m.push(_)}else if((_.student_status==="SUBMITTED"||_.student_status==="MARKED")&&(new Date).getTime()>=Date.parse(_.start_time)&&(new Date).getTime()<=Date.parse(_.end_time)){_.student_status="REALSUBMITTED";d.push(_)}else if(_.student_status==="MARKED"&&_.status==="MARKED"&&(new Date).getTime()>Date.parse(_.end_time)){_.student_status="REALMARKED";p.push(_)}else if((new Date).getTime()>=Date.parse(_.start_time)&&(new Date).getTime()<=Date.parse(_.end_time)){_.student_status="UNDERWAY";c.push(_)}else if((new Date).getTime()>Date.parse(_.end_time)){_.student_status="FINISHED";f.push(_)}e.chapterStatusFilters.push({text:_.chapter_name,value:_.chapter_id})}}catch(t){h.e(t)}finally{h.f()}(r=e.exerciseList).push.apply(r,c);(i=e.exerciseList).push.apply(i,d);(s=e.exerciseList).push.apply(s,p);(a=e.exerciseList).push.apply(a,f);(o=e.exerciseList).push.apply(o,m);e.exerciseList=e.exerciseList.filter(function(t){return t.status!=="DRAFT"});e.middleExerciseList=e.exerciseList;e.pagination.count=e.middleExerciseList.length;var w=function t(){var r=new Map;var i=u(e.chapterStatusFilters),s;try{for(i.s();!(s=i.n()).done;){var a=s.value;if(!r.has(a.value)){r.set(a.value,a)}}}catch(t){i.e(t)}finally{i.f()}return(0,n.default)(r.values())};e.chapterStatusFilters=w();e.updateCurrentExerciseList()});case 3:case"end":return r.stop()}}},t)}))()}}};e.default=c},111:function(t,e,r){},164:function(t,e,r){"use strict";var i=r(111);var s=r.n(i);var a=s.a},187:function(t,e,r){"use strict";var i=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"content"},[r("bk-table",{attrs:{data:t.currentExerciseList,size:"media","max-height":"560",pagination:t.pagination},on:{"filter-change":t.changeList,"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange}},[r("bk-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),t._v(" "),r("bk-table-column",{attrs:{label:"章节名称",prop:"chapter_name",width:"150",filters:t.chapterStatusFilters,"filter-multiple":false}}),t._v(" "),r("bk-table-column",{attrs:{label:"习题名称",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[e.row.student_status==="NOTSTART"?r("bk-button",{attrs:{theme:"primary",text:"",disabled:""}},[t._v(t._s(e.row.paper_name))]):e.row.student_status==="REALSUBMITTED"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.toAnswer(e.row.id,false)}}},[t._v(t._s(e.row.paper_name))]):e.row.student_status==="REALMARKED"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.toAnalyze(e.row.id,true)}}},[t._v(t._s(e.row.paper_name))]):e.row.student_status==="UNDERWAY"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.startAnswer.primary.visible=true;t.startAnswer.primary.paperId=e.row.id}}},[t._v(t._s(e.row.paper_name))]):e.row.student_status==="FINISHED"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.toAnswer(e.row.id,false)}}},[t._v(t._s(e.row.paper_name))]):t._e()],1)]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"开始时间",prop:"start_time",width:"200"}}),t._v(" "),r("bk-table-column",{attrs:{label:"截止时间",prop:"end_time",width:"200"}}),t._v(" "),r("bk-table-column",{attrs:{label:"我的分数",prop:"score",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.student_status==="REALMARKED"?e.row.score:"———")+"\n                ")]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"习题状态",width:"150",prop:"student_status",filters:t.statusFilters,"filter-multiple":true},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.student_status==="NOTSTART"?r("bk-tag",{attrs:{theme:"filled",radius:"10px",type:"filled"}},[t._v("未开始")]):e.row.student_status==="REALSUBMITTED"?r("bk-tag",{attrs:{theme:"warning",radius:"10px",type:"filled"}},[t._v("已提交")]):e.row.student_status==="REALMARKED"?r("bk-tag",{attrs:{theme:"info",radius:"10px",type:"filled"}},[t._v("已批改")]):e.row.student_status==="UNDERWAY"?r("bk-tag",{attrs:{theme:"success",radius:"10px",type:"filled"}},[t._v("进行中")]):e.row.student_status==="FINISHED"?r("bk-tag",{attrs:{theme:"danger",radius:"10px",type:"filled"}},[t._v("已结束")]):t._e()]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[e.row.student_status==="NOTSTART"?r("bk-button",{attrs:{theme:"primary",text:"",disabled:""}},[t._v("暂未开始")]):e.row.student_status==="REALSUBMITTED"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.toAnswer(e.row.id,false)}}},[t._v("查看作答情况")]):e.row.student_status==="REALMARKED"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.toAnalyze(e.row.id,true)}}},[t._v("查看解析")]):e.row.student_status==="UNDERWAY"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.startAnswer.primary.visible=true;t.startAnswer.primary.paperId=e.row.id}}},[t._v("开始答题")]):e.row.student_status==="FINISHED"?r("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(r){t.toAnswer(e.row.id,false)}}},[t._v("查看作答情况")]):t._e()],1)]}}])})],1),t._v(" "),r("bk-dialog",{attrs:{theme:"primary","mask-close":false,"header-position":t.startAnswer.primary.headerPosition,title:"开始答题"},on:{confirm:function(e){t.toAnswer(t.startAnswer.primary.paperId,false)}},model:{value:t.startAnswer.primary.visible,callback:function(e){t.$set(t.startAnswer.primary,"visible",e)},expression:"startAnswer.primary.visible"}},[t._v("\n            是否确认开始答题？\n        ")])],1)])};var s=[];r.d(e,"a",function(){return i});r.d(e,"b",function(){return s})},81:function(t,e,r){"use strict";r.r(e);var i=r(187);var s=r(109);for(var a in s)if(a!=="default")(function(t){r.d(e,t,function(){return s[t]})})(a);var n=r(164);var u=r(2);var o=Object(u["a"])(s["default"],i["a"],i["b"],false,null,"d8aa9766",null);e["default"]=o.exports}}]);