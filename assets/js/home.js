
const btnopenmodal=document.querySelector('.btn--show-modal');
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.btn--close-modal');










btnopenmodal.addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
btnCloseModal.addEventListener("click",function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})