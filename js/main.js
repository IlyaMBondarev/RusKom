!function(e){var t={};function l(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t){if(document.querySelector(".wrapper").classList.add("loaded"),$("img.img-svg").each((function(){let e=$(this),t=e.attr("class"),l=e.attr("src");$.get(l,(function(l){let r=$(l).find("svg");void 0!==t&&(r=r.attr("class",t+" replaced-svg")),r=r.removeAttr("xmlns:a"),!r.attr("viewBox")&&r.attr("height")&&r.attr("width")&&r.attr("viewBox","0 0 "+r.attr("height")+" "+r.attr("width")),e.replaceWith(r)}),"xml")})),$(".svg-animation__back.replaced-svg").length&&document.documentElement.clientWidth>767){let e=document.querySelectorAll(".svg-animation__back"),t=document.documentElement.offsetWidth;e.forEach(e=>{let l=e.querySelectorAll("path"),r=l[0].getBoundingClientRect().width,c=Math.ceil(t/r)/2,o=[];for(let e=0;e<l.length;e++)o.push({}),o[e].id=e,o[e].x=l[e].getBoundingClientRect().x;o.sort((function(e,t){return e.x-t.x})),o.forEach(e=>{for(let t=0;t<c;t++)e.x>=t*c&&e.x<(t+1)*c&&(e.turn=t)});for(let e=0;e<o.length;e++)setTimeout(()=>{l[o[e].id].style.fill="rgba(255,255,255,0.3)"},100*o[e].turn),setTimeout(()=>{l[o[e].id].style.fill=""},100*o[e].turn+1e3);setInterval(()=>{for(let e=0;e<o.length;e++)setTimeout(()=>{l[o[e].id].style.fill="rgba(255,255,255,0.3)"},100*o[e].turn),setTimeout(()=>{l[o[e].id].style.fill=""},100*o[e].turn+1e3)},50*c+1e3)})}function l(e,t,l){return e>=100?(e=-230,l.style.transition="".concat(t," 0s linear"),"left"===t?l.style.left="".concat(e,"px"):"right"===t&&(l.style.right="".concat(e,"px")),setTimeout(()=>{l.style.transition=""},40)):(e=610,"left"===t?l.style.left="".concat(e,"px"):"right"===t&&(l.style.right="".concat(e,"px"))),e}if($(".about").length&&document.documentElement.clientWidth>1199.999){let e=document.querySelector(".about__cars"),t=e.querySelectorAll(".toRight"),r=e.querySelectorAll(".toLeft");for(let e=0;e<t.length;e++){let r=-230;t[e].style.left="".concat(r,"px"),t[e].style.opacity="1",setTimeout(()=>{r=l(r,"left",t[e]),setInterval(()=>{r=l(r,"left",t[e])},6e3)},15e3*Math.random())}for(let e=r.length-1;e>=0;e--){let t=-230;r[e].style.right="".concat(t,"px"),r[e].style.opacity="1",setTimeout(()=>{t=l(t,"right",r[e]),setInterval(()=>{t=l(t,"right",r[e])},6e3)},15e3*Math.random())}}if($(".rain-bg").length&&document.documentElement.clientWidth>1199.999){document.querySelectorAll(".rain-bg").forEach(e=>{let t=e.querySelectorAll(".rain__row"),l=["Смоленск","Москва","Казань","Екатеринбург"];for(let e=0;e<t.length;e++)setTimeout(()=>{let r=document.createElement("span"),c=document.createElement("span"),o=l[Math.floor(Math.random()*l.length)];r.classList.add("rain__text"),c.classList.add("rain__empty"),r.textContent="Новороссийск - ".concat(o),r.appendChild(c),t[e].appendChild(r),r.style.transition="right 10s linear",setTimeout(()=>r.style.right="80%",40),setTimeout(()=>{r.parentNode.removeChild(r)},1e3*e+9999)},1e3*e),setInterval(()=>{let r=document.createElement("span"),c=document.createElement("span"),o=l[Math.floor(Math.random()*l.length)];r.classList.add("rain__text"),c.classList.add("rain__empty"),r.textContent="Новороссийск - ".concat(o),r.appendChild(c),t[e].appendChild(r),r.style.transition="right 10s linear",setTimeout(()=>r.style.right="80%",40),setTimeout(()=>{r.parentNode.removeChild(r)},1e3*e+9999)},1e3*e+1e4)})}if($(".traffic").length){document.querySelectorAll(".traffic").forEach(e=>{let t=e.querySelector(".traffic__blocks"),l=e.querySelector(".traffic__more"),r=(t.clientHeight+20)/2,c=t.clientHeight;c>=t.scrollHeight-20&&(l.style.display="none"),l.addEventListener("click",()=>{c+=r,t.style.maxHeight="".concat(c,"px"),c>=t.scrollHeight-20&&(l.style.display="none")})})}if($(".about").length){let e=document.querySelector(".about__content"),t=document.querySelector(".about__more");t.addEventListener("click",()=>{e.classList.contains("opened")?(e.style.maxHeight="",t.textContent="Развернуть",t.classList.remove("about__less"),e.classList.remove("opened")):(e.style.maxHeight="".concat(e.scrollHeight+20,"px"),t.textContent="Свернуть",t.classList.add("about__less"),e.classList.add("opened"))})}function r(e){e.classList.remove("burger-opened")}if(document.querySelectorAll(".header").forEach(e=>{let t=e.querySelector(".header__menu-btn"),l=e.querySelector(".burger__close"),c=e.querySelector(".burger"),o=c.querySelector(".burger__menu").querySelectorAll("li");for(let e=0;e<o.length;e++)o[e].addEventListener("click",()=>{document.querySelector(".to".concat(e+1))&&(document.querySelector(".to".concat(e+1)).scrollIntoView({behavior:"smooth"}),r(c))});t.addEventListener("click",()=>{!function(e){e.classList.add("burger-opened")}(c)}),l.addEventListener("click",()=>{r(c)}),document.addEventListener("click",e=>{e.target===c||c.contains(e.target)||e.target===t||t.contains(e.target)||r(c)})}),$(".popup-callback-bg").length){let e=document.querySelector(".popup-callback-bg"),t=document.querySelectorAll(".popup-callback-open-btn"),l=e.querySelector(".popup-callback__close");const r=document.getElementById("popupCallbackForm");r.addEventListener("submit",e=>{e.preventDefault(),o(r)}),t.forEach(t=>{t.addEventListener("click",()=>{e.classList.add("popup-callback-bg-visible")})}),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("popup-callback-bg-visible")}),l.addEventListener("click",()=>{e.classList.remove("popup-callback-bg-visible")})}if($(".popup-map-bg").length){let e=document.querySelector(".popup-map-bg"),t=document.querySelectorAll(".popup-map-open-btn"),l=e.querySelector(".popup-map__close");t.forEach(t=>{t.addEventListener("click",()=>{e.classList.add("popup-map-bg-visible")})}),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("popup-map-bg-visible")}),l.addEventListener("click",()=>{e.classList.remove("popup-map-bg-visible")})}let c=!1;if($(".services__types").length){document.querySelector(".services__types").querySelectorAll(".services__type").forEach(e=>{let t=e.querySelector(".popup-service-bg"),l=e.querySelector(".popup-service-open-btn"),r=t.querySelector(".popup-service"),n=t.querySelector(".popup-service__close");const i=r.querySelector("form");i.addEventListener("submit",e=>{e.preventDefault(),o(i)}),l.addEventListener("click",()=>{t.classList.add("popup-service-bg-visible"),document.querySelector(".header-sticky").style.top="-100%",c=!0}),t.addEventListener("click",e=>{e.target===t&&(t.classList.remove("popup-service-bg-visible"),a(".header-sticky","slideDown","-100%"),c=!1)}),n.addEventListener("click",()=>{t.classList.remove("popup-service-bg-visible"),a(".header-sticky","slideDown","-100%"),c=!1})})}async function o(e){!function(e){let t=0,l=e.querySelectorAll("._req");for(let e=0;e<l.length;e++){const r=l[e];r.classList.remove("_error"),r.classList.contains("_phone")?r.value.length<18&&(r.classList.add("_error"),t++):(r.value.length<3||r.value.length>32)&&(r.classList.add("_error"),t++)}}(e)}function n(e){let t="+7 (___) ___-__-__",l=0,r=t.replace(/\D/g,""),c=this.value.replace(/\D/g,"");r.length>=c.length&&(c=r),this.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&l<c.length?c.charAt(l++):l>=c.length?"":e})),"blur"===e.type&&2===this.value.length&&(this.value="")}document.querySelectorAll(".questions__form").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault(),o(e)})});let i=document.querySelectorAll("._phone");function a(e,t,l){const r=document.querySelector(e);let c=document.body.scrollTop>200||document.documentElement.scrollTop>200;"slideDown"==t?r.style.top=c?"0":l:"slideUp"==t?r.style.bottom=c?"0":l:"slideLeft"==t?r.style.left=c?"0":l:r.style.right=c?"0":l}function s(){c||a(".header-sticky","slideDown","-100%")}if(i.forEach(e=>e.addEventListener("input",n,!1)),i.forEach(e=>e.addEventListener("focus",n,!1)),i.forEach(e=>e.addEventListener("blur",n,!1)),s(),window.onscroll=function(){s()},$(".faq").length){let e=document.querySelector(".faq"),t=e.querySelector(".faq__items"),l=e.querySelectorAll(".faq__circle"),r=t.querySelectorAll(".faq__item"),c=e.querySelector(".faq__arrow-up"),o=e.querySelector(".faq__arrow-down"),n=0,i=0,a=0,s=r.length-1,u=0,d=document.documentElement.clientWidth>1100?151:document.documentElement.clientWidth>767?128:90;c.addEventListener("click",()=>{0!==i&&(i--,u+=d,t.style.marginTop="".concat(u,"px"),l[a]&&l[a].classList.remove("faq__circle-active"),a++,l[a]&&l[a].classList.add("faq__circle-active"))}),o.addEventListener("click",()=>{i!==s-3&&(i++,u-=d,t.style.marginTop="".concat(u,"px"),l[a]&&l[a].classList.remove("faq__circle-active"),a--,l[a]&&l[a].classList.add("faq__circle-active"))});for(let e=0;e<r.length;e++)r[e].addEventListener("click",()=>{n=e,l[a]&&l[a].classList.remove("faq__circle-active"),a=n-i,l[a]&&l[a].classList.add("faq__circle-active")});let p=$(".faq .faq__item"),m=e.querySelectorAll(".faq__right");for(let t=0;t<p.length;t++)p[t].addEventListener("click",(function(){e.querySelectorAll(".faq__item-active").forEach(e=>e.classList.remove("faq__item-active")),e.querySelectorAll(".faq__right-active").forEach(e=>e.classList.remove("faq__right-active")),p[t].classList.add("faq__item-active");for(let e=0;e<m.length;e++)if(p[t].dataset.number===m[e].dataset.number){m[e].classList.add("faq__right-active");let l=m[t].querySelectorAll(".faq__question");f[t]=new PerfectScrollbar(m[t],{wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:20,maxScrollbarLength:20});for(let e=0;e<l.length;e++){let r=l[e].querySelector(".faq__question-content"),c=r.scrollHeight;l[e].classList.contains("faq__question-active")&&(r.style.maxHeight="".concat(c,"px"),setTimeout(()=>{f[t].update()},450))}break}}));let f=[];for(let e=0;e<m.length;e++){let t=m[e].querySelectorAll(".faq__question"),l=0;f[e]=new PerfectScrollbar(m[e],{wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:20,maxScrollbarLength:20});for(let r=0;r<t.length;r++){let c=t[r].querySelector(".faq__question-title"),o=t[r].querySelector(".faq__question-content"),n=o.scrollHeight;t[r].classList.contains("faq__question-active")&&(o.style.maxHeight="".concat(n,"px"),setTimeout(()=>{f[e].update()},450)),c.addEventListener("click",()=>{n=o.scrollHeight,r!==l?(t[r].classList.add("faq__question-active"),o.style.maxHeight="".concat(n,"px"),-1!==l&&(t[l].classList.remove("faq__question-active"),t[l].querySelector(".faq__question-content").style.maxHeight=""),l=r):(t[r].classList.remove("faq__question-active"),t[r].querySelector(".faq__question-content").style.maxHeight="",l=-1),setTimeout(()=>{f[e].update()},450)})}}}$(document).ready((function(){if($(".services").length){let e=$(".services .owl-carousel");if(e.length){e.owlCarousel({items:3,margin:15,loop:!0,mouseDrag:!1,swipe:!0,nav:!1,dots:!1,responsive:{0:{items:1},680:{items:2},1e3:{items:3}}}),$(".services .services__next").click((function(){e.trigger("next.owl.carousel")})),$(".services .services__prev").click((function(){e.trigger("prev.owl.carousel",[300])}));let t=$(".services .services__item");for(let l=0;l<t.length;l++)t[l].addEventListener("click",(function(){document.querySelector(".services").querySelectorAll(".services__item-active").forEach(e=>e.classList.remove("services__item-active")),t[l].classList.add("services__item-active"),e.trigger("to.owl.carousel",[l+4])}))}}if($(".faq").length&&document.documentElement.clientWidth<=767){let e=$(".faq .owl-carousel");if(e.length){e.owlCarousel({margin:15,loop:!0,swipe:!0,nav:!1,dots:!1,stagePadding:30,responsive:{0:{items:1},450:{items:2}}});let t=$(".faq .faq__item");for(let l=0;l<t.length;l++)t[l].addEventListener("click",(function(){e.trigger("to.owl.carousel",[l+4])}))}}}))}]);