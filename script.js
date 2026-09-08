
document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector(".mobile-nav"), btn=document.querySelector(".menu-toggle");
 btn?.addEventListener("click",()=>{nav.classList.toggle("show");btn.setAttribute("aria-expanded",nav.classList.contains("show"));});
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
   const el=document.querySelector(a.getAttribute("href")); if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"});nav?.classList.remove("show");}
 }));
 const contact=document.querySelector("#contactForm"), note=document.querySelector("#contactNote");
 contact?.addEventListener("submit",e=>{e.preventDefault();note.textContent="Thanks — we'll be in touch soon.";contact.reset();});
 const signup=document.querySelector("#signupForm"), sm=document.querySelector("#signupNote");
 signup?.addEventListener("submit",e=>{e.preventDefault();sm.textContent="You're on the list. Pizza news incoming!";signup.reset();});
 const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();
});
