(()=>{"use strict";const e=()=>{const e=document.querySelector("#main-container"),t=document.querySelector(".items-container");e&&e.removeChild(t)},t=()=>{const e=document.querySelector("#main-container"),t=document.createElement("div");t.classList.add("secondary-container");const n=document.createElement("div");n.classList.add("projects");const c=document.createElement("div");c.classList.add("items"),t.appendChild(n),t.appendChild(c),e.appendChild(t)};(()=>{const n=document.querySelector("#main-container"),c=document.createElement("div");c.classList.add("items-container");const d=document.createElement("h1");d.classList.add("homepage-title"),d.innerText="List Maker",c.appendChild(d);const a=document.createElement("div");a.classList.add("newProjectCard");const s=document.createElement("div");s.classList.add("plus-container");const i=document.createElement("p");i.classList.add("plus"),i.innerText="+",s.appendChild(i),s.addEventListener("click",(()=>{e(),t()}));const o=document.createElement("p");o.classList.add("newProjectText"),o.innerText="Create new project",a.appendChild(s),a.appendChild(o),c.appendChild(a),n.appendChild(c)})(),(()=>{const n=document.createElement("div");n.classList.add("plus-container");const c=document.createElement("p");c.classList.add("plus"),c.innerText="rafasfasfasfPRUEBA",n.appendChild(c),n.addEventListener("click",(()=>{e(),t()}))})()})();