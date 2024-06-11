'use strict';
const modal=document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose=document.querySelector('.close-modal');
const btnOpenModel=document.querySelectorAll('.show-modal');
const btnCl=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
const btnOp=function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
for(let i=0;i<btnOpenModel.length;i++)
{
    btnOpenModel[i].addEventListener('click',btnOp);
}
btnClose.addEventListener('click',btnCl);
overlay.addEventListener('click',btnCl);
document.addEventListener('keydown',function(el){
    console.log(el.key);
    if(el.key=="Escape"&&!modal.classList.contains('hidden'))
    {
        btnCl();
    }
})