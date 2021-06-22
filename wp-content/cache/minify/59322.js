var getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&a.push(e):a.push(e);return a},toggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}();var astraTriggerEvent=function(e,t,a){var n=new CustomEvent(t,2<arguments.length&&void 0!==a?a:{});e.dispatchEvent(n)};!function(){function e(){var e=document.querySelector("body").style.overflow;document.querySelector("body").style.overflow="hidden";var t=window.innerWidth;document.querySelector("body").style.overflow=e;var a=astra.break_point,n=document.querySelectorAll(".main-header-bar-wrap");if(0<n.length)for(var s=0;s<n.length;s++)"DIV"==n[s].tagName&&n[s].classList.contains("main-header-bar-wrap")&&(a<t?(null!=l[s]&&l[s].classList.remove("toggled"),document.body.classList.remove("ast-header-break-point"),document.body.classList.add("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-enabled")):(document.body.classList.add("ast-header-break-point"),document.body.classList.remove("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-disabled")))}var t,a,n,l=document.querySelectorAll(".main-header-menu-toggle");e(),AstraToggleSubMenu=function(){var e=this.parentNode;if(e.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&!this.classList.contains("ast-menu-toggle")){var t=e.querySelector("a").getAttribute("href");""===t&&"#"===t||(window.location=t)}for(var a=e.querySelectorAll(".menu-item-has-children, .page_item_has_children"),n=0;n<a.length;n++)a[n].classList.remove("ast-submenu-expanded"),a[n].querySelector(".sub-menu, .children").style.display="none";var s=e.parentNode.querySelectorAll(".menu-item-has-children, .page_item_has_children");for(n=0;n<s.length;n++)if(s[n]!=e){s[n].classList.remove("ast-submenu-expanded");for(var o=s[n].querySelectorAll(".sub-menu, .children"),r=0;r<o.length;r++)o[r].style.display="none"}(e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children"))&&(toggleClass(e,"ast-submenu-expanded"),e.classList.contains("ast-submenu-expanded")?e.querySelector(".sub-menu, .children").style.display="block":e.querySelector(".sub-menu, .children").style.display="none")},AstraNavigationMenu=function(e){console.warn("AstraNavigationMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future.")},AstraToggleMenu=function(e){if(console.warn("AstraToggleMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future. Use AstraToggleSubMenu() instead."),0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("click",AstraToggleSubMenu,!1)},AstraToggleSetup=function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<l.length)for(var t=0;t<l.length;t++)if(l[t].setAttribute("data-index",t),l[t].addEventListener("click",astraNavMenuToggle,!1),void 0!==e[t]){if(document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link"))var a=e[t].querySelectorAll(".ast-header-break-point .main-header-menu .menu-item-has-children > a, .ast-header-break-point .main-header-menu .page_item_has_children > a, .ast-header-break-point ul.main-header-menu .ast-menu-toggle");else a=e[t].querySelectorAll("ul.main-header-menu .ast-menu-toggle");if(0<a.length)for(var n=0;n<a.length;n++)a[n].addEventListener("click",AstraToggleSubMenu,!1)}},astraNavMenuToggle=function(e){e.preventDefault();var t=document.querySelectorAll(".main-header-bar-navigation"),a=this.getAttribute("data-index");if(void 0===t[a])return!1;for(var n=t[a].querySelectorAll(".menu-item-has-children, .page_item_has_children"),s=0;s<n.length;s++){n[s].classList.remove("ast-submenu-expanded");for(var o=n[s].querySelectorAll(".sub-menu, .children"),r=0;r<o.length;r++)o[r].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(toggleClass(t[a],"toggle-on"),toggleClass(l[a],"toggled"),t[a].classList.contains("toggle-on")?(t[a].style.display="block",document.body.classList.add("ast-main-header-nav-open")):(t[a].style.display="",document.body.classList.remove("ast-main-header-nav-open")))},document.body.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),n=0;n<a.length;n++)a[n].style.display="";for(var s=e[t].getElementsByClassName("children"),o=0;o<s.length;o++)s[o].style.display="";for(var r=e[t].getElementsByClassName("ast-search-menu-icon"),l=0;l<r.length;l++)r[l].classList.remove("ast-dropdown-active"),r[l].style.display=""}},!1),window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&(e(),AstraToggleSetup())}),document.addEventListener("DOMContentLoaded",function(){var e,t;for(AstraToggleSetup(),e=document.querySelectorAll(".navigation-accessibility"),t=0;t<=e.length-1;t++)e[t]&&r(e[t])}),n=(a=navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(n[1])?t=/\brv[ :]+(\d+)/g.exec(a)||[]:"Chrome"===n[1]&&null!=(t=a.match(/\bOPR|Edge\/(\d+)/))||(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=a.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),bodyElement=document.body,"Safari"===n[0]&&n[1]<11&&bodyElement.classList.add("ast-safari-browser-less-than-11"));for(var s=document.getElementsByClassName("astra-search-icon"),o=0;o<s.length;o++)s[o].onclick=function(e){if(this.classList.contains("slide-search")){e.preventDefault();var t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");t.classList.contains("ast-dropdown-active")?(""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active")):(t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200))}};function r(e){if(e&&(button=e.getElementsByTagName("button")[0],"undefined"!=typeof button||(button=e.getElementsByTagName("a")[0],"undefined"!=typeof button)))if(menu=e.getElementsByTagName("ul")[0],"undefined"!=typeof menu){for(menu.setAttribute("aria-expanded","false"),-1===menu.className.indexOf("nav-menu")&&(menu.className+=" nav-menu"),button.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),button.setAttribute("aria-expanded","false"),menu.setAttribute("aria-expanded","false")):(e.className+=" toggled",button.setAttribute("aria-expanded","true"),menu.setAttribute("aria-expanded","true"))},links=menu.getElementsByTagName("a"),subMenus=menu.getElementsByTagName("ul"),o=0,len=subMenus.length;o<len;o++)subMenus[o].parentNode.setAttribute("aria-haspopup","true");for(o=0,len=links.length;o<len;o++)links[o].addEventListener("focus",c,!0),links[o].addEventListener("blur",d,!0),links[o].addEventListener("click",i,!0)}else button.style.display="none"}function i(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(!document.body.classList.contains("ast-header-break-point")||document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&t.classList.contains("menu-item-has-children"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement;else{document.querySelector(".main-header-menu-toggle").classList.remove("toggled");var a=document.querySelector(".main-header-bar-navigation");a.classList.remove("toggle-on"),a.style.display="none";var n=document.querySelector(".menu-below-header-toggle"),s=document.querySelector(".ast-below-header"),o=document.querySelector(".ast-below-header-actual-nav");n&&s&&o&&(n.classList.remove("toggled"),s.classList.remove("toggle-on"),o.style.display="none");var r=document.querySelector(".menu-above-header-toggle"),l=document.querySelector(".ast-above-header"),i=document.querySelector(".ast-above-header-navigation");r&&l&&i&&(r.classList.remove("toggled"),l.classList.remove("toggle-on"),i.style.display="none"),astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked")}}}function c(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function d(){var e=this||"";if(link=new String(e),-1===link.indexOf("#")||!document.body.classList.contains("ast-mouse-clicked"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}if(document.body.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===getParents(e.target,".ast-search-menu-icon").length&&0===getParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},"querySelector"in document&&"addEventListener"in window){var u=document.body;u.addEventListener("mousedown",function(){u.classList.add("ast-mouse-clicked")}),u.addEventListener("keydown",function(){u.classList.remove("ast-mouse-clicked")})}}();
/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);