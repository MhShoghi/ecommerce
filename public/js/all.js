/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t){"use strict";function e(t){if(void 0===Function.prototype.name){var e=/function\s([^(]{1,})\(/,i=e.exec(t.toString());return i&&i.length>1?i[1].trim():""}return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name}function i(t){return"true"===t||"false"!==t&&(isNaN(1*t)?t:parseFloat(t))}function n(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var s="6.3.1",o={version:s,_plugins:{},_uuids:[],rtl:function(){return"rtl"===t("html").attr("dir")},plugin:function(t,i){var s=i||e(t),o=n(s);this._plugins[o]=this[s]=t},registerPlugin:function(t,i){var s=i?n(i):e(t.constructor).toLowerCase();t.uuid=this.GetYoDigits(6,s),t.$element.attr("data-"+s)||t.$element.attr("data-"+s,t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf."+s),this._uuids.push(t.uuid)},unregisterPlugin:function(t){var i=n(e(t.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-"+i).removeData("zfPlugin").trigger("destroyed.zf."+i);for(var s in t)t[s]=null},reInit:function(e){var i=e instanceof t;try{if(i)e.each(function(){t(this).data("zfPlugin")._init()});else{var s=typeof e,o=this,a={object:function(e){e.forEach(function(e){e=n(e),t("[data-"+e+"]").foundation("_init")})},string:function(){e=n(e),t("[data-"+e+"]").foundation("_init")},undefined:function(){this.object(Object.keys(o._plugins))}};a[s](e)}}catch(t){console.error(t)}finally{return e}},GetYoDigits:function(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")},reflow:function(e,n){"undefined"==typeof n?n=Object.keys(this._plugins):"string"==typeof n&&(n=[n]);var s=this;t.each(n,function(n,o){var a=s._plugins[o],r=t(e).find("[data-"+o+"]").addBack("[data-"+o+"]");r.each(function(){var e=t(this),n={};if(e.data("zfPlugin"))return void console.warn("Tried to initialize "+o+" on an element that already has a Foundation plugin.");if(e.attr("data-options")){e.attr("data-options").split(";").forEach(function(t,e){var s=t.split(":").map(function(t){return t.trim()});s[0]&&(n[s[0]]=i(s[1]))})}try{e.data("zfPlugin",new a(t(this),n))}catch(t){console.error(t)}finally{return}})})},getFnName:e,transitionend:function(t){var e,i={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div");for(var s in i)"undefined"!=typeof n.style[s]&&(e=i[s]);return e?e:(e=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}};o.util={throttle:function(t,e){var i=null;return function(){var n=this,s=arguments;null===i&&(i=setTimeout(function(){t.apply(n,s),i=null},e))}}};var a=function(i){var n=typeof i,s=t("meta.foundation-mq"),a=t(".no-js");if(s.length||t('<meta class="foundation-mq">').appendTo(document.head),a.length&&a.removeClass("no-js"),"undefined"===n)o.MediaQuery._init(),o.reflow(this);else{if("string"!==n)throw new TypeError("We're sorry, "+n+" is not a valid parameter. You must use a string representing the method you wish to invoke.");var r=Array.prototype.slice.call(arguments,1),l=this.data("zfPlugin");if(void 0===l||void 0===l[i])throw new ReferenceError("We're sorry, '"+i+"' is not an available method for "+(l?e(l):"this element")+".");1===this.length?l[i].apply(l,r):this.each(function(e,n){l[i].apply(t(n).data("zfPlugin"),r)})}return this};window.Foundation=o,t.fn.foundation=a,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(n+16,e);return setTimeout(function(){t(n=i)},i-e)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),s.prototype=new n,s})}(jQuery),!function(t){function e(t,e,n,s){var o,a,r,l,h=i(t);if(e){var u=i(e);a=h.offset.top+h.height<=u.height+u.offset.top,o=h.offset.top>=u.offset.top,r=h.offset.left>=u.offset.left,l=h.offset.left+h.width<=u.width+u.offset.left}else a=h.offset.top+h.height<=h.windowDims.height+h.windowDims.offset.top,o=h.offset.top>=h.windowDims.offset.top,r=h.offset.left>=h.windowDims.offset.left,l=h.offset.left+h.width<=h.windowDims.width;var d=[a,o,r,l];return n?r===l==!0:s?o===a==!0:d.indexOf(!1)===-1}function i(t,e){if(t=t.length?t[0]:t,t===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var i=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect(),s=document.body.getBoundingClientRect(),o=window.pageYOffset,a=window.pageXOffset;return{width:i.width,height:i.height,offset:{top:i.top+o,left:i.left+a},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+a}},windowDims:{width:s.width,height:s.height,offset:{top:o,left:a}}}}function n(t,e,n,s,o,a){var r=i(t),l=e?i(e):null;switch(n){case"top":return{left:Foundation.rtl()?l.offset.left-r.width+l.width:l.offset.left,top:l.offset.top-(r.height+s)};case"left":return{left:l.offset.left-(r.width+o),top:l.offset.top};case"right":return{left:l.offset.left+l.width+o,top:l.offset.top};case"center top":return{left:l.offset.left+l.width/2-r.width/2,top:l.offset.top-(r.height+s)};case"center bottom":return{left:a?o:l.offset.left+l.width/2-r.width/2,top:l.offset.top+l.height+s};case"center left":return{left:l.offset.left-(r.width+o),top:l.offset.top+l.height/2-r.height/2};case"center right":return{left:l.offset.left+l.width+o+1,top:l.offset.top+l.height/2-r.height/2};case"center":return{left:r.windowDims.offset.left+r.windowDims.width/2-r.width/2,top:r.windowDims.offset.top+r.windowDims.height/2-r.height/2};case"reveal":return{left:(r.windowDims.width-r.width)/2,top:r.windowDims.offset.top+s};case"reveal full":return{left:r.windowDims.offset.left,top:r.windowDims.offset.top};case"left bottom":return{left:l.offset.left,top:l.offset.top+l.height+s};case"right bottom":return{left:l.offset.left+l.width+o-r.width,top:l.offset.top+l.height+s};default:return{left:Foundation.rtl()?l.offset.left-r.width+l.width:l.offset.left+o,top:l.offset.top+l.height+s}}}Foundation.Box={ImNotTouchingYou:e,GetDimensions:i,GetOffsets:n}}(jQuery),!function(t){function e(t){var e={};for(var i in t)e[t[i]]=t[i];return e}var i={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},n={},s={keys:e(i),parseKey:function(t){var e=i[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();return e=e.replace(/\W+/,""),t.shiftKey&&(e="SHIFT_"+e),t.ctrlKey&&(e="CTRL_"+e),t.altKey&&(e="ALT_"+e),e=e.replace(/_$/,"")},handleKey:function(e,i,s){var o,a,r,l=n[i],h=this.parseKey(e);if(!l)return console.warn("Component not defined!");if(o="undefined"==typeof l.ltr?l:Foundation.rtl()?t.extend({},l.ltr,l.rtl):t.extend({},l.rtl,l.ltr),a=o[h],r=s[a],r&&"function"==typeof r){var u=r.apply();(s.handled||"function"==typeof s.handled)&&s.handled(u)}else(s.unhandled||"function"==typeof s.unhandled)&&s.unhandled()},findFocusable:function(e){return!!e&&e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!t(this).is(":visible")||t(this).attr("tabindex")<0)})},register:function(t,e){n[t]=e},trapFocus:function(t){var e=Foundation.Keyboard.findFocusable(t),i=e.eq(0),n=e.eq(-1);t.on("keydown.zf.trapfocus",function(t){t.target===n[0]&&"TAB"===Foundation.Keyboard.parseKey(t)?(t.preventDefault(),i.focus()):t.target===i[0]&&"SHIFT_TAB"===Foundation.Keyboard.parseKey(t)&&(t.preventDefault(),n.focus())})},releaseFocus:function(t){t.off("keydown.zf.trapfocus")}};Foundation.Keyboard=s}(jQuery),!function(t){function e(t){var e={};return"string"!=typeof t?e:(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var i=e.replace(/\+/g," ").split("="),n=i[0],s=i[1];return n=decodeURIComponent(n),s=void 0===s?null:decodeURIComponent(s),t.hasOwnProperty(n)?Array.isArray(t[n])?t[n].push(s):t[n]=[t[n],s]:t[n]=s,t},{}):e}var i={queries:[],current:"",_init:function(){var i,n=this,s=t(".foundation-mq").css("font-family");i=e(s);for(var o in i)i.hasOwnProperty(o)&&n.queries.push({name:o,value:"only screen and (min-width: "+i[o]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(t){var e=this.get(t);return!!e&&window.matchMedia(e).matches},is:function(t){return t=t.trim().split(" "),t.length>1&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},get:function(t){for(var e in this.queries)if(this.queries.hasOwnProperty(e)){var i=this.queries[e];if(t===i.name)return i.value}return null},_getCurrentSize:function(){for(var t,e=0;e<this.queries.length;e++){var i=this.queries[e];window.matchMedia(i.value).matches&&(t=i)}return"object"==typeof t?t.name:t},_watcher:function(){var e=this;t(window).on("resize.zf.mediaquery",function(){var i=e._getCurrentSize(),n=e.current;i!==n&&(e.current=i,t(window).trigger("changed.zf.mediaquery",[i,n]))})}};Foundation.MediaQuery=i,window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i&&i.parentNode&&i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),Foundation.MediaQuery=i}(jQuery),!function(t){function e(t,e,i){function n(r){a||(a=r),o=r-a,i.apply(e),o<t?s=window.requestAnimationFrame(n,e):(window.cancelAnimationFrame(s),e.trigger("finished.zf.animate",[e]).triggerHandler("finished.zf.animate",[e]))}var s,o,a=null;return 0===t?(i.apply(e),void e.trigger("finished.zf.animate",[e]).triggerHandler("finished.zf.animate",[e])):void(s=window.requestAnimationFrame(n))}function i(e,i,o,a){function r(){e||i.hide(),l(),a&&a.apply(i)}function l(){i[0].style.transitionDuration=0,i.removeClass(h+" "+u+" "+o)}if(i=t(i).eq(0),i.length){var h=e?n[0]:n[1],u=e?s[0]:s[1];l(),i.addClass(o).css("transition","none"),requestAnimationFrame(function(){i.addClass(h),e&&i.show()}),requestAnimationFrame(function(){i[0].offsetWidth,i.css("transition","").addClass(u)}),i.one(Foundation.transitionend(i),r)}}var n=["mui-enter","mui-leave"],s=["mui-enter-active","mui-leave-active"],o={animateIn:function(t,e,n){i(!0,t,e,n)},animateOut:function(t,e,n){i(!1,t,e,n)}};Foundation.Move=e,Foundation.Motion=o}(jQuery),!function(t){var e={Feather:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zf";e.attr("role","menubar");var n=e.find("li").attr({role:"menuitem"}),s="is-"+i+"-submenu",o=s+"-item",a="is-"+i+"-submenu-parent";n.each(function(){var e=t(this),n=e.children("ul");n.length&&(e.addClass(a).attr({"aria-haspopup":!0,"aria-label":e.children("a:first").text()}),"drilldown"===i&&e.attr({"aria-expanded":!1}),n.addClass("submenu "+s).attr({"data-submenu":"",role:"menu"}),"drilldown"===i&&n.attr({"aria-hidden":!0})),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item "+o)})},Burn:function(t,e){var i="is-"+e+"-submenu",n=i+"-item",s="is-"+e+"-submenu-parent";t.find(">li, .menu, .menu > li").removeClass(i+" "+n+" "+s+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=e}(jQuery),!function(t){function e(t,e,i){var n,s,o=this,a=e.duration,r=Object.keys(t.data())[0]||"timer",l=-1;this.isPaused=!1,this.restart=function(){l=-1,clearTimeout(s),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(s),l=l<=0?a:l,t.data("paused",!1),n=Date.now(),s=setTimeout(function(){e.infinite&&o.restart(),i&&"function"==typeof i&&i()},l),t.trigger("timerstart.zf."+r)},this.pause=function(){this.isPaused=!0,clearTimeout(s),t.data("paused",!0);var e=Date.now();l-=e-n,t.trigger("timerpaused.zf."+r)}}function i(e,i){function n(){s--,0===s&&i()}var s=e.length;0===s&&i(),e.each(function(){if(this.complete||4===this.readyState||"complete"===this.readyState)n();else{var e=t(this).attr("src");t(this).attr("src",e+(e.indexOf("?")>=0?"&":"?")+(new Date).getTime()),t(this).one("load",function(){n()})}})}Foundation.Timer=e,Foundation.onImagesLoaded=i}(jQuery),function(t){function e(){this.removeEventListener("touchmove",i),this.removeEventListener("touchend",e),h=!1}function i(i){if(t.spotSwipe.preventDefault&&i.preventDefault(),h){var n,s=i.touches[0].pageX,a=(i.touches[0].pageY,o-s);l=(new Date).getTime()-r,Math.abs(a)>=t.spotSwipe.moveThreshold&&l<=t.spotSwipe.timeThreshold&&(n=a>0?"left":"right"),n&&(i.preventDefault(),e.call(this),t(this).trigger("swipe",n).trigger("swipe"+n))}}function n(t){1==t.touches.length&&(o=t.touches[0].pageX,a=t.touches[0].pageY,h=!0,r=(new Date).getTime(),this.addEventListener("touchmove",i,!1),this.addEventListener("touchend",e,!1))}function s(){this.addEventListener&&this.addEventListener("touchstart",n,!1)}t.spotSwipe={version:"1.0.0",enabled:"ontouchstart"in document.documentElement,preventDefault:!1,moveThreshold:75,timeThreshold:200};var o,a,r,l,h=!1;t.event.special.swipe={setup:s},t.each(["left","up","down","right"],function(){t.event.special["swipe"+this]={setup:function(){t(this).on("swipe",t.noop)}}})}(jQuery),!function(t){t.fn.addTouch=function(){this.each(function(i,n){t(n).bind("touchstart touchmove touchend touchcancel",function(){e(event)})});var e=function(t){var e,i=t.changedTouches,n=i[0],s={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},o=s[t.type];"MouseEvent"in window&&"function"==typeof window.MouseEvent?e=new window.MouseEvent(o,{bubbles:!0,cancelable:!0,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY}):(e=document.createEvent("MouseEvent"),e.initMouseEvent(o,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null)),n.target.dispatchEvent(e)}}}(jQuery),!function(t){function e(){a(),n(),s(),o(),i()}function i(e){var i=t("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(e&&("string"==typeof e?n.push(e):"object"==typeof e&&"string"==typeof e[0]?n.concat(e):console.error("Plugin names must be strings")),i.length){var s=n.map(function(t){return"closeme.zf."+t}).join(" ");t(window).off(s).on(s,function(e,i){var n=e.namespace.split(".")[0],s=t("[data-"+n+"]").not('[data-yeti-box="'+i+'"]');s.each(function(){var e=t(this);e.triggerHandler("close.zf.trigger",[e])})})}}function n(e){var i=void 0,n=t("[data-resize]");n.length&&t(window).off("resize.zf.trigger").on("resize.zf.trigger",function(s){i&&clearTimeout(i),i=setTimeout(function(){r||n.each(function(){t(this).triggerHandler("resizeme.zf.trigger")}),n.attr("data-events","resize")},e||10)})}function s(e){var i=void 0,n=t("[data-scroll]");n.length&&t(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(s){i&&clearTimeout(i),i=setTimeout(function(){r||n.each(function(){t(this).triggerHandler("scrollme.zf.trigger")}),n.attr("data-events","scroll")},e||10)})}function o(e){var i=t("[data-mutate]");i.length&&r&&i.each(function(){t(this).triggerHandler("mutateme.zf.trigger")})}function a(){if(!r)return!1;var e=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),i=function(e){var i=t(e[0].target);switch(e[0].type){case"attributes":"scroll"===i.attr("data-events")&&"data-events"===e[0].attributeName&&i.triggerHandler("scrollme.zf.trigger",[i,window.pageYOffset]),"resize"===i.attr("data-events")&&"data-events"===e[0].attributeName&&i.triggerHandler("resizeme.zf.trigger",[i]),"style"===e[0].attributeName&&(i.closest("[data-mutate]").attr("data-events","mutate"),i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[i.closest("[data-mutate]")]));break;case"childList":i.closest("[data-mutate]").attr("data-events","mutate"),i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[i.closest("[data-mutate]")]);break;default:return!1}};if(e.length)for(var n=0;n<=e.length-1;n++){var s=new r(i);s.observe(e[n],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}}var r=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if(t[e]+"MutationObserver"in window)return window[t[e]+"MutationObserver"];return!1}(),l=function(e,i){e.data(i).split(" ").forEach(function(n){t("#"+n)["close"===i?"trigger":"triggerHandler"](i+".zf.trigger",[e])})};t(document).on("click.zf.trigger","[data-open]",function(){l(t(this),"open")}),t(document).on("click.zf.trigger","[data-close]",function(){var e=t(this).data("close");e?l(t(this),"close"):t(this).trigger("close.zf.trigger")}),t(document).on("click.zf.trigger","[data-toggle]",function(){var e=t(this).data("toggle");e?l(t(this),"toggle"):t(this).trigger("toggle.zf.trigger")}),t(document).on("close.zf.trigger","[data-closable]",function(e){e.stopPropagation();var i=t(this).data("closable");""!==i?Foundation.Motion.animateOut(t(this),i,function(){t(this).trigger("closed.zf")}):t(this).fadeOut().trigger("closed.zf")}),t(document).on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",function(){var e=t(this).data("toggle-focus");t("#"+e).triggerHandler("toggle.zf.trigger",[t(this)])}),t(window).on("load",function(){e()}),Foundation.IHearYou=e}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Abide")}return _createClass(e,[{key:"_init",value:function(){this.$inputs=this.$element.find("input, textarea, select"),this._events()}},{key:"_events",value:function(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(i){e.validateInput(t(i.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(i){e.validateInput(t(i.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(i){e.validateInput(t(i.target))})}},{key:"_reflow",value:function(){this._init()}},{key:"requiredCheck",value:function(t){if(!t.attr("required"))return!0;var e=!0;switch(t[0].type){case"checkbox":e=t[0].checked;break;case"select":case"select-one":case"select-multiple":var i=t.find("option:selected");i.length&&i.val()||(e=!1);break;default:t.val()&&t.val().length||(e=!1)}return e}},{key:"findFormError",value:function(t){var e=t.siblings(this.options.formErrorSelector);return e.length||(e=t.parent().find(this.options.formErrorSelector)),e}},{key:"findLabel",value:function(t){var e=t[0].id,i=this.$element.find('label[for="'+e+'"]');return i.length?i:t.closest("label")}},{key:"findRadioLabels",value:function(e){var i=this,n=e.map(function(e,n){var s=n.id,o=i.$element.find('label[for="'+s+'"]');return o.length||(o=t(n).closest("label")),o[0]});return t(n)}},{key:"addErrorClasses",value:function(t){var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr("data-invalid","")}},{key:"removeRadioErrorClasses",value:function(t){var e=this.$element.find(':radio[name="'+t+'"]'),i=this.findRadioLabels(e),n=this.findFormError(e);i.length&&i.removeClass(this.options.labelErrorClass),n.length&&n.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"removeErrorClasses",value:function(t){if("radio"==t[0].type)return this.removeRadioErrorClasses(t.attr("name"));var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"validateInput",value:function(e){var i=this,n=this.requiredCheck(e),s=!1,o=!0,a=e.attr("data-validator"),r=!0;if(e.is("[data-abide-ignore]")||e.is('[type="hidden"]')||e.is("[disabled]"))return!0;switch(e[0].type){case"radio":s=this.validateRadio(e.attr("name"));break;case"checkbox":s=n;break;case"select":case"select-one":case"select-multiple":s=n;break;default:s=this.validateText(e)}a&&(o=this.matchValidation(e,a,e.attr("required"))),e.attr("data-equalto")&&(r=this.options.validators.equalTo(e));var l=[n,s,o,r].indexOf(!1)===-1,h=(l?"valid":"invalid")+".zf.abide";if(l){var u=this.$element.find('[data-equalto="'+e.attr("id")+'"]');u.length&&!function(){var e=i;u.each(function(){t(this).val()&&e.validateInput(t(this))})}()}return this[l?"removeErrorClasses":"addErrorClasses"](e),e.trigger(h,[e]),l}},{key:"validateForm",value:function(){var e=[],i=this;this.$inputs.each(function(){e.push(i.validateInput(t(this)))});var n=e.indexOf(!1)===-1;return this.$element.find("[data-abide-error]").css("display",n?"none":"block"),this.$element.trigger((n?"formvalid":"forminvalid")+".zf.abide",[this.$element]),n}},{key:"validateText",value:function(t,e){e=e||t.attr("pattern")||t.attr("type");var i=t.val(),n=!1;return i.length?n=this.options.patterns.hasOwnProperty(e)?this.options.patterns[e].test(i):e===t.attr("type")||new RegExp(e).test(i):t.prop("required")||(n=!0),n}},{key:"validateRadio",value:function(e){var i=this.$element.find(':radio[name="'+e+'"]'),n=!1,s=!1;return i.each(function(e,i){t(i).attr("required")&&(s=!0)}),s||(n=!0),n||i.each(function(e,i){t(i).prop("checked")&&(n=!0)}),n}},{key:"matchValidation",value:function(t,e,i){var n=this;i=!!i;var s=e.split(" ").map(function(e){return n.options.validators[e](t,i,t.parent())});return s.indexOf(!1)===-1}},{key:"resetForm",value:function(){var e=this.$element,i=this.options;t("."+i.labelErrorClass,e).not("small").removeClass(i.labelErrorClass),t("."+i.inputErrorClass,e).not("small").removeClass(i.inputErrorClass),t(i.formErrorSelector+"."+i.formErrorClass).removeClass(i.formErrorClass),e.find("[data-abide-error]").css("display","none"),t(":input",e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"),t(":input:radio",e).not("[data-abide-ignore]").prop("checked",!1).removeAttr("data-invalid"),t(":input:checkbox",e).not("[data-abide-ignore]").prop("checked",!1).removeAttr("data-invalid"),e.trigger("formreset.zf.abide",[e])}},{key:"destroy",value:function(){var e=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){e.removeErrorClasses(t(this))}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",liveValidate:!1,validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,i,n){return t("#"+e.attr("data-equalto")).val()===e.val()}}},Foundation.plugin(e,"Abide")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Accordion"),Foundation.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}return _createClass(e,[{key:"_init",value:function(){this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(e,i){var n=t(i),s=n.children("[data-tab-content]"),o=s[0].id||Foundation.GetYoDigits(6,"accordion"),a=i.id||o+"-label";n.find("a:first").attr({"aria-controls":o,role:"tab",id:a,"aria-expanded":!1,"aria-selected":!1}),s.attr({role:"tabpanel","aria-labelledby":a,"aria-hidden":!0,id:o})});var e=this.$element.find(".is-active").children("[data-tab-content]");e.length&&this.down(e,!0),this._events()}},{key:"_events",value:function(){var e=this;this.$tabs.each(function(){var i=t(this),n=i.children("[data-tab-content]");n.length&&i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),e.toggle(n)}).on("keydown.zf.accordion",function(t){Foundation.Keyboard.handleKey(t,"Accordion",{toggle:function(){e.toggle(n)},next:function(){var t=i.next().find("a").focus();e.options.multiExpand||t.trigger("click.zf.accordion")},previous:function(){var t=i.prev().find("a").focus();e.options.multiExpand||t.trigger("click.zf.accordion")},handled:function(){t.preventDefault(),t.stopPropagation()}})})})}},{key:"toggle",value:function(t){t.parent().hasClass("is-active")?this.up(t):this.down(t)}},{key:"down",value:function(e,i){var n=this;if(e.attr("aria-hidden",!1).parent("[data-tab-content]").addBack().parent().addClass("is-active"),!this.options.multiExpand&&!i){var s=this.$element.children(".is-active").children("[data-tab-content]");s.length&&this.up(s.not(e))}e.slideDown(this.options.slideSpeed,function(){n.$element.trigger("down.zf.accordion",[e])}),t("#"+e.attr("aria-labelledby")).attr({"aria-expanded":!0,"aria-selected":!0})}},{key:"up",value:function(e){var i=e.parent().siblings(),n=this;(this.options.allowAllClosed||i.hasClass("is-active"))&&e.parent().hasClass("is-active")&&(e.slideUp(n.options.slideSpeed,function(){n.$element.trigger("up.zf.accordion",[e])}),e.attr("aria-hidden",!0).parent().removeClass("is-active"),t("#"+e.attr("aria-labelledby")).attr({"aria-expanded":!1,"aria-selected":!1}))}},{key:"destroy",value:function(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={slideSpeed:250,multiExpand:!1,allowAllClosed:!1},Foundation.plugin(e,"Accordion")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),
n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"accordion"),this._init(),Foundation.registerPlugin(this,"AccordionMenu"),Foundation.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}return _createClass(e,[{key:"_init",value:function(){this.$element.find("[data-submenu]").not(".is-active").slideUp(0),this.$element.attr({role:"menu","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var e=this.id||Foundation.GetYoDigits(6,"acc-menu-link"),i=t(this),n=i.children("[data-submenu]"),s=n[0].id||Foundation.GetYoDigits(6,"acc-menu"),o=n.hasClass("is-active");i.attr({"aria-controls":s,"aria-expanded":o,role:"menuitem",id:e}),n.attr({"aria-labelledby":e,"aria-hidden":!o,role:"menu",id:s})});var e=this.$element.find(".is-active");if(e.length){var i=this;e.each(function(){i.down(t(this))})}this._events()}},{key:"_events",value:function(){var e=this;this.$element.find("li").each(function(){var i=t(this).children("[data-submenu]");i.length&&t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){t.preventDefault(),e.toggle(i)})}).on("keydown.zf.accordionmenu",function(i){var n,s,o=t(this),a=o.parent("ul").children("li"),r=o.children("[data-submenu]");a.each(function(e){if(t(this).is(o))return n=a.eq(Math.max(0,e-1)).find("a").first(),s=a.eq(Math.min(e+1,a.length-1)).find("a").first(),t(this).children("[data-submenu]:visible").length&&(s=o.find("li:first-child").find("a").first()),t(this).is(":first-child")?n=o.parents("li").first().find("a").first():n.parents("li").first().children("[data-submenu]:visible").length&&(n=n.parents("li").find("li:last-child").find("a").first()),void(t(this).is(":last-child")&&(s=o.parents("li").first().next("li").find("a").first()))}),Foundation.Keyboard.handleKey(i,"AccordionMenu",{open:function(){r.is(":hidden")&&(e.down(r),r.find("li").first().find("a").first().focus())},close:function(){r.length&&!r.is(":hidden")?e.up(r):o.parent("[data-submenu]").length&&(e.up(o.parent("[data-submenu]")),o.parents("li").first().find("a").first().focus())},up:function(){return n.focus(),!0},down:function(){return s.focus(),!0},toggle:function(){o.children("[data-submenu]").length&&e.toggle(o.children("[data-submenu]"))},closeAll:function(){e.hideAll()},handled:function(t){t&&i.preventDefault(),i.stopImmediatePropagation()}})})}},{key:"hideAll",value:function(){this.up(this.$element.find("[data-submenu]"))}},{key:"showAll",value:function(){this.down(this.$element.find("[data-submenu]"))}},{key:"toggle",value:function(t){t.is(":animated")||(t.is(":hidden")?this.down(t):this.up(t))}},{key:"down",value:function(t){var e=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),t.addClass("is-active").attr({"aria-hidden":!1}).parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),t.slideDown(e.options.slideSpeed,function(){e.$element.trigger("down.zf.accordionMenu",[t])})}},{key:"up",value:function(t){var e=this;t.slideUp(e.options.slideSpeed,function(){e.$element.trigger("up.zf.accordionMenu",[t])});var i=t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden",!0);i.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1)}},{key:"destroy",value:function(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),Foundation.Nest.Burn(this.$element,"accordion"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={slideSpeed:250,multiOpen:!0},Foundation.plugin(e,"AccordionMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"drilldown"),this._init(),Foundation.registerPlugin(this,"Drilldown"),Foundation.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}return _createClass(e,[{key:"_init",value:function(){this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","menuitem").find("a"),this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Foundation.GetYoDigits(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}},{key:"_prepareMenu",value:function(){var e=this;this.$submenuAnchors.each(function(){var i=t(this),n=i.parent();e.options.parentLink&&i.clone().prependTo(n.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'),i.data("savedHref",i.attr("href")).removeAttr("href").attr("tabindex",0),i.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"menu"}),e._events(i)}),this.$submenus.each(function(){var i=t(this),n=i.find(".js-drilldown-back");if(!n.length)switch(e.options.backButtonPosition){case"bottom":i.append(e.options.backButton);break;case"top":i.prepend(e.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+e.options.backButtonPosition+"'")}e._back(i)}),this.$submenus.addClass("invisible"),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=t(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$element.wrap(this.$wrapper)),this.$wrapper=this.$element.parent(),this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function(){this.$wrapper.css({"max-width":"none","min-height":"none"}),this.$wrapper.css(this._getMaxDims())}},{key:"_events",value:function(e){var i=this;e.off("click.zf.drilldown").on("click.zf.drilldown",function(n){if(t(n.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(n.stopImmediatePropagation(),n.preventDefault()),i._show(e.parent("li")),i.options.closeOnClick){var s=t("body");s.off(".zf.drilldown").on("click.zf.drilldown",function(e){e.target===i.$element[0]||t.contains(i.$element[0],e.target)||(e.preventDefault(),i._hideAll(),s.off(".zf.drilldown"))})}}),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}},{key:"_registerEvents",value:function(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler))}},{key:"_scrollTop",value:function(){var e=this,i=""!=e.options.scrollTopElement?t(e.options.scrollTopElement):e.$element,n=parseInt(i.offset().top+e.options.scrollTopOffset);t("html, body").stop(!0).animate({scrollTop:n},e.options.animationDuration,e.options.animationEasing,function(){this===t("html")[0]&&e.$element.trigger("scrollme.zf.drilldown")})}},{key:"_keyboardEvents",value:function(){var e=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(i){var n,s,o=t(this),a=o.parent("li").parent("ul").children("li").children("a");a.each(function(e){if(t(this).is(o))return n=a.eq(Math.max(0,e-1)),void(s=a.eq(Math.min(e+1,a.length-1)))}),Foundation.Keyboard.handleKey(i,"Drilldown",{next:function(){if(o.is(e.$submenuAnchors))return e._show(o.parent("li")),o.parent("li").one(Foundation.transitionend(o),function(){o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()}),!0},previous:function(){return e._hide(o.parent("li").parent("ul")),o.parent("li").parent("ul").one(Foundation.transitionend(o),function(){setTimeout(function(){o.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function(){return n.focus(),!o.is(e.$element.find("> li:first-child > a"))},down:function(){return s.focus(),!o.is(e.$element.find("> li:last-child > a"))},close:function(){o.is(e.$element.find("> li > a"))||(e._hide(o.parent().parent()),o.parent().parent().siblings("a").focus())},open:function(){return o.is(e.$menuItems)?o.is(e.$submenuAnchors)?(e._show(o.parent("li")),o.parent("li").one(Foundation.transitionend(o),function(){o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()}),!0):void 0:(e._hide(o.parent("li").parent("ul")),o.parent("li").parent("ul").one(Foundation.transitionend(o),function(){setTimeout(function(){o.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0)},handled:function(t){t&&i.preventDefault(),i.stopImmediatePropagation()}})})}},{key:"_hideAll",value:function(){var t=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")}),t.one(Foundation.transitionend(t),function(e){t.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")}},{key:"_back",value:function(t){var e=this;t.off("click.zf.drilldown"),t.children(".js-drilldown-back").on("click.zf.drilldown",function(i){i.stopImmediatePropagation(),e._hide(t);var n=t.parent("li").parent("ul").parent("li");n.length&&e._show(n)})}},{key:"_menuLinkEvents",value:function(){var t=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(e){setTimeout(function(){t._hideAll()},0)})}},{key:"_show",value:function(t){this.options.autoHeight&&this.$wrapper.css({height:t.children("[data-submenu]").data("calcHeight")}),t.attr("aria-expanded",!0),t.children("[data-submenu]").addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),this.$element.trigger("open.zf.drilldown",[t])}},{key:"_hide",value:function(t){this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")});t.parent("li").attr("aria-expanded",!1),t.attr("aria-hidden",!0).addClass("is-closing"),t.addClass("is-closing").one(Foundation.transitionend(t),function(){t.removeClass("is-active is-closing"),t.blur().addClass("invisible")}),t.trigger("hide.zf.drilldown",[t])}},{key:"_getMaxDims",value:function(){var e=0,i={},n=this;return this.$submenus.add(this.$element).each(function(){var s=(t(this).children("li").length,Foundation.Box.GetDimensions(this).height);e=s>e?s:e,n.options.autoHeight&&(t(this).data("calcHeight",s),t(this).hasClass("is-drilldown-submenu")||(i.height=s))}),this.options.autoHeight||(i["min-height"]=e+"px"),i["max-width"]=this.$element[0].getBoundingClientRect().width+"px",i}},{key:"destroy",value:function(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),Foundation.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){t(this).off(".zf.drilldown")}),this.$submenus.removeClass("drilldown-submenu-cover-previous"),this.$element.find("a").each(function(){var e=t(this);e.removeAttr("tabindex"),e.data("savedHref")&&e.attr("href",e.data("savedHref")).removeData("savedHref")}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',backButtonPosition:"top",wrapper:"<div></div>",parentLink:!1,closeOnClick:!1,autoHeight:!1,animateHeight:!1,scrollTop:!1,scrollTopElement:"",scrollTopOffset:0,animationDuration:500,animationEasing:"swing"},Foundation.plugin(e,"Drilldown")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Dropdown"),Foundation.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("id");this.$anchor=t(t('[data-toggle="'+e+'"]').length?'[data-toggle="'+e+'"]':'[data-open="'+e+'"]'),this.$anchor.attr({"aria-controls":e,"data-is-focus":!1,"data-yeti-box":e,"aria-haspopup":!0,"aria-expanded":!1}),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":e,"data-resize":e,"aria-labelledby":this.$anchor[0].id||Foundation.GetYoDigits(6,"dd-anchor")}),this._events()}},{key:"getPositionClass",value:function(){var t=this.$element[0].className.match(/(top|left|right|bottom)/g);t=t?t[0]:"";var e=/float-(\S+)/.exec(this.$anchor[0].className);e=e?e[1]:"";var i=e?e+" "+t:t;return i}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):this.$element.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){if("false"===this.$anchor.attr("aria-expanded"))return!1;var t=this.getPositionClass(),e=Foundation.Box.GetDimensions(this.$element),i=(Foundation.Box.GetDimensions(this.$anchor),"left"===t?"left":"right"===t?"left":"top"),n="top"===i?"height":"width";"height"===n?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.$element,this.$parent)){var s=e.windowDims.width,o=0;if(this.$parent){var a=Foundation.Box.GetDimensions(this.$parent),o=a.offset.left;a.width<s&&(s=a.width)}return this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset+o,!0)).css({width:s-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1}for(this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,t,this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.$element,this.$parent,!0)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"_events",value:function(){var e=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){var i=t("body").data();"undefined"!=typeof i.whatinput&&"mouse"!==i.whatinput||(clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.open(),e.$anchor.data("hover",!0)},e.options.hoverDelay))}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)}),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(e.timeout)}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(i){var n=t(this);Foundation.Keyboard.findFocusable(e.$element);Foundation.Keyboard.handleKey(i,"Dropdown",{open:function(){n.is(e.$anchor)&&(e.open(),e.$element.attr("tabindex",-1).focus(),i.preventDefault())},close:function(){e.close(),e.$anchor.focus()}})})}},{key:"_addBodyHandler",value:function(){var e=t(document.body).not(this.$element),i=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){i.$anchor.is(t.target)||i.$anchor.find(t.target).length||i.$element.find(t.target).length||(i.close(),e.off("click.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=Foundation.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&Foundation.Keyboard.trapFocus(this.$element),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){var t=this.getPositionClass();t&&this.$element.removeClass(t),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&Foundation.Keyboard.releaseFocus(this.$element)}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchor.data("hover"))return;this.close()}else this.open()}},{key:"destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={parentClass:null,hoverDelay:250,hover:!1,hoverPane:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1,autoFocus:!1,closeOnClick:!1},Foundation.plugin(e,"Dropdown")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"dropdown"),this._init(),Foundation.registerPlugin(this,"DropdownMenu"),Foundation.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var t=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),this.$element.hasClass(this.options.rightClass)||"right"===this.options.alignment||Foundation.rtl()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",t.addClass("opens-left")):t.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function(){return"block"===this.$tabs.css("display")}},{key:"_events",value:function(){var e=this,i="ontouchstart"in window||"undefined"!=typeof window.ontouchstart,n="is-dropdown-submenu-parent",s=function(s){var o=t(s.target).parentsUntil("ul","."+n),a=o.hasClass(n),r="true"===o.attr("data-is-click"),l=o.children(".is-dropdown-submenu");if(a)if(r){if(!e.options.closeOnClick||!e.options.clickOpen&&!i||e.options.forceFollow&&i)return;s.stopImmediatePropagation(),s.preventDefault(),e._hide(o)}else s.preventDefault(),s.stopImmediatePropagation(),e._show(l),o.add(o.parentsUntil(e.$element,"."+n)).attr("data-is-click",!0)};(this.options.clickOpen||i)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",s),e.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);o||e._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);o&&(clearTimeout(s.data("_delay")),s.data("_delay",setTimeout(function(){e._show(s.children(".is-dropdown-submenu"))},e.options.hoverDelay)))}).on("mouseleave.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);if(o&&e.options.autoclose){if("true"===s.attr("data-is-click")&&e.options.clickOpen)return!1;clearTimeout(s.data("_delay")),s.data("_delay",setTimeout(function(){e._hide(s)},e.options.closingTime))}}),this.$menuItems.on("keydown.zf.dropdownmenu",function(i){var n,s,o=t(i.target).parentsUntil("ul",'[role="menuitem"]'),a=e.$tabs.index(o)>-1,r=a?e.$tabs:o.siblings("li").add(o);r.each(function(e){if(t(this).is(o))return n=r.eq(e-1),void(s=r.eq(e+1))});var l=function(){o.is(":last-child")||(s.children("a:first").focus(),i.preventDefault())},h=function(){n.children("a:first").focus(),i.preventDefault()},u=function(){var t=o.children("ul.is-dropdown-submenu");t.length&&(e._show(t),o.find("li > a:first").focus(),i.preventDefault())},d=function(){var t=o.parent("ul").parent("li");t.children("a:first").focus(),e._hide(t),i.preventDefault()},c={open:u,close:function(){e._hide(e.$element),e.$menuItems.find("a:first").focus(),i.preventDefault()},handled:function(){i.stopImmediatePropagation()}};a?e._isVertical()?Foundation.rtl()?t.extend(c,{down:l,up:h,next:d,previous:u}):t.extend(c,{down:l,up:h,next:u,previous:d}):Foundation.rtl()?t.extend(c,{next:h,previous:l,down:u,up:d}):t.extend(c,{next:l,previous:h,down:u,up:d}):Foundation.rtl()?t.extend(c,{next:d,previous:u,down:l,up:h}):t.extend(c,{next:u,previous:d,down:l,up:h}),Foundation.Keyboard.handleKey(i,"DropdownMenu",c)})}},{key:"_addBodyHandler",value:function(){var e=t(document.body),i=this;e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(t){var n=i.$element.find(t.target);n.length||(i._hide(),e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}},{key:"_show",value:function(e){var i=this.$tabs.index(this.$tabs.filter(function(i,n){return t(n).find(e).length>0})),n=e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(n,i),e.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var s=Foundation.Box.ImNotTouchingYou(e,null,!0);if(!s){var o="left"===this.options.alignment?"-right":"-left",a=e.parent(".is-dropdown-submenu-parent");a.removeClass("opens"+o).addClass("opens-"+this.options.alignment),s=Foundation.Box.ImNotTouchingYou(e,null,!0),s||a.removeClass("opens-"+this.options.alignment).addClass("opens-inner"),this.changed=!0}e.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownmenu",[e])}},{key:"_hide",value:function(t,e){var i;i=t&&t.length?t:void 0!==e?this.$tabs.not(function(t,i){return t===e}):this.$element;var n=i.hasClass("is-active")||i.find(".is-active").length>0;if(n){if(i.find("li.is-active").add(i).attr({"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var s="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-"+this.options.alignment).addClass("opens-"+s),this.changed=!1}this.$element.trigger("hide.zf.dropdownmenu",[i])}}},{key:"destroy",value:function(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),t(document.body).off(".zf.dropdownmenu"),Foundation.Nest.Burn(this.$element,"dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"left",closeOnClick:!0,closeOnClickInside:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0},Foundation.plugin(e,"DropdownMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Equalizer")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("data-equalizer")||"",i=this.$element.find('[data-equalizer-watch="'+e+'"]');this.$watched=i.length?i:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",e||Foundation.GetYoDigits(6,"eq")),this.$element.attr("data-mutate",e||Foundation.GetYoDigits(6,"eq")),this.hasNested=this.$element.find("[data-equalizer]").length>0,this.isNested=this.$element.parentsUntil(document.body,"[data-equalizer]").length>0,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var n,s=this.$element.find("img");this.options.equalizeOn?(n=this._checkMQ(),t(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==n&&n===!1||void 0===n)&&(s.length?Foundation.onImagesLoaded(s,this._reflow.bind(this)):this._reflow())}},{key:"_pauseEvents",value:function(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}},{key:"_onResizeMe",value:function(t){this._reflow()}},{key:"_onPostEqualized",value:function(t){t.target!==this.$element[0]&&this._reflow()}},{key:"_events",value:function(){this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}},{key:"_checkMQ",value:function(){var t=!Foundation.MediaQuery.is(this.options.equalizeOn);return t?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),t}},{key:"_killswitch",value:function(){}},{key:"_reflow",value:function(){return!this.options.equalizeOnStack&&this._isStacked()?(this.$watched.css("height","auto"),!1):void(this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this)))}},{key:"_isStacked",value:function(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}},{key:"getHeights",value:function(t){for(var e=[],i=0,n=this.$watched.length;i<n;i++)this.$watched[i].style.height="auto",e.push(this.$watched[i].offsetHeight);t(e)}},{key:"getHeightsByRow",value:function(e){var i=this.$watched.length?this.$watched.first().offset().top:0,n=[],s=0;n[s]=[];for(var o=0,a=this.$watched.length;o<a;o++){this.$watched[o].style.height="auto";var r=t(this.$watched[o]).offset().top;r!=i&&(s++,n[s]=[],i=r),n[s].push([this.$watched[o],this.$watched[o].offsetHeight])}for(var l=0,h=n.length;l<h;l++){var u=t(n[l]).map(function(){return this[1]}).get(),d=Math.max.apply(null,u);n[l].push(d)}e(n)}},{key:"applyHeight",value:function(t){var e=Math.max.apply(null,t);this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",e),this.$element.trigger("postequalized.zf.equalizer")}},{key:"applyHeightByRow",value:function(e){this.$element.trigger("preequalized.zf.equalizer");for(var i=0,n=e.length;i<n;i++){var s=e[i].length,o=e[i][s-1];if(s<=2)t(e[i][0][0]).css({height:"auto"});else{this.$element.trigger("preequalizedrow.zf.equalizer");for(var a=0,r=s-1;a<r;a++)t(e[i][a][0]).css({height:o});this.$element.trigger("postequalizedrow.zf.equalizer")}}this.$element.trigger("postequalized.zf.equalizer")}},{key:"destroy",value:function(){this._pauseEvents(),this.$watched.css("height","auto"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={equalizeOnStack:!1,equalizeByRow:!1,equalizeOn:""},Foundation.plugin(e,"Equalizer")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,n),this.rules=[],this.currentPath="",this._init(),this._events(),Foundation.registerPlugin(this,"Interchange")}return _createClass(e,[{key:"_init",value:function(){this._addBreakpoints(),this._generateRules(),this._reflow()}},{key:"_events",value:function(){var e=this;t(window).on("resize.zf.interchange",Foundation.util.throttle(function(){e._reflow()},50))}},{key:"_reflow",value:function(){var t;for(var e in this.rules)if(this.rules.hasOwnProperty(e)){var i=this.rules[e];window.matchMedia(i.query).matches&&(t=i)}t&&this.replace(t.path)}},{key:"_addBreakpoints",value:function(){for(var t in Foundation.MediaQuery.queries)if(Foundation.MediaQuery.queries.hasOwnProperty(t)){var i=Foundation.MediaQuery.queries[t];e.SPECIAL_QUERIES[i.name]=i.value}}},{key:"_generateRules",value:function(t){var i,n=[];i=this.options.rules?this.options.rules:this.$element.data("interchange"),i="string"==typeof i?i.match(/\[.*?\]/g):i;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s].slice(1,-1).split(", "),a=o.slice(0,-1).join(""),r=o[o.length-1];e.SPECIAL_QUERIES[r]&&(r=e.SPECIAL_QUERIES[r]),n.push({path:a,query:r})}this.rules=n}},{key:"replace",value:function(e){if(this.currentPath!==e){var i=this,n="replaced.zf.interchange";"IMG"===this.$element[0].nodeName?this.$element.attr("src",e).on("load",function(){i.currentPath=e}).trigger(n):e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?this.$element.css({"background-image":"url("+e+")"}).trigger(n):t.get(e,function(s){i.$element.html(s).trigger(n),t(s).foundation(),i.currentPath=e})}}},{key:"destroy",value:function(){}}]),e}();e.defaults={rules:null},e.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"},Foundation.plugin(e,"Interchange")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,
"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),this.calcPoints(),Foundation.registerPlugin(this,"Magellan")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element[0].id||Foundation.GetYoDigits(6,"magellan");this.$targets=t("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":e,"data-scroll":e,id:e}),this.$active=t(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}},{key:"calcPoints",value:function(){var e=this,i=document.body,n=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,n.clientHeight)),this.docHeight=Math.round(Math.max(i.scrollHeight,i.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)),this.$targets.each(function(){var i=t(this),n=Math.round(i.offset().top-e.options.threshold);i.targetPoint=n,e.points.push(n)})}},{key:"_events",value:function(){var e=this;t("html, body"),{duration:e.options.animationDuration,easing:e.options.animationEasing};t(window).one("load",function(){e.options.deepLinking&&location.hash&&e.scrollToLoc(location.hash),e.calcPoints(),e._updateActive()}),this.$element.on({"resizeme.zf.trigger":this.reflow.bind(this),"scrollme.zf.trigger":this._updateActive.bind(this)}).on("click.zf.magellan",'a[href^="#"]',function(t){t.preventDefault();var i=this.getAttribute("href");e.scrollToLoc(i)}),t(window).on("popstate",function(t){e.options.deepLinking&&e.scrollToLoc(window.location.hash)})}},{key:"scrollToLoc",value:function(e){if(!t(e).length)return!1;this._inTransition=!0;var i=this,n=Math.round(t(e).offset().top-this.options.threshold/2-this.options.barOffset);t("html, body").stop(!0).animate({scrollTop:n},this.options.animationDuration,this.options.animationEasing,function(){i._inTransition=!1,i._updateActive()})}},{key:"reflow",value:function(){this.calcPoints(),this._updateActive()}},{key:"_updateActive",value:function(){if(!this._inTransition){var t,e=parseInt(window.pageYOffset,10);if(e+this.winHeight===this.docHeight)t=this.points.length-1;else if(e<this.points[0])t=void 0;else{var i=this.scrollPos<e,n=this,s=this.points.filter(function(t,s){return i?t-n.options.barOffset<=e:t-n.options.barOffset-n.options.threshold<=e});t=s.length?s.length-1:0}if(this.$active.removeClass(this.options.activeClass),this.$active=this.$links.filter('[href="#'+this.$targets.eq(t).data("magellan-target")+'"]').addClass(this.options.activeClass),this.options.deepLinking){var o="";void 0!=t&&(o=this.$active[0].getAttribute("href")),o!==window.location.hash&&(window.history.pushState?window.history.pushState(null,null,o):window.location.hash=o)}this.scrollPos=e,this.$element.trigger("update.zf.magellan",[this.$active])}}},{key:"destroy",value:function(){if(this.$element.off(".zf.trigger .zf.magellan").find("."+this.options.activeClass).removeClass(this.options.activeClass),this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}Foundation.unregisterPlugin(this)}}]),e}();e.defaults={animationDuration:500,animationEasing:"linear",threshold:50,activeClass:"active",deepLinking:!1,barOffset:0},Foundation.plugin(e,"Magellan")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this.$lastTrigger=t(),this.$triggers=t(),this._init(),this._events(),Foundation.registerPlugin(this,"OffCanvas"),Foundation.Keyboard.register("OffCanvas",{ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),this.$element.addClass("is-transition-"+this.options.transition),this.$triggers=t(document).find('[data-open="'+e+'"], [data-close="'+e+'"], [data-toggle="'+e+'"]').attr("aria-expanded","false").attr("aria-controls",e),this.options.contentOverlay===!0){var i=document.createElement("div"),n="fixed"===t(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";i.setAttribute("class","js-off-canvas-overlay "+n),this.$overlay=t(i),"is-overlay-fixed"===n?t("body").append(this.$overlay):this.$element.siblings("[data-off-canvas-content]").append(this.$overlay)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed===!0&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),!this.options.transitionTime==!0&&(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle(t("[data-off-canvas]")[0]).transitionDuration))}},{key:"_events",value:function(){if(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.options.closeOnClick===!0){var e=this.options.contentOverlay?this.$overlay:t("[data-off-canvas-content]");e.on({"click.zf.offcanvas":this.close.bind(this)})}}},{key:"_setMQChecker",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){Foundation.MediaQuery.atLeast(e.options.revealOn)?e.reveal(!0):e.reveal(!1)}).one("load.zf.offcanvas",function(){Foundation.MediaQuery.atLeast(e.options.revealOn)&&e.reveal(!0)})}},{key:"reveal",value:function(t){var e=this.$element.find("[data-close]");t?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),e.length&&e.hide()):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),e.length&&e.show())}},{key:"_stopScrolling",value:function(t){return!1}},{key:"_recordScrollable",value:function(t){var e=this;e.scrollHeight!==e.clientHeight&&(0===e.scrollTop&&(e.scrollTop=1),e.scrollTop===e.scrollHeight-e.clientHeight&&(e.scrollTop=e.scrollHeight-e.clientHeight-1)),e.allowUp=e.scrollTop>0,e.allowDown=e.scrollTop<e.scrollHeight-e.clientHeight,e.lastY=t.originalEvent.pageY}},{key:"_stopScrollPropagation",value:function(t){var e=this,i=t.pageY<e.lastY,n=!i;e.lastY=t.pageY,i&&e.allowUp||n&&e.allowDown?t.stopPropagation():t.preventDefault()}},{key:"open",value:function(e,i){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;i&&(this.$lastTrigger=i),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),n.$element.addClass("is-open"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false").trigger("opened.zf.offcanvas"),this.options.contentScroll===!1&&(t("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.$element.on("touchstart",this._recordScrollable),this.$element.on("touchmove",this._stopScrollPropagation)),this.options.contentOverlay===!0&&this.$overlay.addClass("is-visible"),this.options.closeOnClick===!0&&this.options.contentOverlay===!0&&this.$overlay.addClass("is-closable"),this.options.autoFocus===!0&&this.$element.one(Foundation.transitionend(this.$element),function(){n.$element.find("a, button").eq(0).focus()}),this.options.trapFocus===!0&&(this.$element.siblings("[data-off-canvas-content]").attr("tabindex","-1"),Foundation.Keyboard.trapFocus(this.$element))}}},{key:"close",value:function(e){if(this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;i.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.options.contentScroll===!1&&(t("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.$element.off("touchstart",this._recordScrollable),this.$element.off("touchmove",this._stopScrollPropagation)),this.options.contentOverlay===!0&&this.$overlay.removeClass("is-visible"),this.options.closeOnClick===!0&&this.options.contentOverlay===!0&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),this.options.trapFocus===!0&&(this.$element.siblings("[data-off-canvas-content]").removeAttr("tabindex"),Foundation.Keyboard.releaseFocus(this.$element))}}},{key:"toggle",value:function(t,e){this.$element.hasClass("is-open")?this.close(t,e):this.open(t,e)}},{key:"_handleKeyboard",value:function(t){var e=this;Foundation.Keyboard.handleKey(t,"OffCanvas",{close:function(){return e.close(),e.$lastTrigger.focus(),!0},handled:function(){t.stopPropagation(),t.preventDefault()}})}},{key:"destroy",value:function(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={closeOnClick:!0,contentOverlay:!0,contentScroll:!0,transitionTime:0,transition:"push",forceTo:null,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1},Foundation.plugin(e,"OffCanvas")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Orbit"),Foundation.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}return _createClass(e,[{key:"_init",value:function(){this._reset(),this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var t=this.$element.find("img"),e=this.$slides.filter(".is-active"),i=this.$element[0].id||Foundation.GetYoDigits(6,"orbit");this.$element.attr({"data-resize":i,id:i}),e.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Foundation.onImagesLoaded(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.$slides.length>1&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")}},{key:"geoSync",value:function(){var t=this;this.timer=new Foundation.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function(){this._setWrapperHeight()}},{key:"_setWrapperHeight",value:function(e){var i,n=0,s=0,o=this;this.$slides.each(function(){i=this.getBoundingClientRect().height,t(this).attr("data-slide",s),o.$slides.filter(".is-active")[0]!==o.$slides.eq(s)[0]&&t(this).css({position:"relative",display:"none"}),n=i>n?i:n,s++}),s===this.$slides.length&&(this.$wrapper.css({height:n}),e&&e(n))}},{key:"_setSlideHeight",value:function(e){this.$slides.each(function(){t(this).css("max-height",e)})}},{key:"_events",value:function(){var e=this;if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),this.$slides.length>1){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),e.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),e.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){e.$element.data("clickedOn",!e.$element.data("clickedOn")),e.timer[e.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){e.timer.pause()}).on("mouseleave.zf.orbit",function(){e.$element.data("clickedOn")||e.timer.start()})),this.options.navButtons){var i=this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass);i.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(i){i.preventDefault(),e.changeSlide(t(this).hasClass(e.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var i=t(this).data("slide"),n=i>e.$slides.filter(".is-active").data("slide"),s=e.$slides.eq(i);e.changeSlide(n,s,i)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(i){Foundation.Keyboard.handleKey(i,"Orbit",{next:function(){e.changeSlide(!0)},previous:function(){e.changeSlide(!1)},handled:function(){t(i.target).is(e.$bullets)&&e.$bullets.filter(".is-active").focus()}})})}}},{key:"_reset",value:function(){"undefined"!=typeof this.$slides&&this.$slides.length>1&&(this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),this.options.autoPlay&&this.timer.restart(),this.$slides.each(function(e){t(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),this.$slides.first().addClass("is-active").show(),this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),this.options.bullets&&this._updateBullets(0))}},{key:"changeSlide",value:function(t,e,i){if(this.$slides){var n=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(n[0].className))return!1;var s,o=this.$slides.first(),a=this.$slides.last(),r=t?"Right":"Left",l=t?"Left":"Right",h=this;s=e?e:t?this.options.infiniteWrap?n.next("."+this.options.slideClass).length?n.next("."+this.options.slideClass):o:n.next("."+this.options.slideClass):this.options.infiniteWrap?n.prev("."+this.options.slideClass).length?n.prev("."+this.options.slideClass):a:n.prev("."+this.options.slideClass),s.length&&(this.$element.trigger("beforeslidechange.zf.orbit",[n,s]),this.options.bullets&&(i=i||this.$slides.index(s),this._updateBullets(i)),this.options.useMUI&&!this.$element.is(":hidden")?(Foundation.Motion.animateIn(s.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+r],function(){s.css({position:"relative",display:"block"}).attr("aria-live","polite")}),Foundation.Motion.animateOut(n.removeClass("is-active"),this.options["animOutTo"+l],function(){n.removeAttr("aria-live"),h.options.autoPlay&&!h.timer.isPaused&&h.timer.restart()})):(n.removeClass("is-active is-in").removeAttr("aria-live").hide(),s.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[s]))}}},{key:"_updateBullets",value:function(t){var e=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),i=e.find("span:last").detach();this.$bullets.eq(t).addClass("is-active").append(i)}},{key:"destroy",value:function(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0},Foundation.plugin(e,"Orbit")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveMenu")}return _createClass(e,[{key:"_init",value:function(){if("string"==typeof this.rules){for(var e={},n=this.rules.split(" "),s=0;s<n.length;s++){var o=n[s].split("-"),a=o.length>1?o[0]:"small",r=o.length>1?o[1]:o[0];null!==i[r]&&(e[a]=i[r])}this.rules=e}t.isEmptyObject(this.rules)||this._checkMediaQueries(),this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Foundation.GetYoDigits(6,"responsive-menu"))}},{key:"_events",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var e,n=this;t.each(this.rules,function(t){Foundation.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(t.each(i,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[e].plugin(this.$element,{})))}},{key:"destroy",value:function(){this.currentPlugin.destroy(),t(window).off(".zf.ResponsiveMenu"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={};var i={dropdown:{cssClass:"dropdown",plugin:Foundation._plugins["dropdown-menu"]||null},drilldown:{cssClass:"drilldown",plugin:Foundation._plugins.drilldown||null},accordion:{cssClass:"accordion-menu",plugin:Foundation._plugins["accordion-menu"]||null}};Foundation.plugin(e,"ResponsiveMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveToggle")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.data("responsive-toggle");if(e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=t("#"+e),this.$toggler=this.$element.find("[data-toggle]").filter(function(){var i=t(this).data("toggle");return i===e||""===i}),this.options=t.extend({},this.options,this.$targetMenu.data()),this.options.animate){var i=this.options.animate.split(" ");this.animationIn=i[0],this.animationOut=i[1]||null}this._update()}},{key:"_events",value:function(){this._updateMqHandler=this._update.bind(this),t(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}},{key:"toggleMenu",value:function(){var t=this;Foundation.MediaQuery.atLeast(this.options.hideFor)||(this.options.animate?this.$targetMenu.is(":hidden")?Foundation.Motion.animateIn(this.$targetMenu,this.animationIn,function(){t.$element.trigger("toggled.zf.responsiveToggle"),t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):Foundation.Motion.animateOut(this.$targetMenu,this.animationOut,function(){t.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"destroy",value:function(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),t(window).off("changed.zf.mediaquery",this._updateMqHandler),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={hideFor:"medium",animate:!1},Foundation.plugin(e,"ResponsiveToggle")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(){return/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)}function i(){return/Android/.test(window.navigator.userAgent)}function n(){return e()||i()}var s=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Reveal"),Foundation.Keyboard.register("Reveal",{ENTER:"open",SPACE:"open",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:Foundation.MediaQuery.current},this.isMobile=n(),this.$anchor=t(t('[data-open="'+this.id+'"]').length?'[data-open="'+this.id+'"]':'[data-toggle="'+this.id+'"]'),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(t(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#"+this.id&&t(window).one("load.zf.reveal",this.open.bind(this))}},{key:"_makeOverlay",value:function(){return t("<div></div>").addClass("reveal-overlay").appendTo(this.options.appendTo)}},{key:"_updatePosition",value:function(){var e,i,n=this.$element.outerWidth(),s=t(window).width(),o=this.$element.outerHeight(),a=t(window).height();e="auto"===this.options.hOffset?parseInt((s-n)/2,10):parseInt(this.options.hOffset,10),i="auto"===this.options.vOffset?o>a?parseInt(Math.min(100,a/10),10):parseInt((a-o)/4,10):parseInt(this.options.vOffset,10),this.$element.css({top:i+"px"}),this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:e+"px"}),this.$element.css({margin:"0px"}))}},{key:"_events",value:function(){var e=this,i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function(n,s){if(n.target===i.$element[0]||t(n.target).parents("[data-closable]")[0]===s)return e.close.apply(e)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){i._updatePosition()}}),this.$anchor.length&&this.$anchor.on("keydown.zf.reveal",function(t){13!==t.which&&32!==t.which||(t.stopPropagation(),t.preventDefault(),i.open())}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(e){e.target!==i.$element[0]&&!t.contains(i.$element[0],e.target)&&t.contains(document,e.target)&&i.close()}),this.options.deepLink&&t(window).on("popstate.zf.reveal:"+this.id,this._handleState.bind(this))}},{key:"_handleState",value:function(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}},{key:"open",value:function(){function e(){s.isMobile?(s.originalScrollPos||(s.originalScrollPos=window.pageYOffset),t("html, body").addClass("is-reveal-open")):t("body").addClass("is-reveal-open")}var i=this;if(this.options.deepLink){var n="#"+this.id;window.history.pushState?window.history.pushState(null,null,n):window.location.hash=n}this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id);var s=this;this.options.animationIn?!function(){var t=function(){s.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),e(),Foundation.Keyboard.trapFocus(s.$element)};i.options.overlay&&Foundation.Motion.animateIn(i.$overlay,"fade-in"),Foundation.Motion.animateIn(i.$element,i.options.animationIn,function(){i.$element&&(i.focusableElements=Foundation.Keyboard.findFocusable(i.$element),t())})}():(this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay)),this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),Foundation.Keyboard.trapFocus(this.$element),this.$element.trigger("open.zf.reveal"),e(),setTimeout(function(){i._extraHandlers()},0)}},{key:"_extraHandlers",value:function(){var e=this;this.$element&&(this.focusableElements=Foundation.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||t("body").on("click.zf.reveal",function(i){i.target!==e.$element[0]&&!t.contains(e.$element[0],i.target)&&t.contains(document,i.target)&&e.close()}),this.options.closeOnEsc&&t(window).on("keydown.zf.reveal",function(t){Foundation.Keyboard.handleKey(t,"Reveal",{close:function(){e.options.closeOnEsc&&(e.close(),e.$anchor.focus())}})}),this.$element.on("keydown.zf.reveal",function(i){var n=t(this);Foundation.Keyboard.handleKey(i,"Reveal",{open:function(){e.$element.find(":focus").is(e.$element.find("[data-close]"))?setTimeout(function(){e.$anchor.focus()},1):n.is(e.focusableElements)&&e.open()},close:function(){e.options.closeOnEsc&&(e.close(),e.$anchor.focus())},handled:function(t){t&&i.preventDefault()}})}))}},{key:"close",value:function(){function e(){i.isMobile?(t("html, body").removeClass("is-reveal-open"),i.originalScrollPos&&(t("body").scrollTop(i.originalScrollPos),i.originalScrollPos=null)):t("body").removeClass("is-reveal-open"),Foundation.Keyboard.releaseFocus(i.$element),i.$element.attr("aria-hidden",!0),i.$element.trigger("closed.zf.reveal")}if(!this.isActive||!this.$element.is(":visible"))return!1;var i=this;this.options.animationOut?(this.options.overlay?Foundation.Motion.animateOut(this.$overlay,"fade-out",e):e(),Foundation.Motion.animateOut(this.$element,this.options.animationOut)):(this.options.overlay?this.$overlay.hide(0,e):e(),this.$element.hide(this.options.hideDelay)),this.options.closeOnEsc&&t(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&t("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,i.options.deepLink&&(window.history.replaceState?window.history.replaceState("",document.title,window.location.href.replace("#"+this.id,"")):window.location.hash="")}},{key:"toggle",value:function(){this.isActive?this.close():this.open()}},{key:"destroy",value:function(){this.options.overlay&&(this.$element.appendTo(t(this.options.appendTo)),this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),t(window).off(".zf.reveal:"+this.id),Foundation.unregisterPlugin(this)}}]),e}();s.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:"auto",hOffset:"auto",fullScreen:!1,btmOffsetPct:10,overlay:!0,resetOnClose:!1,deepLink:!1,appendTo:"body"},Foundation.plugin(s,"Reveal")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(t,e){return t/e}function i(t,e,i,n){return Math.abs(t.position()[e]+t[n]()/2-i)}function n(t,e){return Math.log(e)/Math.log(t)}var s=function(){function s(e,i){_classCallCheck(this,s),this.$element=e,this.options=t.extend({},s.defaults,this.$element.data(),i),this._init(),Foundation.registerPlugin(this,"Slider"),Foundation.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}return _createClass(s,[{key:"_init",value:function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):t("#"+this.$handle.attr("aria-controls")),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var e=!1;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=t().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=this.inputs.length>1?this.inputs.eq(1):t("#"+this.$handle2.attr("aria-controls")),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),e=!0,this._setInitAttr(1)),this.setHandles(),this._events()}},{key:"setHandles",value:function(){var t=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){t._setHandlePos(t.$handle2,t.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function(){this.setHandles()}},{key:"_pctOfBar",value:function(t){var i=e(t-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":i=this._logTransform(i);break;case"log":i=this._powTransform(i)}return i.toFixed(2)}},{key:"_value",value:function(t){switch(this.options.positionValueFunction){case"pow":t=this._powTransform(t);break;case"log":t=this._logTransform(t)}var e=(this.options.end-this.options.start)*t+this.options.start;return e}},{key:"_logTransform",value:function(t){return n(this.options.nonLinearBase,t*(this.options.nonLinearBase-1)+1)}},{key:"_powTransform",value:function(t){return(Math.pow(this.options.nonLinearBase,t)-1)/(this.options.nonLinearBase-1)}},{key:"_setHandlePos",value:function(t,i,n,s){if(!this.$element.hasClass(this.options.disabledClass)){i=parseFloat(i),i<this.options.start?i=this.options.start:i>this.options.end&&(i=this.options.end);var o=this.options.doubleSided;if(o)if(0===this.handles.index(t)){var a=parseFloat(this.$handle2.attr("aria-valuenow"));i=i>=a?a-this.options.step:i}else{var r=parseFloat(this.$handle.attr("aria-valuenow"));i=i<=r?r+this.options.step:i}this.options.vertical&&!n&&(i=this.options.end-i);var l=this,h=this.options.vertical,u=h?"height":"width",d=h?"top":"left",c=t[0].getBoundingClientRect()[u],f=this.$element[0].getBoundingClientRect()[u],p=this._pctOfBar(i),m=(f-c)*p,g=(100*e(m,f)).toFixed(this.options.decimal);i=parseFloat(i.toFixed(this.options.decimal));var v={};if(this._setValues(t,i),o){var y,w=0===this.handles.index(t),b=~~(100*e(c,f));if(w)v[d]=g+"%",y=parseFloat(this.$handle2[0].style[d])-g+b,s&&"function"==typeof s&&s();else{var $=parseFloat(this.$handle[0].style[d]);y=g-(isNaN($)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):$)+b}v["min-"+u]=y+"%"}this.$element.one("finished.zf.animate",function(){l.$element.trigger("moved.zf.slider",[t])});var C=this.$element.data("dragging")?1e3/60:this.options.moveTime;Foundation.Move(C,t,function(){isNaN(g)?t.css(d,100*p+"%"):t.css(d,g+"%"),l.options.doubleSided?l.$fill.css(v):l.$fill.css(u,100*p+"%")}),clearTimeout(l.timeout),l.timeout=setTimeout(function(){l.$element.trigger("changed.zf.slider",[t])},l.options.changedDelay)}}},{key:"_setInitAttr",value:function(t){var e=0===t?this.options.initialStart:this.options.initialEnd,i=this.inputs.eq(t).attr("id")||Foundation.GetYoDigits(6,"slider");
this.inputs.eq(t).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(t).val(e),this.handles.eq(t).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":e,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}},{key:"_setValues",value:function(t,e){var i=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(i).val(e),t.attr("aria-valuenow",e)}},{key:"_handleEvent",value:function(n,s,o){var a,r;if(o)a=this._adjustValue(null,o),r=!0;else{n.preventDefault();var l=this,h=this.options.vertical,u=h?"height":"width",d=h?"top":"left",c=h?n.pageY:n.pageX,f=(this.$handle[0].getBoundingClientRect()[u]/2,this.$element[0].getBoundingClientRect()[u]),p=h?t(window).scrollTop():t(window).scrollLeft(),m=this.$element.offset()[d];n.clientY===n.pageY&&(c+=p);var g,v=c-m;g=v<0?0:v>f?f:v;var y=e(g,f);if(a=this._value(y),Foundation.rtl()&&!this.options.vertical&&(a=this.options.end-a),a=l._adjustValue(null,a),r=!1,!s){var w=i(this.$handle,d,g,u),b=i(this.$handle2,d,g,u);s=w<=b?this.$handle:this.$handle2}}this._setHandlePos(s,a,r)}},{key:"_adjustValue",value:function(t,e){var i,n,s,o,a=this.options.step,r=parseFloat(a/2);return i=t?parseFloat(t.attr("aria-valuenow")):e,n=i%a,s=i-n,o=s+a,0===n?i:i=i>=s+r?o:s}},{key:"_events",value:function(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}},{key:"_eventsForHandle",value:function(e){var i,n=this;if(this.inputs.off("change.zf.slider").on("change.zf.slider",function(e){var i=n.inputs.index(t(this));n._handleEvent(e,n.handles.eq(i),t(this).val())}),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(e){return!n.$element.data("dragging")&&void(t(e.target).is("[data-slider-handle]")||(n.options.doubleSided?n._handleEvent(e):n._handleEvent(e,n.$handle)))}),this.options.draggable){this.handles.addTouch();var s=t("body");e.off("mousedown.zf.slider").on("mousedown.zf.slider",function(o){e.addClass("is-dragging"),n.$fill.addClass("is-dragging"),n.$element.data("dragging",!0),i=t(o.currentTarget),s.on("mousemove.zf.slider",function(t){t.preventDefault(),n._handleEvent(t,i)}).on("mouseup.zf.slider",function(t){n._handleEvent(t,i),e.removeClass("is-dragging"),n.$fill.removeClass("is-dragging"),n.$element.data("dragging",!1),s.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(t){t.preventDefault()})}e.off("keydown.zf.slider").on("keydown.zf.slider",function(e){var i,s=t(this),o=n.options.doubleSided?n.handles.index(s):0,a=parseFloat(n.inputs.eq(o).val());Foundation.Keyboard.handleKey(e,"Slider",{decrease:function(){i=a-n.options.step},increase:function(){i=a+n.options.step},decrease_fast:function(){i=a-10*n.options.step},increase_fast:function(){i=a+10*n.options.step},handled:function(){e.preventDefault(),n._setHandlePos(s,i,!0)}})})}},{key:"destroy",value:function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout),Foundation.unregisterPlugin(this)}}]),s}();s.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled",invertVertical:!1,changedDelay:500,nonLinearBase:5,positionValueFunction:"linear"},Foundation.plugin(s,"Slider")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}var i=function(){function i(e,n){_classCallCheck(this,i),this.$element=e,this.options=t.extend({},i.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(i,[{key:"_init",value:function(){var e=this.$element.parent("[data-sticky-container]"),i=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),n=this;e.length||(this.wasWrapped=!0),this.$container=e.length?e:t(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":i}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,t(window).one("load.zf.sticky",function(){n.containerHeight="none"==n.$element.css("display")?0:n.$element[0].getBoundingClientRect().height,n.$container.css("height",n.containerHeight),n.elemHeight=n.containerHeight,""!==n.options.anchor?n.$anchor=t("#"+n.options.anchor):n._parsePoints(),n._setSizes(function(){var t=window.pageYOffset;n._calc(!1,t),n.isStuck||n._removeSticky(!(t>=n.topPoint))}),n._events(i.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var e=""==this.options.topAnchor?1:this.options.topAnchor,i=""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor,n=[e,i],s={},o=0,a=n.length;o<a&&n[o];o++){var r;if("number"==typeof n[o])r=n[o];else{var l=n[o].split(":"),h=t("#"+l[0]);r=h.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(r+=h[0].getBoundingClientRect().height)}s[o]=r}this.points=s}},{key:"_events",value:function(e){var i=this,n=this.scrollListener="scroll.zf."+e;this.isOn||(this.canStick&&(this.isOn=!0,t(window).off(n).on(n,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,s){i._setSizes(function(){i._calc(!1),i.canStick?i.isOn||i._events(e):i.isOn&&i._pauseListeners(n)})}))}},{key:"_pauseListeners",value:function(e){this.isOn=!1,t(window).off(e),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,e){return t&&this._setSizes(),this.canStick?(e||(e=window.pageYOffset),void(e>=this.topPoint?e<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)}},{key:"_setSticky",value:function(){var t=this,e=this.options.stickTo,i="top"===e?"marginTop":"marginBottom",n="top"===e?"bottom":"top",s={};s[i]=this.options[i]+"em",s[e]=0,s[n]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+n).addClass("is-stuck is-at-"+e).css(s).trigger("sticky.zf.stuckto:"+e),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}},{key:"_removeSticky",value:function(t){var e=this.options.stickTo,i="top"===e,n={},s=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,o=i?"marginTop":"marginBottom",a=t?"top":"bottom";n[o]=0,n.bottom="auto",t?n.top=0:n.top=s,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+e).addClass("is-anchored is-at-"+a).css(n).trigger("sticky.zf.unstuckfrom:"+a)}},{key:"_setSizes",value:function(t){this.canStick=Foundation.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var e=this.$container[0].getBoundingClientRect().width,i=window.getComputedStyle(this.$container[0]),n=parseInt(i["padding-left"],10),s=parseInt(i["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":e-n-s+"px"});var o=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(o=0),this.containerHeight=o,this.$container.css({height:o}),this.elemHeight=o,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var a=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",a)}this._setBreakPoints(o,function(){t&&"function"==typeof t&&t()})}},{key:"_setBreakPoints",value:function(t,i){if(!this.canStick){if(!i||"function"!=typeof i)return!1;i()}var n=e(this.options.marginTop),s=e(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,a=this.points?this.points[1]:o+this.anchorHeight,r=window.innerHeight;"top"===this.options.stickTo?(o-=n,a-=t+n):"bottom"===this.options.stickTo&&(o-=r-(t+s),a-=r-s),this.topPoint=o,this.bottomPoint=a,i&&"function"==typeof i&&i()}},{key:"destroy",value:function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),t(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),i}();i.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(i,"Sticky")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Tabs"),Foundation.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}return _createClass(e,[{key:"_init",value:function(){var e=this,i=this;if(this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find("."+this.options.linkClass),this.$tabContent=t('[data-tabs-content="'+this.$element[0].id+'"]'),this.$tabTitles.each(function(){var e=t(this),n=e.find("a"),s=e.hasClass(""+i.options.linkActiveClass),o=n[0].hash.slice(1),a=n[0].id?n[0].id:o+"-label",r=t("#"+o);e.attr({role:"presentation"}),n.attr({role:"tab","aria-controls":o,"aria-selected":s,id:a}),r.attr({role:"tabpanel","aria-hidden":!s,"aria-labelledby":a}),s&&i.options.autoFocus&&t(window).load(function(){t("html, body").animate({scrollTop:e.offset().top},i.options.deepLinkSmudgeDelay,function(){n.focus()})})}),this.options.matchHeight){var n=this.$tabContent.find("img");n.length?Foundation.onImagesLoaded(n,this._setHeight.bind(this)):this._setHeight()}this._checkDeepLink=function(){var i=window.location.hash;if(i.length){var n=e.$element.find('[href="'+i+'"]');if(n.length){if(e.selectTab(t(i),!0),e.options.deepLinkSmudge){var s=e.$element.offset();t("html, body").animate({scrollTop:s.top},e.options.deepLinkSmudgeDelay)}e.$element.trigger("deeplink.zf.tabs",[n,t(i)])}}},this.options.deepLink&&this._checkDeepLink(),this._events()}},{key:"_events",value:function(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),t(window).on("changed.zf.mediaquery",this._setHeightMqHandler)),this.options.deepLink&&t(window).on("popstate",this._checkDeepLink)}},{key:"_addClickHandler",value:function(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs","."+this.options.linkClass,function(i){i.preventDefault(),i.stopPropagation(),e._handleTabChange(t(this))})}},{key:"_addKeyHandler",value:function(){var e=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(i){if(9!==i.which){var n,s,o=t(this),a=o.parent("ul").children("li");a.each(function(i){if(t(this).is(o))return void(e.options.wrapOnKeys?(n=0===i?a.last():a.eq(i-1),s=i===a.length-1?a.first():a.eq(i+1)):(n=a.eq(Math.max(0,i-1)),s=a.eq(Math.min(i+1,a.length-1))))}),Foundation.Keyboard.handleKey(i,"Tabs",{open:function(){o.find('[role="tab"]').focus(),e._handleTabChange(o)},previous:function(){n.find('[role="tab"]').focus(),e._handleTabChange(n)},next:function(){s.find('[role="tab"]').focus(),e._handleTabChange(s)},handled:function(){i.stopPropagation(),i.preventDefault()}})}})}},{key:"_handleTabChange",value:function(t,e){if(t.hasClass(""+this.options.linkActiveClass))return void(this.options.activeCollapse&&(this._collapseTab(t),this.$element.trigger("collapse.zf.tabs",[t])));var i=this.$element.find("."+this.options.linkClass+"."+this.options.linkActiveClass),n=t.find('[role="tab"]'),s=n[0].hash,o=this.$tabContent.find(s);if(this._collapseTab(i),this._openTab(t),this.options.deepLink&&!e){var a=t.find("a").attr("href");this.options.updateHistory?history.pushState({},"",a):history.replaceState({},"",a)}this.$element.trigger("change.zf.tabs",[t,o]),o.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_openTab",value:function(t){var e=t.find('[role="tab"]'),i=e[0].hash,n=this.$tabContent.find(i);t.addClass(""+this.options.linkActiveClass),e.attr({"aria-selected":"true"}),n.addClass(""+this.options.panelActiveClass).attr({"aria-hidden":"false"})}},{key:"_collapseTab",value:function(e){var i=e.removeClass(""+this.options.linkActiveClass).find('[role="tab"]').attr({"aria-selected":"false"});t("#"+i.attr("aria-controls")).removeClass(""+this.options.panelActiveClass).attr({"aria-hidden":"true"})}},{key:"selectTab",value:function(t,e){var i;i="object"==typeof t?t[0].id:t,i.indexOf("#")<0&&(i="#"+i);var n=this.$tabTitles.find('[href="'+i+'"]').parent("."+this.options.linkClass);this._handleTabChange(n,e)}},{key:"_setHeight",value:function(){var e=0,i=this;this.$tabContent.find("."+this.options.panelClass).css("height","").each(function(){var n=t(this),s=n.hasClass(""+i.options.panelActiveClass);s||n.css({visibility:"hidden",display:"block"});var o=this.getBoundingClientRect().height;s||n.css({visibility:"",display:""}),e=o>e?o:e}).css("height",e+"px")}},{key:"destroy",value:function(){this.$element.find("."+this.options.linkClass).off(".zf.tabs").hide().end().find("."+this.options.panelClass).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&t(window).off("changed.zf.mediaquery",this._setHeightMqHandler),this.options.deepLink&&t(window).off("popstate",this._checkDeepLink),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={deepLink:!1,deepLinkSmudge:!1,deepLinkSmudgeDelay:300,updateHistory:!1,autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,activeCollapse:!1,linkClass:"tabs-title",linkActiveClass:"is-active",panelClass:"tabs-panel",panelActiveClass:"is-active"},Foundation.plugin(e,"Tabs")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,i.data(),n),this.className="",this._init(),this._events(),Foundation.registerPlugin(this,"Toggler")}return _createClass(e,[{key:"_init",value:function(){var e;this.options.animate?(e=this.options.animate.split(" "),this.animationIn=e[0],this.animationOut=e[1]||null):(e=this.$element.data("toggler"),this.className="."===e[0]?e.slice(1):e);var i=this.$element[0].id;t('[data-open="'+i+'"], [data-close="'+i+'"], [data-toggle="'+i+'"]').attr("aria-controls",i),this.$element.attr("aria-expanded",!this.$element.is(":hidden"))}},{key:"_events",value:function(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}},{key:"toggle",value:function(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function(){this.$element.toggleClass(this.className);var t=this.$element.hasClass(this.className);t?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler"),this._updateARIA(t),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function(){var t=this;this.$element.is(":hidden")?Foundation.Motion.animateIn(this.$element,this.animationIn,function(){t._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):Foundation.Motion.animateOut(this.$element,this.animationOut,function(){t._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function(t){this.$element.attr("aria-expanded",!!t)}},{key:"destroy",value:function(){this.$element.off(".zf.toggler"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={animate:!1},Foundation.plugin(e,"Toggler")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this.isActive=!1,this.isClick=!1,this._init(),Foundation.registerPlugin(this,"Tooltip")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("aria-describedby")||Foundation.GetYoDigits(6,"tooltip");this.options.positionClass=this.options.positionClass||this._getPositionClass(this.$element),this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?t(this.options.template):this._buildTemplate(e),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":e,"data-yeti-box":e,"data-toggle":e,"data-resize":e}).addClass(this.options.triggerClass),this.usedPositions=[],this.counter=4,this.classChanged=!1,this._events()}},{key:"_getPositionClass",value:function(t){if(!t)return"";var e=t[0].className.match(/\b(top|left|right)\b/g);return e=e?e[0]:""}},{key:"_buildTemplate",value:function(e){var i=(this.options.tooltipClass+" "+this.options.positionClass+" "+this.options.templateClasses).trim(),n=t("<div></div>").addClass(i).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:e});return n}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.template.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.template.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.template.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):this.template.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){var t=this._getPositionClass(this.template),e=Foundation.Box.GetDimensions(this.template),i=Foundation.Box.GetDimensions(this.$element),n="left"===t?"left":"right"===t?"left":"top",s="top"===n?"height":"width";"height"===s?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.template))return this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:i.windowDims.width-2*this.options.hOffset,height:"auto"}),!1;for(this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center "+(t||"bottom"),this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.template)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"show",value:function(){if("all"!==this.options.showOn&&!Foundation.MediaQuery.is(this.options.showOn))return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function(){var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1,t.classChanged&&(t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass),t.usedPositions=[],t.counter=4,t.classChanged=!1)}),this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function(){var t=this,e=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",function(i){clearTimeout(t.timeout),(!e||t.isClick&&!t.options.clickOpen)&&t.hide()}),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick||(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}):this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(i){return e=!0,t.isClick?(t.options.clickOpen||(e=!1),!1):void t.show()}).on("focusout.zf.tooltip",function(i){e=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})}},{key:"toggle",value:function(){this.isActive?this.hide():this.show()}},{key:"destroy",value:function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove(),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,positionClass:"",vOffset:10,hOffset:12,allowHtml:!1},Foundation.plugin(e,"Tooltip")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.options=t.extend({},this.$element.data(),n),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.$element.attr("id")||this.$element.attr("id",Foundation.GetYoDigits(6,"responsiveaccordiontabs")),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveAccordionTabs")}return _createClass(e,[{key:"_init",value:function(){if("string"==typeof this.rules){for(var e={},n=this.rules.split(" "),s=0;s<n.length;s++){var o=n[s].split("-"),a=o.length>1?o[0]:"small",r=o.length>1?o[1]:o[0];null!==i[r]&&(e[a]=i[r])}this.rules=e}this._getAllOptions(),t.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function(){var e=this;e.allOptions={};for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];try{var o=t("<ul></ul>"),a=new s.plugin(o,e.options);for(var r in a.options)if(a.options.hasOwnProperty(r)&&"zfPlugin"!==r){var l=a.options[r];e.allOptions[r]=l}a.destroy()}catch(t){}}}},{key:"_events",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var e,n=this;t.each(this.rules,function(t){Foundation.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(t.each(i,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&(!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[e].cssClass),this.currentPlugin=new this.rules[e].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function(e){var i=this,n="accordion",s=t("[data-tabs-content="+this.$element.attr("id")+"]");if(s.length&&(n="tabs"),n!==e){var o=i.allOptions.linkClass?i.allOptions.linkClass:"tabs-title",a=i.allOptions.panelClass?i.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var r=this.$element.children("."+o+",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item"),l=r.children("a").removeClass("accordion-title");if("tabs"===n?(s=s.children("."+a).removeClass(a).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby"),s.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected")):s=r.children("[data-tab-content]").removeClass("accordion-content"),s.css({display:"",visibility:""}),r.css({display:"",visibility:""}),"accordion"===e)s.each(function(e,n){t(n).appendTo(r.get(e)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),t("[data-tabs-content="+i.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+i.$element.attr("id")+'"></div>').remove(),r.addClass("accordion-item").attr("data-accordion-item",""),l.addClass("accordion-title")});else if("tabs"===e){var h=t("[data-tabs-content="+i.$element.attr("id")+"]"),u=t("#tabs-placeholder-"+i.$element.attr("id"));u.length?(h=t('<div class="tabs-content"></div>').insertAfter(u).attr("data-tabs-content",i.$element.attr("id")),u.remove()):h=t('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content",i.$element.attr("id")),s.each(function(e,i){var n=t(i).appendTo(h).addClass(a),s=l.get(e).hash.slice(1),o=t(i).attr("id")||Foundation.GetYoDigits(6,"accordion");s!==o&&(""!==s?t(i).attr("id",s):(s=o,t(i).attr("id",s),t(l.get(e)).attr("href",t(l.get(e)).attr("href").replace("#","")+"#"+s)));var u=t(r.get(e)).hasClass("is-active");u&&n.addClass("is-active")}),r.addClass(o)}}}},{key:"destroy",value:function(){this.currentPlugin&&this.currentPlugin.destroy(),t(window).off(".zf.ResponsiveAccordionTabs"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={};var i={tabs:{cssClass:"tabs",plugin:Foundation._plugins.tabs||null},accordion:{cssClass:"accordion",plugin:Foundation._plugins.accordion||null}};Foundation.plugin(e,"ResponsiveAccordionTabs")}(jQuery);
'use strict';

!function($) {

/**
 * Abide module.
 * @module foundation.abide
 */

class Abide {
  /**
   * Creates a new instance of Abide.
   * @class
   * @fires Abide#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options = {}) {
    this.$element = element;
    this.options  = $.extend({}, Abide.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Abide');
  }

  /**
   * Initializes the Abide plugin and calls functions to get Abide functioning on load.
   * @private
   */
  _init() {
    this.$inputs = this.$element.find('input, textarea, select');

    this._events();
  }

  /**
   * Initializes events for Abide.
   * @private
   */
  _events() {
    this.$element.off('.abide')
      .on('reset.zf.abide', () => {
        this.resetForm();
      })
      .on('submit.zf.abide', () => {
        return this.validateForm();
      });

    if (this.options.validateOn === 'fieldChange') {
      this.$inputs
        .off('change.zf.abide')
        .on('change.zf.abide', (e) => {
          this.validateInput($(e.target));
        });
    }

    if (this.options.liveValidate) {
      this.$inputs
        .off('input.zf.abide')
        .on('input.zf.abide', (e) => {
          this.validateInput($(e.target));
        });
    }

    if (this.options.validateOnBlur) {
      this.$inputs
        .off('blur.zf.abide')
        .on('blur.zf.abide', (e) => {
          this.validateInput($(e.target));
        });
    }
  }

  /**
   * Calls necessary functions to update Abide upon DOM change
   * @private
   */
  _reflow() {
    this._init();
  }

  /**
   * Checks whether or not a form element has the required attribute and if it's checked or not
   * @param {Object} element - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  requiredCheck($el) {
    if (!$el.attr('required')) return true;

    var isGood = true;

    switch ($el[0].type) {
      case 'checkbox':
        isGood = $el[0].checked;
        break;

      case 'select':
      case 'select-one':
      case 'select-multiple':
        var opt = $el.find('option:selected');
        if (!opt.length || !opt.val()) isGood = false;
        break;

      default:
        if(!$el.val() || !$el.val().length) isGood = false;
    }

    return isGood;
  }

  /**
   * Get:
   * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
   *   1. The element's direct sibling('s).
   *   2. The element's parent's children.
   * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
   *
   * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
   *
   * @param {Object} $el - jQuery object to use as reference to find the form error selector.
   * @returns {Object} jQuery object with the selector.
   */
  findFormError($el) {
    var id = $el[0].id;
    var $error = $el.siblings(this.options.formErrorSelector);

    if (!$error.length) {
      $error = $el.parent().find(this.options.formErrorSelector);
    }

    $error = $error.add(this.$element.find(`[data-form-error-for="${id}"]`));

    return $error;
  }

  /**
   * Get the first element in this order:
   * 2. The <label> with the attribute `[for="someInputId"]`
   * 3. The `.closest()` <label>
   *
   * @param {Object} $el - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  findLabel($el) {
    var id = $el[0].id;
    var $label = this.$element.find(`label[for="${id}"]`);

    if (!$label.length) {
      return $el.closest('label');
    }

    return $label;
  }

  /**
   * Get the set of labels associated with a set of radio els in this order
   * 2. The <label> with the attribute `[for="someInputId"]`
   * 3. The `.closest()` <label>
   *
   * @param {Object} $el - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  findRadioLabels($els) {
    var labels = $els.map((i, el) => {
      var id = el.id;
      var $label = this.$element.find(`label[for="${id}"]`);

      if (!$label.length) {
        $label = $(el).closest('label');
      }
      return $label[0];
    });

    return $(labels);
  }

  /**
   * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
   * @param {Object} $el - jQuery object to add the class to
   */
  addErrorClasses($el) {
    var $label = this.findLabel($el);
    var $formError = this.findFormError($el);

    if ($label.length) {
      $label.addClass(this.options.labelErrorClass);
    }

    if ($formError.length) {
      $formError.addClass(this.options.formErrorClass);
    }

    $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
  }

  /**
   * Remove CSS error classes etc from an entire radio button group
   * @param {String} groupName - A string that specifies the name of a radio button group
   *
   */

  removeRadioErrorClasses(groupName) {
    var $els = this.$element.find(`:radio[name="${groupName}"]`);
    var $labels = this.findRadioLabels($els);
    var $formErrors = this.findFormError($els);

    if ($labels.length) {
      $labels.removeClass(this.options.labelErrorClass);
    }

    if ($formErrors.length) {
      $formErrors.removeClass(this.options.formErrorClass);
    }

    $els.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');

  }

  /**
   * Removes CSS error class as specified by the Abide settings from the label, input, and the form
   * @param {Object} $el - jQuery object to remove the class from
   */
  removeErrorClasses($el) {
    // radios need to clear all of the els
    if($el[0].type == 'radio') {
      return this.removeRadioErrorClasses($el.attr('name'));
    }

    var $label = this.findLabel($el);
    var $formError = this.findFormError($el);

    if ($label.length) {
      $label.removeClass(this.options.labelErrorClass);
    }

    if ($formError.length) {
      $formError.removeClass(this.options.formErrorClass);
    }

    $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
  }

  /**
   * Goes through a form to find inputs and proceeds to validate them in ways specific to their type. 
   * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
   * @fires Abide#invalid
   * @fires Abide#valid
   * @param {Object} element - jQuery object to validate, should be an HTML input
   * @returns {Boolean} goodToGo - If the input is valid or not.
   */
  validateInput($el) {
    var clearRequire = this.requiredCheck($el),
        validated = false,
        customValidator = true,
        validator = $el.attr('data-validator'),
        equalTo = true;

    // don't validate ignored inputs or hidden inputs or disabled inputs
    if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
      return true;
    }

    switch ($el[0].type) {
      case 'radio':
        validated = this.validateRadio($el.attr('name'));
        break;

      case 'checkbox':
        validated = clearRequire;
        break;

      case 'select':
      case 'select-one':
      case 'select-multiple':
        validated = clearRequire;
        break;

      default:
        validated = this.validateText($el);
    }

    if (validator) {
      customValidator = this.matchValidation($el, validator, $el.attr('required'));
    }

    if ($el.attr('data-equalto')) {
      equalTo = this.options.validators.equalTo($el);
    }


    var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
    var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

    if (goodToGo) {
      // Re-validate inputs that depend on this one with equalto
      const dependentElements = this.$element.find(`[data-equalto="${$el.attr('id')}"]`);
      if (dependentElements.length) {
        let _this = this;
        dependentElements.each(function() {
          if ($(this).val()) {
            _this.validateInput($(this));
          }
        });
      }
    }

    this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);

    /**
     * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
     * Trigger includes the DOM element of the input.
     * @event Abide#valid
     * @event Abide#invalid
     */
    $el.trigger(message, [$el]);

    return goodToGo;
  }

  /**
   * Goes through a form and if there are any invalid inputs, it will display the form error element
   * @returns {Boolean} noError - true if no errors were detected...
   * @fires Abide#formvalid
   * @fires Abide#forminvalid
   */
  validateForm() {
    var acc = [];
    var _this = this;

    this.$inputs.each(function() {
      acc.push(_this.validateInput($(this)));
    });

    var noError = acc.indexOf(false) === -1;

    this.$element.find('[data-abide-error]').css('display', (noError ? 'none' : 'block'));

    /**
     * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
     * Trigger includes the element of the form.
     * @event Abide#formvalid
     * @event Abide#forminvalid
     */
    this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);

    return noError;
  }

  /**
   * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
   * @param {Object} $el - jQuery object to validate, should be a text input HTML element
   * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
   * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
   */
  validateText($el, pattern) {
    // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
    pattern = (pattern || $el.attr('pattern') || $el.attr('type'));
    var inputText = $el.val();
    var valid = false;

    if (inputText.length) {
      // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
      if (this.options.patterns.hasOwnProperty(pattern)) {
        valid = this.options.patterns[pattern].test(inputText);
      }
      // If the pattern name isn't also the type attribute of the field, then test it as a regexp
      else if (pattern !== $el.attr('type')) {
        valid = new RegExp(pattern).test(inputText);
      }
      else {
        valid = true;
      }
    }
    // An empty field is valid if it's not required
    else if (!$el.prop('required')) {
      valid = true;
    }

    return valid;
   }

  /**
   * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
   * @param {String} groupName - A string that specifies the name of a radio button group
   * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
   */
  validateRadio(groupName) {
    // If at least one radio in the group has the `required` attribute, the group is considered required
    // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
    var $group = this.$element.find(`:radio[name="${groupName}"]`);
    var valid = false, required = false;

    // For the group to be required, at least one radio needs to be required
    $group.each((i, e) => {
      if ($(e).attr('required')) {
        required = true;
      }
    });
    if(!required) valid=true;

    if (!valid) {
      // For the group to be valid, at least one radio needs to be checked
      $group.each((i, e) => {
        if ($(e).prop('checked')) {
          valid = true;
        }
      });
    };

    return valid;
  }

  /**
   * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
   * @param {Object} $el - jQuery input element.
   * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
   * @param {Boolean} required - self explanatory?
   * @returns {Boolean} - true if validations passed.
   */
  matchValidation($el, validators, required) {
    required = required ? true : false;

    var clear = validators.split(' ').map((v) => {
      return this.options.validators[v]($el, required, $el.parent());
    });
    return clear.indexOf(false) === -1;
  }

  /**
   * Resets form inputs and styles
   * @fires Abide#formreset
   */
  resetForm() {
    var $form = this.$element,
        opts = this.options;

    $(`.${opts.labelErrorClass}`, $form).not('small').removeClass(opts.labelErrorClass);
    $(`.${opts.inputErrorClass}`, $form).not('small').removeClass(opts.inputErrorClass);
    $(`${opts.formErrorSelector}.${opts.formErrorClass}`).removeClass(opts.formErrorClass);
    $form.find('[data-abide-error]').css('display', 'none');
    $(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').removeAttr('data-invalid');
    $(':input:radio', $form).not('[data-abide-ignore]').prop('checked',false).removeAttr('data-invalid');
    $(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked',false).removeAttr('data-invalid');
    /**
     * Fires when the form has been reset.
     * @event Abide#formreset
     */
    $form.trigger('formreset.zf.abide', [$form]);
  }

  /**
   * Destroys an instance of Abide.
   * Removes error styles and classes from elements, without resetting their values.
   */
  destroy() {
    var _this = this;
    this.$element
      .off('.abide')
      .find('[data-abide-error]')
        .css('display', 'none');

    this.$inputs
      .off('.abide')
      .each(function() {
        _this.removeErrorClasses($(this));
      });

    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
Abide.defaults = {
  /**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
  validateOn: 'fieldChange',

  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',

  /**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',

  /**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
  formErrorSelector: '.form-error',

  /**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
  formErrorClass: 'is-visible',

  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
  liveValidate: false,

  /**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
  validateOnBlur: false,

  patterns: {
    alpha : /^[a-zA-Z]+$/,
    alpha_numeric : /^[a-zA-Z0-9]+$/,
    integer : /^[-+]?\d+$/,
    number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

    // amex, visa, diners
    card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    cvv : /^([0-9]){3,4}$/,

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

    url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
    // abc.de
    domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

    datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
    // YYYY-MM-DD
    date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
    // HH:MM:SS
    time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
    dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
    // MM/DD/YYYY
    month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
    // DD/MM/YYYY
    day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

    // #FFF or #FFFFFF
    color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  },

  /**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
  validators: {
    equalTo: function (el, required, parent) {
      return $(`#${el.attr('data-equalto')}`).val() === el.val();
    }
  }
}

// Window exports
Foundation.plugin(Abide, 'Abide');

}(jQuery);

'use strict';

!function($) {

/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 */

class Accordion {
  /**
   * Creates a new instance of an accordion.
   * @class
   * @fires Accordion#init
   * @param {jQuery} element - jQuery object to make into an accordion.
   * @param {Object} options - a plain object with settings to override the default options.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Accordion');
    Foundation.Keyboard.register('Accordion', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_DOWN': 'next',
      'ARROW_UP': 'previous'
    });
  }

  /**
   * Initializes the accordion by animating the preset active pane(s).
   * @private
   */
  _init() {
    this.$element.attr('role', 'tablist');
    this.$tabs = this.$element.children('[data-accordion-item]');

    this.$tabs.each(function(idx, el) {
      var $el = $(el),
          $content = $el.children('[data-tab-content]'),
          id = $content[0].id || Foundation.GetYoDigits(6, 'accordion'),
          linkId = el.id || `${id}-label`;

      $el.find('a:first').attr({
        'aria-controls': id,
        'role': 'tab',
        'id': linkId,
        'aria-expanded': false,
        'aria-selected': false
      });

      $content.attr({'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id});
    });
    var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
    this.firstTimeInit = true;
    if($initActive.length){
      this.down($initActive, this.firstTimeInit);
      this.firstTimeInit = false;
    }

    this._checkDeepLink = () => {
      var anchor = window.location.hash;
      //need a hash and a relevant anchor in this tabset
      if(anchor.length) {
        var $link = this.$element.find('[href$="'+anchor+'"]'),
        $anchor = $(anchor);

        if ($link.length && $anchor) {
          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
            this.down($anchor, this.firstTimeInit);
            this.firstTimeInit = false;
          };

          //roll up a little to show the titles
          if (this.options.deepLinkSmudge) {
            var _this = this;
            $(window).load(function() {
              var offset = _this.$element.offset();
              $('html, body').animate({ scrollTop: offset.top }, _this.options.deepLinkSmudgeDelay);
            });
          }

          /**
            * Fires when the zplugin has deeplinked at pageload
            * @event Accordion#deeplink
            */
          this.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
        }
      }
    }

    //use browser to open a tab, if it exists in this tabset
    if (this.options.deepLink) {
      this._checkDeepLink();
    }

    this._events();
  }

  /**
   * Adds event handlers for items within the accordion.
   * @private
   */
  _events() {
    var _this = this;

    this.$tabs.each(function() {
      var $elem = $(this);
      var $tabContent = $elem.children('[data-tab-content]');
      if ($tabContent.length) {
        $elem.children('a').off('click.zf.accordion keydown.zf.accordion')
               .on('click.zf.accordion', function(e) {
          e.preventDefault();
          _this.toggle($tabContent);
        }).on('keydown.zf.accordion', function(e){
          Foundation.Keyboard.handleKey(e, 'Accordion', {
            toggle: function() {
              _this.toggle($tabContent);
            },
            next: function() {
              var $a = $elem.next().find('a').focus();
              if (!_this.options.multiExpand) {
                $a.trigger('click.zf.accordion')
              }
            },
            previous: function() {
              var $a = $elem.prev().find('a').focus();
              if (!_this.options.multiExpand) {
                $a.trigger('click.zf.accordion')
              }
            },
            handled: function() {
              e.preventDefault();
              e.stopPropagation();
            }
          });
        });
      }
    });
    if(this.options.deepLink) {
      $(window).on('popstate', this._checkDeepLink);
    }
  }

  /**
   * Toggles the selected content pane's open/close state.
   * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
   * @function
   */
  toggle($target) {
    if($target.parent().hasClass('is-active')) {
      this.up($target);
    } else {
      this.down($target);
    }
    //either replace or update browser history
    if (this.options.deepLink) {
      var anchor = $target.prev('a').attr('href');

      if (this.options.updateHistory) {
        history.pushState({}, '', anchor);
      } else {
        history.replaceState({}, '', anchor);
      }
    }
  }

  /**
   * Opens the accordion tab defined by `$target`.
   * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
   * @param {Boolean} firstTime - flag to determine if reflow should happen.
   * @fires Accordion#down
   * @function
   */
  down($target, firstTime) {
    $target
      .attr('aria-hidden', false)
      .parent('[data-tab-content]')
      .addBack()
      .parent().addClass('is-active');

    if (!this.options.multiExpand && !firstTime) {
      var $currentActive = this.$element.children('.is-active').children('[data-tab-content]');
      if ($currentActive.length) {
        this.up($currentActive.not($target));
      }
    }

    $target.slideDown(this.options.slideSpeed, () => {
      /**
       * Fires when the tab is done opening.
       * @event Accordion#down
       */
      this.$element.trigger('down.zf.accordion', [$target]);
    });

    $(`#${$target.attr('aria-labelledby')}`).attr({
      'aria-expanded': true,
      'aria-selected': true
    });
  }

  /**
   * Closes the tab defined by `$target`.
   * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
   * @fires Accordion#up
   * @function
   */
  up($target) {
    var $aunts = $target.parent().siblings(),
        _this = this;

    if((!this.options.allowAllClosed && !$aunts.hasClass('is-active')) || !$target.parent().hasClass('is-active')) {
      return;
    }

    // Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this.$element.trigger('up.zf.accordion', [$target]);
      });
    // });

    $target.attr('aria-hidden', true)
           .parent().removeClass('is-active');

    $(`#${$target.attr('aria-labelledby')}`).attr({
     'aria-expanded': false,
     'aria-selected': false
   });
  }

  /**
   * Destroys an instance of an accordion.
   * @fires Accordion#destroyed
   * @function
   */
  destroy() {
    this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
    this.$element.find('a').off('.zf.accordion');
    if(this.options.deepLink) {
      $(window).off('popstate', this._checkDeepLink);
    }

    Foundation.unregisterPlugin(this);
  }
}

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,
  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,
  /**
   * Allows the window to scroll to content of pane specified by hash anchor
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * Adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * Animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * Update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};

// Window exports
Foundation.plugin(Accordion, 'Accordion');

}(jQuery);

'use strict';

!function($) {

/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */

class AccordionMenu {
  /**
   * Creates a new instance of an accordion menu.
   * @class
   * @fires AccordionMenu#init
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'accordion');

    this._init();

    Foundation.registerPlugin(this, 'AccordionMenu');
    Foundation.Keyboard.register('AccordionMenu', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_RIGHT': 'open',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'close',
      'ESCAPE': 'closeAll'
    });
  }



  /**
   * Initializes the accordion menu by hiding all nested menus.
   * @private
   */
  _init() {
    this.$element.find('[data-submenu]').not('.is-active').slideUp(0);//.find('a').css('padding-left', '1rem');
    this.$element.attr({
      'role': 'menu',
      'aria-multiselectable': this.options.multiOpen
    });

    this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
    this.$menuLinks.each(function(){
      var linkId = this.id || Foundation.GetYoDigits(6, 'acc-menu-link'),
          $elem = $(this),
          $sub = $elem.children('[data-submenu]'),
          subId = $sub[0].id || Foundation.GetYoDigits(6, 'acc-menu'),
          isActive = $sub.hasClass('is-active');
      $elem.attr({
        'aria-controls': subId,
        'aria-expanded': isActive,
        'role': 'menuitem',
        'id': linkId
      });
      $sub.attr({
        'aria-labelledby': linkId,
        'aria-hidden': !isActive,
        'role': 'menu',
        'id': subId
      });
    });
    var initPanes = this.$element.find('.is-active');
    if(initPanes.length){
      var _this = this;
      initPanes.each(function(){
        _this.down($(this));
      });
    }
    this._events();
  }

  /**
   * Adds event handlers for items within the menu.
   * @private
   */
  _events() {
    var _this = this;

    this.$element.find('li').each(function() {
      var $submenu = $(this).children('[data-submenu]');

      if ($submenu.length) {
        $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function(e) {
          e.preventDefault();

          _this.toggle($submenu);
        });
      }
    }).on('keydown.zf.accordionmenu', function(e){
      var $element = $(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement,
          $target = $element.children('[data-submenu]');

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i-1)).find('a').first();
          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1)).find('a').first();

          if ($(this).children('[data-submenu]:visible').length) { // has open sub menu
            $nextElement = $element.find('li:first-child').find('a').first();
          }
          if ($(this).is(':first-child')) { // is first element of sub menu
            $prevElement = $element.parents('li').first().find('a').first();
          } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) { // if previous element has open sub menu
            $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
          }
          if ($(this).is(':last-child')) { // is last element of sub menu
            $nextElement = $element.parents('li').first().next('li').find('a').first();
          }

          return;
        }
      });

      Foundation.Keyboard.handleKey(e, 'AccordionMenu', {
        open: function() {
          if ($target.is(':hidden')) {
            _this.down($target);
            $target.find('li').first().find('a').first().focus();
          }
        },
        close: function() {
          if ($target.length && !$target.is(':hidden')) { // close active sub of this item
            _this.up($target);
          } else if ($element.parent('[data-submenu]').length) { // close currently open sub
            _this.up($element.parent('[data-submenu]'));
            $element.parents('li').first().find('a').first().focus();
          }
        },
        up: function() {
          $prevElement.focus();
          return true;
        },
        down: function() {
          $nextElement.focus();
          return true;
        },
        toggle: function() {
          if ($element.children('[data-submenu]').length) {
            _this.toggle($element.children('[data-submenu]'));
          }
        },
        closeAll: function() {
          _this.hideAll();
        },
        handled: function(preventDefault) {
          if (preventDefault) {
            e.preventDefault();
          }
          e.stopImmediatePropagation();
        }
      });
    });//.attr('tabindex', 0);
  }

  /**
   * Closes all panes of the menu.
   * @function
   */
  hideAll() {
    this.up(this.$element.find('[data-submenu]'));
  }

  /**
   * Opens all panes of the menu.
   * @function
   */
  showAll() {
    this.down(this.$element.find('[data-submenu]'));
  }

  /**
   * Toggles the open/close state of a submenu.
   * @function
   * @param {jQuery} $target - the submenu to toggle
   */
  toggle($target){
    if(!$target.is(':animated')) {
      if (!$target.is(':hidden')) {
        this.up($target);
      }
      else {
        this.down($target);
      }
    }
  }

  /**
   * Opens the sub-menu defined by `$target`.
   * @param {jQuery} $target - Sub-menu to open.
   * @fires AccordionMenu#down
   */
  down($target) {
    var _this = this;

    if(!this.options.multiOpen) {
      this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
    }

    $target.addClass('is-active').attr({'aria-hidden': false})
      .parent('.is-accordion-submenu-parent').attr({'aria-expanded': true});

      //Foundation.Move(this.options.slideSpeed, $target, function() {
        $target.slideDown(_this.options.slideSpeed, function () {
          /**
           * Fires when the menu is done opening.
           * @event AccordionMenu#down
           */
          _this.$element.trigger('down.zf.accordionMenu', [$target]);
        });
      //});
  }

  /**
   * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
   * @param {jQuery} $target - Sub-menu to close.
   * @fires AccordionMenu#up
   */
  up($target) {
    var _this = this;
    //Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this.$element.trigger('up.zf.accordionMenu', [$target]);
      });
    //});

    var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);

    $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
  }

  /**
   * Destroys an instance of accordion menu.
   * @fires AccordionMenu#destroyed
   */
  destroy() {
    this.$element.find('[data-submenu]').slideDown(0).css('display', '');
    this.$element.find('a').off('click.zf.accordionMenu');

    Foundation.Nest.Burn(this.$element, 'accordion');
    Foundation.unregisterPlugin(this);
  }
}

AccordionMenu.defaults = {
  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};

// Window exports
Foundation.plugin(AccordionMenu, 'AccordionMenu');

}(jQuery);

!function($) {

"use strict";

var FOUNDATION_VERSION = '6.3.1';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Returns a boolean for RTL support
   */
  rtl: function(){
    return $('html').attr('dir') === 'rtl';
  },
  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function(plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = (name || functionName(plugin));
    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas
    var attrName  = hyphenate(className);

    // Add to the Foundation object and the plugins list (for reflowing)
    this._plugins[attrName] = this[className] = plugin;
  },
  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function(plugin, name){
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = this.GetYoDigits(6, pluginName);

    if(!plugin.$element.attr(`data-${pluginName}`)){ plugin.$element.attr(`data-${pluginName}`, plugin.uuid); }
    if(!plugin.$element.data('zfPlugin')){ plugin.$element.data('zfPlugin', plugin); }
          /**
           * Fires when the plugin has initialized.
           * @event Plugin#init
           */
    plugin.$element.trigger(`init.zf.${pluginName}`);

    this._uuids.push(plugin.uuid);

    return;
  },
  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function(plugin){
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
    plugin.$element.removeAttr(`data-${pluginName}`).removeData('zfPlugin')
          /**
           * Fires when the plugin has been destroyed.
           * @event Plugin#destroyed
           */
          .trigger(`destroyed.zf.${pluginName}`);
    for(var prop in plugin){
      plugin[prop] = null;//clean up script to prep for garbage collection.
    }
    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
   reInit: function(plugins){
     var isJQ = plugins instanceof $;
     try{
       if(isJQ){
         plugins.each(function(){
           $(this).data('zfPlugin')._init();
         });
       }else{
         var type = typeof plugins,
         _this = this,
         fns = {
           'object': function(plgs){
             plgs.forEach(function(p){
               p = hyphenate(p);
               $('[data-'+ p +']').foundation('_init');
             });
           },
           'string': function(){
             plugins = hyphenate(plugins);
             $('[data-'+ plugins +']').foundation('_init');
           },
           'undefined': function(){
             this['object'](Object.keys(_this._plugins));
           }
         };
         fns[type](plugins);
       }
     }catch(err){
       console.error(err);
     }finally{
       return plugins;
     }
   },

  /**
   * returns a random base-36 uid with namespacing
   * @function
   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
   * @returns {String} - unique id
   */
  GetYoDigits: function(length, namespace){
    length = length || 6;
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? `-${namespace}` : '');
  },
  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function(elem, plugins) {

    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    }
    // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
      plugins = [plugins];
    }

    var _this = this;

    // Iterate through each plugin
    $.each(plugins, function(i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name];

      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
      var $elem = $(elem).find('[data-'+name+']').addBack('[data-'+name+']');

      // For each plugin found, initialize it
      $elem.each(function() {
        var $el = $(this),
            opts = {};
        // Don't double-dip on plugins
        if ($el.data('zfPlugin')) {
          console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");
          return;
        }

        if($el.attr('data-options')){
          var thing = $el.attr('data-options').split(';').forEach(function(e, i){
            var opt = e.split(':').map(function(el){ return el.trim(); });
            if(opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }
        try{
          $el.data('zfPlugin', new plugin($(this), opts));
        }catch(er){
          console.error(er);
        }finally{
          return;
        }
      });
    });
  },
  getFnName: functionName,
  transitionend: function($elem){
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = document.createElement('div'),
        end;

    for (var t in transitions){
      if (typeof elem.style[t] !== 'undefined'){
        end = transitions[t];
      }
    }
    if(end){
      return end;
    }else{
      end = setTimeout(function(){
        $elem.triggerHandler('transitionend', [$elem]);
      }, 1);
      return 'transitionend';
    }
  }
};

Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function (func, delay) {
    var timer = null;

    return function () {
      var context = this, args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};

// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
 * The Foundation jQuery method.
 * @param {String|Array} method - An action to perform on the current jQuery object.
 */
var foundation = function(method) {
  var type = typeof method,
      $meta = $('meta.foundation-mq'),
      $noJS = $('.no-js');

  if(!$meta.length){
    $('<meta class="foundation-mq">').appendTo(document.head);
  }
  if($noJS.length){
    $noJS.removeClass('no-js');
  }

  if(type === 'undefined'){//needs to initialize the Foundation object, or an individual plugin.
    Foundation.MediaQuery._init();
    Foundation.reflow(this);
  }else if(type === 'string'){//an individual method to invoke on a plugin or group of plugins
    var args = Array.prototype.slice.call(arguments, 1);//collect all the arguments, if necessary
    var plugClass = this.data('zfPlugin');//determine the class of plugin

    if(plugClass !== undefined && plugClass[method] !== undefined){//make sure both the class and method exist
      if(this.length === 1){//if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
      }else{
        this.each(function(i, el){//otherwise loop through the jQuery collection and invoke the method on each
          plugClass[method].apply($(el).data('zfPlugin'), args);
        });
      }
    }else{//error for no class or no method
      throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
    }
  }else{//error for invalid argument type
    throw new TypeError(`We're sorry, ${type} is not a valid parameter. You must use a string representing the method you wish to invoke.`);
  }
  return this;
};

window.Foundation = Foundation;
$.fn.foundation = foundation;

// Polyfill for requestAnimationFrame
(function() {
  if (!Date.now || !window.Date.now)
    window.Date.now = Date.now = function() { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                 || window[vp+'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() { callback(lastTime = nextTime); },
                          nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if(!window.performance || !window.performance.now){
    window.performance = {
      start: Date.now(),
      now: function(){ return Date.now() - this.start; }
    };
  }
})();
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = (funcNameRegex).exec((fn).toString());
    return (results && results.length > 1) ? results[1].trim() : "";
  }
  else if (fn.prototype === undefined) {
    return fn.constructor.name;
  }
  else {
    return fn.prototype.constructor.name;
  }
}
function parseValue(str){
  if ('true' === str) return true;
  else if ('false' === str) return false;
  else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

}(jQuery);

'use strict';

!function($) {

/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */

class Drilldown {
  /**
   * Creates a new instance of a drilldown menu.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'drilldown');

    this._init();

    Foundation.registerPlugin(this, 'Drilldown');
    Foundation.Keyboard.register('Drilldown', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'previous',
      'ESCAPE': 'close',
      'TAB': 'down',
      'SHIFT_TAB': 'up'
    });
  }

  /**
   * Initializes the drilldown by creating jQuery collections of elements
   * @private
   */
  _init() {
    this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
    this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]');
    this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'menuitem').find('a');
    this.$element.attr('data-mutate', (this.$element.attr('data-drilldown') || Foundation.GetYoDigits(6, 'drilldown')));

    this._prepareMenu();
    this._registerEvents();

    this._keyboardEvents();
  }

  /**
   * prepares drilldown menu by setting attributes to links and elements
   * sets a min height to prevent content jumping
   * wraps the element if not already wrapped
   * @private
   * @function
   */
  _prepareMenu() {
    var _this = this;
    // if(!this.options.holdOpen){
    //   this._menuLinkEvents();
    // }
    this.$submenuAnchors.each(function(){
      var $link = $(this);
      var $sub = $link.parent();
      if(_this.options.parentLink){
        $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>');
      }
      $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
      $link.children('[data-submenu]')
          .attr({
            'aria-hidden': true,
            'tabindex': 0,
            'role': 'menu'
          });
      _this._events($link);
    });
    this.$submenus.each(function(){
      var $menu = $(this),
          $back = $menu.find('.js-drilldown-back');
      if(!$back.length){
        switch (_this.options.backButtonPosition) {
          case "bottom":
            $menu.append(_this.options.backButton);
            break;
          case "top":
            $menu.prepend(_this.options.backButton);
            break;
          default:
            console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
        }
      }
      _this._back($menu);
    });

    this.$submenus.addClass('invisible');
    if(!this.options.autoHeight) {
      this.$submenus.addClass('drilldown-submenu-cover-previous');
    }

    // create a wrapper on element if it doesn't exist.
    if(!this.$element.parent().hasClass('is-drilldown')){
      this.$wrapper = $(this.options.wrapper).addClass('is-drilldown');
      if(this.options.animateHeight) this.$wrapper.addClass('animate-height');
      this.$element.wrap(this.$wrapper);
    }
    // set wrapper
    this.$wrapper = this.$element.parent();
    this.$wrapper.css(this._getMaxDims());
  }

  _resize() {
    this.$wrapper.css({'max-width': 'none', 'min-height': 'none'});
    // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
    this.$wrapper.css(this._getMaxDims());
  }

  /**
   * Adds event handlers to elements in the menu.
   * @function
   * @private
   * @param {jQuery} $elem - the current menu item to add handlers to.
   */
  _events($elem) {
    var _this = this;

    $elem.off('click.zf.drilldown')
    .on('click.zf.drilldown', function(e){
      if($(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')){
        e.stopImmediatePropagation();
        e.preventDefault();
      }

      // if(e.target !== e.currentTarget.firstElementChild){
      //   return false;
      // }
      _this._show($elem.parent('li'));

      if(_this.options.closeOnClick){
        var $body = $('body');
        $body.off('.zf.drilldown').on('click.zf.drilldown', function(e){
          if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) { return; }
          e.preventDefault();
          _this._hideAll();
          $body.off('.zf.drilldown');
        });
      }
    });
	  this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
  }

  /**
   * Adds event handlers to the menu element.
   * @function
   * @private
   */
  _registerEvents() {
    if(this.options.scrollTop){
      this._bindHandler = this._scrollTop.bind(this);
      this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown',this._bindHandler);
    }
  }

  /**
   * Scroll to Top of Element or data-scroll-top-element
   * @function
   * @fires Drilldown#scrollme
   */
  _scrollTop() {
    var _this = this;
    var $scrollTopElement = _this.options.scrollTopElement!=''?$(_this.options.scrollTopElement):_this.$element,
        scrollPos = parseInt($scrollTopElement.offset().top+_this.options.scrollTopOffset);
    $('html, body').stop(true).animate({ scrollTop: scrollPos }, _this.options.animationDuration, _this.options.animationEasing,function(){
      /**
        * Fires after the menu has scrolled
        * @event Drilldown#scrollme
        */
      if(this===$('html')[0])_this.$element.trigger('scrollme.zf.drilldown');
    });
  }

  /**
   * Adds keydown event listener to `li`'s in the menu.
   * @private
   */
  _keyboardEvents() {
    var _this = this;

    this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function(e){
      var $element = $(this),
          $elements = $element.parent('li').parent('ul').children('li').children('a'),
          $prevElement,
          $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i-1));
          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
          return;
        }
      });

      Foundation.Keyboard.handleKey(e, 'Drilldown', {
        next: function() {
          if ($element.is(_this.$submenuAnchors)) {
            _this._show($element.parent('li'));
            $element.parent('li').one(Foundation.transitionend($element), function(){
              $element.parent('li').find('ul li a').filter(_this.$menuItems).first().focus();
            });
            return true;
          }
        },
        previous: function() {
          _this._hide($element.parent('li').parent('ul'));
          $element.parent('li').parent('ul').one(Foundation.transitionend($element), function(){
            setTimeout(function() {
              $element.parent('li').parent('ul').parent('li').children('a').first().focus();
            }, 1);
          });
          return true;
        },
        up: function() {
          $prevElement.focus();
          // Don't tap focus on first element in root ul
          return !$element.is(_this.$element.find('> li:first-child > a'));
        },
        down: function() {
          $nextElement.focus();
          // Don't tap focus on last element in root ul
          return !$element.is(_this.$element.find('> li:last-child > a'));
        },
        close: function() {
          // Don't close on element in root ul
          if (!$element.is(_this.$element.find('> li > a'))) {
            _this._hide($element.parent().parent());
            $element.parent().parent().siblings('a').focus();
          }
        },
        open: function() {
          if (!$element.is(_this.$menuItems)) { // not menu item means back button
            _this._hide($element.parent('li').parent('ul'));
            $element.parent('li').parent('ul').one(Foundation.transitionend($element), function(){
              setTimeout(function() {
                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
              }, 1);
            });
            return true;
          } else if ($element.is(_this.$submenuAnchors)) {
            _this._show($element.parent('li'));
            $element.parent('li').one(Foundation.transitionend($element), function(){
              $element.parent('li').find('ul li a').filter(_this.$menuItems).first().focus();
            });
            return true;
          }
        },
        handled: function(preventDefault) {
          if (preventDefault) {
            e.preventDefault();
          }
          e.stopImmediatePropagation();
        }
      });
    }); // end keyboardAccess
  }

  /**
   * Closes all open elements, and returns to root menu.
   * @function
   * @fires Drilldown#closed
   */
  _hideAll() {
    var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
    if(this.options.autoHeight) this.$wrapper.css({height:$elem.parent().closest('ul').data('calcHeight')});
    $elem.one(Foundation.transitionend($elem), function(e){
      $elem.removeClass('is-active is-closing');
    });
        /**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */
    this.$element.trigger('closed.zf.drilldown');
  }

  /**
   * Adds event listener for each `back` button, and closes open menus.
   * @function
   * @fires Drilldown#back
   * @param {jQuery} $elem - the current sub-menu to add `back` event.
   */
  _back($elem) {
    var _this = this;
    $elem.off('click.zf.drilldown');
    $elem.children('.js-drilldown-back')
      .on('click.zf.drilldown', function(e){
        e.stopImmediatePropagation();
        // console.log('mouseup on back');
        _this._hide($elem);

        // If there is a parent submenu, call show
        let parentSubMenu = $elem.parent('li').parent('ul').parent('li');
        if (parentSubMenu.length) {
          _this._show(parentSubMenu);
        }
      });
  }

  /**
   * Adds event listener to menu items w/o submenus to close open menus on click.
   * @function
   * @private
   */
  _menuLinkEvents() {
    var _this = this;
    this.$menuItems.not('.is-drilldown-submenu-parent')
        .off('click.zf.drilldown')
        .on('click.zf.drilldown', function(e){
          // e.stopImmediatePropagation();
          setTimeout(function(){
            _this._hideAll();
          }, 0);
      });
  }

  /**
   * Opens a submenu.
   * @function
   * @fires Drilldown#open
   * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
   */
  _show($elem) {
    if(this.options.autoHeight) this.$wrapper.css({height:$elem.children('[data-submenu]').data('calcHeight')});
    $elem.attr('aria-expanded', true);
    $elem.children('[data-submenu]').addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
    /**
     * Fires when the submenu has opened.
     * @event Drilldown#open
     */
    this.$element.trigger('open.zf.drilldown', [$elem]);
  };

  /**
   * Hides a submenu
   * @function
   * @fires Drilldown#hide
   * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
   */
  _hide($elem) {
    if(this.options.autoHeight) this.$wrapper.css({height:$elem.parent().closest('ul').data('calcHeight')});
    var _this = this;
    $elem.parent('li').attr('aria-expanded', false);
    $elem.attr('aria-hidden', true).addClass('is-closing')
    $elem.addClass('is-closing')
         .one(Foundation.transitionend($elem), function(){
           $elem.removeClass('is-active is-closing');
           $elem.blur().addClass('invisible');
         });
    /**
     * Fires when the submenu has closed.
     * @event Drilldown#hide
     */
    $elem.trigger('hide.zf.drilldown', [$elem]);
  }

  /**
   * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
   * Prevents content jumping.
   * @function
   * @private
   */
  _getMaxDims() {
    var  maxHeight = 0, result = {}, _this = this;
    this.$submenus.add(this.$element).each(function(){
      var numOfElems = $(this).children('li').length;
      var height = Foundation.Box.GetDimensions(this).height;
      maxHeight = height > maxHeight ? height : maxHeight;
      if(_this.options.autoHeight) {
        $(this).data('calcHeight',height);
        if (!$(this).hasClass('is-drilldown-submenu')) result['height'] = height;
      }
    });

    if(!this.options.autoHeight) result['min-height'] = `${maxHeight}px`;

    result['max-width'] = `${this.$element[0].getBoundingClientRect().width}px`;

    return result;
  }

  /**
   * Destroys the Drilldown Menu
   * @function
   */
  destroy() {
    if(this.options.scrollTop) this.$element.off('.zf.drilldown',this._bindHandler);
    this._hideAll();
	  this.$element.off('mutateme.zf.trigger');
    Foundation.Nest.Burn(this.$element, 'drilldown');
    this.$element.unwrap()
                 .find('.js-drilldown-back, .is-submenu-parent-item').remove()
                 .end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu')
                 .end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
    this.$submenuAnchors.each(function() {
      $(this).off('.zf.drilldown');
    });

    this.$submenus.removeClass('drilldown-submenu-cover-previous');

    this.$element.find('a').each(function(){
      var $link = $(this);
      $link.removeAttr('tabindex');
      if($link.data('savedHref')){
        $link.attr('href', $link.data('savedHref')).removeData('savedHref');
      }else{ return; }
    });
    Foundation.unregisterPlugin(this);
  };
}

Drilldown.defaults = {
  /**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
  /**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
  backButtonPosition: 'top',
  /**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
  wrapper: '<div></div>',
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,
  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,
  /**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  autoHeight: false,
  /**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  animateHeight: false,
  /**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
  scrollTop: false,
  /**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
  scrollTopElement: '',
  /**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
  scrollTopOffset: 0,
  /**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,
  /**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
  animationEasing: 'swing'
  // holdOpen: false
};

// Window exports
Foundation.plugin(Drilldown, 'Drilldown');

}(jQuery);

'use strict';

!function($) {

/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */

class Dropdown {
  /**
   * Creates a new instance of a dropdown.
   * @class
   * @param {jQuery} element - jQuery object to make into a dropdown.
   *        Object should be of the dropdown panel, rather than its anchor.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
    this._init();

    Foundation.registerPlugin(this, 'Dropdown');
    Foundation.Keyboard.register('Dropdown', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ESCAPE': 'close'
    });
  }

  /**
   * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
   * @function
   * @private
   */
  _init() {
    var $id = this.$element.attr('id');

    this.$anchor = $(`[data-toggle="${$id}"]`).length ? $(`[data-toggle="${$id}"]`) : $(`[data-open="${$id}"]`);
    this.$anchor.attr({
      'aria-controls': $id,
      'data-is-focus': false,
      'data-yeti-box': $id,
      'aria-haspopup': true,
      'aria-expanded': false

    });

    if(this.options.parentClass){
      this.$parent = this.$element.parents('.' + this.options.parentClass);
    }else{
      this.$parent = null;
    }
    this.options.positionClass = this.getPositionClass();
    this.counter = 4;
    this.usedPositions = [];
    this.$element.attr({
      'aria-hidden': 'true',
      'data-yeti-box': $id,
      'data-resize': $id,
      'aria-labelledby': this.$anchor[0].id || Foundation.GetYoDigits(6, 'dd-anchor')
    });
    this._events();
  }

  /**
   * Helper function to determine current orientation of dropdown pane.
   * @function
   * @returns {String} position - string value of a position class.
   */
  getPositionClass() {
    var verticalPosition = this.$element[0].className.match(/(top|left|right|bottom)/g);
        verticalPosition = verticalPosition ? verticalPosition[0] : '';
    var horizontalPosition = /float-(\S+)/.exec(this.$anchor[0].className);
        horizontalPosition = horizontalPosition ? horizontalPosition[1] : '';
    var position = horizontalPosition ? horizontalPosition + ' ' + verticalPosition : verticalPosition;

    return position;
  }

  /**
   * Adjusts the dropdown panes orientation by adding/removing positioning classes.
   * @function
   * @private
   * @param {String} position - position class to remove.
   */
  _reposition(position) {
    this.usedPositions.push(position ? position : 'bottom');
    //default, try switching to opposite side
    if(!position && (this.usedPositions.indexOf('top') < 0)){
      this.$element.addClass('top');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
      this.$element.removeClass(position)
          .addClass('right');
    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
      this.$element.removeClass(position)
          .addClass('left');
    }

    //if default change didn't work, try bottom or left first
    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.$element.addClass('left');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.$element.removeClass(position)
          .addClass('left');
    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }
    //if nothing cleared, set to bottom
    else{
      this.$element.removeClass(position);
    }
    this.classChanged = true;
    this.counter--;
  }

  /**
   * Sets the position and orientation of the dropdown pane, checks for collisions.
   * Recursively calls itself if a collision is detected, with a new position class.
   * @function
   * @private
   */
  _setPosition() {
    if(this.$anchor.attr('aria-expanded') === 'false'){ return false; }
    var position = this.getPositionClass(),
        $eleDims = Foundation.Box.GetDimensions(this.$element),
        $anchorDims = Foundation.Box.GetDimensions(this.$anchor),
        _this = this,
        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
        param = (direction === 'top') ? 'height' : 'width',
        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset;

    if(($eleDims.width >= $eleDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.$element, this.$parent))){
      var newWidth = $eleDims.windowDims.width,
          parentHOffset = 0;
      if(this.$parent){
        var $parentDims = Foundation.Box.GetDimensions(this.$parent),
            parentHOffset = $parentDims.offset.left;
        if ($parentDims.width < newWidth){
          newWidth = $parentDims.width;
        }
      }

      this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, 'center bottom', this.options.vOffset, this.options.hOffset + parentHOffset, true)).css({
        'width': newWidth - (this.options.hOffset * 2),
        'height': 'auto'
      });
      this.classChanged = true;
      return false;
    }

    this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));

    while(!Foundation.Box.ImNotTouchingYou(this.$element, this.$parent, true) && this.counter){
      this._reposition(position);
      this._setPosition();
    }
  }

  /**
   * Adds event listeners to the element utilizing the triggers utility library.
   * @function
   * @private
   */
  _events() {
    var _this = this;
    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': this._setPosition.bind(this)
    });

    if(this.options.hover){
      this.$anchor.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
      .on('mouseenter.zf.dropdown', function(){
        var bodyData = $('body').data();
        if(typeof(bodyData.whatinput) === 'undefined' || bodyData.whatinput === 'mouse') {
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function(){
            _this.open();
            _this.$anchor.data('hover', true);
          }, _this.options.hoverDelay);
        }
      }).on('mouseleave.zf.dropdown', function(){
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function(){
          _this.close();
          _this.$anchor.data('hover', false);
        }, _this.options.hoverDelay);
      });
      if(this.options.hoverPane){
        this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
            .on('mouseenter.zf.dropdown', function(){
              clearTimeout(_this.timeout);
            }).on('mouseleave.zf.dropdown', function(){
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function(){
                _this.close();
                _this.$anchor.data('hover', false);
              }, _this.options.hoverDelay);
            });
      }
    }
    this.$anchor.add(this.$element).on('keydown.zf.dropdown', function(e) {

      var $target = $(this),
        visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);

      Foundation.Keyboard.handleKey(e, 'Dropdown', {
        open: function() {
          if ($target.is(_this.$anchor)) {
            _this.open();
            _this.$element.attr('tabindex', -1).focus();
            e.preventDefault();
          }
        },
        close: function() {
          _this.close();
          _this.$anchor.focus();
        }
      });
    });
  }

  /**
   * Adds an event handler to the body to close any dropdowns on a click.
   * @function
   * @private
   */
  _addBodyHandler() {
     var $body = $(document.body).not(this.$element),
         _this = this;
     $body.off('click.zf.dropdown')
          .on('click.zf.dropdown', function(e){
            if(_this.$anchor.is(e.target) || _this.$anchor.find(e.target).length) {
              return;
            }
            if(_this.$element.find(e.target).length) {
              return;
            }
            _this.close();
            $body.off('click.zf.dropdown');
          });
  }

  /**
   * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
   * @function
   * @fires Dropdown#closeme
   * @fires Dropdown#show
   */
  open() {
    // var _this = this;
    /**
     * Fires to close other open dropdowns, typically when dropdown is opening
     * @event Dropdown#closeme
     */
    this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
    this.$anchor.addClass('hover')
        .attr({'aria-expanded': true});
    // this.$element/*.show()*/;
    this._setPosition();
    this.$element.addClass('is-open')
        .attr({'aria-hidden': false});

    if(this.options.autoFocus){
      var $focusable = Foundation.Keyboard.findFocusable(this.$element);
      if($focusable.length){
        $focusable.eq(0).focus();
      }
    }

    if(this.options.closeOnClick){ this._addBodyHandler(); }

    if (this.options.trapFocus) {
      Foundation.Keyboard.trapFocus(this.$element);
    }

    /**
     * Fires once the dropdown is visible.
     * @event Dropdown#show
     */
    this.$element.trigger('show.zf.dropdown', [this.$element]);
  }

  /**
   * Closes the open dropdown pane.
   * @function
   * @fires Dropdown#hide
   */
  close() {
    if(!this.$element.hasClass('is-open')){
      return false;
    }
    this.$element.removeClass('is-open')
        .attr({'aria-hidden': true});

    this.$anchor.removeClass('hover')
        .attr('aria-expanded', false);

    if(this.classChanged){
      var curPositionClass = this.getPositionClass();
      if(curPositionClass){
        this.$element.removeClass(curPositionClass);
      }
      this.$element.addClass(this.options.positionClass)
          /*.hide()*/.css({height: '', width: ''});
      this.classChanged = false;
      this.counter = 4;
      this.usedPositions.length = 0;
    }
    /**
     * Fires once the dropdown is no longer visible.
     * @event Dropdown#hide
     */
    this.$element.trigger('hide.zf.dropdown', [this.$element]);

    if (this.options.trapFocus) {
      Foundation.Keyboard.releaseFocus(this.$element);
    }
  }

  /**
   * Toggles the dropdown pane's visibility.
   * @function
   */
  toggle() {
    if(this.$element.hasClass('is-open')){
      if(this.$anchor.data('hover')) return;
      this.close();
    }else{
      this.open();
    }
  }

  /**
   * Destroys the dropdown.
   * @function
   */
  destroy() {
    this.$element.off('.zf.trigger').hide();
    this.$anchor.off('.zf.dropdown');

    Foundation.unregisterPlugin(this);
  }
}

Dropdown.defaults = {
  /**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
  parentClass: null,
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
  hoverDelay: 250,
  /**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
  hover: false,
  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
  hoverPane: false,
  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 1
   */
  vOffset: 1,
  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 1
   */
  hOffset: 1,
  /**
   * Class applied to adjust open position. JS will test and fill this in.
   * @option
   * @type {string}
   * @default ''
   */
  positionClass: '',
  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false,
  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,
  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false
}

// Window exports
Foundation.plugin(Dropdown, 'Dropdown');

}(jQuery);

'use strict';

!function($) {

/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */

class DropdownMenu {
  /**
   * Creates a new instance of DropdownMenu.
   * @class
   * @fires DropdownMenu#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'dropdown');
    this._init();

    Foundation.registerPlugin(this, 'DropdownMenu');
    Foundation.Keyboard.register('DropdownMenu', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'previous',
      'ESCAPE': 'close'
    });
  }

  /**
   * Initializes the plugin, and calls _prepareMenu
   * @private
   * @function
   */
  _init() {
    var subs = this.$element.find('li.is-dropdown-submenu-parent');
    this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');

    this.$menuItems = this.$element.find('[role="menuitem"]');
    this.$tabs = this.$element.children('[role="menuitem"]');
    this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

    if (this.$element.hasClass(this.options.rightClass) || this.options.alignment === 'right' || Foundation.rtl() || this.$element.parents('.top-bar-right').is('*')) {
      this.options.alignment = 'right';
      subs.addClass('opens-left');
    } else {
      subs.addClass('opens-right');
    }
    this.changed = false;
    this._events();
  };

  _isVertical() {
    return this.$tabs.css('display') === 'block';
  }

  /**
   * Adds event listeners to elements within the menu
   * @private
   * @function
   */
  _events() {
    var _this = this,
        hasTouch = 'ontouchstart' in window || (typeof window.ontouchstart !== 'undefined'),
        parClass = 'is-dropdown-submenu-parent';

    // used for onClick and in the keyboard handlers
    var handleClickFn = function(e) {
      var $elem = $(e.target).parentsUntil('ul', `.${parClass}`),
          hasSub = $elem.hasClass(parClass),
          hasClicked = $elem.attr('data-is-click') === 'true',
          $sub = $elem.children('.is-dropdown-submenu');

      if (hasSub) {
        if (hasClicked) {
          if (!_this.options.closeOnClick || (!_this.options.clickOpen && !hasTouch) || (_this.options.forceFollow && hasTouch)) { return; }
          else {
            e.stopImmediatePropagation();
            e.preventDefault();
            _this._hide($elem);
          }
        } else {
          e.preventDefault();
          e.stopImmediatePropagation();
          _this._show($sub);
          $elem.add($elem.parentsUntil(_this.$element, `.${parClass}`)).attr('data-is-click', true);
        }
      }
    };

    if (this.options.clickOpen || hasTouch) {
      this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
    }

    // Handle Leaf element Clicks
    if(_this.options.closeOnClickInside){
      this.$menuItems.on('click.zf.dropdownmenu', function(e) {
        var $elem = $(this),
            hasSub = $elem.hasClass(parClass);
        if(!hasSub){
          _this._hide();
        }
      });
    }

    if (!this.options.disableHover) {
      this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e) {
        var $elem = $(this),
            hasSub = $elem.hasClass(parClass);

        if (hasSub) {
          clearTimeout($elem.data('_delay'));
          $elem.data('_delay', setTimeout(function() {
            _this._show($elem.children('.is-dropdown-submenu'));
          }, _this.options.hoverDelay));
        }
      }).on('mouseleave.zf.dropdownmenu', function(e) {
        var $elem = $(this),
            hasSub = $elem.hasClass(parClass);
        if (hasSub && _this.options.autoclose) {
          if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) { return false; }

          clearTimeout($elem.data('_delay'));
          $elem.data('_delay', setTimeout(function() {
            _this._hide($elem);
          }, _this.options.closingTime));
        }
      });
    }
    this.$menuItems.on('keydown.zf.dropdownmenu', function(e) {
      var $element = $(e.target).parentsUntil('ul', '[role="menuitem"]'),
          isTab = _this.$tabs.index($element) > -1,
          $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
          $prevElement,
          $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(i-1);
          $nextElement = $elements.eq(i+1);
          return;
        }
      });

      var nextSibling = function() {
        if (!$element.is(':last-child')) {
          $nextElement.children('a:first').focus();
          e.preventDefault();
        }
      }, prevSibling = function() {
        $prevElement.children('a:first').focus();
        e.preventDefault();
      }, openSub = function() {
        var $sub = $element.children('ul.is-dropdown-submenu');
        if ($sub.length) {
          _this._show($sub);
          $element.find('li > a:first').focus();
          e.preventDefault();
        } else { return; }
      }, closeSub = function() {
        //if ($element.is(':first-child')) {
        var close = $element.parent('ul').parent('li');
        close.children('a:first').focus();
        _this._hide(close);
        e.preventDefault();
        //}
      };
      var functions = {
        open: openSub,
        close: function() {
          _this._hide(_this.$element);
          _this.$menuItems.find('a:first').focus(); // focus to first element
          e.preventDefault();
        },
        handled: function() {
          e.stopImmediatePropagation();
        }
      };

      if (isTab) {
        if (_this._isVertical()) { // vertical menu
          if (Foundation.rtl()) { // right aligned
            $.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: closeSub,
              previous: openSub
            });
          } else { // left aligned
            $.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: openSub,
              previous: closeSub
            });
          }
        } else { // horizontal menu
          if (Foundation.rtl()) { // right aligned
            $.extend(functions, {
              next: prevSibling,
              previous: nextSibling,
              down: openSub,
              up: closeSub
            });
          } else { // left aligned
            $.extend(functions, {
              next: nextSibling,
              previous: prevSibling,
              down: openSub,
              up: closeSub
            });
          }
        }
      } else { // not tabs -> one sub
        if (Foundation.rtl()) { // right aligned
          $.extend(functions, {
            next: closeSub,
            previous: openSub,
            down: nextSibling,
            up: prevSibling
          });
        } else { // left aligned
          $.extend(functions, {
            next: openSub,
            previous: closeSub,
            down: nextSibling,
            up: prevSibling
          });
        }
      }
      Foundation.Keyboard.handleKey(e, 'DropdownMenu', functions);

    });
  }

  /**
   * Adds an event handler to the body to close any dropdowns on a click.
   * @function
   * @private
   */
  _addBodyHandler() {
    var $body = $(document.body),
        _this = this;
    $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu')
         .on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function(e) {
           var $link = _this.$element.find(e.target);
           if ($link.length) { return; }

           _this._hide();
           $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
         });
  }

  /**
   * Opens a dropdown pane, and checks for collisions first.
   * @param {jQuery} $sub - ul element that is a submenu to show
   * @function
   * @private
   * @fires DropdownMenu#show
   */
  _show($sub) {
    var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
      return $(el).find($sub).length > 0;
    }));
    var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
    this._hide($sibs, idx);
    $sub.css('visibility', 'hidden').addClass('js-dropdown-active')
        .parent('li.is-dropdown-submenu-parent').addClass('is-active');
    var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
    if (!clear) {
      var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
          $parentLi = $sub.parent('.is-dropdown-submenu-parent');
      $parentLi.removeClass(`opens${oldClass}`).addClass(`opens-${this.options.alignment}`);
      clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
      if (!clear) {
        $parentLi.removeClass(`opens-${this.options.alignment}`).addClass('opens-inner');
      }
      this.changed = true;
    }
    $sub.css('visibility', '');
    if (this.options.closeOnClick) { this._addBodyHandler(); }
    /**
     * Fires when the new dropdown pane is visible.
     * @event DropdownMenu#show
     */
    this.$element.trigger('show.zf.dropdownmenu', [$sub]);
  }

  /**
   * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
   * @function
   * @param {jQuery} $elem - element with a submenu to hide
   * @param {Number} idx - index of the $tabs collection to hide
   * @private
   */
  _hide($elem, idx) {
    var $toClose;
    if ($elem && $elem.length) {
      $toClose = $elem;
    } else if (idx !== undefined) {
      $toClose = this.$tabs.not(function(i, el) {
        return i === idx;
      });
    }
    else {
      $toClose = this.$element;
    }
    var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

    if (somethingToClose) {
      $toClose.find('li.is-active').add($toClose).attr({
        'data-is-click': false
      }).removeClass('is-active');

      $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

      if (this.changed || $toClose.find('opens-inner').length) {
        var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
        $toClose.find('li.is-dropdown-submenu-parent').add($toClose)
                .removeClass(`opens-inner opens-${this.options.alignment}`)
                .addClass(`opens-${oldClass}`);
        this.changed = false;
      }
      /**
       * Fires when the open menus are closed.
       * @event DropdownMenu#hide
       */
      this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
    }
  }

  /**
   * Destroys the plugin.
   * @function
   */
  destroy() {
    this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click')
        .removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
    $(document.body).off('.zf.dropdownmenu');
    Foundation.Nest.Burn(this.$element, 'dropdown');
    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,
  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,
  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,
  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */

  closingTime: 500,
  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'left'
   */
  alignment: 'left',
  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,
  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',
  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',
  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};

// Window exports
Foundation.plugin(DropdownMenu, 'DropdownMenu');

}(jQuery);

'use strict';

!function($) {

/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.timerAndImageLoader if equalizer contains images
 */

class Equalizer {
  /**
   * Creates a new instance of Equalizer.
   * @class
   * @fires Equalizer#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options){
    this.$element = element;
    this.options  = $.extend({}, Equalizer.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Equalizer');
  }

  /**
   * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
   * @private
   */
  _init() {
    var eqId = this.$element.attr('data-equalizer') || '';
    var $watched = this.$element.find(`[data-equalizer-watch="${eqId}"]`);

    this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
    this.$element.attr('data-resize', (eqId || Foundation.GetYoDigits(6, 'eq')));
	this.$element.attr('data-mutate', (eqId || Foundation.GetYoDigits(6, 'eq')));

    this.hasNested = this.$element.find('[data-equalizer]').length > 0;
    this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
    this.isOn = false;
    this._bindHandler = {
      onResizeMeBound: this._onResizeMe.bind(this),
      onPostEqualizedBound: this._onPostEqualized.bind(this)
    };

    var imgs = this.$element.find('img');
    var tooSmall;
    if(this.options.equalizeOn){
      tooSmall = this._checkMQ();
      $(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
    }else{
      this._events();
    }
    if((tooSmall !== undefined && tooSmall === false) || tooSmall === undefined){
      if(imgs.length){
        Foundation.onImagesLoaded(imgs, this._reflow.bind(this));
      }else{
        this._reflow();
      }
    }
  }

  /**
   * Removes event listeners if the breakpoint is too small.
   * @private
   */
  _pauseEvents() {
    this.isOn = false;
    this.$element.off({
      '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
      'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
	  'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
    });
  }

  /**
   * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
   * @private
   */
  _onResizeMe(e) {
    this._reflow();
  }

  /**
   * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
   * @private
   */
  _onPostEqualized(e) {
    if(e.target !== this.$element[0]){ this._reflow(); }
  }

  /**
   * Initializes events for Equalizer.
   * @private
   */
  _events() {
    var _this = this;
    this._pauseEvents();
    if(this.hasNested){
      this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
    }else{
      this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
	  this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
    }
    this.isOn = true;
  }

  /**
   * Checks the current breakpoint to the minimum required size.
   * @private
   */
  _checkMQ() {
    var tooSmall = !Foundation.MediaQuery.is(this.options.equalizeOn);
    if(tooSmall){
      if(this.isOn){
        this._pauseEvents();
        this.$watched.css('height', 'auto');
      }
    }else{
      if(!this.isOn){
        this._events();
      }
    }
    return tooSmall;
  }

  /**
   * A noop version for the plugin
   * @private
   */
  _killswitch() {
    return;
  }

  /**
   * Calls necessary functions to update Equalizer upon DOM change
   * @private
   */
  _reflow() {
    if(!this.options.equalizeOnStack){
      if(this._isStacked()){
        this.$watched.css('height', 'auto');
        return false;
      }
    }
    if (this.options.equalizeByRow) {
      this.getHeightsByRow(this.applyHeightByRow.bind(this));
    }else{
      this.getHeights(this.applyHeight.bind(this));
    }
  }

  /**
   * Manually determines if the first 2 elements are *NOT* stacked.
   * @private
   */
  _isStacked() {
    if (!this.$watched[0] || !this.$watched[1]) {
      return true;
    }
    return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
  }

  /**
   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
   * @param {Function} cb - A non-optional callback to return the heights array to.
   * @returns {Array} heights - An array of heights of children within Equalizer container
   */
  getHeights(cb) {
    var heights = [];
    for(var i = 0, len = this.$watched.length; i < len; i++){
      this.$watched[i].style.height = 'auto';
      heights.push(this.$watched[i].offsetHeight);
    }
    cb(heights);
  }

  /**
   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
   * @param {Function} cb - A non-optional callback to return the heights array to.
   * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
   */
  getHeightsByRow(cb) {
    var lastElTopOffset = (this.$watched.length ? this.$watched.first().offset().top : 0),
        groups = [],
        group = 0;
    //group by Row
    groups[group] = [];
    for(var i = 0, len = this.$watched.length; i < len; i++){
      this.$watched[i].style.height = 'auto';
      //maybe could use this.$watched[i].offsetTop
      var elOffsetTop = $(this.$watched[i]).offset().top;
      if (elOffsetTop!=lastElTopOffset) {
        group++;
        groups[group] = [];
        lastElTopOffset=elOffsetTop;
      }
      groups[group].push([this.$watched[i],this.$watched[i].offsetHeight]);
    }

    for (var j = 0, ln = groups.length; j < ln; j++) {
      var heights = $(groups[j]).map(function(){ return this[1]; }).get();
      var max         = Math.max.apply(null, heights);
      groups[j].push(max);
    }
    cb(groups);
  }

  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest
   * @param {array} heights - An array of heights of children within Equalizer container
   * @fires Equalizer#preequalized
   * @fires Equalizer#postequalized
   */
  applyHeight(heights) {
    var max = Math.max.apply(null, heights);
    /**
     * Fires before the heights are applied
     * @event Equalizer#preequalized
     */
    this.$element.trigger('preequalized.zf.equalizer');

    this.$watched.css('height', max);

    /**
     * Fires when the heights have been applied
     * @event Equalizer#postequalized
     */
     this.$element.trigger('postequalized.zf.equalizer');
  }

  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
   * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
   * @fires Equalizer#preequalized
   * @fires Equalizer#preequalizedrow
   * @fires Equalizer#postequalizedrow
   * @fires Equalizer#postequalized
   */
  applyHeightByRow(groups) {
    /**
     * Fires before the heights are applied
     */
    this.$element.trigger('preequalized.zf.equalizer');
    for (var i = 0, len = groups.length; i < len ; i++) {
      var groupsILength = groups[i].length,
          max = groups[i][groupsILength - 1];
      if (groupsILength<=2) {
        $(groups[i][0][0]).css({'height':'auto'});
        continue;
      }
      /**
        * Fires before the heights per row are applied
        * @event Equalizer#preequalizedrow
        */
      this.$element.trigger('preequalizedrow.zf.equalizer');
      for (var j = 0, lenJ = (groupsILength-1); j < lenJ ; j++) {
        $(groups[i][j][0]).css({'height':max});
      }
      /**
        * Fires when the heights per row have been applied
        * @event Equalizer#postequalizedrow
        */
      this.$element.trigger('postequalizedrow.zf.equalizer');
    }
    /**
     * Fires when the heights have been applied
     */
     this.$element.trigger('postequalized.zf.equalizer');
  }

  /**
   * Destroys an instance of Equalizer.
   * @function
   */
  destroy() {
    this._pauseEvents();
    this.$watched.css('height', 'auto');

    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,
  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,
  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};

// Window exports
Foundation.plugin(Equalizer, 'Equalizer');

}(jQuery);

'use strict';

!function($) {

/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.timerAndImageLoader
 */

class Interchange {
  /**
   * Creates a new instance of Interchange.
   * @class
   * @fires Interchange#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Interchange.defaults, options);
    this.rules = [];
    this.currentPath = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'Interchange');
  }

  /**
   * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
   * @function
   * @private
   */
  _init() {
    this._addBreakpoints();
    this._generateRules();
    this._reflow();
  }

  /**
   * Initializes events for Interchange.
   * @function
   * @private
   */
  _events() {
    $(window).on('resize.zf.interchange', Foundation.util.throttle(() => {
      this._reflow();
    }, 50));
  }

  /**
   * Calls necessary functions to update Interchange upon DOM change
   * @function
   * @private
   */
  _reflow() {
    var match;

    // Iterate through each rule, but only save the last match
    for (var i in this.rules) {
      if(this.rules.hasOwnProperty(i)) {
        var rule = this.rules[i];
        if (window.matchMedia(rule.query).matches) {
          match = rule;
        }
      }
    }

    if (match) {
      this.replace(match.path);
    }
  }

  /**
   * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
   * @function
   * @private
   */
  _addBreakpoints() {
    for (var i in Foundation.MediaQuery.queries) {
      if (Foundation.MediaQuery.queries.hasOwnProperty(i)) {
        var query = Foundation.MediaQuery.queries[i];
        Interchange.SPECIAL_QUERIES[query.name] = query.value;
      }
    }
  }

  /**
   * Checks the Interchange element for the provided media query + content pairings
   * @function
   * @private
   * @param {Object} element - jQuery object that is an Interchange instance
   * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
   */
  _generateRules(element) {
    var rulesList = [];
    var rules;

    if (this.options.rules) {
      rules = this.options.rules;
    }
    else {
      rules = this.$element.data('interchange');
    }
    
    rules =  typeof rules === 'string' ? rules.match(/\[.*?\]/g) : rules;

    for (var i in rules) {
      if(rules.hasOwnProperty(i)) {
        var rule = rules[i].slice(1, -1).split(', ');
        var path = rule.slice(0, -1).join('');
        var query = rule[rule.length - 1];

        if (Interchange.SPECIAL_QUERIES[query]) {
          query = Interchange.SPECIAL_QUERIES[query];
        }

        rulesList.push({
          path: path,
          query: query
        });
      }
    }

    this.rules = rulesList;
  }

  /**
   * Update the `src` property of an image, or change the HTML of a container, to the specified path.
   * @function
   * @param {String} path - Path to the image or HTML partial.
   * @fires Interchange#replaced
   */
  replace(path) {
    if (this.currentPath === path) return;

    var _this = this,
        trigger = 'replaced.zf.interchange';

    // Replacing images
    if (this.$element[0].nodeName === 'IMG') {
      this.$element.attr('src', path).on('load', function() {
        _this.currentPath = path;
      })
      .trigger(trigger);
    }
    // Replacing background images
    else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
      this.$element.css({ 'background-image': 'url('+path+')' })
          .trigger(trigger);
    }
    // Replacing HTML
    else {
      $.get(path, function(response) {
        _this.$element.html(response)
             .trigger(trigger);
        $(response).foundation();
        _this.currentPath = path;
      });
    }

    /**
     * Fires when content in an Interchange element is done being loaded.
     * @event Interchange#replaced
     */
    // this.$element.trigger('replaced.zf.interchange');
  }

  /**
   * Destroys an instance of interchange.
   * @function
   */
  destroy() {
    //TODO this.
  }
}

/**
 * Default settings for plugin
 */
Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null
};

Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};

// Window exports
Foundation.plugin(Interchange, 'Interchange');

}(jQuery);

'use strict';

!function($) {

/**
 * Magellan module.
 * @module foundation.magellan
 */

class Magellan {
  /**
   * Creates a new instance of Magellan.
   * @class
   * @fires Magellan#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options  = $.extend({}, Magellan.defaults, this.$element.data(), options);

    this._init();
    this.calcPoints();

    Foundation.registerPlugin(this, 'Magellan');
  }

  /**
   * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
   * @private
   */
  _init() {
    var id = this.$element[0].id || Foundation.GetYoDigits(6, 'magellan');
    var _this = this;
    this.$targets = $('[data-magellan-target]');
    this.$links = this.$element.find('a');
    this.$element.attr({
      'data-resize': id,
      'data-scroll': id,
      'id': id
    });
    this.$active = $();
    this.scrollPos = parseInt(window.pageYOffset, 10);

    this._events();
  }

  /**
   * Calculates an array of pixel values that are the demarcation lines between locations on the page.
   * Can be invoked if new elements are added or the size of a location changes.
   * @function
   */
  calcPoints() {
    var _this = this,
        body = document.body,
        html = document.documentElement;

    this.points = [];
    this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
    this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));

    this.$targets.each(function(){
      var $tar = $(this),
          pt = Math.round($tar.offset().top - _this.options.threshold);
      $tar.targetPoint = pt;
      _this.points.push(pt);
    });
  }

  /**
   * Initializes events for Magellan.
   * @private
   */
  _events() {
    var _this = this,
        $body = $('html, body'),
        opts = {
          duration: _this.options.animationDuration,
          easing:   _this.options.animationEasing
        };
    $(window).one('load', function(){
      if(_this.options.deepLinking){
        if(location.hash){
          _this.scrollToLoc(location.hash);
        }
      }
      _this.calcPoints();
      _this._updateActive();
    });

    this.$element.on({
      'resizeme.zf.trigger': this.reflow.bind(this),
      'scrollme.zf.trigger': this._updateActive.bind(this)
    }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
        e.preventDefault();
        var arrival   = this.getAttribute('href');
        _this.scrollToLoc(arrival);
      });
    $(window).on('popstate', function(e) {
      if(_this.options.deepLinking) {
        _this.scrollToLoc(window.location.hash);
      }
    });
  }

  /**
   * Function to scroll to a given location on the page.
   * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
   * @function
   */
  scrollToLoc(loc) {
    // Do nothing if target does not exist to prevent errors
    if (!$(loc).length) {return false;}
    this._inTransition = true;
    var _this = this,
        scrollPos = Math.round($(loc).offset().top - this.options.threshold / 2 - this.options.barOffset);

    $('html, body').stop(true).animate(
      { scrollTop: scrollPos },
      this.options.animationDuration,
      this.options.animationEasing,
      function() {_this._inTransition = false; _this._updateActive()}
    );
  }

  /**
   * Calls necessary functions to update Magellan upon DOM change
   * @function
   */
  reflow() {
    this.calcPoints();
    this._updateActive();
  }

  /**
   * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
   * @private
   * @function
   * @fires Magellan#update
   */
  _updateActive(/*evt, elem, scrollPos*/) {
    if(this._inTransition) {return;}
    var winPos = /*scrollPos ||*/ parseInt(window.pageYOffset, 10),
        curIdx;

    if(winPos + this.winHeight === this.docHeight){ curIdx = this.points.length - 1; }
    else if(winPos < this.points[0]){ curIdx = undefined; }
    else{
      var isDown = this.scrollPos < winPos,
          _this = this,
          curVisible = this.points.filter(function(p, i){
            return isDown ? p - _this.options.barOffset <= winPos : p - _this.options.barOffset - _this.options.threshold <= winPos;
          });
      curIdx = curVisible.length ? curVisible.length - 1 : 0;
    }

    this.$active.removeClass(this.options.activeClass);
    this.$active = this.$links.filter('[href="#' + this.$targets.eq(curIdx).data('magellan-target') + '"]').addClass(this.options.activeClass);

    if(this.options.deepLinking){
      var hash = "";
      if(curIdx != undefined){
        hash = this.$active[0].getAttribute('href');
      }
      if(hash !== window.location.hash) {
        if(window.history.pushState){
          window.history.pushState(null, null, hash);
        }else{
          window.location.hash = hash;
        }
      }
    }

    this.scrollPos = winPos;
    /**
     * Fires when magellan is finished updating to the new active element.
     * @event Magellan#update
     */
    this.$element.trigger('update.zf.magellan', [this.$active]);
  }

  /**
   * Destroys an instance of Magellan and resets the url of the window.
   * @function
   */
  destroy() {
    this.$element.off('.zf.trigger .zf.magellan')
        .find(`.${this.options.activeClass}`).removeClass(this.options.activeClass);

    if(this.options.deepLinking){
      var hash = this.$active[0].getAttribute('href');
      window.location.hash.replace(hash, '');
    }

    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,
  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',
  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,
  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'active'
   */
  activeClass: 'active',
  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinking: false,
  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  barOffset: 0
}

// Window exports
Foundation.plugin(Magellan, 'Magellan');

}(jQuery);

'use strict';

!function($) {

/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 * @requires foundation.util.motion
 */

class OffCanvas {
  /**
   * Creates a new instance of an off-canvas wrapper.
   * @class
   * @fires OffCanvas#init
   * @param {Object} element - jQuery object to initialize.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
    this.$lastTrigger = $();
    this.$triggers = $();

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'OffCanvas')
    Foundation.Keyboard.register('OffCanvas', {
      'ESCAPE': 'close'
    });

  }

  /**
   * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
   * @function
   * @private
   */
  _init() {
    var id = this.$element.attr('id');

    this.$element.attr('aria-hidden', 'true');

    this.$element.addClass(`is-transition-${this.options.transition}`);

    // Find triggers that affect this element and add aria-expanded to them
    this.$triggers = $(document)
      .find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
      .attr('aria-expanded', 'false')
      .attr('aria-controls', id);

    // Add an overlay over the content if necessary
    if (this.options.contentOverlay === true) {
      var overlay = document.createElement('div');
      var overlayPosition = $(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
      overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
      this.$overlay = $(overlay);
      if(overlayPosition === 'is-overlay-fixed') {
        $('body').append(this.$overlay);
      } else {
        this.$element.siblings('[data-off-canvas-content]').append(this.$overlay);
      }
    }

    this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);

    if (this.options.isRevealed === true) {
      this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
      this._setMQChecker();
    }
    if (!this.options.transitionTime === true) {
      this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas]')[0]).transitionDuration) * 1000;
    }
  }

  /**
   * Adds event handlers to the off-canvas wrapper and the exit overlay.
   * @function
   * @private
   */
  _events() {
    this.$element.off('.zf.trigger .zf.offcanvas').on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
    });

    if (this.options.closeOnClick === true) {
      var $target = this.options.contentOverlay ? this.$overlay : $('[data-off-canvas-content]');
      $target.on({'click.zf.offcanvas': this.close.bind(this)});
    }
  }

  /**
   * Applies event listener for elements that will reveal at certain breakpoints.
   * @private
   */
  _setMQChecker() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', function() {
      if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
        _this.reveal(true);
      } else {
        _this.reveal(false);
      }
    }).one('load.zf.offcanvas', function() {
      if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
        _this.reveal(true);
      }
    });
  }

  /**
   * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
   * @param {Boolean} isRevealed - true if element should be revealed.
   * @function
   */
  reveal(isRevealed) {
    var $closer = this.$element.find('[data-close]');
    if (isRevealed) {
      this.close();
      this.isRevealed = true;
      this.$element.attr('aria-hidden', 'false');
      this.$element.off('open.zf.trigger toggle.zf.trigger');
      if ($closer.length) { $closer.hide(); }
    } else {
      this.isRevealed = false;
      this.$element.attr('aria-hidden', 'true');
      this.$element.off('open.zf.trigger toggle.zf.trigger').on({
        'open.zf.trigger': this.open.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this)
      });
      if ($closer.length) {
        $closer.show();
      }
    }
  }

  /**
   * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
   * @private
   */
  _stopScrolling(event) {
    return false;
  }

  // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
  // Only really works for y, not sure how to extend to x or if we need to.
  _recordScrollable(event) {
    let elem = this; // called from event handler context with this as elem

     // If the element is scrollable (content overflows), then...
    if (elem.scrollHeight !== elem.clientHeight) {
      // If we're at the top, scroll down one pixel to allow scrolling up
      if (elem.scrollTop === 0) {
        elem.scrollTop = 1;
      }
      // If we're at the bottom, scroll up one pixel to allow scrolling down
      if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
        elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
      }
    }
    elem.allowUp = elem.scrollTop > 0;
    elem.allowDown = elem.scrollTop < (elem.scrollHeight - elem.clientHeight);
    elem.lastY = event.originalEvent.pageY;
  }

  _stopScrollPropagation(event) {
    let elem = this; // called from event handler context with this as elem
    let up = event.pageY < elem.lastY;
    let down = !up;
    elem.lastY = event.pageY;

    if((up && elem.allowUp) || (down && elem.allowDown)) {
      event.stopPropagation();
    } else {
      event.preventDefault();
    }
  }

  /**
   * Opens the off-canvas menu.
   * @function
   * @param {Object} event - Event object passed from listener.
   * @param {jQuery} trigger - element that triggered the off-canvas to open.
   * @fires OffCanvas#opened
   */
  open(event, trigger) {
    if (this.$element.hasClass('is-open') || this.isRevealed) { return; }
    var _this = this;

    if (trigger) {
      this.$lastTrigger = trigger;
    }

    if (this.options.forceTo === 'top') {
      window.scrollTo(0, 0);
    } else if (this.options.forceTo === 'bottom') {
      window.scrollTo(0,document.body.scrollHeight);
    }

    /**
     * Fires when the off-canvas menu opens.
     * @event OffCanvas#opened
     */
    _this.$element.addClass('is-open')

    this.$triggers.attr('aria-expanded', 'true');
    this.$element.attr('aria-hidden', 'false')
        .trigger('opened.zf.offcanvas');

    // If `contentScroll` is set to false, add class and disable scrolling on touch devices.
    if (this.options.contentScroll === false) {
      $('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
      this.$element.on('touchstart', this._recordScrollable);
      this.$element.on('touchmove', this._stopScrollPropagation);
    }

    if (this.options.contentOverlay === true) {
      this.$overlay.addClass('is-visible');
    }

    if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
      this.$overlay.addClass('is-closable');
    }

    if (this.options.autoFocus === true) {
      this.$element.one(Foundation.transitionend(this.$element), function() {
        var canvasFocus = _this.$element.find('[data-autofocus]');
        if (canvasFocus.length) {
            canvasFocus.eq(0).focus();
        } else {
            _this.$element.find('a, button').eq(0).focus();
        }
      });
    }

    if (this.options.trapFocus === true) {
      this.$element.siblings('[data-off-canvas-content]').attr('tabindex', '-1');
      Foundation.Keyboard.trapFocus(this.$element);
    }
  }

  /**
   * Closes the off-canvas menu.
   * @function
   * @param {Function} cb - optional cb to fire after closure.
   * @fires OffCanvas#closed
   */
  close(cb) {
    if (!this.$element.hasClass('is-open') || this.isRevealed) { return; }

    var _this = this;

    _this.$element.removeClass('is-open');

    this.$element.attr('aria-hidden', 'true')
      /**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#closed
       */
        .trigger('closed.zf.offcanvas');

    // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
    if (this.options.contentScroll === false) {
      $('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
      this.$element.off('touchstart', this._recordScrollable);
      this.$element.off('touchmove', this._stopScrollPropagation);
    }

    if (this.options.contentOverlay === true) {
      this.$overlay.removeClass('is-visible');
    }

    if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
      this.$overlay.removeClass('is-closable');
    }

    this.$triggers.attr('aria-expanded', 'false');

    if (this.options.trapFocus === true) {
      this.$element.siblings('[data-off-canvas-content]').removeAttr('tabindex');
      Foundation.Keyboard.releaseFocus(this.$element);
    }
  }

  /**
   * Toggles the off-canvas menu open or closed.
   * @function
   * @param {Object} event - Event object passed from listener.
   * @param {jQuery} trigger - element that triggered the off-canvas to open.
   */
  toggle(event, trigger) {
    if (this.$element.hasClass('is-open')) {
      this.close(event, trigger);
    }
    else {
      this.open(event, trigger);
    }
  }

  /**
   * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
   * @function
   * @private
   */
  _handleKeyboard(e) {
    Foundation.Keyboard.handleKey(e, 'OffCanvas', {
      close: () => {
        this.close();
        this.$lastTrigger.focus();
        return true;
      },
      handled: () => {
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }

  /**
   * Destroys the offcanvas plugin.
   * @function
   */
  destroy() {
    this.close();
    this.$element.off('.zf.trigger .zf.offcanvas');
    this.$overlay.off('.zf.offcanvas');

    Foundation.unregisterPlugin(this);
  }
}

OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
  contentOverlay: true,

  /**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
  contentScroll: true,

  /**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default 0
   */
  transitionTime: 0,

  /**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
  transition: 'push',

  /**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
  forceTo: null,

  /**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
  isRevealed: false,

  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
  revealOn: null,

  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
  autoFocus: true,

  /**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
  revealClass: 'reveal-for-',

  /**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false
}

// Window exports
Foundation.plugin(OffCanvas, 'OffCanvas');

}(jQuery);

'use strict';

!function($) {

/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timerAndImageLoader
 * @requires foundation.util.touch
 */

class Orbit {
  /**
  * Creates a new instance of an orbit carousel.
  * @class
  * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
  * @param {Object} options - Overrides to the default plugin settings.
  */
  constructor(element, options){
    this.$element = element;
    this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Orbit');
    Foundation.Keyboard.register('Orbit', {
      'ltr': {
        'ARROW_RIGHT': 'next',
        'ARROW_LEFT': 'previous'
      },
      'rtl': {
        'ARROW_LEFT': 'next',
        'ARROW_RIGHT': 'previous'
      }
    });
  }

  /**
  * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
  * @function
  * @private
  */
  _init() {
    // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
    this._reset();

    this.$wrapper = this.$element.find(`.${this.options.containerClass}`);
    this.$slides = this.$element.find(`.${this.options.slideClass}`);

    var $images = this.$element.find('img'),
        initActive = this.$slides.filter('.is-active'),
        id = this.$element[0].id || Foundation.GetYoDigits(6, 'orbit');

    this.$element.attr({
      'data-resize': id,
      'id': id
    });

    if (!initActive.length) {
      this.$slides.eq(0).addClass('is-active');
    }

    if (!this.options.useMUI) {
      this.$slides.addClass('no-motionui');
    }

    if ($images.length) {
      Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
    } else {
      this._prepareForOrbit();//hehe
    }

    if (this.options.bullets) {
      this._loadBullets();
    }

    this._events();

    if (this.options.autoPlay && this.$slides.length > 1) {
      this.geoSync();
    }

    if (this.options.accessible) { // allow wrapper to be focusable to enable arrow navigation
      this.$wrapper.attr('tabindex', 0);
    }
  }

  /**
  * Creates a jQuery collection of bullets, if they are being used.
  * @function
  * @private
  */
  _loadBullets() {
    this.$bullets = this.$element.find(`.${this.options.boxOfBullets}`).find('button');
  }

  /**
  * Sets a `timer` object on the orbit, and starts the counter for the next slide.
  * @function
  */
  geoSync() {
    var _this = this;
    this.timer = new Foundation.Timer(
      this.$element,
      {
        duration: this.options.timerDelay,
        infinite: false
      },
      function() {
        _this.changeSlide(true);
      });
    this.timer.start();
  }

  /**
  * Sets wrapper and slide heights for the orbit.
  * @function
  * @private
  */
  _prepareForOrbit() {
    var _this = this;
    this._setWrapperHeight();
  }

  /**
  * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
  * @function
  * @private
  * @param {Function} cb - a callback function to fire when complete.
  */
  _setWrapperHeight(cb) {//rewrite this to `for` loop
    var max = 0, temp, counter = 0, _this = this;

    this.$slides.each(function() {
      temp = this.getBoundingClientRect().height;
      $(this).attr('data-slide', counter);

      if (_this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {//if not the active slide, set css position and display property
        $(this).css({'position': 'relative', 'display': 'none'});
      }
      max = temp > max ? temp : max;
      counter++;
    });

    if (counter === this.$slides.length) {
      this.$wrapper.css({'height': max}); //only change the wrapper height property once.
      if(cb) {cb(max);} //fire callback with max height dimension.
    }
  }

  /**
  * Sets the max-height of each slide.
  * @function
  * @private
  */
  _setSlideHeight(height) {
    this.$slides.each(function() {
      $(this).css('max-height', height);
    });
  }

  /**
  * Adds event listeners to basically everything within the element.
  * @function
  * @private
  */
  _events() {
    var _this = this;

    //***************************************
    //**Now using custom event - thanks to:**
    //**      Yohai Ararat of Toronto      **
    //***************************************
    //
    this.$element.off('.resizeme.zf.trigger').on({
      'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
    })
    if (this.$slides.length > 1) {

      if (this.options.swipe) {
        this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit')
        .on('swipeleft.zf.orbit', function(e){
          e.preventDefault();
          _this.changeSlide(true);
        }).on('swiperight.zf.orbit', function(e){
          e.preventDefault();
          _this.changeSlide(false);
        });
      }
      //***************************************

      if (this.options.autoPlay) {
        this.$slides.on('click.zf.orbit', function() {
          _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
          _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
        });

        if (this.options.pauseOnHover) {
          this.$element.on('mouseenter.zf.orbit', function() {
            _this.timer.pause();
          }).on('mouseleave.zf.orbit', function() {
            if (!_this.$element.data('clickedOn')) {
              _this.timer.start();
            }
          });
        }
      }

      if (this.options.navButtons) {
        var $controls = this.$element.find(`.${this.options.nextClass}, .${this.options.prevClass}`);
        $controls.attr('tabindex', 0)
        //also need to handle enter/return and spacebar key presses
        .on('click.zf.orbit touchend.zf.orbit', function(e){
	  e.preventDefault();
          _this.changeSlide($(this).hasClass(_this.options.nextClass));
        });
      }

      if (this.options.bullets) {
        this.$bullets.on('click.zf.orbit touchend.zf.orbit', function() {
          if (/is-active/g.test(this.className)) { return false; }//if this is active, kick out of function.
          var idx = $(this).data('slide'),
          ltr = idx > _this.$slides.filter('.is-active').data('slide'),
          $slide = _this.$slides.eq(idx);

          _this.changeSlide(ltr, $slide, idx);
        });
      }

      if (this.options.accessible) {
        this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function(e) {
          // handle keyboard event with keyboard util
          Foundation.Keyboard.handleKey(e, 'Orbit', {
            next: function() {
              _this.changeSlide(true);
            },
            previous: function() {
              _this.changeSlide(false);
            },
            handled: function() { // if bullet is focused, make sure focus moves
              if ($(e.target).is(_this.$bullets)) {
                _this.$bullets.filter('.is-active').focus();
              }
            }
          });
        });
      }
    }
  }

  /**
   * Resets Orbit so it can be reinitialized
   */
  _reset() {
    // Don't do anything if there are no slides (first run)
    if (typeof this.$slides == 'undefined') {
      return;
    }

    if (this.$slides.length > 1) {
      // Remove old events
      this.$element.off('.zf.orbit').find('*').off('.zf.orbit')

      // Restart timer if autoPlay is enabled
      if (this.options.autoPlay) {
        this.timer.restart();
      }

      // Reset all sliddes
      this.$slides.each(function(el) {
        $(el).removeClass('is-active is-active is-in')
          .removeAttr('aria-live')
          .hide();
      });

      // Show the first slide
      this.$slides.first().addClass('is-active').show();

      // Triggers when the slide has finished animating
      this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]);

      // Select first bullet if bullets are present
      if (this.options.bullets) {
        this._updateBullets(0);
      }
    }
  }

  /**
  * Changes the current slide to a new one.
  * @function
  * @param {Boolean} isLTR - flag if the slide should move left to right.
  * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
  * @param {Number} idx - the index of the new slide in its collection, if one chosen.
  * @fires Orbit#slidechange
  */
  changeSlide(isLTR, chosenSlide, idx) {
    if (!this.$slides) {return; } // Don't freak out if we're in the middle of cleanup
    var $curSlide = this.$slides.filter('.is-active').eq(0);

    if (/mui/g.test($curSlide[0].className)) { return false; } //if the slide is currently animating, kick out of the function

    var $firstSlide = this.$slides.first(),
    $lastSlide = this.$slides.last(),
    dirIn = isLTR ? 'Right' : 'Left',
    dirOut = isLTR ? 'Left' : 'Right',
    _this = this,
    $newSlide;

    if (!chosenSlide) { //most of the time, this will be auto played or clicked from the navButtons.
      $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
      (this.options.infiniteWrap ? $curSlide.next(`.${this.options.slideClass}`).length ? $curSlide.next(`.${this.options.slideClass}`) : $firstSlide : $curSlide.next(`.${this.options.slideClass}`))//pick next slide if moving left to right
      :
      (this.options.infiniteWrap ? $curSlide.prev(`.${this.options.slideClass}`).length ? $curSlide.prev(`.${this.options.slideClass}`) : $lastSlide : $curSlide.prev(`.${this.options.slideClass}`));//pick prev slide if moving right to left
    } else {
      $newSlide = chosenSlide;
    }

    if ($newSlide.length) {
      /**
      * Triggers before the next slide starts animating in and only if a next slide has been found.
      * @event Orbit#beforeslidechange
      */
      this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

      if (this.options.bullets) {
        idx = idx || this.$slides.index($newSlide); //grab index to update bullets
        this._updateBullets(idx);
      }

      if (this.options.useMUI && !this.$element.is(':hidden')) {
        Foundation.Motion.animateIn(
          $newSlide.addClass('is-active').css({'position': 'absolute', 'top': 0}),
          this.options[`animInFrom${dirIn}`],
          function(){
            $newSlide.css({'position': 'relative', 'display': 'block'})
            .attr('aria-live', 'polite');
        });

        Foundation.Motion.animateOut(
          $curSlide.removeClass('is-active'),
          this.options[`animOutTo${dirOut}`],
          function(){
            $curSlide.removeAttr('aria-live');
            if(_this.options.autoPlay && !_this.timer.isPaused){
              _this.timer.restart();
            }
            //do stuff?
          });
      } else {
        $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
        $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
        if (this.options.autoPlay && !this.timer.isPaused) {
          this.timer.restart();
        }
      }
    /**
    * Triggers when the slide has finished animating in.
    * @event Orbit#slidechange
    */
      this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
    }
  }

  /**
  * Updates the active state of the bullets, if displayed.
  * @function
  * @private
  * @param {Number} idx - the index of the current slide.
  */
  _updateBullets(idx) {
    var $oldBullet = this.$element.find(`.${this.options.boxOfBullets}`)
    .find('.is-active').removeClass('is-active').blur(),
    span = $oldBullet.find('span:last').detach(),
    $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
  }

  /**
  * Destroys the carousel and hides the element.
  * @function
  */
  destroy() {
    this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    Foundation.unregisterPlugin(this);
  }
}

Orbit.defaults = {
  /**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
  bullets: true,
  /**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
  navButtons: true,
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
  animInFromRight: 'slide-in-right',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
  animOutToRight: 'slide-out-right',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
  animInFromLeft: 'slide-in-left',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
  animOutToLeft: 'slide-out-left',
  /**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
  autoPlay: true,
  /**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
  timerDelay: 5000,
  /**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
  infiniteWrap: true,
  /**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
  swipe: true,
  /**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
  pauseOnHover: true,
  /**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
  accessible: true,
  /**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
  containerClass: 'orbit-container',
  /**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
  slideClass: 'orbit-slide',
  /**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
  boxOfBullets: 'orbit-bullets',
  /**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
  nextClass: 'orbit-next',
  /**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
  prevClass: 'orbit-previous',
  /**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
  * @option
   * @type {boolean}
  * @default true
  */
  useMUI: true
};

// Window exports
Foundation.plugin(Orbit, 'Orbit');

}(jQuery);

'use strict';

!function($) {

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

class ResponsiveMenu {
  /**
   * Creates a new instance of a responsive menu.
   * @class
   * @fires ResponsiveMenu#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = $(element);
    this.rules = this.$element.data('responsive-menu');
    this.currentMq = null;
    this.currentPlugin = null;

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'ResponsiveMenu');
  }

  /**
   * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
   * @function
   * @private
   */
  _init() {
    // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
    if (typeof this.rules === 'string') {
      let rulesTree = {};

      // Parse rules from "classes" pulled from data attribute
      let rules = this.rules.split(' ');

      // Iterate through every rule found
      for (let i = 0; i < rules.length; i++) {
        let rule = rules[i].split('-');
        let ruleSize = rule.length > 1 ? rule[0] : 'small';
        let rulePlugin = rule.length > 1 ? rule[1] : rule[0];

        if (MenuPlugins[rulePlugin] !== null) {
          rulesTree[ruleSize] = MenuPlugins[rulePlugin];
        }
      }

      this.rules = rulesTree;
    }

    if (!$.isEmptyObject(this.rules)) {
      this._checkMediaQueries();
    }
    // Add data-mutate since children may need it.
    this.$element.attr('data-mutate', (this.$element.attr('data-mutate') || Foundation.GetYoDigits(6, 'responsive-menu')));
  }

  /**
   * Initializes events for the Menu.
   * @function
   * @private
   */
  _events() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', function() {
      _this._checkMediaQueries();
    });
    // $(window).on('resize.zf.ResponsiveMenu', function() {
    //   _this._checkMediaQueries();
    // });
  }

  /**
   * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
   * @function
   * @private
   */
  _checkMediaQueries() {
    var matchedMq, _this = this;
    // Iterate through each rule and find the last matching rule
    $.each(this.rules, function(key) {
      if (Foundation.MediaQuery.atLeast(key)) {
        matchedMq = key;
      }
    });

    // No match? No dice
    if (!matchedMq) return;

    // Plugin already initialized? We good
    if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

    // Remove existing plugin-specific CSS classes
    $.each(MenuPlugins, function(key, value) {
      _this.$element.removeClass(value.cssClass);
    });

    // Add the CSS class for the new plugin
    this.$element.addClass(this.rules[matchedMq].cssClass);

    // Create an instance of the new plugin
    if (this.currentPlugin) this.currentPlugin.destroy();
    this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
  }

  /**
   * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
   * @function
   */
  destroy() {
    this.currentPlugin.destroy();
    $(window).off('.zf.ResponsiveMenu');
    Foundation.unregisterPlugin(this);
  }
}

ResponsiveMenu.defaults = {};

// The plugin matches the plugin classes with these plugin instances.
var MenuPlugins = {
  dropdown: {
    cssClass: 'dropdown',
    plugin: Foundation._plugins['dropdown-menu'] || null
  },
 drilldown: {
    cssClass: 'drilldown',
    plugin: Foundation._plugins['drilldown'] || null
  },
  accordion: {
    cssClass: 'accordion-menu',
    plugin: Foundation._plugins['accordion-menu'] || null
  }
};

// Window exports
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');

}(jQuery);

'use strict';

!function($) {

/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 */

class ResponsiveToggle {
  /**
   * Creates a new instance of Tab Bar.
   * @class
   * @fires ResponsiveToggle#init
   * @param {jQuery} element - jQuery object to attach tab bar functionality to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'ResponsiveToggle');
  }

  /**
   * Initializes the tab bar by finding the target element, toggling element, and running update().
   * @function
   * @private
   */
  _init() {
    var targetID = this.$element.data('responsive-toggle');
    if (!targetID) {
      console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
    }

    this.$targetMenu = $(`#${targetID}`);
    this.$toggler = this.$element.find('[data-toggle]').filter(function() {
      var target = $(this).data('toggle');
      return (target === targetID || target === "");
    });
    this.options = $.extend({}, this.options, this.$targetMenu.data());

    // If they were set, parse the animation classes
    if(this.options.animate) {
      let input = this.options.animate.split(' ');

      this.animationIn = input[0];
      this.animationOut = input[1] || null;
    }

    this._update();
  }

  /**
   * Adds necessary event handlers for the tab bar to work.
   * @function
   * @private
   */
  _events() {
    var _this = this;

    this._updateMqHandler = this._update.bind(this);

    $(window).on('changed.zf.mediaquery', this._updateMqHandler);

    this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
  }

  /**
   * Checks the current media query to determine if the tab bar should be visible or hidden.
   * @function
   * @private
   */
  _update() {
    // Mobile
    if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
      this.$element.show();
      this.$targetMenu.hide();
    }

    // Desktop
    else {
      this.$element.hide();
      this.$targetMenu.show();
    }
  }

  /**
   * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
   * @function
   * @fires ResponsiveToggle#toggled
   */
  toggleMenu() {
    if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
      /**
       * Fires when the element attached to the tab bar toggles.
       * @event ResponsiveToggle#toggled
       */
      if(this.options.animate) {
        if (this.$targetMenu.is(':hidden')) {
          Foundation.Motion.animateIn(this.$targetMenu, this.animationIn, () => {
            this.$element.trigger('toggled.zf.responsiveToggle');
            this.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
          });
        }
        else {
          Foundation.Motion.animateOut(this.$targetMenu, this.animationOut, () => {
            this.$element.trigger('toggled.zf.responsiveToggle');
          });
        }
      }
      else {
        this.$targetMenu.toggle(0);
        this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
        this.$element.trigger('toggled.zf.responsiveToggle');
      }
    }
  };

  destroy() {
    this.$element.off('.zf.responsiveToggle');
    this.$toggler.off('.zf.responsiveToggle');

    $(window).off('changed.zf.mediaquery', this._updateMqHandler);

    Foundation.unregisterPlugin(this);
  }
}

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
  hideFor: 'medium',

  /**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};

// Window exports
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');

}(jQuery);

'use strict';

!function($) {

/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */

class Reveal {
  /**
   * Creates a new instance of Reveal.
   * @class
   * @param {jQuery} element - jQuery object to use for the modal.
   * @param {Object} options - optional parameters.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
    this._init();

    Foundation.registerPlugin(this, 'Reveal');
    Foundation.Keyboard.register('Reveal', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ESCAPE': 'close',
    });
  }

  /**
   * Initializes the modal by adding the overlay and close buttons, (if selected).
   * @private
   */
  _init() {
    this.id = this.$element.attr('id');
    this.isActive = false;
    this.cached = {mq: Foundation.MediaQuery.current};
    this.isMobile = mobileSniff();

    this.$anchor = $(`[data-open="${this.id}"]`).length ? $(`[data-open="${this.id}"]`) : $(`[data-toggle="${this.id}"]`);
    this.$anchor.attr({
      'aria-controls': this.id,
      'aria-haspopup': true,
      'tabindex': 0
    });

    if (this.options.fullScreen || this.$element.hasClass('full')) {
      this.options.fullScreen = true;
      this.options.overlay = false;
    }
    if (this.options.overlay && !this.$overlay) {
      this.$overlay = this._makeOverlay(this.id);
    }

    this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
    });

    if(this.$overlay) {
      this.$element.detach().appendTo(this.$overlay);
    } else {
      this.$element.detach().appendTo($(this.options.appendTo));
      this.$element.addClass('without-overlay');
    }
    this._events();
    if (this.options.deepLink && window.location.hash === ( `#${this.id}`)) {
      $(window).one('load.zf.reveal', this.open.bind(this));
    }
  }

  /**
   * Creates an overlay div to display behind the modal.
   * @private
   */
  _makeOverlay() {
    return $('<div></div>')
      .addClass('reveal-overlay')
      .appendTo(this.options.appendTo);
  }

  /**
   * Updates position of modal
   * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
   * @private
   */
  _updatePosition() {
    var width = this.$element.outerWidth();
    var outerWidth = $(window).width();
    var height = this.$element.outerHeight();
    var outerHeight = $(window).height();
    var left, top;
    if (this.options.hOffset === 'auto') {
      left = parseInt((outerWidth - width) / 2, 10);
    } else {
      left = parseInt(this.options.hOffset, 10);
    }
    if (this.options.vOffset === 'auto') {
      if (height > outerHeight) {
        top = parseInt(Math.min(100, outerHeight / 10), 10);
      } else {
        top = parseInt((outerHeight - height) / 4, 10);
      }
    } else {
      top = parseInt(this.options.vOffset, 10);
    }
    this.$element.css({top: top + 'px'});
    // only worry about left if we don't have an overlay or we havea  horizontal offset,
    // otherwise we're perfectly in the middle
    if(!this.$overlay || (this.options.hOffset !== 'auto')) {
      this.$element.css({left: left + 'px'});
      this.$element.css({margin: '0px'});
    }

  }

  /**
   * Adds event handlers for the modal.
   * @private
   */
  _events() {
    var _this = this;

    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': (event, $element) => {
        if ((event.target === _this.$element[0]) ||
            ($(event.target).parents('[data-closable]')[0] === $element)) { // only close reveal when it's explicitly called
          return this.close.apply(this);
        }
      },
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': function() {
        _this._updatePosition();
      }
    });

    if (this.$anchor.length) {
      this.$anchor.on('keydown.zf.reveal', function(e) {
        if (e.which === 13 || e.which === 32) {
          e.stopPropagation();
          e.preventDefault();
          _this.open();
        }
      });
    }

    if (this.options.closeOnClick && this.options.overlay) {
      this.$overlay.off('.zf.reveal').on('click.zf.reveal', function(e) {
        if (e.target === _this.$element[0] ||
          $.contains(_this.$element[0], e.target) ||
            !$.contains(document, e.target)) {
              return;
        }
        _this.close();
      });
    }
    if (this.options.deepLink) {
      $(window).on(`popstate.zf.reveal:${this.id}`, this._handleState.bind(this));
    }
  }

  /**
   * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
   * @private
   */
  _handleState(e) {
    if(window.location.hash === ( '#' + this.id) && !this.isActive){ this.open(); }
    else{ this.close(); }
  }


  /**
   * Opens the modal controlled by `this.$anchor`, and closes all others by default.
   * @function
   * @fires Reveal#closeme
   * @fires Reveal#open
   */
  open() {
    if (this.options.deepLink) {
      var hash = `#${this.id}`;

      if (window.history.pushState) {
        window.history.pushState(null, null, hash);
      } else {
        window.location.hash = hash;
      }
    }

    this.isActive = true;

    // Make elements invisible, but remove display: none so we can get size and positioning
    this.$element
        .css({ 'visibility': 'hidden' })
        .show()
        .scrollTop(0);
    if (this.options.overlay) {
      this.$overlay.css({'visibility': 'hidden'}).show();
    }

    this._updatePosition();

    this.$element
      .hide()
      .css({ 'visibility': '' });

    if(this.$overlay) {
      this.$overlay.css({'visibility': ''}).hide();
      if(this.$element.hasClass('fast')) {
        this.$overlay.addClass('fast');
      } else if (this.$element.hasClass('slow')) {
        this.$overlay.addClass('slow');
      }
    }


    if (!this.options.multipleOpened) {
      /**
       * Fires immediately before the modal opens.
       * Closes any other modals that are currently open
       * @event Reveal#closeme
       */
      this.$element.trigger('closeme.zf.reveal', this.id);
    }

    var _this = this;

    function addRevealOpenClasses() {
      if (_this.isMobile) {
        if(!_this.originalScrollPos) {
          _this.originalScrollPos = window.pageYOffset;
        }
        $('html, body').addClass('is-reveal-open');
      }
      else {
        $('body').addClass('is-reveal-open');
      }
    }
    // Motion UI method of reveal
    if (this.options.animationIn) {
      function afterAnimation(){
        _this.$element
          .attr({
            'aria-hidden': false,
            'tabindex': -1
          })
          .focus();
        addRevealOpenClasses();
        Foundation.Keyboard.trapFocus(_this.$element);
      }
      if (this.options.overlay) {
        Foundation.Motion.animateIn(this.$overlay, 'fade-in');
      }
      Foundation.Motion.animateIn(this.$element, this.options.animationIn, () => {
        if(this.$element) { // protect against object having been removed
          this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
          afterAnimation();
        }
      });
    }
    // jQuery method of reveal
    else {
      if (this.options.overlay) {
        this.$overlay.show(0);
      }
      this.$element.show(this.options.showDelay);
    }

    // handle accessibility
    this.$element
      .attr({
        'aria-hidden': false,
        'tabindex': -1
      })
      .focus();
    Foundation.Keyboard.trapFocus(this.$element);

    /**
     * Fires when the modal has successfully opened.
     * @event Reveal#open
     */
    this.$element.trigger('open.zf.reveal');

    addRevealOpenClasses();

    setTimeout(() => {
      this._extraHandlers();
    }, 0);
  }

  /**
   * Adds extra event handlers for the body and window if necessary.
   * @private
   */
  _extraHandlers() {
    var _this = this;
    if(!this.$element) { return; } // If we're in the middle of cleanup, don't freak out
    this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);

    if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
      $('body').on('click.zf.reveal', function(e) {
        if (e.target === _this.$element[0] ||
          $.contains(_this.$element[0], e.target) ||
            !$.contains(document, e.target)) { return; }
        _this.close();
      });
    }

    if (this.options.closeOnEsc) {
      $(window).on('keydown.zf.reveal', function(e) {
        Foundation.Keyboard.handleKey(e, 'Reveal', {
          close: function() {
            if (_this.options.closeOnEsc) {
              _this.close();
              _this.$anchor.focus();
            }
          }
        });
      });
    }

    // lock focus within modal while tabbing
    this.$element.on('keydown.zf.reveal', function(e) {
      var $target = $(this);
      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, 'Reveal', {
        open: function() {
          if (_this.$element.find(':focus').is(_this.$element.find('[data-close]'))) {
            setTimeout(function() { // set focus back to anchor if close button has been activated
              _this.$anchor.focus();
            }, 1);
          } else if ($target.is(_this.focusableElements)) { // dont't trigger if acual element has focus (i.e. inputs, links, ...)
            _this.open();
          }
        },
        close: function() {
          if (_this.options.closeOnEsc) {
            _this.close();
            _this.$anchor.focus();
          }
        },
        handled: function(preventDefault) {
          if (preventDefault) {
            e.preventDefault();
          }
        }
      });
    });
  }

  /**
   * Closes the modal.
   * @function
   * @fires Reveal#closed
   */
  close() {
    if (!this.isActive || !this.$element.is(':visible')) {
      return false;
    }
    var _this = this;

    // Motion UI method of hiding
    if (this.options.animationOut) {
      if (this.options.overlay) {
        Foundation.Motion.animateOut(this.$overlay, 'fade-out', finishUp);
      }
      else {
        finishUp();
      }

      Foundation.Motion.animateOut(this.$element, this.options.animationOut);
    }
    // jQuery method of hiding
    else {

      this.$element.hide(this.options.hideDelay);

      if (this.options.overlay) {
        this.$overlay.hide(0, finishUp);
      }
      else {
        finishUp();
      }
    }

    // Conditionals to remove extra event listeners added on open
    if (this.options.closeOnEsc) {
      $(window).off('keydown.zf.reveal');
    }

    if (!this.options.overlay && this.options.closeOnClick) {
      $('body').off('click.zf.reveal');
    }

    this.$element.off('keydown.zf.reveal');

    function finishUp() {
      if (_this.isMobile) {
        if ($('.reveal:visible').length === 0) {
          $('html, body').removeClass('is-reveal-open');
        }
        if(_this.originalScrollPos) {
          $('body').scrollTop(_this.originalScrollPos);
          _this.originalScrollPos = null;
        }
      }
      else {
        if ($('.reveal:visible').length  === 0) {
          $('body').removeClass('is-reveal-open');
        }
      }


      Foundation.Keyboard.releaseFocus(_this.$element);

      _this.$element.attr('aria-hidden', true);

      /**
      * Fires when the modal is done closing.
      * @event Reveal#closed
      */
      _this.$element.trigger('closed.zf.reveal');
    }

    /**
    * Resets the modal content
    * This prevents a running video to keep going in the background
    */
    if (this.options.resetOnClose) {
      this.$element.html(this.$element.html());
    }

    this.isActive = false;
     if (_this.options.deepLink) {
       if (window.history.replaceState) {
         window.history.replaceState('', document.title, window.location.href.replace(`#${this.id}`, ''));
       } else {
         window.location.hash = '';
       }
     }
  }

  /**
   * Toggles the open/closed state of a modal.
   * @function
   */
  toggle() {
    if (this.isActive) {
      this.close();
    } else {
      this.open();
    }
  };

  /**
   * Destroys an instance of a modal.
   * @function
   */
  destroy() {
    if (this.options.overlay) {
      this.$element.appendTo($(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()
      this.$overlay.hide().off().remove();
    }
    this.$element.hide().off();
    this.$anchor.off('.zf');
    $(window).off(`.zf.reveal:${this.id}`);

    Foundation.unregisterPlugin(this);
  };
}

Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationIn: '',
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationOut: '',
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  showDelay: 0,
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  hideDelay: 0,
  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,
  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  multipleOpened: false,
  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',
  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',
  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,
  /**
   * Percentage of screen height the modal should push up from the bottom of the view.
   * @option
   * @type {number}
   * @default 10
   */
  btmOffsetPct: 10,
  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,
  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  resetOnClose: false,
  /**
   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,
    /**
   * Allows the modal to append to custom div.
   * @option
   * @type {string}
   * @default "body"
   */
  appendTo: "body"

};

// Window exports
Foundation.plugin(Reveal, 'Reveal');

function iPhoneSniff() {
  return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
}

function androidSniff() {
  return /Android/.test(window.navigator.userAgent);
}

function mobileSniff() {
  return iPhoneSniff() || androidSniff();
}

}(jQuery);

'use strict';

!function($) {

/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */

class Slider {
  /**
   * Creates a new instance of a slider control.
   * @class
   * @param {jQuery} element - jQuery object to make into a slider control.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Slider.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Slider');
    Foundation.Keyboard.register('Slider', {
      'ltr': {
        'ARROW_RIGHT': 'increase',
        'ARROW_UP': 'increase',
        'ARROW_DOWN': 'decrease',
        'ARROW_LEFT': 'decrease',
        'SHIFT_ARROW_RIGHT': 'increase_fast',
        'SHIFT_ARROW_UP': 'increase_fast',
        'SHIFT_ARROW_DOWN': 'decrease_fast',
        'SHIFT_ARROW_LEFT': 'decrease_fast'
      },
      'rtl': {
        'ARROW_LEFT': 'increase',
        'ARROW_RIGHT': 'decrease',
        'SHIFT_ARROW_LEFT': 'increase_fast',
        'SHIFT_ARROW_RIGHT': 'decrease_fast'
      }
    });
  }

  /**
   * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
   * @function
   * @private
   */
  _init() {
    this.inputs = this.$element.find('input');
    this.handles = this.$element.find('[data-slider-handle]');

    this.$handle = this.handles.eq(0);
    this.$input = this.inputs.length ? this.inputs.eq(0) : $(`#${this.$handle.attr('aria-controls')}`);
    this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

    var isDbl = false,
        _this = this;
    if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
      this.options.disabled = true;
      this.$element.addClass(this.options.disabledClass);
    }
    if (!this.inputs.length) {
      this.inputs = $().add(this.$input);
      this.options.binding = true;
    }

    this._setInitAttr(0);

    if (this.handles[1]) {
      this.options.doubleSided = true;
      this.$handle2 = this.handles.eq(1);
      this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : $(`#${this.$handle2.attr('aria-controls')}`);

      if (!this.inputs[1]) {
        this.inputs = this.inputs.add(this.$input2);
      }
      isDbl = true;

      // this.$handle.triggerHandler('click.zf.slider');
      this._setInitAttr(1);
    }

    // Set handle positions
    this.setHandles();

    this._events();
  }

  setHandles() {
    if(this.handles[1]) {
      this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, () => {
        this._setHandlePos(this.$handle2, this.inputs.eq(1).val(), true);
      });
    } else {
      this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
    }
  }

  _reflow() {
    this.setHandles();
  }
  /**
  * @function
  * @private
  * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
  */
  _pctOfBar(value) {
    var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start)

    switch(this.options.positionValueFunction) {
    case "pow":
      pctOfBar = this._logTransform(pctOfBar);
      break;
    case "log":
      pctOfBar = this._powTransform(pctOfBar);
      break;
    }

    return pctOfBar.toFixed(2)
  }

  /**
  * @function
  * @private
  * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
  */
  _value(pctOfBar) {
    switch(this.options.positionValueFunction) {
    case "pow":
      pctOfBar = this._powTransform(pctOfBar);
      break;
    case "log":
      pctOfBar = this._logTransform(pctOfBar);
      break;
    }
    var value = (this.options.end - this.options.start) * pctOfBar + this.options.start;

    return value
  }

  /**
  * @function
  * @private
  * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
  */
  _logTransform(value) {
    return baseLog(this.options.nonLinearBase, ((value*(this.options.nonLinearBase-1))+1))
  }

  /**
  * @function
  * @private
  * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
  */
  _powTransform(value) {
    return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1)
  }

  /**
   * Sets the position of the selected handle and fill bar.
   * @function
   * @private
   * @param {jQuery} $hndl - the selected handle to move.
   * @param {Number} location - floating point between the start and end values of the slider bar.
   * @param {Function} cb - callback function to fire on completion.
   * @fires Slider#moved
   * @fires Slider#changed
   */
  _setHandlePos($hndl, location, noInvert, cb) {
    // don't move if the slider has been disabled since its initialization
    if (this.$element.hasClass(this.options.disabledClass)) {
      return;
    }
    //might need to alter that slightly for bars that will have odd number selections.
    location = parseFloat(location);//on input change events, convert string to number...grumble.

    // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
    if (location < this.options.start) { location = this.options.start; }
    else if (location > this.options.end) { location = this.options.end; }

    var isDbl = this.options.doubleSided;

    if (isDbl) { //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
      if (this.handles.index($hndl) === 0) {
        var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
        location = location >= h2Val ? h2Val - this.options.step : location;
      } else {
        var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
        location = location <= h1Val ? h1Val + this.options.step : location;
      }
    }

    //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
    //for click and drag events, it's weird due to the scale(-1, 1) css property
    if (this.options.vertical && !noInvert) {
      location = this.options.end - location;
    }

    var _this = this,
        vert = this.options.vertical,
        hOrW = vert ? 'height' : 'width',
        lOrT = vert ? 'top' : 'left',
        handleDim = $hndl[0].getBoundingClientRect()[hOrW],
        elemDim = this.$element[0].getBoundingClientRect()[hOrW],
        //percentage of bar min/max value based on click or drag point
        pctOfBar = this._pctOfBar(location),
        //number of actual pixels to shift the handle, based on the percentage obtained above
        pxToMove = (elemDim - handleDim) * pctOfBar,
        //percentage of bar to shift the handle
        movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
        //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
        location = parseFloat(location.toFixed(this.options.decimal));
        // declare empty object for css adjustments, only used with 2 handled-sliders
    var css = {};

    this._setValues($hndl, location);

    // TODO update to calculate based on values set to respective inputs??
    if (isDbl) {
      var isLeftHndl = this.handles.index($hndl) === 0,
          //empty variable, will be used for min-height/width for fill bar
          dim,
          //percentage w/h of the handle compared to the slider bar
          handlePct =  ~~(percent(handleDim, elemDim) * 100);
      //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
      if (isLeftHndl) {
        //left or top percentage value to apply to the fill bar.
        css[lOrT] = `${movement}%`;
        //calculate the new min-height/width for the fill bar.
        dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
        //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
        //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
        if (cb && typeof cb === 'function') { cb(); }//this is only needed for the initialization of 2 handled sliders
      } else {
        //just caching the value of the left/bottom handle's left/top property
        var handlePos = parseFloat(this.$handle[0].style[lOrT]);
        //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
        //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
        dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start)/((this.options.end-this.options.start)/100) : handlePos) + handlePct;
      }
      // assign the min-height/width to our css object
      css[`min-${hOrW}`] = `${dim}%`;
    }

    this.$element.one('finished.zf.animate', function() {
                    /**
                     * Fires when the handle is done moving.
                     * @event Slider#moved
                     */
                    _this.$element.trigger('moved.zf.slider', [$hndl]);
                });

    //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
    var moveTime = this.$element.data('dragging') ? 1000/60 : this.options.moveTime;

    Foundation.Move(moveTime, $hndl, function() {
      // adjusting the left/top property of the handle, based on the percentage calculated above
      // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
      // fall back to next best guess.
      if (isNaN(movement)) {
        $hndl.css(lOrT, `${pctOfBar * 100}%`);
      }
      else {
        $hndl.css(lOrT, `${movement}%`);
      }

      if (!_this.options.doubleSided) {
        //if single-handled, a simple method to expand the fill bar
        _this.$fill.css(hOrW, `${pctOfBar * 100}%`);
      } else {
        //otherwise, use the css object we created above
        _this.$fill.css(css);
      }
    });


    /**
     * Fires when the value has not been change for a given time.
     * @event Slider#changed
     */
    clearTimeout(_this.timeout);
    _this.timeout = setTimeout(function(){
      _this.$element.trigger('changed.zf.slider', [$hndl]);
    }, _this.options.changedDelay);
  }

  /**
   * Sets the initial attribute for the slider element.
   * @function
   * @private
   * @param {Number} idx - index of the current handle/input to use.
   */
  _setInitAttr(idx) {
    var initVal = (idx === 0 ? this.options.initialStart : this.options.initialEnd)
    var id = this.inputs.eq(idx).attr('id') || Foundation.GetYoDigits(6, 'slider');
    this.inputs.eq(idx).attr({
      'id': id,
      'max': this.options.end,
      'min': this.options.start,
      'step': this.options.step
    });
    this.inputs.eq(idx).val(initVal);
    this.handles.eq(idx).attr({
      'role': 'slider',
      'aria-controls': id,
      'aria-valuemax': this.options.end,
      'aria-valuemin': this.options.start,
      'aria-valuenow': initVal,
      'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
      'tabindex': 0
    });
  }

  /**
   * Sets the input and `aria-valuenow` values for the slider element.
   * @function
   * @private
   * @param {jQuery} $handle - the currently selected handle.
   * @param {Number} val - floating point of the new value.
   */
  _setValues($handle, val) {
    var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
    this.inputs.eq(idx).val(val);
    $handle.attr('aria-valuenow', val);
  }

  /**
   * Handles events on the slider element.
   * Calculates the new location of the current handle.
   * If there are two handles and the bar was clicked, it determines which handle to move.
   * @function
   * @private
   * @param {Object} e - the `event` object passed from the listener.
   * @param {jQuery} $handle - the current handle to calculate for, if selected.
   * @param {Number} val - floating point number for the new value of the slider.
   * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
   */
  _handleEvent(e, $handle, val) {
    var value, hasVal;
    if (!val) {//click or drag events
      e.preventDefault();
      var _this = this,
          vertical = this.options.vertical,
          param = vertical ? 'height' : 'width',
          direction = vertical ? 'top' : 'left',
          eventOffset = vertical ? e.pageY : e.pageX,
          halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
          barDim = this.$element[0].getBoundingClientRect()[param],
          windowScroll = vertical ? $(window).scrollTop() : $(window).scrollLeft();


      var elemOffset = this.$element.offset()[direction];

      // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
      // best way to guess this is simulated is if clientY == pageY
      if (e.clientY === e.pageY) { eventOffset = eventOffset + windowScroll; }
      var eventFromBar = eventOffset - elemOffset;
      var barXY;
      if (eventFromBar < 0) {
        barXY = 0;
      } else if (eventFromBar > barDim) {
        barXY = barDim;
      } else {
        barXY = eventFromBar;
      }
      var offsetPct = percent(barXY, barDim);

      value = this._value(offsetPct);

      // turn everything around for RTL, yay math!
      if (Foundation.rtl() && !this.options.vertical) {value = this.options.end - value;}

      value = _this._adjustValue(null, value);
      //boolean flag for the setHandlePos fn, specifically for vertical sliders
      hasVal = false;

      if (!$handle) {//figure out which handle it is, pass it to the next function.
        var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
            secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
            $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
      }

    } else {//change event on input
      value = this._adjustValue(null, val);
      hasVal = true;
    }

    this._setHandlePos($handle, value, hasVal);
  }

  /**
   * Adjustes value for handle in regard to step value. returns adjusted value
   * @function
   * @private
   * @param {jQuery} $handle - the selected handle.
   * @param {Number} value - value to adjust. used if $handle is falsy
   */
  _adjustValue($handle, value) {
    var val,
      step = this.options.step,
      div = parseFloat(step/2),
      left, prev_val, next_val;
    if (!!$handle) {
      val = parseFloat($handle.attr('aria-valuenow'));
    }
    else {
      val = value;
    }
    left = val % step;
    prev_val = val - left;
    next_val = prev_val + step;
    if (left === 0) {
      return val;
    }
    val = val >= prev_val + div ? next_val : prev_val;
    return val;
  }

  /**
   * Adds event listeners to the slider elements.
   * @function
   * @private
   */
  _events() {
    this._eventsForHandle(this.$handle);
    if(this.handles[1]) {
      this._eventsForHandle(this.$handle2);
    }
  }


  /**
   * Adds event listeners a particular handle
   * @function
   * @private
   * @param {jQuery} $handle - the current handle to apply listeners to.
   */
  _eventsForHandle($handle) {
    var _this = this,
        curHandle,
        timer;

      this.inputs.off('change.zf.slider').on('change.zf.slider', function(e) {
        var idx = _this.inputs.index($(this));
        _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
      });

      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function(e) {
          if (_this.$element.data('dragging')) { return false; }

          if (!$(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }

    if (this.options.draggable) {
      this.handles.addTouch();

      var $body = $('body');
      $handle
        .off('mousedown.zf.slider')
        .on('mousedown.zf.slider', function(e) {
          $handle.addClass('is-dragging');
          _this.$fill.addClass('is-dragging');//
          _this.$element.data('dragging', true);

          curHandle = $(e.currentTarget);

          $body.on('mousemove.zf.slider', function(e) {
            e.preventDefault();
            _this._handleEvent(e, curHandle);

          }).on('mouseup.zf.slider', function(e) {
            _this._handleEvent(e, curHandle);

            $handle.removeClass('is-dragging');
            _this.$fill.removeClass('is-dragging');
            _this.$element.data('dragging', false);

            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
      })
      // prevent events triggered by touch
      .on('selectstart.zf.slider touchmove.zf.slider', function(e) {
        e.preventDefault();
      });
    }

    $handle.off('keydown.zf.slider').on('keydown.zf.slider', function(e) {
      var _$handle = $(this),
          idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
          oldValue = parseFloat(_this.inputs.eq(idx).val()),
          newValue;

      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, 'Slider', {
        decrease: function() {
          newValue = oldValue - _this.options.step;
        },
        increase: function() {
          newValue = oldValue + _this.options.step;
        },
        decrease_fast: function() {
          newValue = oldValue - _this.options.step * 10;
        },
        increase_fast: function() {
          newValue = oldValue + _this.options.step * 10;
        },
        handled: function() { // only set handle pos when event was handled specially
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue, true);
        }
      });
      /*if (newValue) { // if pressed key has special function, update value
        e.preventDefault();
        _this._setHandlePos(_$handle, newValue);
      }*/
    });
  }

  /**
   * Destroys the slider plugin.
   */
  destroy() {
    this.handles.off('.zf.slider');
    this.inputs.off('.zf.slider');
    this.$element.off('.zf.slider');

    clearTimeout(this.timeout);

    Foundation.unregisterPlugin(this);
  }
}

Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
  start: 0,
  /**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
  end: 100,
  /**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
  step: 1,
  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
  initialStart: 0,
  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
  initialEnd: 100,
  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
  binding: false,
  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  clickSelect: true,
  /**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
  vertical: false,
  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  draggable: true,
  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
  disabled: false,
  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
  doubleSided: false,
  /**
   * Potential future feature.
   */
  // steps: 100,
  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
  decimal: 2,
  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,
  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
  moveTime: 200,//update this if changing the transition time in the sass
  /**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
  disabledClass: 'disabled',
  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
  invertVertical: false,
  /**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
  changedDelay: 500,
  /**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
  nonLinearBase: 5,
  /**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
  positionValueFunction: 'linear',
};

function percent(frac, num) {
  return (frac / num);
}
function absPosition($handle, dir, clickPos, param) {
  return Math.abs(($handle.position()[dir] + ($handle[param]() / 2)) - clickPos);
}
function baseLog(base, value) {
  return Math.log(value)/Math.log(base)
}

// Window exports
Foundation.plugin(Slider, 'Slider');

}(jQuery);


'use strict';

!function($) {

/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

class Sticky {
  /**
   * Creates a new instance of a sticky thing.
   * @class
   * @param {jQuery} element - jQuery object to make sticky.
   * @param {Object} options - options object passed when creating the element programmatically.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Sticky.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Sticky');
  }

  /**
   * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
   * @function
   * @private
   */
  _init() {
    var $parent = this.$element.parent('[data-sticky-container]'),
        id = this.$element[0].id || Foundation.GetYoDigits(6, 'sticky'),
        _this = this;

    if (!$parent.length) {
      this.wasWrapped = true;
    }
    this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element);
    this.$container.addClass(this.options.containerClass);

    this.$element.addClass(this.options.stickyClass).attr({ 'data-resize': id, 'data-mutate': id });
    if (this.options.anchor !== '') {
        $('#' + _this.options.anchor).attr({ 'data-mutate': id });
    }

    this.scrollCount = this.options.checkEvery;
    this.isStuck = false;
    $(window).one('load.zf.sticky', function(){
      //We calculate the container height to have correct values for anchor points offset calculation.
      _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;
      _this.$container.css('height', _this.containerHeight);
      _this.elemHeight = _this.containerHeight;
      if(_this.options.anchor !== ''){
        _this.$anchor = $('#' + _this.options.anchor);
      }else{
        _this._parsePoints();
      }

      _this._setSizes(function(){
        var scroll = window.pageYOffset;
        _this._calc(false, scroll);
        //Unstick the element will ensure that proper classes are set.
        if (!_this.isStuck) {
          _this._removeSticky((scroll >= _this.topPoint) ? false : true);
        }
      });
      _this._events(id.split('-').reverse().join('-'));
    });
  }

  /**
   * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
   * @function
   * @private
   */
  _parsePoints() {
    var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
        btm = this.options.btmAnchor== "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
        pts = [top, btm],
        breaks = {};
    for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
      var pt;
      if (typeof pts[i] === 'number') {
        pt = pts[i];
      } else {
        var place = pts[i].split(':'),
            anchor = $(`#${place[0]}`);

        pt = anchor.offset().top;
        if (place[1] && place[1].toLowerCase() === 'bottom') {
          pt += anchor[0].getBoundingClientRect().height;
        }
      }
      breaks[i] = pt;
    }


    this.points = breaks;
    return;
  }

  /**
   * Adds event handlers for the scrolling element.
   * @private
   * @param {String} id - psuedo-random id for unique scroll event listener.
   */
  _events(id) {
    var _this = this,
        scrollListener = this.scrollListener = `scroll.zf.${id}`;
    if (this.isOn) { return; }
    if (this.canStick) {
      this.isOn = true;
      $(window).off(scrollListener)
               .on(scrollListener, function(e) {
                 if (_this.scrollCount === 0) {
                   _this.scrollCount = _this.options.checkEvery;
                   _this._setSizes(function() {
                     _this._calc(false, window.pageYOffset);
                   });
                 } else {
                   _this.scrollCount--;
                   _this._calc(false, window.pageYOffset);
                 }
              });
    }

    this.$element.off('resizeme.zf.trigger')
                 .on('resizeme.zf.trigger', function(e, el) {
                    _this._eventsHandler(id);
    });

    this.$element.on('mutateme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
    });

    if(this.$anchor) {
      this.$anchor.on('mutateme.zf.trigger', function (e, el) {
          _this._eventsHandler(id);
      });
    }
  }

  /**
   * Handler for events.
   * @private
   * @param {String} id - psuedo-random id for unique scroll event listener.
   */
  _eventsHandler(id) {
       var _this = this,
        scrollListener = this.scrollListener = `scroll.zf.${id}`;

       _this._setSizes(function() {
       _this._calc(false);
       if (_this.canStick) {
         if (!_this.isOn) {
           _this._events(id);
         }
       } else if (_this.isOn) {
         _this._pauseListeners(scrollListener);
       }
     });
  }

  /**
   * Removes event handlers for scroll and change events on anchor.
   * @fires Sticky#pause
   * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
   */
  _pauseListeners(scrollListener) {
    this.isOn = false;
    $(window).off(scrollListener);

    /**
     * Fires when the plugin is paused due to resize event shrinking the view.
     * @event Sticky#pause
     * @private
     */
     this.$element.trigger('pause.zf.sticky');
  }

  /**
   * Called on every `scroll` event and on `_init`
   * fires functions based on booleans and cached values
   * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
   * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
   */
  _calc(checkSizes, scroll) {
    if (checkSizes) { this._setSizes(); }

    if (!this.canStick) {
      if (this.isStuck) {
        this._removeSticky(true);
      }
      return false;
    }

    if (!scroll) { scroll = window.pageYOffset; }

    if (scroll >= this.topPoint) {
      if (scroll <= this.bottomPoint) {
        if (!this.isStuck) {
          this._setSticky();
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(false);
        }
      }
    } else {
      if (this.isStuck) {
        this._removeSticky(true);
      }
    }
  }

  /**
   * Causes the $element to become stuck.
   * Adds `position: fixed;`, and helper classes.
   * @fires Sticky#stuckto
   * @function
   * @private
   */
  _setSticky() {
    var _this = this,
        stickTo = this.options.stickTo,
        mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
        notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
        css = {};

    css[mrgn] = `${this.options[mrgn]}em`;
    css[stickTo] = 0;
    css[notStuckTo] = 'auto';
    this.isStuck = true;
    this.$element.removeClass(`is-anchored is-at-${notStuckTo}`)
                 .addClass(`is-stuck is-at-${stickTo}`)
                 .css(css)
                 /**
                  * Fires when the $element has become `position: fixed;`
                  * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
                  * @event Sticky#stuckto
                  */
                 .trigger(`sticky.zf.stuckto:${stickTo}`);
    this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
      _this._setSizes();
    });
  }

  /**
   * Causes the $element to become unstuck.
   * Removes `position: fixed;`, and helper classes.
   * Adds other helper classes.
   * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
   * @fires Sticky#unstuckfrom
   * @private
   */
  _removeSticky(isTop) {
    var stickTo = this.options.stickTo,
        stickToTop = stickTo === 'top',
        css = {},
        anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
        mrgn = stickToTop ? 'marginTop' : 'marginBottom',
        notStuckTo = stickToTop ? 'bottom' : 'top',
        topOrBottom = isTop ? 'top' : 'bottom';

    css[mrgn] = 0;

    css['bottom'] = 'auto';
    if(isTop) {
      css['top'] = 0;
    } else {
      css['top'] = anchorPt;
    }

    this.isStuck = false;
    this.$element.removeClass(`is-stuck is-at-${stickTo}`)
                 .addClass(`is-anchored is-at-${topOrBottom}`)
                 .css(css)
                 /**
                  * Fires when the $element has become anchored.
                  * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
                  * @event Sticky#unstuckfrom
                  */
                 .trigger(`sticky.zf.unstuckfrom:${topOrBottom}`);
  }

  /**
   * Sets the $element and $container sizes for plugin.
   * Calls `_setBreakPoints`.
   * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
   * @private
   */
  _setSizes(cb) {
    this.canStick = Foundation.MediaQuery.is(this.options.stickyOn);
    if (!this.canStick) {
      if (cb && typeof cb === 'function') { cb(); }
    }
    var _this = this,
        newElemWidth = this.$container[0].getBoundingClientRect().width,
        comp = window.getComputedStyle(this.$container[0]),
        pdngl = parseInt(comp['padding-left'], 10),
        pdngr = parseInt(comp['padding-right'], 10);

    if (this.$anchor && this.$anchor.length) {
      this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
    } else {
      this._parsePoints();
    }

    this.$element.css({
      'max-width': `${newElemWidth - pdngl - pdngr}px`
    });

    var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
    if (this.$element.css("display") == "none") {
      newContainerHeight = 0;
    }
    this.containerHeight = newContainerHeight;
    this.$container.css({
      height: newContainerHeight
    });
    this.elemHeight = newContainerHeight;

    if (!this.isStuck) {
      if (this.$element.hasClass('is-at-bottom')) {
        var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
        this.$element.css('top', anchorPt);
      }
    }

    this._setBreakPoints(newContainerHeight, function() {
      if (cb && typeof cb === 'function') { cb(); }
    });
  }

  /**
   * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
   * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
   * @param {Function} cb - optional callback function to be called on completion.
   * @private
   */
  _setBreakPoints(elemHeight, cb) {
    if (!this.canStick) {
      if (cb && typeof cb === 'function') { cb(); }
      else { return false; }
    }
    var mTop = emCalc(this.options.marginTop),
        mBtm = emCalc(this.options.marginBottom),
        topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
        bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
        // topPoint = this.$anchor.offset().top || this.points[0],
        // bottomPoint = topPoint + this.anchorHeight || this.points[1],
        winHeight = window.innerHeight;

    if (this.options.stickTo === 'top') {
      topPoint -= mTop;
      bottomPoint -= (elemHeight + mTop);
    } else if (this.options.stickTo === 'bottom') {
      topPoint -= (winHeight - (elemHeight + mBtm));
      bottomPoint -= (winHeight - mBtm);
    } else {
      //this would be the stickTo: both option... tricky
    }

    this.topPoint = topPoint;
    this.bottomPoint = bottomPoint;

    if (cb && typeof cb === 'function') { cb(); }
  }

  /**
   * Destroys the current sticky element.
   * Resets the element to the top position first.
   * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
   * @function
   */
  destroy() {
    this._removeSticky(true);

    this.$element.removeClass(`${this.options.stickyClass} is-anchored is-at-top`)
                 .css({
                   height: '',
                   top: '',
                   bottom: '',
                   'max-width': ''
                 })
                 .off('resizeme.zf.trigger')
                 .off('mutateme.zf.trigger');
    if (this.$anchor && this.$anchor.length) {
      this.$anchor.off('change.zf.sticky');
    }
    $(window).off(this.scrollListener);

    if (this.wasWrapped) {
      this.$element.unwrap();
    } else {
      this.$container.removeClass(this.options.containerClass)
                     .css({
                       height: ''
                     });
    }
    Foundation.unregisterPlugin(this);
  }
}

Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',
  /**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
  stickTo: 'top',
  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
  anchor: '',
  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
  topAnchor: '',
  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
  btmAnchor: '',
  /**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginTop: 1,
  /**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginBottom: 1,
  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
  stickyOn: 'medium',
  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
  stickyClass: 'sticky',
  /**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
  containerClass: 'sticky-container',
  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
  checkEvery: -1
};

/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}

// Window exports
Foundation.plugin(Sticky, 'Sticky');

}(jQuery);

'use strict';

!function($) {

/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.timerAndImageLoader if tabs contain images
 */

class Tabs {
  /**
   * Creates a new instance of tabs.
   * @class
   * @fires Tabs#init
   * @param {jQuery} element - jQuery object to make into tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);

    this._init();
    Foundation.registerPlugin(this, 'Tabs');
    Foundation.Keyboard.register('Tabs', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'previous',
      'ARROW_DOWN': 'next',
      'ARROW_LEFT': 'previous'
      // 'TAB': 'next',
      // 'SHIFT_TAB': 'previous'
    });
  }

  /**
   * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
   * @private
   */
  _init() {
    var _this = this;

    this.$element.attr({'role': 'tablist'});
    this.$tabTitles = this.$element.find(`.${this.options.linkClass}`);
    this.$tabContent = $(`[data-tabs-content="${this.$element[0].id}"]`);

    this.$tabTitles.each(function(){
      var $elem = $(this),
          $link = $elem.find('a'),
          isActive = $elem.hasClass(`${_this.options.linkActiveClass}`),
          hash = $link[0].hash.slice(1),
          linkId = $link[0].id ? $link[0].id : `${hash}-label`,
          $tabContent = $(`#${hash}`);

      $elem.attr({'role': 'presentation'});

      $link.attr({
        'role': 'tab',
        'aria-controls': hash,
        'aria-selected': isActive,
        'id': linkId
      });

      $tabContent.attr({
        'role': 'tabpanel',
        'aria-hidden': !isActive,
        'aria-labelledby': linkId
      });

      if(isActive && _this.options.autoFocus){
        $(window).load(function() {
          $('html, body').animate({ scrollTop: $elem.offset().top }, _this.options.deepLinkSmudgeDelay, () => {
            $link.focus();
          });
        });
      }
    });
    if(this.options.matchHeight) {
      var $images = this.$tabContent.find('img');

      if ($images.length) {
        Foundation.onImagesLoaded($images, this._setHeight.bind(this));
      } else {
        this._setHeight();
      }
    }

     //current context-bound function to open tabs on page load or history popstate
    this._checkDeepLink = () => {
      var anchor = window.location.hash;
      //need a hash and a relevant anchor in this tabset
      if(anchor.length) {
        var $link = this.$element.find('[href$="'+anchor+'"]');
        if ($link.length) {
          this.selectTab($(anchor), true);

          //roll up a little to show the titles
          if (this.options.deepLinkSmudge) {
            var offset = this.$element.offset();
            $('html, body').animate({ scrollTop: offset.top }, this.options.deepLinkSmudgeDelay);
          }

          /**
            * Fires when the zplugin has deeplinked at pageload
            * @event Tabs#deeplink
            */
           this.$element.trigger('deeplink.zf.tabs', [$link, $(anchor)]);
         }
       }
     }

    //use browser to open a tab, if it exists in this tabset
    if (this.options.deepLink) {
      this._checkDeepLink();
    }

    this._events();
  }

  /**
   * Adds event handlers for items within the tabs.
   * @private
   */
  _events() {
    this._addKeyHandler();
    this._addClickHandler();
    this._setHeightMqHandler = null;

    if (this.options.matchHeight) {
      this._setHeightMqHandler = this._setHeight.bind(this);

      $(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
    }

    if(this.options.deepLink) {
      $(window).on('popstate', this._checkDeepLink);
    }
  }

  /**
   * Adds click handlers for items within the tabs.
   * @private
   */
  _addClickHandler() {
    var _this = this;

    this.$element
      .off('click.zf.tabs')
      .on('click.zf.tabs', `.${this.options.linkClass}`, function(e){
        e.preventDefault();
        e.stopPropagation();
        _this._handleTabChange($(this));
      });
  }

  /**
   * Adds keyboard event handlers for items within the tabs.
   * @private
   */
  _addKeyHandler() {
    var _this = this;

    this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function(e){
      if (e.which === 9) return;


      var $element = $(this),
        $elements = $element.parent('ul').children('li'),
        $prevElement,
        $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          if (_this.options.wrapOnKeys) {
            $prevElement = i === 0 ? $elements.last() : $elements.eq(i-1);
            $nextElement = i === $elements.length -1 ? $elements.first() : $elements.eq(i+1);
          } else {
            $prevElement = $elements.eq(Math.max(0, i-1));
            $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
          }
          return;
        }
      });

      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, 'Tabs', {
        open: function() {
          $element.find('[role="tab"]').focus();
          _this._handleTabChange($element);
        },
        previous: function() {
          $prevElement.find('[role="tab"]').focus();
          _this._handleTabChange($prevElement);
        },
        next: function() {
          $nextElement.find('[role="tab"]').focus();
          _this._handleTabChange($nextElement);
        },
        handled: function() {
          e.stopPropagation();
          e.preventDefault();
        }
      });
    });
  }

  /**
   * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
   * @param {jQuery} $target - Tab to open.
   * @param {boolean} historyHandled - browser has already handled a history update
   * @fires Tabs#change
   * @function
   */
  _handleTabChange($target, historyHandled) {

    /**
     * Check for active class on target. Collapse if exists.
     */
    if ($target.hasClass(`${this.options.linkActiveClass}`)) {
        if(this.options.activeCollapse) {
            this._collapseTab($target);

           /**
            * Fires when the zplugin has successfully collapsed tabs.
            * @event Tabs#collapse
            */
            this.$element.trigger('collapse.zf.tabs', [$target]);
        }
        return;
    }

    var $oldTab = this.$element.
          find(`.${this.options.linkClass}.${this.options.linkActiveClass}`),
          $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink[0].hash,
          $targetContent = this.$tabContent.find(hash);

    //close old tab
    this._collapseTab($oldTab);

    //open new tab
    this._openTab($target);

    //either replace or update browser history
    if (this.options.deepLink && !historyHandled) {
      var anchor = $target.find('a').attr('href');

      if (this.options.updateHistory) {
        history.pushState({}, '', anchor);
      } else {
        history.replaceState({}, '', anchor);
      }
    }

    /**
     * Fires when the plugin has successfully changed tabs.
     * @event Tabs#change
     */
    this.$element.trigger('change.zf.tabs', [$target, $targetContent]);

    //fire to children a mutation event
    $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
  }

  /**
   * Opens the tab `$targetContent` defined by `$target`.
   * @param {jQuery} $target - Tab to Open.
   * @function
   */
  _openTab($target) {
      var $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink[0].hash,
          $targetContent = this.$tabContent.find(hash);

      $target.addClass(`${this.options.linkActiveClass}`);

      $tabLink.attr({'aria-selected': 'true'});

      $targetContent
        .addClass(`${this.options.panelActiveClass}`)
        .attr({'aria-hidden': 'false'});
  }

  /**
   * Collapses `$targetContent` defined by `$target`.
   * @param {jQuery} $target - Tab to Open.
   * @function
   */
  _collapseTab($target) {
    var $target_anchor = $target
      .removeClass(`${this.options.linkActiveClass}`)
      .find('[role="tab"]')
      .attr({ 'aria-selected': 'false' });

    $(`#${$target_anchor.attr('aria-controls')}`)
      .removeClass(`${this.options.panelActiveClass}`)
      .attr({ 'aria-hidden': 'true' });
  }

  /**
   * Public method for selecting a content pane to display.
   * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
   * @param {boolean} historyHandled - browser has already handled a history update
   * @function
   */
  selectTab(elem, historyHandled) {
    var idStr;

    if (typeof elem === 'object') {
      idStr = elem[0].id;
    } else {
      idStr = elem;
    }

    if (idStr.indexOf('#') < 0) {
      idStr = `#${idStr}`;
    }

    var $target = this.$tabTitles.find(`[href$="${idStr}"]`).parent(`.${this.options.linkClass}`);

    this._handleTabChange($target, historyHandled);
  };
  /**
   * Sets the height of each panel to the height of the tallest panel.
   * If enabled in options, gets called on media query change.
   * If loading content via external source, can be called directly or with _reflow.
   * If enabled with `data-match-height="true"`, tabs sets to equal height
   * @function
   * @private
   */
  _setHeight() {
    var max = 0,
        _this = this; // Lock down the `this` value for the root tabs object

    this.$tabContent
      .find(`.${this.options.panelClass}`)
      .css('height', '')
      .each(function() {

        var panel = $(this),
            isActive = panel.hasClass(`${_this.options.panelActiveClass}`); // get the options from the parent instead of trying to get them from the child

        if (!isActive) {
          panel.css({'visibility': 'hidden', 'display': 'block'});
        }

        var temp = this.getBoundingClientRect().height;

        if (!isActive) {
          panel.css({
            'visibility': '',
            'display': ''
          });
        }

        max = temp > max ? temp : max;
      })
      .css('height', `${max}px`);
  }

  /**
   * Destroys an instance of an tabs.
   * @fires Tabs#destroyed
   */
  destroy() {
    this.$element
      .find(`.${this.options.linkClass}`)
      .off('.zf.tabs').hide().end()
      .find(`.${this.options.panelClass}`)
      .hide();

    if (this.options.matchHeight) {
      if (this._setHeightMqHandler != null) {
         $(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
      }
    }

    if (this.options.deepLink) {
      $(window).off('popstate', this._checkDeepLink);
    }

    Foundation.unregisterPlugin(this);
  }
}

Tabs.defaults = {
  /**
   * Allows the window to scroll to content of pane specified by hash anchor
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * Adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * Animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * Update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,

  /**
   * Allows the window to scroll to content of active pane on load if set to true.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
  wrapOnKeys: true,

  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
  matchHeight: false,

  /**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
  activeCollapse: false,

  /**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
  linkClass: 'tabs-title',

  /**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  linkActiveClass: 'is-active',

  /**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
  panelClass: 'tabs-panel',

  /**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  panelActiveClass: 'is-active'
};

// Window exports
Foundation.plugin(Tabs, 'Tabs');

}(jQuery);

'use strict';

!function($) {

/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

class Toggler {
  /**
   * Creates a new instance of Toggler.
   * @class
   * @fires Toggler#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Toggler.defaults, element.data(), options);
    this.className = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'Toggler');
  }

  /**
   * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
   * @function
   * @private
   */
  _init() {
    var input;
    // Parse animation classes if they were set
    if (this.options.animate) {
      input = this.options.animate.split(' ');

      this.animationIn = input[0];
      this.animationOut = input[1] || null;
    }
    // Otherwise, parse toggle class
    else {
      input = this.$element.data('toggler');
      // Allow for a . at the beginning of the string
      this.className = input[0] === '.' ? input.slice(1) : input;
    }

    // Add ARIA attributes to triggers
    var id = this.$element[0].id;
    $(`[data-open="${id}"], [data-close="${id}"], [data-toggle="${id}"]`)
      .attr('aria-controls', id);
    // If the target is hidden, add aria-hidden
    this.$element.attr('aria-expanded', this.$element.is(':hidden') ? false : true);
  }

  /**
   * Initializes events for the toggle trigger.
   * @function
   * @private
   */
  _events() {
    this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
  }

  /**
   * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
   * @function
   * @fires Toggler#on
   * @fires Toggler#off
   */
  toggle() {
    this[ this.options.animate ? '_toggleAnimate' : '_toggleClass']();
  }

  _toggleClass() {
    this.$element.toggleClass(this.className);

    var isOn = this.$element.hasClass(this.className);
    if (isOn) {
      /**
       * Fires if the target element has the class after a toggle.
       * @event Toggler#on
       */
      this.$element.trigger('on.zf.toggler');
    }
    else {
      /**
       * Fires if the target element does not have the class after a toggle.
       * @event Toggler#off
       */
      this.$element.trigger('off.zf.toggler');
    }

    this._updateARIA(isOn);
    this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
  }

  _toggleAnimate() {
    var _this = this;

    if (this.$element.is(':hidden')) {
      Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
        _this._updateARIA(true);
        this.trigger('on.zf.toggler');
        this.find('[data-mutate]').trigger('mutateme.zf.trigger');
      });
    }
    else {
      Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
        _this._updateARIA(false);
        this.trigger('off.zf.toggler');
        this.find('[data-mutate]').trigger('mutateme.zf.trigger');
      });
    }
  }

  _updateARIA(isOn) {
    this.$element.attr('aria-expanded', isOn ? true : false);
  }

  /**
   * Destroys the instance of Toggler on the element.
   * @function
   */
  destroy() {
    this.$element.off('.zf.toggler');
    Foundation.unregisterPlugin(this);
  }
}

Toggler.defaults = {
  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};

// Window exports
Foundation.plugin(Toggler, 'Toggler');

}(jQuery);

'use strict';

!function($) {

/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */

class Tooltip {
  /**
   * Creates a new instance of a Tooltip.
   * @class
   * @fires Tooltip#init
   * @param {jQuery} element - jQuery object to attach a tooltip to.
   * @param {Object} options - object to extend the default configuration.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);

    this.isActive = false;
    this.isClick = false;
    this._init();

    Foundation.registerPlugin(this, 'Tooltip');
  }

  /**
   * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
   * @private
   */
  _init() {
    var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');

    this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element);
    this.options.tipText = this.options.tipText || this.$element.attr('title');
    this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);

    if (this.options.allowHtml) {
      this.template.appendTo(document.body)
        .html(this.options.tipText)
        .hide();
    } else {
      this.template.appendTo(document.body)
        .text(this.options.tipText)
        .hide();
    }

    this.$element.attr({
      'title': '',
      'aria-describedby': elemId,
      'data-yeti-box': elemId,
      'data-toggle': elemId,
      'data-resize': elemId
    }).addClass(this.options.triggerClass);

    //helper variables to track movement on collisions
    this.usedPositions = [];
    this.counter = 4;
    this.classChanged = false;

    this._events();
  }

  /**
   * Grabs the current positioning class, if present, and returns the value or an empty string.
   * @private
   */
  _getPositionClass(element) {
    if (!element) { return ''; }
    // var position = element.attr('class').match(/top|left|right/g);
    var position = element[0].className.match(/\b(top|left|right)\b/g);
        position = position ? position[0] : '';
    return position;
  };
  /**
   * builds the tooltip element, adds attributes, and returns the template.
   * @private
   */
  _buildTemplate(id) {
    var templateClasses = (`${this.options.tooltipClass} ${this.options.positionClass} ${this.options.templateClasses}`).trim();
    var $template =  $('<div></div>').addClass(templateClasses).attr({
      'role': 'tooltip',
      'aria-hidden': true,
      'data-is-active': false,
      'data-is-focus': false,
      'id': id
    });
    return $template;
  }

  /**
   * Function that gets called if a collision event is detected.
   * @param {String} position - positioning class to try
   * @private
   */
  _reposition(position) {
    this.usedPositions.push(position ? position : 'bottom');

    //default, try switching to opposite side
    if (!position && (this.usedPositions.indexOf('top') < 0)) {
      this.template.addClass('top');
    } else if (position === 'top' && (this.usedPositions.indexOf('bottom') < 0)) {
      this.template.removeClass(position);
    } else if (position === 'left' && (this.usedPositions.indexOf('right') < 0)) {
      this.template.removeClass(position)
          .addClass('right');
    } else if (position === 'right' && (this.usedPositions.indexOf('left') < 0)) {
      this.template.removeClass(position)
          .addClass('left');
    }

    //if default change didn't work, try bottom or left first
    else if (!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)) {
      this.template.addClass('left');
    } else if (position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)) {
      this.template.removeClass(position)
          .addClass('left');
    } else if (position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)) {
      this.template.removeClass(position);
    } else if (position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)) {
      this.template.removeClass(position);
    }
    //if nothing cleared, set to bottom
    else {
      this.template.removeClass(position);
    }
    this.classChanged = true;
    this.counter--;
  }

  /**
   * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
   * if the tooltip is larger than the screen width, default to full width - any user selected margin
   * @private
   */
  _setPosition() {
    var position = this._getPositionClass(this.template),
        $tipDims = Foundation.Box.GetDimensions(this.template),
        $anchorDims = Foundation.Box.GetDimensions(this.$element),
        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
        param = (direction === 'top') ? 'height' : 'width',
        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset,
        _this = this;

    if (($tipDims.width >= $tipDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))) {
      this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
      // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
        'width': $anchorDims.windowDims.width - (this.options.hOffset * 2),
        'height': 'auto'
      });
      return false;
    }

    this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element,'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));

    while(!Foundation.Box.ImNotTouchingYou(this.template) && this.counter) {
      this._reposition(position);
      this._setPosition();
    }
  }

  /**
   * reveals the tooltip, and fires an event to close any other open tooltips on the page
   * @fires Tooltip#closeme
   * @fires Tooltip#show
   * @function
   */
  show() {
    if (this.options.showOn !== 'all' && !Foundation.MediaQuery.is(this.options.showOn)) {
      // console.error('The screen is too small to display this tooltip');
      return false;
    }

    var _this = this;
    this.template.css('visibility', 'hidden').show();
    this._setPosition();

    /**
     * Fires to close all other open tooltips on the page
     * @event Closeme#tooltip
     */
    this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));


    this.template.attr({
      'data-is-active': true,
      'aria-hidden': false
    });
    _this.isActive = true;
    // console.log(this.template);
    this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function() {
      //maybe do stuff?
    });
    /**
     * Fires when the tooltip is shown
     * @event Tooltip#show
     */
    this.$element.trigger('show.zf.tooltip');
  }

  /**
   * Hides the current tooltip, and resets the positioning class if it was changed due to collision
   * @fires Tooltip#hide
   * @function
   */
  hide() {
    // console.log('hiding', this.$element.data('yeti-box'));
    var _this = this;
    this.template.stop().attr({
      'aria-hidden': true,
      'data-is-active': false
    }).fadeOut(this.options.fadeOutDuration, function() {
      _this.isActive = false;
      _this.isClick = false;
      if (_this.classChanged) {
        _this.template
             .removeClass(_this._getPositionClass(_this.template))
             .addClass(_this.options.positionClass);

       _this.usedPositions = [];
       _this.counter = 4;
       _this.classChanged = false;
      }
    });
    /**
     * fires when the tooltip is hidden
     * @event Tooltip#hide
     */
    this.$element.trigger('hide.zf.tooltip');
  }

  /**
   * adds event listeners for the tooltip and its anchor
   * TODO combine some of the listeners like focus and mouseenter, etc.
   * @private
   */
  _events() {
    var _this = this;
    var $template = this.template;
    var isFocus = false;

    if (!this.options.disableHover) {

      this.$element
      .on('mouseenter.zf.tooltip', function(e) {
        if (!_this.isActive) {
          _this.timeout = setTimeout(function() {
            _this.show();
          }, _this.options.hoverDelay);
        }
      })
      .on('mouseleave.zf.tooltip', function(e) {
        clearTimeout(_this.timeout);
        if (!isFocus || (_this.isClick && !_this.options.clickOpen)) {
          _this.hide();
        }
      });
    }

    if (this.options.clickOpen) {
      this.$element.on('mousedown.zf.tooltip', function(e) {
        e.stopImmediatePropagation();
        if (_this.isClick) {
          //_this.hide();
          // _this.isClick = false;
        } else {
          _this.isClick = true;
          if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
            _this.show();
          }
        }
      });
    } else {
      this.$element.on('mousedown.zf.tooltip', function(e) {
        e.stopImmediatePropagation();
        _this.isClick = true;
      });
    }

    if (!this.options.disableForTouch) {
      this.$element
      .on('tap.zf.tooltip touchend.zf.tooltip', function(e) {
        _this.isActive ? _this.hide() : _this.show();
      });
    }

    this.$element.on({
      // 'toggle.zf.trigger': this.toggle.bind(this),
      // 'close.zf.trigger': this.hide.bind(this)
      'close.zf.trigger': this.hide.bind(this)
    });

    this.$element
      .on('focus.zf.tooltip', function(e) {
        isFocus = true;
        if (_this.isClick) {
          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
          // a real focus, otherwise on hover and come back we get bad behavior
          if(!_this.options.clickOpen) { isFocus = false; }
          return false;
        } else {
          _this.show();
        }
      })

      .on('focusout.zf.tooltip', function(e) {
        isFocus = false;
        _this.isClick = false;
        _this.hide();
      })

      .on('resizeme.zf.trigger', function() {
        if (_this.isActive) {
          _this._setPosition();
        }
      });
  }

  /**
   * adds a toggle method, in addition to the static show() & hide() functions
   * @function
   */
  toggle() {
    if (this.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Destroys an instance of tooltip, removes template element from the view.
   * @function
   */
  destroy() {
    this.$element.attr('title', this.template.text())
                 .off('.zf.trigger .zf.tooltip')
                 .removeClass('has-tip top right left')
                 .removeAttr('aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');

    this.template.remove();

    Foundation.unregisterPlugin(this);
  }
}

Tooltip.defaults = {
  disableForTouch: false,
  /**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
  hoverDelay: 200,
  /**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeInDuration: 150,
  /**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeOutDuration: 150,
  /**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,
  /**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
  templateClasses: '',
  /**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
  tooltipClass: 'tooltip',
  /**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
  triggerClass: 'has-tip',
  /**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
  showOn: 'small',
  /**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
  template: '',
  /**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
  tipText: '',
  touchCloseText: 'Tap to close.',
  /**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
  clickOpen: true,
  /**
   * Additional positioning classes, set by the JS
   * @option
   * @type {string}
   * @default ''
   */
  positionClass: '',
  /**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 10
   */
  vOffset: 10,
  /**
   * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
   * @option
   * @type {number}
   * @default 12
   */
  hOffset: 12,
    /**
   * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
   * allowing HTML may open yourself up to XSS attacks.
   * @option
   * @type {boolean}
   * @default false
   */
  allowHtml: false
};

/**
 * TODO utilize resize event trigger
 */

// Window exports
Foundation.plugin(Tooltip, 'Tooltip');

}(jQuery);

'use strict';

!function($) {

Foundation.Box = {
  ImNotTouchingYou: ImNotTouchingYou,
  GetDimensions: GetDimensions,
  GetOffsets: GetOffsets
}

/**
 * Compares the dimensions of an element to a container and determines collision events with container.
 * @function
 * @param {jQuery} element - jQuery object to test for collisions.
 * @param {jQuery} parent - jQuery object to use as bounding container.
 * @param {Boolean} lrOnly - set to true to check left and right values only.
 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
 * @default if no parent object passed, detects collisions with `window`.
 * @returns {Boolean} - true if collision free, false if a collision in any direction.
 */
function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
  var eleDims = GetDimensions(element),
      top, bottom, left, right;

  if (parent) {
    var parDims = GetDimensions(parent);

    bottom = (eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top);
    top    = (eleDims.offset.top >= parDims.offset.top);
    left   = (eleDims.offset.left >= parDims.offset.left);
    right  = (eleDims.offset.left + eleDims.width <= parDims.width + parDims.offset.left);
  }
  else {
    bottom = (eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top);
    top    = (eleDims.offset.top >= eleDims.windowDims.offset.top);
    left   = (eleDims.offset.left >= eleDims.windowDims.offset.left);
    right  = (eleDims.offset.left + eleDims.width <= eleDims.windowDims.width);
  }

  var allDirs = [bottom, top, left, right];

  if (lrOnly) {
    return left === right === true;
  }

  if (tbOnly) {
    return top === bottom === true;
  }

  return allDirs.indexOf(false) === -1;
};

/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */
function GetDimensions(elem, test){
  elem = elem.length ? elem[0] : elem;

  if (elem === window || elem === document) {
    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
  }

  var rect = elem.getBoundingClientRect(),
      parRect = elem.parentNode.getBoundingClientRect(),
      winRect = document.body.getBoundingClientRect(),
      winY = window.pageYOffset,
      winX = window.pageXOffset;

  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + winY,
      left: rect.left + winX
    },
    parentDims: {
      width: parRect.width,
      height: parRect.height,
      offset: {
        top: parRect.top + winY,
        left: parRect.left + winX
      }
    },
    windowDims: {
      width: winRect.width,
      height: winRect.height,
      offset: {
        top: winY,
        left: winX
      }
    }
  }
}

/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */
function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
  var $eleDims = GetDimensions(element),
      $anchorDims = anchor ? GetDimensions(anchor) : null;

  switch (position) {
    case 'top':
      return {
        left: (Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left),
        top: $anchorDims.offset.top - ($eleDims.height + vOffset)
      }
      break;
    case 'left':
      return {
        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
        top: $anchorDims.offset.top
      }
      break;
    case 'right':
      return {
        left: $anchorDims.offset.left + $anchorDims.width + hOffset,
        top: $anchorDims.offset.top
      }
      break;
    case 'center top':
      return {
        left: ($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2),
        top: $anchorDims.offset.top - ($eleDims.height + vOffset)
      }
      break;
    case 'center bottom':
      return {
        left: isOverflow ? hOffset : (($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2)),
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      }
      break;
    case 'center left':
      return {
        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
        top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
      }
      break;
    case 'center right':
      return {
        left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
        top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
      }
      break;
    case 'center':
      return {
        left: ($eleDims.windowDims.offset.left + ($eleDims.windowDims.width / 2)) - ($eleDims.width / 2),
        top: ($eleDims.windowDims.offset.top + ($eleDims.windowDims.height / 2)) - ($eleDims.height / 2)
      }
      break;
    case 'reveal':
      return {
        left: ($eleDims.windowDims.width - $eleDims.width) / 2,
        top: $eleDims.windowDims.offset.top + vOffset
      }
    case 'reveal full':
      return {
        left: $eleDims.windowDims.offset.left,
        top: $eleDims.windowDims.offset.top
      }
      break;
    case 'left bottom':
      return {
        left: $anchorDims.offset.left,
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      };
      break;
    case 'right bottom':
      return {
        left: $anchorDims.offset.left + $anchorDims.width + hOffset - $eleDims.width,
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      };
      break;
    default:
      return {
        left: (Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left + hOffset),
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      }
  }
}

}(jQuery);

/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/

'use strict';

!function($) {

const keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
}

var commands = {}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();

    // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
    key = key.replace(/\W+/, '');

    if (event.shiftKey) key = `SHIFT_${key}`;
    if (event.ctrlKey) key = `CTRL_${key}`;
    if (event.altKey) key = `ALT_${key}`;

    // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
    key = key.replace(/_$/, '');

    return key;
  },

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey(event, component, functions) {
    var commandList = commands[component],
      keyCode = this.parseKey(event),
      cmds,
      command,
      fn;

    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') { // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
    } else { // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);

        else cmds = $.extend({}, commandList.rtl, commandList.ltr);
    }
    command = cmds[keyCode];

    fn = functions[command];
    if (fn && typeof fn === 'function') { // execute function  if exists
      var returnValue = fn.apply();
      if (functions.handled || typeof functions.handled === 'function') { // execute function when event was handled
          functions.handled(returnValue);
      }
    } else {
      if (functions.unhandled || typeof functions.unhandled === 'function') { // execute function when event was not handled
          functions.unhandled();
      }
    }
  },

  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
  findFocusable($element) {
    if(!$element) {return false; }
    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
      if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) { return false; } //only have visible elements and those that have a tabindex greater or equal 0
      return true;
    });
  },

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */

  register(componentName, cmds) {
    commands[componentName] = cmds;
  },  

  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus($element) {
    var $focusable = Foundation.Keyboard.findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);

    $element.on('keydown.zf.trapfocus', function(event) {
      if (event.target === $lastFocusable[0] && Foundation.Keyboard.parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      }
      else if (event.target === $firstFocusable[0] && Foundation.Keyboard.parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },
  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus($element) {
    $element.off('keydown.zf.trapfocus');
  }
}

/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function getKeyCodes(kcs) {
  var k = {};
  for (var kc in kcs) k[kcs[kc]] = kcs[kc];
  return k;
}

Foundation.Keyboard = Keyboard;

}(jQuery);

'use strict';

!function($) {

// Default set of media queries
const defaultQueries = {
  'default' : 'only screen',
  landscape : 'only screen and (orientation: landscape)',
  portrait : 'only screen and (orientation: portrait)',
  retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
    'only screen and (min--moz-device-pixel-ratio: 2),' +
    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
    'only screen and (min-device-pixel-ratio: 2),' +
    'only screen and (min-resolution: 192dpi),' +
    'only screen and (min-resolution: 2dppx)'
};

var MediaQuery = {
  queries: [],

  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init() {
    var self = this;
    var extractedStyles = $('.foundation-mq').css('font-family');
    var namedQueries;

    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      if(namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: `only screen and (min-width: ${namedQueries[key]})`
        });
      }
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
  is(size) {
    size = size.trim().split(' ');
    if(size.length > 1 && size[1] === 'only') {
      if(size[0] === this._getCurrentSize()) return true;
    } else {
      return this.atLeast(size[0]);
    }
    return false;
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get(size) {
    for (var i in this.queries) {
      if(this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }

    return null;
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize() {
    var matched;

    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (typeof matched === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher() {
    $(window).on('resize.zf.mediaquery', () => {
      var newSize = this._getCurrentSize(), currentSize = this.current;

      if (newSize !== currentSize) {
        // Change the current media query
        this.current = newSize;

        // Broadcast the media query change on the window
        $(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
};

Foundation.MediaQuery = MediaQuery;

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
window.matchMedia || (window.matchMedia = function() {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = (window.styleMedia || window.media);

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style   = document.createElement('style'),
    script      = document.getElementsByTagName('script')[0],
    info        = null;

    style.type  = 'text/css';
    style.id    = 'matchmediajs-test';

    script && script.parentNode && script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium(media) {
        var text = `@media ${media}{ #matchmediajs-test { width: 1px; } }`;

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    }
  }

  return function(media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  }
}());

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function(ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});

  return styleObject;
}

Foundation.MediaQuery = MediaQuery;

}(jQuery);

'use strict';

!function($) {

/**
 * Motion module.
 * @module foundation.motion
 */

const initClasses   = ['mui-enter', 'mui-leave'];
const activeClasses = ['mui-enter-active', 'mui-leave-active'];

const Motion = {
  animateIn: function(element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function(element, animation, cb) {
    animate(false, element, animation, cb);
  }
}

function Move(duration, elem, fn){
  var anim, prog, start = null;
  // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts){
    if(!start) start = ts;
    // console.log(start, ts);
    prog = ts - start;
    fn.apply(elem);

    if(prog < duration){ anim = window.requestAnimationFrame(move, elem); }
    else{
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }
  anim = window.requestAnimationFrame(move);
}

/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */
function animate(isIn, element, animation, cb) {
  element = $(element).eq(0);

  if (!element.length) return;

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();

  element
    .addClass(animation)
    .css('transition', 'none');

  requestAnimationFrame(() => {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(() => {
    element[0].offsetWidth;
    element
      .css('transition', '')
      .addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one(Foundation.transitionend(element), finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(`${initClass} ${activeClass} ${animation}`);
  }
}

Foundation.Move = Move;
Foundation.Motion = Motion;

}(jQuery);

'use strict';

!function($) {

const Nest = {
  Feather(menu, type = 'zf') {
    menu.attr('role', 'menubar');

    var items = menu.find('li').attr({'role': 'menuitem'}),
        subMenuClass = `is-${type}-submenu`,
        subItemClass = `${subMenuClass}-item`,
        hasSubClass = `is-${type}-submenu-parent`;

    items.each(function() {
      var $item = $(this),
          $sub = $item.children('ul');

      if ($sub.length) {
        $item
          .addClass(hasSubClass)
          .attr({
            'aria-haspopup': true,
            'aria-label': $item.children('a:first').text()
          });
          // Note:  Drilldowns behave differently in how they hide, and so need
          // additional attributes.  We should look if this possibly over-generalized
          // utility (Nest) is appropriate when we rework menus in 6.4
          if(type === 'drilldown') {
            $item.attr({'aria-expanded': false});
          }

        $sub
          .addClass(`submenu ${subMenuClass}`)
          .attr({
            'data-submenu': '',
            'role': 'menu'
          });
        if(type === 'drilldown') {
          $sub.attr({'aria-hidden': true});
        }
      }

      if ($item.parent('[data-submenu]').length) {
        $item.addClass(`is-submenu-item ${subItemClass}`);
      }
    });

    return;
  },

  Burn(menu, type) {
    var //items = menu.find('li'),
        subMenuClass = `is-${type}-submenu`,
        subItemClass = `${subMenuClass}-item`,
        hasSubClass = `is-${type}-submenu-parent`;

    menu
      .find('>li, .menu, .menu > li')
      .removeClass(`${subMenuClass} ${subItemClass} ${hasSubClass} is-submenu-item submenu is-active`)
      .removeAttr('data-submenu').css('display', '');

    // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
    //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
    //           .removeAttr('data-submenu'));
    // items.each(function(){
    //   var $item = $(this),
    //       $sub = $item.children('ul');
    //   if($item.parent('[data-submenu]').length){
    //     $item.removeClass('is-submenu-item ' + subItemClass);
    //   }
    //   if($sub.length){
    //     $item.removeClass('has-submenu');
    //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
    //   }
    // });
  }
}

Foundation.Nest = Nest;

}(jQuery);

'use strict';

!function($) {

function Timer(elem, options, cb) {
  var _this = this,
      duration = options.duration,//options is an object for easily adding features later.
      nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start,
      timer;

  this.isPaused = false;

  this.restart = function() {
    remain = -1;
    clearTimeout(timer);
    this.start();
  }

  this.start = function() {
    this.isPaused = false;
    // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function(){
      if(options.infinite){
        _this.restart();//rerun the timer.
      }
      if (cb && typeof cb === 'function') { cb(); }
    }, remain);
    elem.trigger(`timerstart.zf.${nameSpace}`);
  }

  this.pause = function() {
    this.isPaused = true;
    //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger(`timerpaused.zf.${nameSpace}`);
  }
}

/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function onImagesLoaded(images, callback){
  var self = this,
      unloaded = images.length;

  if (unloaded === 0) {
    callback();
  }

  images.each(function() {
    // Check if image is loaded
    if (this.complete || (this.readyState === 4) || (this.readyState === 'complete')) {
      singleImageLoaded();
    }
    // Force load the image
    else {
      // fix for IE. See https://css-tricks.com/snippets/jquery/fixing-load-in-ie-for-cached-images/
      var src = $(this).attr('src');
      $(this).attr('src', src + (src.indexOf('?') >= 0 ? '&' : '?') + (new Date().getTime()));
      $(this).one('load', function() {
        singleImageLoaded();
      });
    }
  });

  function singleImageLoaded() {
    unloaded--;
    if (unloaded === 0) {
      callback();
    }
  }
}

Foundation.Timer = Timer;
Foundation.onImagesLoaded = onImagesLoaded;

}(jQuery);

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
(function($) {

  $.spotSwipe = {
    version: '1.0.0',
    enabled: 'ontouchstart' in document.documentElement,
    preventDefault: false,
    moveThreshold: 75,
    timeThreshold: 200
  };

  var   startPosX,
        startPosY,
        startTime,
        elapsedTime,
        isMoving = false;

  function onTouchEnd() {
    //  alert(this);
    this.removeEventListener('touchmove', onTouchMove);
    this.removeEventListener('touchend', onTouchEnd);
    isMoving = false;
  }

  function onTouchMove(e) {
    if ($.spotSwipe.preventDefault) { e.preventDefault(); }
    if(isMoving) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      var dx = startPosX - x;
      var dy = startPosY - y;
      var dir;
      elapsedTime = new Date().getTime() - startTime;
      if(Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
        dir = dx > 0 ? 'left' : 'right';
      }
      // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
      //   dir = dy > 0 ? 'down' : 'up';
      // }
      if(dir) {
        e.preventDefault();
        onTouchEnd.call(this);
        $(this).trigger('swipe', dir).trigger(`swipe${dir}`);
      }
    }
  }

  function onTouchStart(e) {
    if (e.touches.length == 1) {
      startPosX = e.touches[0].pageX;
      startPosY = e.touches[0].pageY;
      isMoving = true;
      startTime = new Date().getTime();
      this.addEventListener('touchmove', onTouchMove, false);
      this.addEventListener('touchend', onTouchEnd, false);
    }
  }

  function init() {
    this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
  }

  function teardown() {
    this.removeEventListener('touchstart', onTouchStart);
  }

  $.event.special.swipe = { setup: init };

  $.each(['left', 'up', 'down', 'right'], function () {
    $.event.special[`swipe${this}`] = { setup: function(){
      $(this).on('swipe', $.noop);
    } };
  });
})(jQuery);
/****************************************************
 * Method for adding psuedo drag events to elements *
 ***************************************************/
!function($){
  $.fn.addTouch = function(){
    this.each(function(i,el){
      $(el).bind('touchstart touchmove touchend touchcancel',function(){
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function(event){
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup'
          },
          type = eventTypes[event.type],
          simulatedEvent
        ;

      if('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
      }
      first.target.dispatchEvent(simulatedEvent);
    };
  };
}(jQuery);


//**********************************
//**From the jQuery Mobile Library**
//**need to recreate functionality**
//**and try to improve if possible**
//**********************************

/* Removing the jQuery function ****
************************************

(function( $, window, undefined ) {

	var $document = $( document ),
		// supportTouch = $.mobile.support.touch,
		touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";

	// setup new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"swipe swipeleft swiperight" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	function triggerCustomEvent( obj, eventType, event, bubble ) {
		var originalType = event.type;
		event.type = eventType;
		if ( bubble ) {
			$.event.trigger( event, undefined, obj );
		} else {
			$.event.dispatch.call( obj, event );
		}
		event.type = originalType;
	}

	// also handles taphold

	// Also handles swipeleft, swiperight
	$.event.special.swipe = {

		// More than this horizontal displacement, and we will suppress scrolling.
		scrollSupressionThreshold: 30,

		// More time than this, and it isn't a swipe.
		durationThreshold: 1000,

		// Swipe horizontal displacement must be more than this.
		horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		// Swipe vertical displacement must be less than this.
		verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		getLocation: function ( event ) {
			var winPageX = window.pageXOffset,
				winPageY = window.pageYOffset,
				x = event.clientX,
				y = event.clientY;

			if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
				event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

				// iOS4 clientX/clientY have the value that should have been
				// in pageX/pageY. While pageX/page/ have the value 0
				x = x - winPageX;
				y = y - winPageY;
			} else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

				// Some Android browsers have totally bogus values for clientX/Y
				// when scrolling/zooming a page. Detectable since clientX/clientY
				// should never be smaller than pageX/pageY minus page scroll
				x = event.pageX - winPageX;
				y = event.pageY - winPageY;
			}

			return {
				x: x,
				y: y
			};
		},

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ]
					};
		},

		handleSwipe: function( start, stop, thisObject, origTarget ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
				var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

				triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
				triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
				return true;
			}
			return false;

		},

		// This serves as a flag to ensure that at most one swipe event event is
		// in work at any given time
		eventInProgress: false,

		setup: function() {
			var events,
				thisObject = this,
				$this = $( thisObject ),
				context = {};

			// Retrieve the events data for this element and add the swipe context
			events = $.data( this, "mobile-events" );
			if ( !events ) {
				events = { length: 0 };
				$.data( this, "mobile-events", events );
			}
			events.length++;
			events.swipe = context;

			context.start = function( event ) {

				// Bail if we're already working on a swipe event
				if ( $.event.special.swipe.eventInProgress ) {
					return;
				}
				$.event.special.swipe.eventInProgress = true;

				var stop,
					start = $.event.special.swipe.start( event ),
					origTarget = event.target,
					emitted = false;

				context.move = function( event ) {
					if ( !start || event.isDefaultPrevented() ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );
					if ( !emitted ) {
						emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
						if ( emitted ) {

							// Reset the context to make way for the next swipe event
							$.event.special.swipe.eventInProgress = false;
						}
					}
					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				};

				context.stop = function() {
						emitted = true;

						// Reset the context to make way for the next swipe event
						$.event.special.swipe.eventInProgress = false;
						$document.off( touchMoveEvent, context.move );
						context.move = null;
				};

				$document.on( touchMoveEvent, context.move )
					.one( touchStopEvent, context.stop );
			};
			$this.on( touchStartEvent, context.start );
		},

		teardown: function() {
			var events, context;

			events = $.data( this, "mobile-events" );
			if ( events ) {
				context = events.swipe;
				delete events.swipe;
				events.length--;
				if ( events.length === 0 ) {
					$.removeData( this, "mobile-events" );
				}
			}

			if ( context ) {
				if ( context.start ) {
					$( this ).off( touchStartEvent, context.start );
				}
				if ( context.move ) {
					$document.off( touchMoveEvent, context.move );
				}
				if ( context.stop ) {
					$document.off( touchStopEvent, context.stop );
				}
			}
		}
	};
	$.each({
		swipeleft: "swipe.left",
		swiperight: "swipe.right"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			},
			teardown: function() {
				$( this ).unbind( sourceEvent );
			}
		};
	});
})( jQuery, this );
*/

'use strict';

!function($) {

const MutationObserver = (function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i=0; i < prefixes.length; i++) {
    if (`${prefixes[i]}MutationObserver` in window) {
      return window[`${prefixes[i]}MutationObserver`];
    }
  }
  return false;
}());

const triggers = (el, type) => {
  el.data(type).split(' ').forEach(id => {
    $(`#${id}`)[ type === 'close' ? 'trigger' : 'triggerHandler'](`${type}.zf.trigger`, [el]);
  });
};
// Elements with [data-open] will reveal a plugin that supports it when clicked.
$(document).on('click.zf.trigger', '[data-open]', function() {
  triggers($(this), 'open');
});

// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
$(document).on('click.zf.trigger', '[data-close]', function() {
  let id = $(this).data('close');
  if (id) {
    triggers($(this), 'close');
  }
  else {
    $(this).trigger('close.zf.trigger');
  }
});

// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
$(document).on('click.zf.trigger', '[data-toggle]', function() {
  let id = $(this).data('toggle');
  if (id) {
    triggers($(this), 'toggle');
  } else {
    $(this).trigger('toggle.zf.trigger');
  }
});

// Elements with [data-closable] will respond to close.zf.trigger events.
$(document).on('close.zf.trigger', '[data-closable]', function(e){
  e.stopPropagation();
  let animation = $(this).data('closable');

  if(animation !== ''){
    Foundation.Motion.animateOut($(this), animation, function() {
      $(this).trigger('closed.zf');
    });
  }else{
    $(this).fadeOut().trigger('closed.zf');
  }
});

$(document).on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', function() {
  let id = $(this).data('toggle-focus');
  $(`#${id}`).triggerHandler('toggle.zf.trigger', [$(this)]);
});

/**
* Fires once after all other scripts have loaded
* @function
* @private
*/
$(window).on('load', () => {
  checkListeners();
});

function checkListeners() {
  eventsListener();
  resizeListener();
  scrollListener();
  closemeListener();
}

//******** only fires this function once on load, if there's something to watch ********
function closemeListener(pluginName) {
  var yetiBoxes = $('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if(pluginName){
    if(typeof pluginName === 'string'){
      plugNames.push(pluginName);
    }else if(typeof pluginName === 'object' && typeof pluginName[0] === 'string'){
      plugNames.concat(pluginName);
    }else{
      console.error('Plugin names must be strings');
    }
  }
  if(yetiBoxes.length){
    let listeners = plugNames.map((name) => {
      return `closeme.zf.${name}`;
    }).join(' ');

    $(window).off(listeners).on(listeners, function(e, pluginId){
      let plugin = e.namespace.split('.')[0];
      let plugins = $(`[data-${plugin}]`).not(`[data-yeti-box="${pluginId}"]`);

      plugins.each(function(){
        let _this = $(this);

        _this.triggerHandler('close.zf.trigger', [_this]);
      });
    });
  }
}

function resizeListener(debounce){
  let timer,
      $nodes = $('[data-resize]');
  if($nodes.length){
    $(window).off('resize.zf.trigger')
    .on('resize.zf.trigger', function(e) {
      if (timer) { clearTimeout(timer); }

      timer = setTimeout(function(){

        if(!MutationObserver){//fallback for IE 9
          $nodes.each(function(){
            $(this).triggerHandler('resizeme.zf.trigger');
          });
        }
        //trigger all listening elements and signal a resize event
        $nodes.attr('data-events', "resize");
      }, debounce || 10);//default time to emit resize event
    });
  }
}

function scrollListener(debounce){
  let timer,
      $nodes = $('[data-scroll]');
  if($nodes.length){
    $(window).off('scroll.zf.trigger')
    .on('scroll.zf.trigger', function(e){
      if(timer){ clearTimeout(timer); }

      timer = setTimeout(function(){

        if(!MutationObserver){//fallback for IE 9
          $nodes.each(function(){
            $(this).triggerHandler('scrollme.zf.trigger');
          });
        }
        //trigger all listening elements and signal a scroll event
        $nodes.attr('data-events', "scroll");
      }, debounce || 10);//default time to emit scroll event
    });
  }
}

function eventsListener() {
  if(!MutationObserver){ return false; }
  let nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

  //element callback
  var listeningElementsMutation = function (mutationRecordsList) {
      var $target = $(mutationRecordsList[0].target);

	  //trigger the event handler for the element depending on type
      switch (mutationRecordsList[0].type) {

        case "attributes":
          if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
		  	$target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
		  }
		  if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
		  	$target.triggerHandler('resizeme.zf.trigger', [$target]);
		   }
		  if (mutationRecordsList[0].attributeName === "style") {
			  $target.closest("[data-mutate]").attr("data-events","mutate");
			  $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
		  }
		  break;

        case "childList":
		  $target.closest("[data-mutate]").attr("data-events","mutate");
		  $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          break;

        default:
          return false;
        //nothing
      }
    };

    if (nodes.length) {
      //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
      for (var i = 0; i <= nodes.length - 1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe(nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
      }
    }
  }

// ------------------------------------

// [PH]
// Foundation.CheckWatchers = checkWatchers;
Foundation.IHearYou = checkListeners;
// Foundation.ISeeYou = scrollListener;
// Foundation.IFeelYou = closemeListener;

}(jQuery);

'use strict';

!function($) {

/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.timerAndImageLoader
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */

class ResponsiveAccordionTabs {
  /**
   * Creates a new instance of a responsive accordion tabs.
   * @class
   * @fires ResponsiveAccordionTabs#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, this.$element.data(), options);
    this.rules = this.$element.data('responsive-accordion-tabs');
    this.currentMq = null;
    this.currentPlugin = null;
    if (!this.$element.attr('id')) {
      this.$element.attr('id',Foundation.GetYoDigits(6, 'responsiveaccordiontabs'));
    };

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'ResponsiveAccordionTabs');
  }

  /**
   * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
   * @function
   * @private
   */
  _init() {
    // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
    if (typeof this.rules === 'string') {
      let rulesTree = {};

      // Parse rules from "classes" pulled from data attribute
      let rules = this.rules.split(' ');

      // Iterate through every rule found
      for (let i = 0; i < rules.length; i++) {
        let rule = rules[i].split('-');
        let ruleSize = rule.length > 1 ? rule[0] : 'small';
        let rulePlugin = rule.length > 1 ? rule[1] : rule[0];

        if (MenuPlugins[rulePlugin] !== null) {
          rulesTree[ruleSize] = MenuPlugins[rulePlugin];
        }
      }

      this.rules = rulesTree;
    }

    this._getAllOptions();

    if (!$.isEmptyObject(this.rules)) {
      this._checkMediaQueries();
    }
  }

  _getAllOptions() {
    //get all defaults and options
    var _this = this;
    _this.allOptions = {};
    for (var key in MenuPlugins) {
      if (MenuPlugins.hasOwnProperty(key)) {
        var obj = MenuPlugins[key];
        try {
          var dummyPlugin = $('<ul></ul>');
          var tmpPlugin = new obj.plugin(dummyPlugin,_this.options);
          for (var keyKey in tmpPlugin.options) {
            if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
              var objObj = tmpPlugin.options[keyKey];
              _this.allOptions[keyKey] = objObj;
            }
          }
          tmpPlugin.destroy();
        }
        catch(e) {
        }
      }
    }
  }

  /**
   * Initializes events for the Menu.
   * @function
   * @private
   */
  _events() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', function() {
      _this._checkMediaQueries();
    });
  }

  /**
   * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
   * @function
   * @private
   */
  _checkMediaQueries() {
    var matchedMq, _this = this;
    // Iterate through each rule and find the last matching rule
    $.each(this.rules, function(key) {
      if (Foundation.MediaQuery.atLeast(key)) {
        matchedMq = key;
      }
    });

    // No match? No dice
    if (!matchedMq) return;

    // Plugin already initialized? We good
    if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

    // Remove existing plugin-specific CSS classes
    $.each(MenuPlugins, function(key, value) {
      _this.$element.removeClass(value.cssClass);
    });

    // Add the CSS class for the new plugin
    this.$element.addClass(this.rules[matchedMq].cssClass);

    // Create an instance of the new plugin
    if (this.currentPlugin) {
      //don't know why but on nested elements data zfPlugin get's lost
      if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin',this.storezfData);
      this.currentPlugin.destroy();
    }
    this._handleMarkup(this.rules[matchedMq].cssClass);
    this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    this.storezfData = this.currentPlugin.$element.data('zfPlugin');

  }

  _handleMarkup(toSet){
    var _this = this, fromString = 'accordion';
    var $panels = $('[data-tabs-content='+this.$element.attr('id')+']');
    if ($panels.length) fromString = 'tabs';
    if (fromString === toSet) {
      return;
    };

    var tabsTitle = _this.allOptions.linkClass?_this.allOptions.linkClass:'tabs-title';
    var tabsPanel = _this.allOptions.panelClass?_this.allOptions.panelClass:'tabs-panel';

    this.$element.removeAttr('role');
    var $liHeads = this.$element.children('.'+tabsTitle+',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
    var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

    if (fromString === 'tabs') {
      $panels = $panels.children('.'+tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
      $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
    }else{
      $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
    };

    $panels.css({display:'',visibility:''});
    $liHeads.css({display:'',visibility:''});
    if (toSet === 'accordion') {
      $panels.each(function(key,value){
        $(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content','').removeClass('is-active').css({height:''});
        $('[data-tabs-content='+_this.$element.attr('id')+']').after('<div id="tabs-placeholder-'+_this.$element.attr('id')+'"></div>').remove();
        $liHeads.addClass('accordion-item').attr('data-accordion-item','');
        $liHeadsA.addClass('accordion-title');
      });
    }else if (toSet === 'tabs'){
      var $tabsContent = $('[data-tabs-content='+_this.$element.attr('id')+']');
      var $placeholder = $('#tabs-placeholder-'+_this.$element.attr('id'));
      if ($placeholder.length) {
        $tabsContent = $('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content',_this.$element.attr('id'));
        $placeholder.remove();
      }else{
        $tabsContent = $('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content',_this.$element.attr('id'));
      };
      $panels.each(function(key,value){
        var tempValue = $(value).appendTo($tabsContent).addClass(tabsPanel);
        var hash = $liHeadsA.get(key).hash.slice(1);
        var id = $(value).attr('id') || Foundation.GetYoDigits(6, 'accordion');
        if (hash !== id) {
          if (hash !== '') {
            $(value).attr('id',hash);
          }else{
            hash = id;
            $(value).attr('id',hash);
            $($liHeadsA.get(key)).attr('href',$($liHeadsA.get(key)).attr('href').replace('#','')+'#'+hash);
          };
        };
        var isActive = $($liHeads.get(key)).hasClass('is-active');
        if (isActive) {
          tempValue.addClass('is-active');
        };
      });
      $liHeads.addClass(tabsTitle);
    };
  }

  /**
   * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
   * @function
   */
  destroy() {
    if (this.currentPlugin) this.currentPlugin.destroy();
    $(window).off('.zf.ResponsiveAccordionTabs');
    Foundation.unregisterPlugin(this);
  }
}

ResponsiveAccordionTabs.defaults = {};

// The plugin matches the plugin classes with these plugin instances.
var MenuPlugins = {
  tabs: {
    cssClass: 'tabs',
    plugin: Foundation._plugins.tabs || null
  },
  accordion: {
    cssClass: 'accordion',
    plugin: Foundation._plugins.accordion || null
  }
};

// Window exports
Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

}(jQuery);

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


(function(){
    'use strict';


    $(document).foundation();
})


$('button').click(function(){
    console.log('safd');
}); 


