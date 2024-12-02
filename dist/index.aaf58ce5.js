let{API_URL:e}=process.env;

console.log(API_URL, process.env.NODE_ENV);
 

async function t(){try{let e=await fetch(process.env.API_URL);return await e.json()}catch(e){console.error("Erro ao buscar dados:",e)}}const n=document.getElementById("modal"),c=document.getElementById("modal-img"),o=document.getElementById("caption"),r=document.querySelector(".close");n.style.display="none";const i=document.querySelector(".image-grid");async function a(){let e=await t();try{let t=e.map(e=>`
            <article data-description="${e.descricao}">
              <figure>
                <img src="${e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `).join("");i.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){o.textContent="",n.style.display="block",c.src=this.src;let e=this.closest("article"),t=(e?e.dataset.description:"")||this.alt;o.innerHTML=`<p>${t}</p>`})})}catch(e){console.error("Erro ao popular página",e)}}r.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")}),document.addEventListener("DOMContentLoaded",a);
//# sourceMappingURL=index.aaf58ce5.js.map
