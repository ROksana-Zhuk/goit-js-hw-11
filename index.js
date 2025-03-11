import{a as i,S as d,i as u}from"./assets/vendor-mYwBqgd4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();i.defaults.baseURL="https://pixabay.com";const m="49271250-6e2a7e536995fb461bd1f8f83";function f(a){return i.get("/api/",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const y=new d(".gallery-link",{captionDelay:250,captionsData:"alt"}),l=document.querySelector(".gallery"),p=document.querySelector("input[name = search-text]"),c=document.querySelector(".visually-hidden");function h(){c.classList.remove("visually-hidden"),l.innerHTML=""}function g(){c.classList.add("visually-hidden")}function L(a){const o=a.map(e=>`<li>
          <a class="gallery-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" title=""/>
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
                <td>${e.likes}</td>
                <td>${e.views}</td>
                <td>${e.comments}</td>
                <td>${e.downloads}</td>
              </tr>
            </tbody>
          </table>

        </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh(),p.value=""}const b=document.querySelector(".form"),v=document.querySelector("input[name = search-text]");b.addEventListener("submit",a=>{a.preventDefault();const o=v.value.trim();o!==""&&(h(),f(o).then(e=>{console.log(e),e.data.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(e.data.hits)}).catch(e=>console.log(e)).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
