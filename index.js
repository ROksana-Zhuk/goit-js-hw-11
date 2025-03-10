import{a as l,S as c,i as d}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com";const u="49271250-6e2a7e536995fb461bd1f8f83";function f(a){return l.get("/api/",{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const m=new c(".gallery-link",{captionDelay:250,captionsData:"alt"}),n=document.querySelector(".gallery");function p(){n.innerHTML="",n.insertAdjacentHTML("beforeend",'<span class="loader"></span>')}function y(){n.removeChild(document.querySelector(".loader"))}function h(a){const t=a.map(o=>`<li>
          <a class="gallery-link" href="${o.largeImageURL}">
            <img src="${o.previewURL}" alt="" title=""/>
          </a>
          <table>
            <thead>
              <tr>
                <th>Likes</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Downloads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${o.likes}</td>
                <td>${o.views}</td>
                <td>${o.comments}</td>
                <td>${o.downloads}</td>
              </tr>
            </tbody>
          </table>

        </li>`).join("");n.insertAdjacentHTML("beforeend",t),m.refresh()}const g=document.querySelector(".form"),L=document.querySelector("input[name = search-text]");g.addEventListener("submit",a=>{a.preventDefault(),p(),f(L.value).then(t=>{console.log(t),t.data.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.data.hits)}).catch(t=>console.log(t)).finally(()=>{y()})});
//# sourceMappingURL=index.js.map
