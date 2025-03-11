import{a as i,S as d,i as u}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();i.defaults.baseURL="https://pixabay.com";const m="49271250-6e2a7e536995fb461bd1f8f83";function f(a){return i.get("/api/",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const y=new d(".gallery-link",{captionDelay:250,captionsData:"alt"}),l=document.querySelector(".gallery"),p=document.querySelector("input[name = search-text]"),c=document.querySelector(".visually-hidden");function h(){c.classList.remove("visually-hidden"),l.innerHTML=""}function g(){c.classList.add("visually-hidden")}function L(a){const t=a.map(o=>`<li>
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

        </li>`).join("");l.insertAdjacentHTML("beforeend",t),y.refresh(),p.value=""}const b=document.querySelector(".form"),v=document.querySelector("input[name = search-text]");b.addEventListener("submit",a=>{a.preventDefault(),h(),f(v.value).then(t=>{console.log(t),t.data.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(t.data.hits)}).catch(t=>console.log(t)).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
