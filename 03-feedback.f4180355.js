!function(){var e=document.querySelector(".feedback-form"),t=(document.querySelector(".feedback-form button"),"feedback-form-state"),r={};!function(){if(localStorage.getItem(t))for(var a in r=JSON.parse(localStorage.getItem(t)))r[a]&&(e.elements[a].value=r[a])}(),e.addEventListener("input",(function(e){r[e.target.name]=e.target.value;var a=JSON.stringify(r);localStorage.setItem(t,a)})),e.addEventListener("submit",(function(e){if(e.preventDefault(),!localStorage.getItem(t))return;console.log(r),localStorage.removeItem(t),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.f4180355.js.map
