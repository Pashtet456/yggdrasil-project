(self.webpackChunk=self.webpackChunk||[]).push([[126],{7757:(t,e,r)=>{t.exports=r(5666)},9865:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".app-form[data-v-5d7516a4]{width:400px;margin:auto}",""]);const i=o},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function y(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,i)&&(b=x);var _=g.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),c(_,u,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},7490:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(7757),o=r.n(n),i=r(9273);function a(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}}const c={name:"AppForm",props:{url:{type:String,required:!0},method:{type:String,default:null},passApiKey:{type:Boolean,default:!1},disableDefaultSubmit:{type:Boolean,default:!1},values:{type:Object,required:!0},submitText:{type:String,default:"Отправить"}},data:function(t){return{isFormValid:!1,loading:!1,privacy:!1,rules:{required:function(t){return!(null===t||"string"==typeof t&&0===t.length||Array.isArray(t)&&0===t.length||!1)||"Обязательное поле"},phone:function(t){return!t||10===t.length||"Телефон не может быть меньше 10 символов"},name:function(t){return!t||(/^[a-zA-Z0-9]+$/.test(t)?t.length>15?"Пароль должен быть не более 15 символов":!(t.length<3)||"Пароль должен быть не менее 3 символов":"Никнейм должен содержать только латинские буквы и цифры")},email:function(t){return!t||/.+@.+\..+/.test(t)||"Некорректный email"},password:function(t){return!t||(/^[a-zA-Z0-9]+$/.test(t)?t.length<6?"Пароль должен быть не менее 6 символов":/(?=.*[0-9])/.test(t)?!!/(?=.*[a-zA-Z])/.test(t)||"Пароль должен содержать латинские буквы":"Пароль должен содержать цифры":"Пароль должен содержать только латинские буквы и цифры")},passwordConfirm:function(e){return!t.values.password||e===t.values.password||"Пароли должны совпадать"},privacy:function(t){return!!t||"Вы должны согласиться, чтобы продолжить!"}}}},methods:{submit:function(){var t=this;setTimeout(u(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.reload(),t.$refs.form.validate()){e.next=4;break}return e.abrupt("return");case 4:return t.$emit("update:loading",t.loading=!0),e.next=7,axios.get(t.url);case 7:r=e.sent,t.$emit("update:success",r),console.log(r),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof i.gK||console.log(e.t0.message),t.$emit("update:error",e.t0);case 16:return e.prev=16,setTimeout((function(){t.$emit("update:loading",t.loading=!1)}),500),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])}))),0)},reload:function(){this.$emit("update:error",null)},clear:function(){this.$refs.form.reset()}}};var s=r(3379),l=r.n(s),f=r(9865),h={insert:"head",singleton:!1};l()(f.Z,h);f.Z.locals;const p=(0,r(1900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",staticClass:"app-form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.isFormValid,callback:function(e){t.isFormValid=e},expression:"isFormValid"}},[r("div",{staticClass:"primary--text"},[t._t("header")],2),t._v(" "),t._t("body",[t._t("fields",null,null,{rules:t.rules,loading:t.loading}),t._v(" "),t._t("submit",[t.disableDefaultSubmit?t._e():r("v-btn",{attrs:{disabled:!t.isFormValid,block:"",loading:t.loading,type:"submit"}},[t._v("\n                "+t._s(t.submitText)+"\n            ")])],null,{loading:t.loading,submit:t.submit})],null,{rules:t.rules,loading:t.loading,submit:t.submit,clear:t.clear}),t._v(" "),t._t("footer")],2)}),[],!1,null,"5d7516a4",null).exports},4126:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});const n={name:"AppNickNameInputForm",components:{AppForm:r(7490).Z},data:function(){return{values:{name:null,checkbox:null}}}};var o=r(1900);const i={name:"LotrMain",components:{AppNickNameInputForm:(0,o.Z)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-form",{attrs:{url:"/api/auth/",width:"400",values:t.values,"submit-text":"Сохранить"},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",[t._v("Введите Никнейм")])]},proxy:!0},{key:"fields",fn:function(e){var n=e.rules;return[r("v-text-field",{attrs:{rules:[n.required,n.name],outlined:"",label:"Никнейм"},model:{value:t.values.name,callback:function(e){t.$set(t.values,"name",e)},expression:"values.name"}}),t._v(" "),r("v-checkbox",{staticClass:"mt-0 mb-4",attrs:{rules:[n.privacy],outlined:"",label:"Я понимаю, что этот никнейм нельзя будет изменить бесплатно.",type:"checkbox"},model:{value:t.values.checkbox,callback:function(e){t.$set(t.values,"checkbox",e)},expression:"values.checkbox"}})]}}])})}),[],!1,null,null,null).exports}};const a=(0,o.Z)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"ma-auto",attrs:{rounded:"",width:"500px"}},[e("app-nick-name-input-form")],1)}),[],!1,null,null,null).exports}}]);