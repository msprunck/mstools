"use strict";(self.webpackChunkmstools=self.webpackChunkmstools||[]).push([[138],{616:(n,e,_)=>{_.a(n,(async(t,r)=>{try{_.d(e,{Mr:()=>j,Sd:()=>x,d$:()=>T,qH:()=>E,IM:()=>P,YQ:()=>I,xP:()=>A,Xb:()=>B,fg:()=>C,hd:()=>q,ej:()=>H,Wl:()=>L,xn:()=>S,OP:()=>D,eY:()=>U,ug:()=>J,JC:()=>W,T_:()=>X,Mk:()=>Y,wm:()=>$,dp:()=>F,yP:()=>N,gW:()=>Q,Ni:()=>R,m_:()=>V,yB:()=>z,Sn:()=>G,$L:()=>K,wJ:()=>Z,XP:()=>nn,jp:()=>en,lB:()=>_n,fP:()=>tn,bj:()=>rn,ib:()=>on,kH:()=>cn,Or:()=>an,oH:()=>dn});var o=_(914);n=_.hmd(n);var c=t([o]);o=(c.then?(await c)():c)[0];let i=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let a=new Uint8Array;function d(){return 0===a.byteLength&&(a=new Uint8Array(o.memory.buffer)),a}function u(n,e){return i.decode(d().subarray(n,n+e))}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let l=f.length;function b(n){l===f.length&&f.push(f.length+1);const e=l;return l=f[e],f[e]=n,e}function w(n){return f[n]}function g(n){n<36||(f[n]=l,l=n)}function s(n){const e=w(n);return g(n),e}let y=0,h=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof h.encodeInto?function(n,e){return h.encodeInto(n,e)}:function(n,e){const _=h.encode(n);return e.set(_),{read:n.length,written:_.length}};function v(n,e,_){if(void 0===_){const _=h.encode(n),t=e(_.length);return d().subarray(t,t+_.length).set(_),y=_.length,t}let t=n.length,r=e(t);const o=d();let c=0;for(;c<t;c++){const e=n.charCodeAt(c);if(e>127)break;o[r+c]=e}if(c!==t){0!==c&&(n=n.slice(c)),r=_(r,t,t=c+3*n.length);const e=d().subarray(r+c,r+t);c+=p(n,e).written}return y=c,r}let m=new Int32Array;function k(){return 0===m.byteLength&&(m=new Int32Array(o.memory.buffer)),m}function j(n){try{const t=o.__wbindgen_add_to_stack_pointer(-16),r=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),c=y;o.encode_base64(t,r,c);var e=k()[t/4+0],_=k()[t/4+1];return u(e,_)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(e,_)}}function x(n){try{const a=o.__wbindgen_add_to_stack_pointer(-16),d=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),f=y;o.decode_base64(a,d,f);var e=k()[a/4+0],_=k()[a/4+1],t=k()[a/4+2],r=k()[a/4+3],c=e,i=_;if(r)throw c=0,i=0,s(t);return u(c,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,i)}}function T(n){try{const t=o.__wbindgen_add_to_stack_pointer(-16),r=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),c=y;o.encode_url(t,r,c);var e=k()[t/4+0],_=k()[t/4+1];return u(e,_)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(e,_)}}function E(n){try{const a=o.__wbindgen_add_to_stack_pointer(-16),d=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),f=y;o.decode_url(a,d,f);var e=k()[a/4+0],_=k()[a/4+1],t=k()[a/4+2],r=k()[a/4+3],c=e,i=_;if(r)throw c=0,i=0,s(t);return u(c,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,i)}}function P(n){try{const a=o.__wbindgen_add_to_stack_pointer(-16),d=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),f=y;o.decode_jwt(a,d,f);var e=k()[a/4+0],_=k()[a/4+1],t=k()[a/4+2],r=k()[a/4+3],c=e,i=_;if(r)throw c=0,i=0,s(t);return u(c,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,i)}}function I(n){try{const a=o.__wbindgen_add_to_stack_pointer(-16),d=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),f=y;o.format_json(a,d,f);var e=k()[a/4+0],_=k()[a/4+1],t=k()[a/4+2],r=k()[a/4+3],c=e,i=_;if(r)throw c=0,i=0,s(t);return u(c,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,i)}}function A(){try{const _=o.__wbindgen_add_to_stack_pointer(-16);o.gen_uuid(_);var n=k()[_/4+0],e=k()[_/4+1];return u(n,e)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(n,e)}}function B(n){try{const t=o.__wbindgen_add_to_stack_pointer(-16),r=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),c=y;o.json_to_edn(t,r,c);var e=k()[t/4+0],_=k()[t/4+1];return u(e,_)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(e,_)}}function C(n){try{const a=o.__wbindgen_add_to_stack_pointer(-16),d=v(n,o.__wbindgen_malloc,o.__wbindgen_realloc),f=y;o.edn_to_json(a,d,f);var e=k()[a/4+0],_=k()[a/4+1],t=k()[a/4+2],r=k()[a/4+3],c=e,i=_;if(r)throw c=0,i=0,s(t);return u(c,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,i)}}function M(n,e){try{return n.apply(this,e)}catch(n){o.__wbindgen_exn_store(b(n))}}function O(n,e){return d().subarray(n/1,n/1+e)}function q(n,e){return b(new Error(u(n,e)))}function H(n){return b(w(n).process)}function L(n){const e=w(n);return"object"==typeof e&&null!==e}function S(n){return b(w(n).versions)}function D(n){return b(w(n).node)}function U(n){return"string"==typeof w(n)}function J(n){s(n)}function W(n){return b(w(n).crypto)}function X(n){return b(w(n).msCrypto)}function Y(){return b(n)}function $(){return M((function(n,e,_){return b(w(n).require(u(e,_)))}),arguments)}function F(){return M((function(n,e){w(n).getRandomValues(w(e))}),arguments)}function N(){return M((function(n,e,_){w(n).randomFillSync(O(e,_))}),arguments)}function Q(n,e){return b(new Function(u(n,e)))}function R(){return M((function(n,e){return b(w(n).call(w(e)))}),arguments)}function V(n){return b(w(n))}function z(){return M((function(){return b(self.self)}),arguments)}function G(){return M((function(){return b(window.window)}),arguments)}function K(){return M((function(){return b(globalThis.globalThis)}),arguments)}function Z(){return M((function(){return b(_.g.global)}),arguments)}function nn(n){return void 0===w(n)}function en(n){return b(w(n).buffer)}function _n(n){return b(new Uint8Array(w(n)))}function tn(n,e,_){w(n).set(w(e),_>>>0)}function rn(n){return w(n).length}function on(n){return b(new Uint8Array(n>>>0))}function cn(n,e,_){return b(w(n).subarray(e>>>0,_>>>0))}function an(n,e){throw new Error(u(n,e))}function dn(){return b(o.memory)}r()}catch(n){r(n)}}))},138:(n,e,_)=>{_.a(n,(async(n,t)=>{try{_.r(e);var r=_(616),o=n([r]);r=(o.then?(await o)():o)[0];const c=document.getElementById("input"),i=document.getElementById("error"),a={encode_base64:()=>{c.value=r.Mr(c.value)},decode_base64:()=>{c.value=r.Sd(c.value)},encode_url:()=>{c.value=r.d$(c.value)},decode_url:()=>{c.value=r.qH(c.value)},decode_jwt:()=>{c.value=r.IM(c.value)},format_json:()=>{c.value=r.YQ(c.value)},gen_uuid:()=>{c.value=r.xP()},json_to_edn:()=>{c.value=r.Xb(c.value)},edn_to_json:()=>{c.value=r.fg(c.value)},clear_text:()=>{c.value="",c.focus()},copy_to_clipboard:()=>{navigator.clipboard.writeText(c.value),c.select()}},d=n=>{i.hidden=!1,i.textContent=n},u=()=>{i.hidden=!0};for(const[n,e]of Object.entries(a))document.getElementById(n).addEventListener("click",(n=>{try{u(),e()}catch(n){d(n.message)}}));t()}catch(n){t(n)}}))},914:(n,e,_)=>{_.a(n,(async(t,r)=>{try{var o,c=t([o=_(616)]),[o]=c.then?(await c)():c;await _.v(e,n.id,"71b14c0a69f63d0fded2",{"./mstools_bg.js":{__wbindgen_error_new:o.hd,__wbg_process_0cc2ada8524d6f83:o.ej,__wbindgen_is_object:o.Wl,__wbg_versions_c11acceab27a6c87:o.xn,__wbg_node_7ff1ce49caf23815:o.OP,__wbindgen_is_string:o.eY,__wbindgen_object_drop_ref:o.ug,__wbg_crypto_2036bed7c44c25e7:o.JC,__wbg_msCrypto_a21fc88caf1ecdc8:o.T_,__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e:o.Mk,__wbg_require_a746e79b322b9336:o.wm,__wbg_getRandomValues_b99eec4244a475bb:o.dp,__wbg_randomFillSync_065afffde01daa66:o.yP,__wbg_newnoargs_b5b063fc6c2f0376:o.gW,__wbg_call_97ae9d8645dc388b:o.Ni,__wbindgen_object_clone_ref:o.m_,__wbg_self_6d479506f72c6a71:o.yB,__wbg_window_f2557cc78490aceb:o.Sn,__wbg_globalThis_7f206bda628d5286:o.$L,__wbg_global_ba75c50d1cf384f4:o.wJ,__wbindgen_is_undefined:o.XP,__wbg_buffer_3f3d764d4747d564:o.jp,__wbg_new_8c3f0052272a457a:o.lB,__wbg_set_83db9690f9353e79:o.fP,__wbg_length_9e1ae1900cb0fbd5:o.bj,__wbg_newwithlength_f5933855e4f48a19:o.ib,__wbg_subarray_58ad4efbb5bcb886:o.kH,__wbindgen_throw:o.Or,__wbindgen_memory:o.oH}}),r()}catch(n){r(n)}}),1)}}]);