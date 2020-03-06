(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2319f122"],{5:function(e,t){},"7fd3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-screen h-screen px-10 flex flex-col"},[n("div",{staticClass:"text-right flex-none my-3"},[n("Button",{on:{click:e.doCopy}},[e._v("复制")]),n("Button",{staticClass:"ml-3",attrs:{type:"primary"},on:{click:e.toEdit}},[e._v("编辑")])],1),n("div",{staticClass:"flex-1 flex mb-10"},[n("div",{staticClass:"flex-1 mr-3 bg-white border border-gray-400 rounded p-3 "},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.html,expression:"html"}],staticClass:"outline-none resize-none w-full min-h-full overflow-y-auto md-scrollbar ",attrs:{placeholder:"请在此处输入HTML内容"},domProps:{value:e.html},on:{input:[function(t){t.target.composing||(e.html=t.target.value)},e.toMd]}})]),n("div",{staticClass:"flex-1 ml-3 bg-white border border-gray-400 rounded p-3 "},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.md,expression:"md"}],staticClass:"outline-none resize-none w-full min-h-full overflow-y-auto md-scrollbar",attrs:{placeholder:"转化后的MD内容",readonly:"readonly"},domProps:{value:e.md},on:{input:function(t){t.target.composing||(e.md=t.target.value)}}})])])])},i=[],o=n("5530"),a=n("5880"),l={name:"tomd",data:function(){return{md:"",html:""}},methods:Object(o["a"])({},Object(a["mapActions"])(["mdDraft"]),{toMd:function(e){var t=n("8baf"),r=new t;this.html=r.turndown(this.html)},toEdit:function(){this.mdDraft({content:this.md}),this.$router.push("/md")},doCopy:function(){var e=this;this.$copyText(this.md).then((function(){e.$Notice.success({title:"提示消息",desc:"复制成功"})}),(function(){e.$Notice.error({title:"提示消息",desc:"复制失败，请手动复制"})}))}})},u=l,s=n("2877"),c=Object(s["a"])(u,r,i,!1,null,"55594d59",null);t["default"]=c.exports},"8baf":function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}function i(e,t){return Array(t+1).join(e)}n.r(t);var o=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"];function a(e){return-1!==o.indexOf(e.nodeName.toLowerCase())}var l=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function u(e){return-1!==l.indexOf(e.nodeName.toLowerCase())}var s=l.join();function c(e){return e.querySelector&&e.querySelector(s)}var f={};function d(e){for(var t in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[t])}function p(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(h(i,t,n))return i}}function h(e,t,n){var r=e.filter;if("string"===typeof r){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else{if("function"!==typeof r)throw new TypeError("`filter` needs to be a string, array, or function");if(r.call(e,t,n))return!0}}function m(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(t.firstChild&&!i(t)){var o=null,a=!1,l=null,u=v(l,t,i);while(u!==t){if(3===u.nodeType||4===u.nodeType){var s=u.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||a||" "!==s[0]||(s=s.substr(1)),!s){u=g(u);continue}u.data=s,o=u}else{if(1!==u.nodeType){u=g(u);continue}n(u)||"BR"===u.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,a=!1):r(u)&&(o=null,a=!0)}var c=v(l,u,i);l=u,u=c}o&&(o.data=o.data.replace(/ $/,""),o.data||g(o))}}function g(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function v(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}f.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},f.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+"\n"}},f.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));if("setext"===n.headingStyle&&r<3){var o=i(1===r?"=":"-",e.length);return"\n\n"+e+"\n"+o+"\n\n"}return"\n\n"+i("#",r)+" "+e+"\n\n"}},f.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),"\n\n"+e+"\n\n"}},f.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return"LI"===n.nodeName&&n.lastElementChild===t?"\n"+e:"\n\n"+e+"\n\n"}},f.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=n.bulletListMarker+"   ",i=t.parentNode;if("OL"===i.nodeName){var o=i.getAttribute("start"),a=Array.prototype.indexOf.call(i.children,t);r=(o?Number(o)+a:a+1)+".  "}return r+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}},f.indentedCodeBlock={filter:function(e,t){return"indented"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){return"\n\n    "+t.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},f.fencedCodeBlock={filter:function(e,t){return"fenced"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){var r=t.firstChild.className||"",i=(r.match(/language-(\S+)/)||[null,""])[1];return"\n\n"+n.fence+i+"\n"+t.firstChild.textContent+"\n"+n.fence+"\n\n"}},f.horizontalRule={filter:"hr",replacement:function(e,t,n){return"\n\n"+n.hr+"\n\n"}},f.inlineLink={filter:function(e,t){return"inlined"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t){var n=t.getAttribute("href"),r=t.title?' "'+t.title+'"':"";return"["+e+"]("+n+r+")"}},f.referenceLink={filter:function(e,t){return"referenced"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t,n){var r,i,o=t.getAttribute("href"),a=t.title?' "'+t.title+'"':"";switch(n.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+o+a;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+o+a;break;default:var l=this.references.length+1;r="["+e+"]["+l+"]",i="["+l+"]: "+o+a}return this.references.push(i),r},references:[],append:function(e){var t="";return this.references.length&&(t="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),t}},f.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}},f.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}},f.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n="PRE"===e.parentNode.nodeName&&!t;return"CODE"===e.nodeName&&!n},replacement:function(e){if(!e.trim())return"";var t="`",n="",r="",i=e.match(/`+/gm);if(i){/^`/.test(e)&&(n=" "),/`$/.test(e)&&(r=" ");while(-1!==i.indexOf(t))t+="`"}return t+n+e+r+t}},f.image={filter:"img",replacement:function(e,t){var n=t.alt||"",r=t.getAttribute("src")||"",i=t.title||"",o=i?' "'+i+'"':"";return r?"!["+n+"]("+r+o+")":""}},d.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(t=p(this.array,e,this.options))||(t=p(this._keep,e,this.options))||(t=p(this._remove,e,this.options))?t:this.defaultRule;var t},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};var y="undefined"!==typeof window?window:{};function b(){var e=y.DOMParser,t=!1;try{(new e).parseFromString("","text/html")&&(t=!0)}catch(n){}return t}function k(){var e=function(){},t=n(5).JSDOM;return e.prototype.parseFromString=function(e){return new t(e).window.document},e}var w,C=b()?y.DOMParser:k();function x(e){var t;if("string"===typeof e){var n=N().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");t=n.getElementById("turndown-root")}else t=e.cloneNode(!0);return m({element:t,isBlock:a,isVoid:u}),t}function N(){return w=w||new C,w}function S(e){return e.isBlock=a(e),e.isCode="code"===e.nodeName.toLowerCase()||e.parentNode.isCode,e.isBlank=R(e),e.flankingWhitespace=A(e),e}function R(e){return-1===["A","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"].indexOf(e.nodeName)&&/^\s*$/i.test(e.textContent)&&!u(e)&&!c(e)}function A(e){var t="",n="";if(!e.isBlock){var r=/^[ \r\n\t]/.test(e.textContent),i=/[ \r\n\t]$/.test(e.textContent);r&&!T("left",e)&&(t=" "),i&&!T("right",e)&&(n=" ")}return{leading:t,trailing:n}}function T(e,t){var n,r,i;return"left"===e?(n=t.previousSibling,r=/ $/):(n=t.nextSibling,r=/^ /),n&&(3===n.nodeType?i=r.test(n.nodeValue):1!==n.nodeType||a(n)||(i=r.test(n.textContent))),i}var $=Array.prototype.reduce,B=/^\n*/,E=/\n*$/,O=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function D(e){if(!(this instanceof D))return new D(e);var t={rules:f,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",blankReplacement:function(e,t){return t.isBlock?"\n\n":""},keepReplacement:function(e,t){return t.isBlock?"\n\n"+t.outerHTML+"\n\n":t.outerHTML},defaultReplacement:function(e,t){return t.isBlock?"\n\n"+e+"\n\n":e}};this.options=r({},t,e),this.rules=new d(this.options)}function L(e){var t=this;return $.call(e.childNodes,(function(e,n){n=new S(n);var r="";return 3===n.nodeType?r=n.isCode?n.nodeValue:t.escape(n.nodeValue):1===n.nodeType&&(r=M.call(t,n)),I(e,r)}),"")}function _(e){var t=this;return this.rules.forEach((function(n){"function"===typeof n.append&&(e=I(e,n.append(t.options)))})),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function M(e){var t=this.rules.forNode(e),n=L.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function P(e,t){var n=[e.match(E)[0],t.match(B)[0]].sort(),r=n[n.length-1];return r.length<2?r:"\n\n"}function I(e,t){var n=P(e,t);return e=e.replace(E,""),t=t.replace(B,""),e+n+t}function j(e){return null!=e&&("string"===typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}D.prototype={turndown:function(e){if(!j(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var t=L.call(this,new x(e));return _.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else{if("function"!==typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return O.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}},t["default"]=D}}]);
//# sourceMappingURL=chunk-2319f122.015fba87.js.map