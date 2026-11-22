const progress=document.querySelector('.scroll-progress');
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%'}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const lightbox=document.querySelector('.lightbox'),lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.zoomable').forEach(img=>{img.tabIndex=0;img.style.cursor='zoom-in';const open=()=>{lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')};img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src=''}
lightbox.querySelector('button').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
