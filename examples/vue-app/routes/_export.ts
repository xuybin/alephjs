// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var T=Object.defineProperty;var h=(n,a)=>{for(var t in a)T(n,t,{get:a[t],enumerable:!0})};var _={};h(_,{default:()=>O});import{defineComponent as S}from"vue";import{unref as N,withCtx as D,createTextVNode as B,mergeProps as P}from"https://esm.sh/vue@3.2.37";import{ssrRenderComponent as I,ssrRenderAttrs as F}from"https://esm.sh/@vue/server-renderer@3.2.37";import{Link as G}from"aleph/vue";var x=S({__name:"_404",__ssrInlineRender:!0,setup(n){return(a,t,o,l)=>{t(`<div${F(P({class:"screen e404"},l))}><h2> Ooooooops, nothing here! </h2><p>`),t(I(N(G),{to:"/"},{default:D((c,s,r,e)=>{if(s)s("Go back to the homepage");else return[B("Go back to the homepage")]}),_:1},o)),t("</p></div>")}}});x.__file="./routes/_404.vue";var O=x;var v={};h(v,{default:()=>e0});import{defineComponent as X,h as Y}from"vue";import{defineComponent as E}from"vue";import{unref as J,withCtx as q,createVNode as i,openBlock as z,createBlock as U}from"https://esm.sh/vue@3.2.37";import{ssrRenderComponent as W,ssrRenderAttrs as K}from"https://esm.sh/@vue/server-renderer@3.2.37";import{Link as Q}from"aleph/vue";var u=E({__name:"Header",__ssrInlineRender:!0,setup(n){return(a,t,o,l)=>{t(`<header${K(l)} data-v-403cfb05><div data-v-403cfb05><h1 data-v-403cfb05>`),t(W(J(Q),{to:"/"},{default:q((c,s,r,e)=>{if(s)s(`<svg viewBox="0 0 60 12.09" fill="currentColor" data-v-403cfb05${e}><title data-v-403cfb05${e}>Aleph.js</title><path d="M5.86,6.11c0,.07,0,.18.06.31s0,.28.08.44a4.06,4.06,0,0,1,.07.56q0,.31,0,.6V9.7H4.54V7.86h-3V9.7H0V8a6.71,6.71,0,0,1,.07-1c0-.35.09-.6.13-.76S.26,6,.27,6L1.41,1.89A1.65,1.65,0,0,1,2,1a1.68,1.68,0,0,1,1-.34,1.68,1.68,0,0,1,1,.34,1.7,1.7,0,0,1,.61.88L5.83,6Zm-4.05.17H4.29L3.21,2.35a.16.16,0,0,0-.16-.12.13.13,0,0,0-.15.12Z" data-v-403cfb05${e}></path><path d="M13.57,9.31a2.42,2.42,0,0,1-1.51.51A2.49,2.49,0,0,1,9.57,7.33v-5H7.62V.78h3.52V7.33a.89.89,0,0,0,.27.65.86.86,0,0,0,.65.28.93.93,0,0,0,.59-.21A.9.9,0,0,0,13,7.53L14.46,8A2.46,2.46,0,0,1,13.57,9.31Z" data-v-403cfb05${e}></path><path d="M18.81,2.94a2.38,2.38,0,0,1,1.77.73,2.42,2.42,0,0,1,.73,1.77V7H17.4v.32a1,1,0,0,0,.94.94h.55a.88.88,0,0,0,.58-.21,1,1,0,0,0,.33-.52L21.3,8a2.47,2.47,0,0,1-.89,1.33,2.36,2.36,0,0,1-1.52.52h-.55a2.51,2.51,0,0,1-2.5-2.5V5.44a2.49,2.49,0,0,1,2.5-2.5Zm.94,2.73V5.44a.94.94,0,0,0-.94-.94h-.47a.88.88,0,0,0-.66.28.87.87,0,0,0-.28.66v.23Z" data-v-403cfb05${e}></path><path d="M28.37,3.66a2.45,2.45,0,0,1,.73,1.78V7.32a2.45,2.45,0,0,1-.73,1.77,2.41,2.41,0,0,1-1.78.73h-.08a2.28,2.28,0,0,1-1.33-.42V12H23.62V3.06h1.56v.3a2.28,2.28,0,0,1,1.33-.42h.08A2.44,2.44,0,0,1,28.37,3.66Zm-.84,1.78a.94.94,0,0,0-.94-.94h-.46a.92.92,0,0,0-.66.28.91.91,0,0,0-.29.66V7.32a1,1,0,0,0,.95.94h.46a.94.94,0,0,0,.94-.94Z" data-v-403cfb05${e}></path><path d="M36.07,3.66a2.45,2.45,0,0,1,.73,1.78V9.7H35.24V5.44a1,1,0,0,0-.94-.94h-.47a.9.9,0,0,0-.66.28.87.87,0,0,0-.28.66V9.7H31.32V.78h1.57V3.36a2.26,2.26,0,0,1,1.33-.42h.08A2.44,2.44,0,0,1,36.07,3.66Z" data-v-403cfb05${e}></path><path d="M41,7.48h1.57V9.7H41Z" data-v-403cfb05${e}></path><path d="M51.17,9v.76a2.32,2.32,0,1,1-4-1.65,2.24,2.24,0,0,1,1.65-.67h.75V4.62H47.07V3.06h4.1V7.45H52.6V9ZM48.86,9a.75.75,0,0,0-.76.76.71.71,0,0,0,.22.53.74.74,0,0,0,.54.23.72.72,0,0,0,.53-.23.71.71,0,0,0,.22-.53V9Zm.75-9h1.56V2.23H49.61Z" data-v-403cfb05${e}></path><path d="M56,7.81a.56.56,0,0,0,.17.32.53.53,0,0,0,.34.13h1.41a.51.51,0,0,0,.51-.51c0-.34-.22-.53-.67-.56l-1.11-.12a2.21,2.21,0,0,1-1.45-.66A1.9,1.9,0,0,1,54.65,5a2,2,0,0,1,.6-1.47,2,2,0,0,1,1.46-.6h1.18a2,2,0,0,1,1.27.43,2,2,0,0,1,.74,1.12l-1.5.44a.53.53,0,0,0-.17-.31.52.52,0,0,0-.34-.12H56.71a.49.49,0,0,0-.36.15.48.48,0,0,0-.14.36c0,.3.2.47.63.51L58,5.64a2.22,2.22,0,0,1,1.42.68A2,2,0,0,1,60,7.75a2.08,2.08,0,0,1-2.07,2.07H56.52a2,2,0,0,1-1.27-.44,2.05,2.05,0,0,1-.74-1.11Z" data-v-403cfb05${e}></path></svg>`);else return[(z(),U("svg",{viewBox:"0 0 60 12.09",fill:"currentColor"},[i("title",null,"Aleph.js"),i("path",{d:"M5.86,6.11c0,.07,0,.18.06.31s0,.28.08.44a4.06,4.06,0,0,1,.07.56q0,.31,0,.6V9.7H4.54V7.86h-3V9.7H0V8a6.71,6.71,0,0,1,.07-1c0-.35.09-.6.13-.76S.26,6,.27,6L1.41,1.89A1.65,1.65,0,0,1,2,1a1.68,1.68,0,0,1,1-.34,1.68,1.68,0,0,1,1,.34,1.7,1.7,0,0,1,.61.88L5.83,6Zm-4.05.17H4.29L3.21,2.35a.16.16,0,0,0-.16-.12.13.13,0,0,0-.15.12Z"}),i("path",{d:"M13.57,9.31a2.42,2.42,0,0,1-1.51.51A2.49,2.49,0,0,1,9.57,7.33v-5H7.62V.78h3.52V7.33a.89.89,0,0,0,.27.65.86.86,0,0,0,.65.28.93.93,0,0,0,.59-.21A.9.9,0,0,0,13,7.53L14.46,8A2.46,2.46,0,0,1,13.57,9.31Z"}),i("path",{d:"M18.81,2.94a2.38,2.38,0,0,1,1.77.73,2.42,2.42,0,0,1,.73,1.77V7H17.4v.32a1,1,0,0,0,.94.94h.55a.88.88,0,0,0,.58-.21,1,1,0,0,0,.33-.52L21.3,8a2.47,2.47,0,0,1-.89,1.33,2.36,2.36,0,0,1-1.52.52h-.55a2.51,2.51,0,0,1-2.5-2.5V5.44a2.49,2.49,0,0,1,2.5-2.5Zm.94,2.73V5.44a.94.94,0,0,0-.94-.94h-.47a.88.88,0,0,0-.66.28.87.87,0,0,0-.28.66v.23Z"}),i("path",{d:"M28.37,3.66a2.45,2.45,0,0,1,.73,1.78V7.32a2.45,2.45,0,0,1-.73,1.77,2.41,2.41,0,0,1-1.78.73h-.08a2.28,2.28,0,0,1-1.33-.42V12H23.62V3.06h1.56v.3a2.28,2.28,0,0,1,1.33-.42h.08A2.44,2.44,0,0,1,28.37,3.66Zm-.84,1.78a.94.94,0,0,0-.94-.94h-.46a.92.92,0,0,0-.66.28.91.91,0,0,0-.29.66V7.32a1,1,0,0,0,.95.94h.46a.94.94,0,0,0,.94-.94Z"}),i("path",{d:"M36.07,3.66a2.45,2.45,0,0,1,.73,1.78V9.7H35.24V5.44a1,1,0,0,0-.94-.94h-.47a.9.9,0,0,0-.66.28.87.87,0,0,0-.28.66V9.7H31.32V.78h1.57V3.36a2.26,2.26,0,0,1,1.33-.42h.08A2.44,2.44,0,0,1,36.07,3.66Z"}),i("path",{d:"M41,7.48h1.57V9.7H41Z"}),i("path",{d:"M51.17,9v.76a2.32,2.32,0,1,1-4-1.65,2.24,2.24,0,0,1,1.65-.67h.75V4.62H47.07V3.06h4.1V7.45H52.6V9ZM48.86,9a.75.75,0,0,0-.76.76.71.71,0,0,0,.22.53.74.74,0,0,0,.54.23.72.72,0,0,0,.53-.23.71.71,0,0,0,.22-.53V9Zm.75-9h1.56V2.23H49.61Z"}),i("path",{d:"M56,7.81a.56.56,0,0,0,.17.32.53.53,0,0,0,.34.13h1.41a.51.51,0,0,0,.51-.51c0-.34-.22-.53-.67-.56l-1.11-.12a2.21,2.21,0,0,1-1.45-.66A1.9,1.9,0,0,1,54.65,5a2,2,0,0,1,.6-1.47,2,2,0,0,1,1.46-.6h1.18a2,2,0,0,1,1.27.43,2,2,0,0,1,.74,1.12l-1.5.44a.53.53,0,0,0-.17-.31.52.52,0,0,0-.34-.12H56.71a.49.49,0,0,0-.36.15.48.48,0,0,0-.14.36c0,.3.2.47.63.51L58,5.64a2.22,2.22,0,0,1,1.42.68A2,2,0,0,1,60,7.75a2.08,2.08,0,0,1-2.07,2.07H56.52a2,2,0,0,1-1.27-.44,2.05,2.05,0,0,1-.74-1.11Z"})]))]}),_:1},o)),t('</h1><nav data-v-403cfb05><a href="https://deno.land/x/aleph" data-v-403cfb05><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-403cfb05><title data-v-403cfb05>Deno Land</title><mask id="deno-logo-mask" data-v-403cfb05><circle fill="white" cx="256" cy="256" r="230" data-v-403cfb05></circle></mask><circle fill="currentColor" cx="256" cy="256" r="256" data-v-403cfb05></circle><path mask="url(#deno-logo-mask)" stroke="white" stroke-width="25" stroke-linecap="round" d="M71 319l17-63M107.964 161.095l17-63M36.93 221l17-63M125.964 385l17-63M160.372 486.829l17-63M230 456.329l17-63M206.257 92.587l17-63M326.395 173.004l17-63M452.182 304.693l17-63M409.124 221l17-63M299.027 54.558l17-63M400.624 86.058l17-63" data-v-403cfb05></path><path mask="url(#deno-logo-mask)" fill="white" stroke="black" stroke-width="12" d="M252.225 344.418c-86.65 2.61-144.576-34.5-144.576-94.363 0-61.494 60.33-111.145 138.351-111.145 37.683 0 69.532 10.65 94.392 30.092 21.882 17.113 37.521 40.526 45.519 66.312 2.574 8.301 22.863 83.767 61.112 227.295l1.295 4.86-159.793 74.443-1.101-8.063c-8.85-64.778-16.546-113.338-23.076-145.634-3.237-16.004-6.178-27.96-8.79-35.794-1.227-3.682-2.355-6.361-3.303-7.952a12.56 12.56 0 00-.03-.05z" data-v-403cfb05></path><circle mask="url(#a)" cx="262" cy="203" r="16" data-v-403cfb05></circle></svg></a><a href="https://github.com/alephjs/aleph.js" data-v-403cfb05><svg viewBox="0 0 1024 1024" fill="currentColor" data-v-403cfb05><title data-v-403cfb05>Github</title><path d="M512-0.001c-282.778 0-512.001 229.581-512.001 512.871 0 226.56 146.688 418.816 350.157 486.606 25.6 4.71 34.919-11.111 34.919-24.73 0-12.134-0.409-44.442-0.666-87.193-142.439 30.976-172.493-68.761-172.493-68.761-23.245-59.29-56.832-75.059-56.832-75.059-46.489-31.744 3.533-31.129 3.533-31.129 51.354 3.584 78.388 52.838 78.388 52.838 45.671 78.336 119.86 55.705 148.992 42.599 4.71-33.126 17.92-55.705 32.563-68.506-113.664-12.954-233.217-56.986-233.217-253.492 0-55.962 19.968-101.785 52.685-137.626-5.274-12.954-22.835-65.126 5.017-135.681 0 0 43.008-13.824 140.8 52.531 38.411-10.894 82.534-17.188 128.116-17.255h0.038c43.52 0.205 87.297 5.888 128.205 17.255 97.741-66.355 140.646-52.583 140.646-52.583 27.955 70.605 10.343 122.778 5.12 135.731 32.768 35.84 52.633 81.664 52.633 137.626 0 197.018-119.757 240.384-233.78 253.082 18.38 15.821 34.714 47.104 34.714 94.977 0 68.506-0.614 123.853-0.614 140.646 0 13.722 9.216 29.696 35.226 24.678 205.067-70.281 349.85-261.406 349.85-486.346 0-0.073 0-0.146 0-0.22v0.012c0-283.29-229.274-512.871-512.001-512.871z" data-v-403cfb05></path></svg></a></nav></div></header>')}}});u.__file="./components/Header.vue";u.__scopeId="data-v-403cfb05";var y=u;var k=X({render(){return[Y(y),this.$slots.default?this.$slots.default():[]]}});k.__file="./routes/_app.vue";var e0=k;var g={};h(g,{default:()=>d0});import{defineComponent as t0}from"vue";import{unref as H,withCtx as C,createVNode as M,createTextVNode as a0,mergeProps as o0}from"https://esm.sh/vue@3.2.37";import{ssrRenderComponent as R,ssrRenderAttrs as s0}from"https://esm.sh/@vue/server-renderer@3.2.37";import{Link as r0,Head as n0}from"aleph/vue";var $=t0({__name:"index",__ssrInlineRender:!0,setup(n){return(a,t,o,l)=>{t(`<div${s0(o0({class:"screen index"},l))}>`),t(R(H(n0),null,{default:C((c,s,r,e)=>{if(s)s(`<title${e}>Aleph.js</title><meta name="description" content="The Fullstack Framework in Deno."${e}>`);else return[M("title",null,"Aleph.js"),M("meta",{name:"description",content:"The Fullstack Framework in Deno."})]}),_:1},o)),t('<p class="logo"><img src="/assets/logo.svg" width="70" height="70" title="Aleph.js"><img src="/assets/vue.svg" width="70" height="70" title="Vue.js"></p><h1> The Fullstack Framework in Deno. </h1><p><strong>Aleph.js</strong> gives you the best developer experience for building web applications <br> with modern toolings. <label>Vue.js experimental version</label>. </p><div class="external-links"><a href="https://alephjs.org/docs/get-started" target="_blank"> Get Started </a><a href="https://alephjs.org/docs" target="_blank"> Docs </a><a href="https://github.com/alephjs/aleph.js" target="_blank"> Github </a></div><nav>'),t(R(H(r0),{role:"button",to:"/todos"},{default:C((c,s,r,e)=>{if(s)s(" Todos App Demo ");else return[a0(" Todos App Demo ")]}),_:1},o)),t("</nav></div>")}}});$.__file="./routes/index.vue";var d0=$;var b={};h(b,{data:()=>g0,default:()=>V0});import{defineComponent as l0}from"vue";import{unref as V,withCtx as i0,createVNode as Z,mergeProps as c0}from"https://esm.sh/vue@3.2.37";import{ssrRenderComponent as p0,ssrIncludeBooleanAttr as j,ssrRenderClass as m0,ssrRenderAttrs as f0,ssrInterpolate as h0,ssrRenderList as _0}from"https://esm.sh/@vue/server-renderer@3.2.37";import{Head as u0,useData as v0}from"aleph/vue";var d={todos:JSON.parse(window.localStorage?.getItem("todos")||"[]")},g0={cacheTtl:0,get:()=>Response.json(d),put:async n=>{let{message:a}=await n.json();if(typeof a=="string"){let t=Date.now();d.todos.push({id:t,message:a,completed:!1}),window.localStorage?.setItem("todos",JSON.stringify(d.todos))}return Response.json(d)},patch:async n=>{let{id:a,message:t,completed:o}=await n.json(),l=d.todos.find(c=>c.id===a);return l&&(typeof t=="string"&&(l.message=t),typeof o=="boolean"&&(l.completed=o),window.localStorage?.setItem("todos",JSON.stringify(d.todos))),Response.json(d)},delete:async n=>{let{id:a}=await n.json();return a&&(d.todos=d.todos.filter(t=>t.id!==a),window.localStorage?.setItem("todos",JSON.stringify(d.todos))),Response.json(d)}},L=l0({__name:"todos",__ssrInlineRender:!0,setup(n){let{data:a,isMutating:t,mutation:o}=v0();async function l(r){let{id:e}=r,f=!r.completed;o.patch({id:e,completed:f},"replace")}async function c(r){r.preventDefault();let e=r.currentTarget,m=new FormData(e).get("message")?.toString().trim();m&&(o.put({message:m},{optimisticUpdate:p=>({todos:[...p.todos,{id:0,message:m,completed:!1}]}),replace:!0}),e.reset(),setTimeout(()=>{e.querySelector("input")?.focus()},0))}function s(r){o.delete({id:r.id},"replace")}return(r,e,f,m)=>{e(`<div${f0(c0({className:"todos-app"},m))}>`),e(p0(V(u0),null,{default:i0((p,w,b0,A)=>{if(w)w(`<title${A}>Todos</title><meta name="description" content="A todos app powered by Aleph.js"${A}>`);else return[Z("title",null,"Todos"),Z("meta",{name:"description",content:"A todos app powered by Aleph.js"})]}),_:1},f)),e("<h1><span>Todos</span></h1><ul><!--[-->"),_0(V(a)?.todos,p=>{e(`<li><input type="checkbox"${j(p.completed)?" checked":""}><label class="${m0(p.completed?"completed":"")}">${h0(p.message)}</label><button></button></li>`)}),e(`<!--]--></ul><form><input${j(!!V(t))?" disabled":""} type="text" name="message" placeholder="What needs to be done?" autofocus="autofocus" autocomplete="off"></form></div>`)}}});L.__file="./routes/todos.vue";var V0=L;var F0={"/_404":_,"/_app":v,"/":g,"/todos":b,depGraph:{"modules":[{"specifier":"./routes/_404.vue"},{"specifier":"./routes/_app.vue","deps":[{"specifier":"./components/Header.vue"}]},{"specifier":"./routes/index.vue","inlineCSS":"\n.index .logo {\n  display: flex;\n}\n.index h1 {\n  margin: 0;\n  line-height: 1.4;\n  font-size: 28px;\n  font-weight: 700;\n  text-align: center;\n  color: #000;\n}\n.index p {\n  margin: 0;\n  line-height: 1.2;\n  font-size: 18px;\n  text-align: center;\n  color: #333;\n}\n.index p strong {\n  font-weight: 600;\n}\n.index p label {\n  display: inline-block;\n  font-weight: 600;\n  border-bottom: 4px #42b883 solid;\n}\n.index .external-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 12px;\n}\n.index .external-links a {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #666;\n  text-decoration: none;\n  transition: color 0.15s ease-in;\n}\n.index .external-links a:hover {\n  color: #000;\n}\n.index .external-links a:after {\n  display: block;\n  width: 16px;\n  height: 16px;\n  background: url(../assets/external-link.svg) no-repeat center;\n  background-size: contain;\n  content: \"\";\n}\n.index nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 45px;\n}\n.index nav a {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 240px;\n  height: 50px;\n  border: 1px solid #ddd;\n  border-radius: 25px;\n  color: #454545;\n  transition: border-color 0.15s ease-in;\n  text-decoration: none;\n  cursor: pointer;\n}\n.index nav a:hover {\n  color: #000;\n  border-color: #aaa;\n}\n"},{"specifier":"./routes/todos.vue","inlineCSS":"\n.todos-app {\n  width: 90%;\n  max-width: 600px;\n  margin: 0 auto;\n  padding-top: 60px;\n}\n.todos-app h1 {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px;\n  font-size: 48px;\n  font-weight: 200;\n  text-align: left;\n  color: #333;\n}\n.todos-app h1 em {\n  font-size: 24px;\n  font-weight: 100;\n  color: #ccc;\n}\n.todos-app ul {\n  width: 100%;\n  list-style: none;\n  margin-bottom: 6px;\n}\n.todos-app ul li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 6px;\n}\n.todos-app ul li:hover {\n  background-color: #f9f9f9;\n}\n.todos-app ul li input {\n  position: relative;\n  appearance: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.todos-app ul li input:hover,\n.todos-app ul li input:checked {\n  border: 1px solid #b8dad4;\n}\n.todos-app ul li input:checked::after {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #5dc2af;\n  content: \" \";\n}\n.todos-app ul li label {\n  line-height: 20px;\n  flex-grow: 1;\n  font-size: 20px;\n  font-weight: 300;\n  color: #333;\n  transition: color 0.15s ease;\n}\n.todos-app ul li label.completed {\n  color: #aaa;\n  text-decoration: line-through;\n}\n.todos-app ul li button {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n  color: #ddd;\n  transition: color 0.15s ease;\n  cursor: pointer;\n}\n.todos-app ul li:hover button {\n  color: #ccc;\n}\n.todos-app ul li button:hover {\n  color: #c26c5d;\n}\n.todos-app ul li button:before,\n.todos-app ul li button:after {\n  content: \" \";\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  width: 16px;\n  height: 1px;\n  margin-left: -8px;\n  background: currentColor;\n}\n.todos-app ul li button:before {\n  transform: rotate(45deg);\n}\n.todos-app ul li button:after {\n  transform: rotate(-45deg);\n}\n.todos-app form {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px;\n}\n.todos-app form input {\n  display: block;\n  width: 100%;\n  padding: 6px 12px;\n  margin: 0 -12px;\n  border-radius: 6px;\n  font-size: 24px;\n  font-weight: 300;\n  color: #333;\n}\n.todos-app form input:focus {\n  background-color: #f9f9f9;\n  outline: none;\n}\n.todos-app form input::placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #aaa;\n}\n"},{"specifier":"./components/Header.vue","inlineCSS":"\nheader[data-v-403cfb05] {\n  width: 100%;\n  height: 80px;\n  position: sticky;\n  top: 0;\n}\nheader > div[data-v-403cfb05] {\n  margin: 0 auto;\n  width: 90%;\n  max-width: 900px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nh1 a[data-v-403cfb05] {\n  color: #333;\n}\nh1 a svg[data-v-403cfb05] {\n  width: auto;\n  height: 16px;\n}\nnav[data-v-403cfb05] {\n  display: flex;\n  align-items: center;\n  gap: 20px\n}\nnav a[data-v-403cfb05] {\n  color: #454545;\n}\nnav a svg[data-v-403cfb05] {\n  width: 20px;\n  height: 20px;\n}\na svg[data-v-403cfb05] {\n  display: inline-flex;\n}\na[data-v-403cfb05]:hover {\n  color: #000 !important;\n}\n"}]}};export{F0 as default};