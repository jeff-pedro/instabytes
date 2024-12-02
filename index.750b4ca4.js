console.log(process.env.API_URL);let e=process.env.API_URL;async function t(){try{let t=await fetch(e);return await t.json()}catch(e){console.error("Erro ao buscar dados:",e)}}const n=document.getElementById("modal"),o=document.getElementById("modal-img"),c=document.getElementById("caption"),r=document.querySelector(".close");n.style.display="none";const i=document.querySelector(".image-grid");async function a(){let e=await t();try{let t=e.map(e=>`
            <article data-description="${e.descricao}">
              <figure>
                <img src="${e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `).join("");i.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){c.textContent="",n.style.display="block",o.src=this.src;let e=this.closest("article"),t=(e?e.dataset.description:"")||this.alt;c.innerHTML=`<p>${t}</p>`})})}catch(e){console.error("Erro ao popular página",e)}}r.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")}),document.addEventListener("DOMContentLoaded",a);
//# sourceMappingURL=index.750b4ca4.js.map
