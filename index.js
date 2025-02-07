import{S as c}from"./assets/vendor-ifswxGE1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".covers-section");i&&new IntersectionObserver(e=>{e.forEach(r=>{r.intersectionRatio>=.5?s():t()})},{root:null,threshold:.5}).observe(i);function s(){document.querySelectorAll(".marquee-item").forEach(e=>{e.style.animationPlayState="running"})}function t(){document.querySelectorAll(".marquee-item").forEach(e=>{e.style.animationPlayState="paused"})}});const a=[{name:"Natalia",text:"Work with was уextraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations",avatar:{x1:"/img/reviews/avatar-1.jpg",x2:"/img/reviews/avatar-1@2x.jpg"}},{name:"Dmytro",text:"I have the уhonor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.",avatar:{x1:"/img/reviews/avatar-2.jpg",x2:"/img/reviews/avatar-2@2x.jpg"}}];function l(){const i=document.querySelector(".reviews-list");if(!i)return;if(a.length===0){d();return}const s=a.map(t=>`
    <li class="reviews-item swiper-slide">
    
      <img src="${t.avatar.x1}"
           srcset="${t.avatar.x1} 1x, ${t.avatar.x2} 2x"
           alt="${t.name}'s avatar"
           class="reviews-avatar"
           width="48"
           height="48">
      <div class="reviews-content">
        <h3 class="reviews-name">${t.name}</h3>
        <p class="reviews-text">${t.text}</p>
      </div>
    </li>
  `).join("");i.innerHTML=s}function d(){const i=document.querySelector(".reviews-error"),s=document.querySelector(".reviews-list"),t=document.querySelector(".reviews-nav");i&&i.classList.remove("visually-hidden"),s&&(s.innerHTML=""),t&&(t.style.display="none")}function u(){new c(".reviews-slider",{slidesPerView:1,spaceBetween:16,loop:!1,direction:"horizontal",speed:600,navigation:{prevEl:".reviews-button-prev",nextEl:".reviews-button-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}document.addEventListener("DOMContentLoaded",()=>{l(),u();const i=document.querySelector(".reviews-nav");i&&(i.style.display="flex")});
//# sourceMappingURL=index.js.map
