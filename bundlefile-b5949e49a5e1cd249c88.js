!function(){var e={388:function(){var e=[{image:"dave-hoefler-okUIdo6NxGo-unsplash.jpg",caption:"Photo by Dave Hoefler on Unsplash"},{image:"sherman-yang-VBBGigIuaDY-unsplash.jpg",caption:"Photo by Sherman Yang n Unsplash"},{image:"jakob-owens-EwRM05V0VSI-unsplash.jpg",caption:"Photo by Jakob Owens on Unsplash"},{image:"finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",caption:"Photo by Dan Grinwis on Unsplash"},{image:"vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",caption:"Photo by Vincentiu Solomon on Unsplash"},{image:"silas-baisch-Wn4ulyzVoD4-unsplash.jpg",caption:"Photo by Silas Baisch on Unsplash"},{image:"eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",caption:"Photo by Eugene Golovesov on Unsplash"},{image:"jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",caption:"Photo by Jennifer reynolds on Unsplash"},{image:"kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",caption:"Photo by Kellen Riggin on Unsplash"},{image:"rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",caption:"Photo by Rafael Hoyos on Unsplash"},{image:"sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",caption:"Photo by Sonya Romanovska on Unsplash"}];console.log(e[0]);var t=document.getElementById("feature"),n=t.children[0],s=t.children[1],a=document.getElementById("thumbnails"),o=a.children[0];function r(t){var a=t.replace("./assets/","");n.setAttribute("src",t);var o=e.find((function(e){return e.image===a}));s.textContent=o.caption}a.addEventListener("click",(function(e){e.target.matches("ul li a img")&&(e.preventDefault(),Array.from(o.children).forEach((function(e){return e.classList.remove("selected")})),e.target.closest("li").classList.add("selected"),r(e.target.getAttribute("src")))})),document.addEventListener("click",(function(e){e.target.matches("a.left")||e.target.matches("a.right")?(e.preventDefault(),console.log(e.target),function(e){var t=document.querySelector("li.selected");switch(console.log(t),e){case"left":if(t===o.firstElementChild)console.log("I have to select the last one"),Array.from(o.children).forEach((function(e){return e.classList.remove("selected")})),o.lastElementChild.classList.add("selected"),r(o.lastElementChild.querySelector("a img").getAttribute("src"));else{var n=t.previousElementSibling;Array.from(o.children).forEach((function(e){return e.classList.remove("selected")})),n.classList.add("selected"),r(n.querySelector("a img").getAttribute("src"))}break;case"right":if(t===o.lastElementChild)console.log("I have to select the first one"),Array.from(o.children).forEach((function(e){return e.classList.remove("selected")})),o.firstElementChild.classList.add("selected"),r(o.firstElementChild.querySelector("a img").getAttribute("src"));else{var s=t.nextElementSibling;Array.from(o.children).forEach((function(e){return e.classList.remove("selected")})),s.classList.add("selected"),r(s.querySelector("a img").getAttribute("src"))}}}(e.target.className)):(e.target.matches("a.left img")||e.target.matches("a.right img"))&&(e.preventDefault(),e.target.parentElement.click())}))}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){"use strict";n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(388)}()}();
//# sourceMappingURL=bundlefile-b5949e49a5e1cd249c88.js.map