module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/utils/string"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e,r){"use strict";function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=r(10).htmlEscape;t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a `string` in the first argument, got `"+typeof t+"`");if("object"!=typeof e)throw new TypeError("Expected an `object` or `Array` in the second argument, got `"+typeof e+"`");var r=/{{(\d+|[a-z$_][a-z\d$_]*?(?:\.[a-z\d$_]*?)*?)}}/gi;r.test(t)&&(t=t.replace(r,(function(t,r){for(var o,i=e,c=n(r.split("."));!(o=c()).done;){var s=o.value;i=i?i[s]:""}return a(String(i))})));return t.replace(/{(\d+|[a-z$_][a-z\d$_]*?(?:\.[a-z\d$_]*?)*?)}/gi,(function(t,r){for(var o,a=e,i=n(r.split("."));!(o=i()).done;){var c=o.value;a=a?a[c]:""}return String(a)}))}},function(t,e,r){"use strict";e.htmlEscape=function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},e.htmlUnescape=function(t){return t.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&#0?39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},e.htmlEscapeTag=function(t){for(var r=t[0],n=0;n<(arguments.length<=1?0:arguments.length-1);n++)r=r+e.htmlEscape(String(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]))+t[n+1];return r},e.htmlUnescapeTag=function(t){for(var r=t[0],n=0;n<(arguments.length<=1?0:arguments.length-1);n++)r=r+e.htmlUnescape(String(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]))+t[n+1];return r}},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(4),i=r(5),c=r.n(i),s=r(2),l=r.n(s),u=r(6),f=r.n(u),p=r(7),d=r.n(p);function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=r(8),y=r.n(g),b=r(3),v=r(9),w=r.n(v),x={facebook:"//facebook.com/sharer/sharer.php?u={url}",twitter:"//twitter.com/share?url={url}&text={title}",linkedin:"//linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}",reddit:"//www.reddit.com/submit?url={url}&title={title}",whatsapp:"//wa.me/?text={title}%20{url}",telegram:"//telegram.me/share/url?url={url}&text={title}",vkontakte:"//vk.com/share.php?url={url}&title={title}&description={description}",odnoklassniki:"//connect.ok.ru/offer?url={url}",my_mail:"//connect.mail.ru/share?url={url}&title={title}&description={description}",qq:"//connect.qq.com/widget/shareqq/iframe_index.html?url={url}&title={title}",qzone:"//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&summary={description}&title={title}"},k={vkontakte:"fab fa-vk",my_mail:"fas fa-at",qq:"fab fa-qq",qzone:"fas fa-star"},_=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,h(e,r);var a=n.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.networks=this.attrs.networks,this.discussion=this.attrs.discussion},a.className=function(){return"FofShareSocialModal Modal--small"},a.title=function(){return o.a.translator.trans("fof-share-social.forum.modal.title")},a.content=function(){var t={url:encodeURIComponent(this.discussion.shareUrl()),title:encodeURIComponent(o.a.title),description:this.discussion.firstPost()?encodeURIComponent(Object(b.truncate)(Object(b.getPlainContent)(this.discussion.firstPost().contentHtml()),150,0)):""},e="width=1000, height= 500, top="+($(window).height()/2-250)+", left="+($(window).width()/2-500)+", status=no, scrollbars=no, resizable=no";return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},this.networks.map((function(r){return l.a.component({className:"Button Button--rounded Button--block Share--"+r,icon:(k[r]||"fab fa-"+r)+" fa-lg fa-fw",onclick:function(){return window.open(w()(x[r],t),o.a.title,e)}},o.a.translator.trans("fof-share-social.lib.networks."+r))})))))},n}(y.a);o.a.initializers.add("fof/share-social",(function(){d.a.prototype.shareUrl=f.a.attribute("shareUrl"),Object(a.extend)(c.a.prototype,"sidebarItems",(function(t){var e=this,r=o.a.forum.attribute("fof-share-social.networks");r.length&&t.add("share-social",m(l.a,{class:"Button Button-icon Button--share",icon:"fas fa-share-alt",onclick:function(){return o.a.modal.show(_,{networks:r,discussion:e.discussion})}},o.a.translator.trans("fof-share-social.forum.discussion.share_button")),-1)}))}))}]);
//# sourceMappingURL=forum.js.map