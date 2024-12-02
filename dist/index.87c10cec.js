async function e(){try{let e=await fetch(process.env.API_URL);return await e.json()}catch(e){console.error("Erro ao buscar dados:",e)}}process.env.API_URL;const t=document.getElementById("modal"),n=document.getElementById("modal-img"),c=document.getElementById("caption"),o=document.querySelector(".close");t.style.display="none";const r=document.querySelector(".image-grid");async function i(){let o=await e();try{let e=o.map(e=>`
            <article data-description="${e.descricao}">
              <figure>
                <img src="${e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `).join("");r.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){c.textContent="",t.style.display="block",n.src=this.src;let e=this.closest("article"),o=(e?e.dataset.description:"")||this.alt;c.innerHTML=`<p>${o}</p>`})})}catch(e){console.error("Erro ao popular página",e)}}o.addEventListener("click",function(){t.style.display="none"}),window.addEventListener("click",function(e){e.target===t&&(t.style.display="none")}),document.addEventListener("DOMContentLoaded",i);
//# sourceMappingURL=index.87c10cec.js.map
